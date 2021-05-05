const express = require('express');
const cors = require('cors');

// schema
const User = require('./userSchema');

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
                res.status(501).send(err);
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
                res.status(501).send(err);
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
                    res.status(501).send(err);
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
                res.status(501).send(err);
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
                res.status(501).send(data);
            } else {
                res.status(201).send(data);
            }
        })
    }
});


router.get('/find/allroom', (req, res) => {
    User.find((err, data) => {
        if (err) {
            res.status(501).send(err);
        } else {
            let allroom = [];
            data.map(user => user.createdRooms.map(room => allroom.push(room)));
            // console.log(allroom);
            res.status(201).send(allroom);
        }
    })
});


module.exports = router;