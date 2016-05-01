//run basic text on server.js
var http = require('http');
var url = require('url');

var pageContent = {'Content-Type' : 'application/json'};

var serverData = "default data";

// Router handles all requests and routes based on request path
var router = function(req, res) {
	var reqUrl = url.parse(req.url, true);
	switch(reqUrl.pathname) {
		case '/set-data':
			// Set serverData
			parseJSONPost(req, res, function(postData, res) {

				serverData = postData.data;

				res.writeHead(200, pageContent);
				var output = { result: 'success' };
				res.end(JSON.stringify(output));
			});
			break;
		case '/api/v1':
			// Send serverData to the client
			res.writeHead(200, pageContent);
			var output = {"Hello":"World"};
			res.end(JSON.stringify(output));
			break;
		default:
			// Send 404
			res.writeHead(404, pageContent);
			var output = { result: '404' };
			res.end(JSON.stringify(output));
			break;
	}
};
		
		//parseJSONPost will parse back as JSON object
		function parseJSONPost(req, res, onResult) {
			var postBody = "";
			
			req.on('data', function(chunk) {
				postBody += chunk;
			});
			
			req.on('end', function(){
				var postData = JSON.parse(postBody);
				onResult(postData, res);
			});
		}
		
		//Create server
		var server = http.createServer(router);
		module.exports = server;
			