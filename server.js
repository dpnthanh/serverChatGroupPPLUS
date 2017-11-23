var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);
var fs = require("fs");
var url = require('url');
var child_process = require("child_process");
child_process.exec("hostname -f", function(err, stdout, stderr) {
  var hostname = stdout.trim();
	console.log(hostname);
});
server.listen(process.env.PORT || 3000);
console.log('server runing...');

io.sockets.on('connection', function (socket){

	console.log('user conected');

	socket.on('register', function (name){

		console.log(name+' register');
		socket.un = name;

	});
	socket.on('new messege1', function (mess){

		console.log('new messege1: ' + socket.un + " : " + mess);
		io.sockets.emit('new mess1', { text: socket.un + " : " + mess });

	});
	socket.on('new messege2', function (mess){

		console.log('new messege2: ' + socket.un + " : " + mess);
		io.sockets.emit('new mess2', { text: socket.un + " : " + mess });

	});


});
