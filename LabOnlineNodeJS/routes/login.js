const express = require('express');
const router = express.Router();
const User = require('../models/User');
const cors = require('cors');

//allows all origins
router.use(cors());

//parses Json/application data
router.use(express.json());

// login route that stores User data in DB
router.post('/',(req,res)=>{
    console.log(req.body);
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    user.save()
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{
        res.json({message: err});
        console.log(err);
    });
});

module.exports = router;