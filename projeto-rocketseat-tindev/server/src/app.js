const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const router = require('./routes');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {
    const { user } = socket.handshake.query;
    connectedUsers[user] = socket.id;
})

mongoose.connect('mongodb+srv://root:root@cluster0-8qzbo.mongodb.net/projeto?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.use((req, res, next) => { 
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
})

app.use(cors());
app.use(express.json())
app.use(router)

server.listen(3333);