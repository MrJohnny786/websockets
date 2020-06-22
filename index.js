var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
const port = 4000;

var server = app.listen(port, function(){
    console.log('listening to request on port: ', port)
})


//Static files
app.use(express.static('public'));

// Socket setup
var io = socket(server);

io.on('connection', function(socket){
    console.log('made socket connection');
    socket.on('chat', function(data){
        io.emit('chat', data)
    })
})
