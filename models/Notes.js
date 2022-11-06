const mongoose = require('mongoose');

const NotesScheme = new mongoose.Schema({
    text:{type:String,required:true},
    author:{type:String,required:true},

    createAt:{
        type:Date,
        default:Date.now
    }

})

// DB Table configs
module.exports = mongoose.model("Notes", NotesScheme)