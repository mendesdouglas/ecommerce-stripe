const { response, request } = require('express');
const UserModel = require('../model/UserModel');
const {compare} = require('bcryptjs')
const {sign} = require('jsonwebtoken') 
require('dotenv').config()

const {
    startOfDay, 
    endOfDay, 
    startOfWeek, 
    endOfWeek, 
    startOfMonth, 
    endOfMonth, 
    startOfYear, 
    endOfYear

}= require('date-fns');

const current = new Date();

class LoginUserController {
    
    async handle(req, res){
        try {
            const { email}= req.body
            //console.log(email, password)
            //check email is recorded
            const user = await UserModel.findOne({email})
            if(!user){
                return res.json({
                    error: "Password or email is incorrect"
                })
            }
            //check password from form and database
            const match = await compare(req.body.password, user.password)
            if(!match){
                return res.json({
                    error: "Password or email is incorrect"
                })
            }
            console.log(process.env.JWT_SECRET)
            //token to user
            const token = sign(
                {
                  _id:user._id,
                  
                },
                process.env.JWT_SECRET,
                {
                  
                  expiresIn: '30d'
                }
              )
            console.log('sss',token)
            const {password, ...rest} = user._doc
            res.json({
                token,
                user:rest
                
            })
        }catch(err){
            console.log(err)
        }       
    }  
}



module.exports = new LoginUserController();