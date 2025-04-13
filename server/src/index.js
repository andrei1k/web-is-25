import express from 'express'
import cors from 'cors'
import { studentRouter } from './routers/studentRouter.js'

const app = express()
app.use(cors())
app.use(express.json())


app.use('/student', studentRouter)




app.listen(3001, () => {

    console.log('Listening on port 3001  http://localhost:3001/')
})