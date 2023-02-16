const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    age:Number,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('auth', UserSchema )