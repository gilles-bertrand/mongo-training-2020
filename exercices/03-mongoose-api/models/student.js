const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    firstname :String,
    lastname:String,
    email:String,
    created:{type: Date, default: Date.now},
    });

module.exports = mongoose.model('student',schema)