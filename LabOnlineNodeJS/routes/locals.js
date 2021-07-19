const express = require('express');
const cors = require('cors');
const router = express.Router();
const Locals = require('../models/Locals');
router.use(cors());
router.use(express.json());

router.get('/add',(req,res)=>{

    const local = new Locals({
        address: req.body.address,
        manager: req.body.manager,
        tests: req.body.tests,
        numberOfStaff: req.body.numberOfStaff
    } 
    );

    local.save()
    .then(data=>res.json(data))
    .catch(err=>res.json(err));
});

module.exports = router;