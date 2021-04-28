// import
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');


// custom module
const router = require('./router');

// app config
const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
});
const port = process.env.PORT || 9000;


// production config


// middleware
app.use(express.json());
app.use(router);
app.use(cors);

// db config


// socket.io
io.on('connection', (socket) => {
    console.log("A connection is occured");

    socket.on('disconnect', () => {
        console.log("User is disconnected");
    })
});


// ???


// listen
server.listen(port, () => {
    console.log(`Server is listening to ${port}`);
})
