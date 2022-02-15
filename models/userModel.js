const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name:{
        type: String,
        required: [true, 'Please input your Name']
    },
    email:{
        type: String,
        required: [true, 'Please input your Email Address']
    },
    password:{
        type: String,
        required: [true, 'Please input a Password']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)