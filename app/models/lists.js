const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const CardSchema = require('./cards').model('Card').schema


const ListSchema = new Schema ({
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
    cards: [CardSchema]
})

module.exports = mongoose.model('List', ListSchema);