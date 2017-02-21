var express = require('express');
var app = express();
var mongojs=require('mongojs');
var db=mongojs('cartlist',['cartlist']);
var bodyParser= require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/cartlist',function(req,res){
console.log("i received a GET req");

db.cartlist.find(function(err,docs){
	console.log(docs);
	res.json(docs);
});
});

app.post('/cartlist',function(req,res){
 	console.log(req.body);
 	db.cartlist.insert(req.body,function(err,doc){
 		res.json(doc);
 	});
});







app.listen(4000);
console.log("Server running on port 4000");