var express = require('express');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  console.log('connected...');

  socket.on('disconnect', function () {
    console.log('discount...');
  });

  socket.on('message', function (msg) {
    console.log(msg);
    socket.broadcast.emit('message', msg);
  });
});

server.listen(8080);