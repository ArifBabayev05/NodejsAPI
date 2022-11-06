
const mongoose = require('mongoose');

const CompanyScheme = new mongoose.Schema({
    name: String,
    webSite: String,
    imageUrl: String,
    location: String,
    notes: String,

    createAt: {
        type: Date,
        default: Date.now
    },

})

// DB Table configs
module.exports = mongoose.model("Company", CompanyScheme)
