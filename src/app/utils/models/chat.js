const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const chatScema = new mongoose.Schema({
    Name : {
        type : String,
        default:'Anonymus',
        require : true
    },
    Name : {
        type : String,
        default:' ',
        require : true
    },
})

module.exports = mongoose.model('chat', chatScema)