const mongoose = require('mongoose');
 const schema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    age:Number,
    address : {
        type:String,
        unique:true
    },
    date:{type:Date, default:Date.now},
    vat:String,
    company: String,
    sectors : [String]
});
module.exports = mongoose.model('client', schema);
