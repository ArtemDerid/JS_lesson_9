var express = require("express");
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/", function(request, response) {
	console.log('Start page is running');
	response.send("<h1>My homework</h1>");
});

server.get("/userGet", function(request, response) {
	console.log(request.query);
	var obj = request.query;
	response.send(JSON.stringify(request.query)+".ValidatedByGET");
});

server.post("/userPost", function(request, response) {
	console.log(request.body);
	response.send(JSON.stringify(request.body)+".ValidatedByPOST");
});


server.listen(3001);