const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    title:String,
    rank:Number,
    year:Number
})
module.exports = mongoose.model('movie',schema);