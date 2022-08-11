//const mongoose = require('mongoose');
import mongoose, {Mongoose} from 'mongoose'
require('dotenv').config()

const url = 'mongodb://localhost:27017/stripe'

mongoose.connect(url)

export default mongoose
// export const connect = async (): Promise<Mongoose> => 
    
//     await mongoose.connect('mongodb://localhost:27017/stripe')
//     console.log('teste')


// export const close = (): Promise<void> => mongoose.connection.close();

// //create a interface representign a document in MongoDB
// interface UserSchema {
//     name: string;
//     email:string;
//     password: string;
// }

// //create a schema corresponding to the document interface

// const userSchema = new Schema<UserSchema>({
//     name: {type: String, required:true},
//     email: {type: String, required:true},
//     password: {type: String, required:true},
// })

// // create model
// const User = model<UserSchema>('User', userSchema);

// run().catch(err => console.log(err))
// async function run() {
//     //connecting to MongoDB
//     await connect('mongodb://localhost:27017/stripe')
    

//     // const user = new User({
//     //     name: "douglas",
//     //     email: 'bill@teste.com',
//     //     password: '1234'
//     // })
//     // await user.save();
//     // console.log(user.email)
// }



// export default mongoose.model('User', userSchema)