const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  password: String,
  status: String,
  createdRooms: [{
    id: String,
    name: String,
    creatorName: String,
    creatorUsername: String,
    members: [{
      id: String,
      name: String,
      username: String
    }],
    messages: [{
      id: String,
      senderName: String,
      senderUsername: String,
      text: String,
      timestamp: String
    }]
  }],
  joinedRooms: [{
    id: String,
    name: String,
    creatorName: String,
    creatorUsername: String,
    members: [{
      id: String,
      name: String,
      username: String
    }],
    messages: [{
      id: String,
      senderName: String,
      senderUsername: String,
      text: String,
      timestamp: String
    }]
  }],
  friends: [{
    id: String,
    name: String,
    username: String,
    status: String,
    messages: [{
      id: String,
      senderName: String,
      senderUsername: String,
      text: String,
      timestamp: String
    }]
  }]
});

const users = module.exports = mongoose.model('users', userSchema);