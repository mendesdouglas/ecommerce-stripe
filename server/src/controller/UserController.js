const { response } = require('express');
const { update } = require('../model/UserModel');
const UserModel = require('../model/UserModel');
// const  {hashPassword} = require('../helpers/auth')
const {hash} = require('bcryptjs')
const {sign} = require('jsonwebtoken') 

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

class UserController {
    
    async create(req, res){
        try {
            const {name, email,  password}= req.body

            //comment if return error code 
            if(!name){
                return res.json({
                    error: "Name is required", 
                })
            }
            //
            if(!password || password.length < 6) {
                return res.json({
                    error: "Password is required and should be 6 characters long"
                })
            }
            //end comment
            
            
            console.log(email)
            const exist = await UserModel.find({email})
            
            console.log('type', typeof(exist))
            //verify if obj exist contains elements if true throw a message
            for (var o in exist)
                console.log('teste')
                if(exist[o]){
                    return res.json({error: "email is taken"})
                }
            //take a password and hash
            const passwordHash = await hash(password, 8)

            //create account in stripe
            try{
                const user = await new UserModel({
                    name,
                    email,
                    password:passwordHash

                }).save()
                const token = sign(
                    {
                      _id:user._id,
                    },
                    process.env.JWT_SECRET,
                    {
                      expiresIn: '30d'
                    }
                  )

                const{password, ...rest} = user._doc
                return res.json({
                    token,
                    user:rest
                })

            }catch(err){
                console.log(err)
            }
            
        }catch(err){
            console.log(err)
        }
        
        
    }

     
    







   
  
}



module.exports = new UserController();