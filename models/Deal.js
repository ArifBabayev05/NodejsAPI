const mongoose = require('mongoose');

const DealScheme = new mongoose.Schema({
    person:{type:String},
    organisation:{type:String},
    title:{type:String},
    valuet:{type:Number},
    closeDate:{type:Date},
    tel:{type:String},
    mail:{type:String},
    status:{type:String},
    summary:{type:String},


    createAt:{
        type:Date,
        default:Date.now
    }

})
// DB Table configs
module.exports = mongoose.model("Deal", DealScheme)