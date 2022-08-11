const mongoose = require('../config/database')
const Schema = mongoose.Schema


const UserSchema = new Schema({
    name: {type:String, required: true},
    email: {type:String, required: true},
    password: {type:String, required: true},
})
//console.log(UserSchema)

module.exports = mongoose.model('User', UserSchema)