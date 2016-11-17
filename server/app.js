var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = process.env.PORT || 9001;

app.use(bodyParser.json());

//connect to mongoDB
mongoose.connect("mongodb://localhost:27017/HabitJudo");

//spin up server
app.listen(port, function(){
  console.log('listening on port ',port);
});

//base url hit
app.get( '/', function(req,res){
  console.log('base url');
  res.sendFile( path.resolve('public/index.html'));
});//end base url hit

app.use( express.static('public'));
