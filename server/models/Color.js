var mongoose = require('mongoose');

var ColorSchema = new mongoose.Schema({
    surname: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    favcolor:{
        type: String,
        required: true
    }
});

module.exports = ColorSchema;