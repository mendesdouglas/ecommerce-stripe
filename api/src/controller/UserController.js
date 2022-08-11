const UserModel = require('../model/UserModel')

class UserController {
    async create(req, res){
        console.log('passei aqui')
        const task = new UserModel(req.body)
        await task
                    .save()
                    .then(response => {
                        return res.status(200).json(response)
                    })
                    .catch( err => {
                        return res.status(500).json(err)
                    })
    }
}
module.exports = new UserController();