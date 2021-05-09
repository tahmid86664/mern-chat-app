const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  password: String,
  status: String,
  createdRooms: [{
    name: String,
    creatorName: String,
    creatorUsername: String,
    members: [{
      name: String,
      username: String
    }],
  }],
  joinedRooms: [{
    name: String,
    roomId: String,
    creatorName: String,
    creatorUsername: String
  }],
  friends: [{
    name: String,
    username: String,
    status: String,
    messages: [{
      senderName: String,
      senderUsername: String,
      text: String,
      timestamp: String
    }]
  }]
});

const users = module.exports = mongoose.model('users', userSchema);