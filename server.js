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
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
});
const port = process.env.PORT || 9000;


// production config


// middleware
app.use(express.json());
app.use(router);
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}));

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