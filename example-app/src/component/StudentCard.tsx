import { Student } from "../pages/StudentLibrary"
import './StudentCard.css'

interface StudentCardProps {
    student: Student
}

export default function StudentCard({student}: StudentCardProps) {


    return (

        <div>
        
            <div className="placeholder"></div>
            <p>{student.name} {student.age}</p>
        </div>

    )
}