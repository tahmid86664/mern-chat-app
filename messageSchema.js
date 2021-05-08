const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    roomId: String,
    senderName: String,
    senderUsername: String,
    text: String,
    timestamp: String
});


module.exports = mongoose.model('messages', messageSchema);