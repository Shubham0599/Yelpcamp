const mongoose=require("mongoose");
// mongoose.connect("mongodb://localhost:27017/cat_app");
mongoose
.connect("mongodb://localhost:27017/cat_app", {
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => console.log(`DB Connection Error: ${err.message}`)
);

//before addinf=g a cat to a database we need to define how the cat looks like
var catSchema=new mongoose.Schema({
    name:String,
    age:Number,
    temperament:String

});
var Cat=mongoose.model("Cat",catSchema)

// var george=new Cat({
//     name:"noris",
//     age:11,
//     temperament:"evil"
// });
// george.save(function(err,cat){
//     if(err){
//         console.log(`something went wrong${err}`)
//     }else{
//         console.log(`Data inserted is: ${cat}`);
//     }
// })
// Cat.create({
//     name:"dawny",
//     age:5,
//     temperament:"relax",
//     look:"glassy"
// },function(err,cat){
//     if(err){
//         console.log("Create fxn gives error")
//     }else{
//         console.log(`created cat is ${cat}`)
//     }
// })

// Cat.find({},function(err,cat){
//     if(err){
//         console.log(`Error ${err}`)
//     }else{
//         console.log(`All The Cats......${cat}`)
//     }
// })

//adding new cat to database
