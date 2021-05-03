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
        User.findOne({"username": user.username}, (err, data) => {
            if (err) {
                res.status(501).send(err);
            } else {
                res.status(201).send(data);
            }
        });
    }
});

module.exports = router;