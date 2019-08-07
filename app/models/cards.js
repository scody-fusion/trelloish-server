const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CardSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    createdDate: {
        type: String,
        required: true
    },
    createdBy: {
        required: true,
        type: String
    },
    lastModified: {
        required: true,
        type: String
    },
    description: String

})

module.exports = mongoose.model('Card', CardSchema);