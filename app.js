//jshint esversion:6
const express = require("express");
const https = require("https");
const request = require("request");
const bodyparser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: true}));

app.get ("/", function(req, res){
  res.sendFile(__dirname+"/signup.html");
  // res.send("Server started on port 3000.");
});
app.post("/", function(req, res){
  var name = req.body.Usersname;
  var email = req.body.emails;
  var password = req.body.passwords;
  console.log(name,email,password);
});
app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
// App API key = 8720c3cee57555ad96233941218e3d09-us5
