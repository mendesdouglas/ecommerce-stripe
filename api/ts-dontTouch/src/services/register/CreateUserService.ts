import { Request } from 'express'
const mongoose = require('../../config/database')
//import mongoose from '../../config/database';
import {Schema, Model} from 'mongoose';

export interface UserRequest{
    name: string;
    email: string;
    password: string;
}

const UserSchema: Schema = new Schema({
    name: {type:String, required: true},
    email: {type:String, required: true},
    password: {type:String, required: true},
})

//module.exports = mongoose.model('User', UserSchema)
export default mongoose.model('User', UserSchema)