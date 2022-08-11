import { Router} from "express";
import {CreateUserController}  from "./controller/register/CreateUserController"


const router = Router();

// router.get('/', (req, res) => {
//     return res.json({ok: true});
// });

router.post('/register', new CreateUserController().handle)



export { router }