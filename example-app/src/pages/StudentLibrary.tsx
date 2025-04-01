import { useState } from "react"
import StudentCard from "../component/StudentCard"

export type Student = {
    id: number,
    name: string,
    age: number
}


const studentsDB: Student[] = [
    {
        id: 1,
        name: 'jon',
        age: 12
    },
    {
        id: 2,
        name: 'student2',
        age: 12
    },
    {
        id: 3,
        name: 'student3',
        age: 12
    }
]


export default function StudentLibrary() {

    const [name, setName] = useState('')
    const [age, setAge] = useState<number>()
    const [students, setStudents] = useState(studentsDB)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStudents(prevState => [...prevState, {id: prevState.length + 1, name, age: age ?? 0}])
        setAge(undefined)
        setName('')
    }

    return (
        <>
        <div className="library">
            {students.map(student => <StudentCard key={student.id} student={student}/>)}
        
        </div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => {
                setName(e.target.value)
            }}/>
            <input type="number" placeholder="age" value={age} onChange={(e) => {
                setAge(Number(e.target.value))
            }}/>
            <input type="submit" name="Submit"/>
        </form>
        </>
    )
}