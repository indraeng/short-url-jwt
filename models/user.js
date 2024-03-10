const mongoose = require('mongoose')

//user schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

//user model
const User = mongoose.model('user',userSchema)

module.exports = User