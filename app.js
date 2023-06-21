//jshint esversion:6

const array =[]

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash")

const homeStartingContent = "Sometimes when we see a tree, we just see another tree. For some of us, we get to see them every single day, and each tree begins to look like another. When I saw this tree, I had already seen a few dozen Fremont’s cottonwood, but none struck me the way that this one did. As you can see, the tree sat solitarily in the middle of the canyon. Presumably this was the one portion of the canyon floor that was not trampled on by the daily hikers and also received enough sunlight over the canyon wall for a tree to grow. The walls of the Hualapai Canyon stretch up hundreds and even thousands of feet in some locations, so it is a wonder that there are places like this that receive enough sunlight.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
 res.render("home",{homeStartingContent:homeStartingContent, array:array});
 
})

app.get("/about",(req,res)=>{
  res.render("about",{aboutContent:aboutContent});
  
})

app.get("/contact",(req,res)=>{
  res.render("contact",{contactContent:contactContent});
})

app.get("/compose",(req,res)=>{
  res.render("compose")
})

app.post("/compose",(req,res)=>{
  // console.log(req.body.compose);
  const post ={
    title: req.body.title,
    content:req.body.content
  };
  array.push(post);
  res.redirect("/")





})
app.get("/post/:postId",(req,res)=>{
  
  const postName =_.lowerCase(req.params.postId);
  array.forEach(function(element){
    if(_.lowerCase(element.title)===postName){
      res.render("post",{
        title:element.title,
        content:element.content
      });
      
    }
    
  })
 
})












app.listen(3000, function() {
  console.log("Server started on port 3000");
});
