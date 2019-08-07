const mongoose = require('mongoose')
const ListSchema = require('./lists').model('List').schema
const Schema = mongoose.Schema;

const BoardSchema = new Schema ({
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
    description: {
        required: false,
        type: String
    },
    authorizedUsers: [],
    lists: [ListSchema]
})

module.exports = mongoose.model('Board', BoardSchema);