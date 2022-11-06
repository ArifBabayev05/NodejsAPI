const mongoose = require('mongoose');

const ScheduleScheme = new mongoose.Schema({
    Subject:{type:String,required:true},
    Location:{type:String},
    CategoryColor:{type:String},
    
    StartTime:{
        type:Date,
        default:Date.now
    },
    EndTime:{
        type:Date,
        default:Date.now
    }
})

// DB Table configs
module.exports = mongoose.model("Schedule", ScheduleScheme)