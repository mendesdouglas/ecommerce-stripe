import 'dotenv/config'
import express, {Request, Response, NextFunction} from 'express'
import 'express-async-errors'
import { router } from './routes'
import cors from 'cors';

const app = express()

app.use(router)
app.use(express.json())
app.use(cors({
     origin: [process.env.CLIENT_URL],
}))


const port = process.env.PORT
app.listen(port, () => {
    console.log("CONNECTED ON", port)
})