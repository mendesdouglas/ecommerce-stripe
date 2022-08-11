import { Request, Response } from 'express'
import { connect } from '../../config/database';
import mongoose, {Schema} from 'mongoose';
import CreateUserService from '../../services/register/CreateUserService';

class CreateUserController{
    async handle(req: Request, res:Response){
        const name = 'douglas'
        const email = 'douglas@douglas'
        const password =true

        console.log(name, email, password)
        const task = new CreateUserService(name, email, password)
        //console.log(name)
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
export  {CreateUserController}
