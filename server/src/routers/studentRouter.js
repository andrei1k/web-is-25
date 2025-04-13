import {Router} from 'express'

export const studentRouter = Router()

const students = [
    {
        id: 1,
        name: 'student1'
    },
    {
        id: 2,
        name: 'student2'
    },
    {
        id: 3,
        name: 'student3'
    }
]

// studentRouter.get('/', (req, res) => {
//     console.log('This is endpoint')

//     res.status(200).json({id: 1, name: "student", age: 20})

// })

studentRouter.get('/', (req, res) => {

    // const { id } = req.params


    // if (isNaN(id))
    // {
    //     res.status(400).json(undefined)
    //     return
    // }

    res.status(200).json(students)

})




studentRouter.post('/', (req, res) => {

    const { id, name, age } = req.body

    const newStudent = {id, name, age}

    students.push(newStudent)

    res.status(200).json(newStudent)

})

