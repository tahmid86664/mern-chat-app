// import
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');


// custom module
const router = require('./router');

// schema
const users = require('./userSchema.js');

// app config
const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true
    }
});
const port = process.env.PORT || 9000;


// production config


// middleware
app.use(express.json());
app.use(router);


// db config
const url = 'mongodb+srv://tahmid:TiW4UbBrE076IwDo@cluster0.b9jpc.mongodb.net/mern-chat-app?retryWrites=true&w=majority';
mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.once('open', () => {
    console.log('Database is connected');
})

// socket.io
io.on('connection', (socket) => {
    console.log("A connection is occured");

    // socket.on('zone-in', ({user}, callback) => {
    //     console.log(user);

    //     user.friends.map(friend => {
    //         // console.log(`broadcasting to ${friend.username}`);
    //         socket.broadcast.to(friend.username)
    //     });

    // })

    socket.on('join', ({ username, roomId }, callback) => {
        console.log(`${username} has just joined in ${roomId}`);

        socket.emit('message', { senderUsername: '', text:`Hello ${username}! Welcome to the room ${roomId}!` })
        socket.broadcast.to(roomId).emit('message', { senderUsername: '', text: `${username} has just joined!` })
    
        socket.join(roomId);

        callback();
    });

    socket.on('sendMessage', (message, roomId, username, callback) => {
        io.to(roomId).emit('message', {senderUsername: username, text: message});

        callback();
    });

    socket.on('disconnect', () => {
        console.log("User is disconnected");
    })
});


// ???


// listen
server.listen(port, () => {
    console.log(`Server is listening to ${port}`);
})






//TiW4UbBrE076IwDo