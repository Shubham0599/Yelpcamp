const express =require("express");
const app=express();
const bodyPaser=require("body-parser");

app.set("view engine","ejs");
app.use(bodyPaser.urlencoded({extended:true}));

var camps=[
    {name:"Mount seam",url:"https://www.photosforclass.com/download/px_1061640"},
    {name:"Walt diseny",url:"https://www.photosforclass.com/download/px_6757"},
    {name:"Dafer fort",url:"https://www.photosforclass.com/download/px_2662816"},
    {name:"Mount seam",url:"https://www.photosforclass.com/download/px_2662816"}
   
]

app.get("/",(req,res)=>{
     res.render("home") ;
});

app.get("/add",(req,res)=>{
    res.render("addcamp");
})
app.get("/camp",(req,res)=>{
    res.render("camp",{data:camps});
});
app.post("/camp",(req,res)=>{
    var title=req.body.title;
    var url=req.body.url;
    var newobj={name:title,url:url}
    camps.push(newobj)
    res.redirect("/camp");
})


app.listen(3000,(req,res)=>{
    console.log("App is running!!");
});