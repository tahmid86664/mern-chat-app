const express = require('express');
const cors = require('cors');

// schema
const User = require('./userSchema');
const Messages = require('./messageSchema');

const router = express.Router();

// midleware
router.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}));

router.get('/', (req, res) => {
    res.status(200).send("Server is up and running");
});

router.post('/adduser', (req, res) => {
    const user = req.body;
    console.log(user);

    if (user) {
        User.create(user, (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201).send(data);
            }
        });
    }
});

router.post('/finduser', (req, res) => {
    const user = req.body;

    console.log(user);

    if (user) {
        User.findOne({"username": user.username, 
        "password": user.password}, (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                console.log(data);
                res.status(201).send(data);
            }
        });
    }
});

router.post('/createroom', (req, res) => {
    const room = req.body;

    if (room) {
        User.updateOne({username: room.creatorUsername}, 
            {$push: {createdRooms: room}}, 
            (err, data) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(201).send(data);
                }
        })
    }
});

router.get('/find/createdroom/:username', (req, res) => {
    const username = req.params.username;

    if (username) {
        User.findOne({"username": username}, (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res. status(201).send(data.createdRooms);
            }
        });
    }
});


router.get('/delete/room/:username/:roomId', (req, res) => {
    const username = req.params.username;
    const roomId = req.params.roomId;

    if (username && roomId) {
        User.updateOne({"username": username}, 
        {$pull: {createdRooms: {"_id": roomId}}}, 
        (err, data) => {
            if (err) {
                res.status(500).send(data);
            } else {
                res.status(201).send(data);
            }
        })
    }
});


router.get('/find/allroom', (req, res) => {
    User.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            let allroom = [];
            data.map(user => user.createdRooms.map(room => allroom.push(room)));
            // console.log(allroom);
            res.status(201).send(allroom);
        }
    })
});

router.get('/find/allusers', (req, res) => {
    User.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            let alluser = [];
            data.map(user => alluser.push({
                "id": user._id,
                "name": user.name,
                "username": user.username
            }));
            // console.log(allroom);
            res.status(201).send(alluser);
        }
    })
});


// not using the folling one
router.post('/add/message/:username/:roomId', (req, res) => {
    const username = req.params.username;
    const roomId = req.params.roomId;

    const message = req.body;
    console.log(message, username, roomId);

    if ( username && roomId ) {
        User.updateOne({"username": username, "createdRooms._id": roomId}, 
        {$push: {"createdRooms.$.messages": message}},
        (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201).send(data);
            }
        })
    }
});


router.post('/add/message', (req, res) => {
    const message = req.body;
    console.log(message);

    if ( message ) {
        Messages.create(message, (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201).send(data);
            }
        })
    }
});


router.get('/find/messages/:roomId', (req, res) => {
    const roomId = req.params.roomId;

    if (roomId) {
        Messages.find({"roomId": roomId}, (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201).send(data);
            }
        });
    }
});

router.post('/add/joinedroom/:roomId/:username', (req, res) => {
    const roomId = req.params.roomId;
    const username = req.params.username;

    const joinedRoom = req.body;

    const member = {
        "username": username
    }

    console.log(roomId, username, joinedRoom, member);

    if ( joinedRoom && roomId && username ) {
        User.updateOne({"username": username}, 
        {$push: {joinedRooms: joinedRoom}},
        (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                User.updateOne({"username": joinedRoom.creatorUsername, "createdRooms._id": roomId},
                {$push: {"createdRooms.$.members": member}},
                (err1, data1) => {
                    if (err1) {
                        res.status(500).send(err1);
                    } else {
                        res.status(201).send(data1);
                    }
                })
                // res.status(201).send(data);
            }
        });
    }
});

router.get('/find/joinedrooms/:username', (req, res) => {
    const username = req.params.username;

    if (username) {
        User.findOne({"username": username}, (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res. status(201).send(data.joinedRooms);
            }
        });
    }
});

module.exports = router;