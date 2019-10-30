//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){

  var sum = Number(req.body.num1) + Number(req.body.num2);
  res.send(sum.toString());
});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req,res){
  res.send((parseFloat(req.body.weight) / Math.pow(parseFloat(req.body.height),2)).toString());
});

app.listen(3000,function(){
  console.log("Server started on port 3000");
});

/*
__dirname will give the relative filepath
- whenever we are trying to parse html data that comes from an html form
  we need to use body parser urlencoded.
- body-parser also includes text, json.
- extended: true, property allows us to post nested objects.
- Nested objects are simply objects with nested properties.
- You can only send back strings with res.send
- To go from string to number we can use Number, parseFloat, parseInt



*/
