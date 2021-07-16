const mongoose = require('mongoose');

const LocalsSchema = mongoose.Schema({
    address:{
        type: String,
        required: true
    },
    manager:{
        type: String,
        required: true
    },
    tests:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Locals',LocalsSchema);