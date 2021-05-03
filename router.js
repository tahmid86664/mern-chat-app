const express = require('express');

// schema
const User = require('./userSchema');

const router = express.Router();

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

module.exports = router;