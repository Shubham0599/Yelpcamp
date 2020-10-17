const express =require("express");
const app=express();
const bodyPaser=require("body-parser");
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/yelp_camp", {
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => console.log(`DB Connection Error: ${err.message}`)
);
//schema 
var campschema=new mongoose.Schema({
    name:String,
    url:String,
    description:String
});
//model
var Campground=mongoose.model("Campground",campschema);

// Campground.create({
//     name:"Grey Hill",
//     url:"https://www.photosforclass.com/download/px_6757",
//     description:"Most of the parts is grey ,Therefore it's Grey Hill"
// },function(err,camp){
//     if(err)console.log(err);
//     else console.log(`New Campground:${camp}`);
// });

// Campground.find({},(err,camp)=>{if(err)console.log(err)
// else console.log(camp)
// });


app.set("view engine","ejs");
app.use(bodyPaser.urlencoded({extended:true}));


app.get("/",(req,res)=>{
     res.render("home") ;
});

app.get("/add",(req,res)=>{
    res.render("addcamp");
})
app.get("/camp",(req,res)=>{
    Campground.find({},(err,camps)=>{
        if(err) console.log(err)
        else  res.render("camp",{data:camps})
    })
   
});
app.post("/camp",(req,res)=>{
    var title=req.body.title;
    var url=req.body.url;
    var des=req.body.description;
    var newobj={name:title,url:url,description:des}
   Campground.create(newobj,(err,cam)=>{
       if(err)console.log(err)
       else res.redirect("/camp")
   })
   
})

app.get("/camp/:id",(req,res)=>{
    Campground.findById(req.params.id,(err,camp)=>{
        if(err)console.log(err)
        else res.render("show",{pass:camp})
    })
})

app.listen(3000,(req,res)=>{
    console.log("App is running!!");
});