import express from 'express'
import cors from 'cors'
import { studentRouter } from './routers/studentRouter.js'
import { userService } from './services/userService.js'
import { jwtService } from './services/jwtService.js'
import { authMiddleware } from './middlewares/authMiddlemare.js'

const app = express()
app.use(cors())
app.use(express.json())


app.use('/student', authMiddleware, studentRouter)

app.post('/login', (req, res) => {


        const {username, password} = req.body

        userService.login(username, password)

        const token = jwtService.generateToken({username, password})



        res.status(200).json({token})
})



app.post('/register', (req, res) => {

    try{
        const {username, email, password} = req.body

        const newUser = userService.register(username, email, password)

        res.status(200).json(newUser)
    }
    catch {
        res.status(400);
    }
})




app.listen(3001, () => {

    console.log('Listening on port 3001  http://localhost:3001/')
})