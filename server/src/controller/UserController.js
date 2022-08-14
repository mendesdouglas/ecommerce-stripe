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

     
    

    async update(req, res){
        await TaskModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new:true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async all(req,res){
        await TaskModel.find({ macaddress: { '$in': req.params.macaddress }})
                .sort('when').then(response => {
                    return res.status(200).json(response);
                })
                .catch(error => {
                    return res.status(500).json(error);

                });
    }

    async show(req, res){
        await TaskModel.findById(req.params.id)
        .then(response => {
            if(response)
            return res.status(200).json(response);
            else
            return res.status(404).json({error: 'tarefa não encontrada'});

        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async delete(req,res){
        await TaskModel.deleteOne({'_id': req.params.id})
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async done(req, res){
        await TaskModel.findByIdAndUpdate(
            {'_id':req.params.id},
            {'done': req.params.done},
            {new: true}
            )
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async late(req, res){
        await TaskModel.find({ 
            'when': {'$lt': current},
            'macaddress': {'$in': req.params.macaddress}
        })
        .sort('when')
        .then( response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async today(req, res){
        await TaskModel.find({
            'macaddress': {'$in': req.params.macaddress},
            'when': {'$gte': startOfDay(current), '$lte': endOfDay(current)},

        }).sort('when').then(response =>{
            //console.log(res);
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });

    }

    async week(req, res){
        await TaskModel.find({
            'macaddress': {'$in': req.params.macaddress},
            'when': {'$gte': startOfWeek(current), '$lte': endOfWeek(current)},

        }).sort('when').then(response =>{
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async month(req, res){
        await TaskModel.find({
            'macaddress': {'$in': req.params.macaddress},
            'when': {'$gte': startOfMonth(current), '$lte': endOfMonth(current)},

        }).sort('when').then(response =>{
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async year(req, res){
        await TaskModel.find({
            'macaddress': {'$in': req.params.macaddress},
            'when': {'$gte': startOfYear(current), '$lte': endOfYear(current)},

        }).sort('when').then(response =>{
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }
}



module.exports = new UserController();