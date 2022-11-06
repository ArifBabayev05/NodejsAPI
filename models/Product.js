const mongoose = require('mongoose');

const ProductScheme = new mongoose.Schema({
    name:{type:String,required:true},
    mail:{type:String,required:true},
    tel:{type:String,required:true},
    leadSource:{type:String,required:true},
    
    createAt:{
        type:Date,
        default:Date.now
    }

})

// DB Table configs
module.exports = mongoose.model("Product", ProductScheme)