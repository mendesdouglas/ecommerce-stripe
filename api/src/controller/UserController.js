const UserModel = require('../model/UserModel')
const  hashPassword = require('../helpers/auth')
const comparePassword = require('../helpers/auth')




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
            
            //I'm verify if email already recorded in database
            console.log(email)
            const exist = await UserModel.find({email})
            //console.log('ssdf',exist.toString())
            //console.log('typeof',exist.values.email)
            //console.log(exist.values.email==email)
            //console.log("verificando true ou false",Object.values(exist).every(Boolean))
            // if (exist.values.email) {
            //     console.log('testes',exist.email)
            //     return res.json({
            //         error: "email is taken"
            //     })
                
            // }
            console.log(password)
            const hashedPassword = hashPassword(password)
            console.log('hash', typeof(hashedPassword.values))

            res.json({
                data: "Esse é /register endpoint"
            })
            
            

            
        }catch(err){
            console.log(err)
        }
        //console.log('User controller passei aqui')
        
    }
}

module.exports = new UserController();


// const task = new UserModel(req.body)
//         await task
//                     .save()
//                     .then(response => {
//                         return res.status(200).json(response)
//                     })
//                     .catch( err => {
//                         return res.status(500).json(err)
//                     })
