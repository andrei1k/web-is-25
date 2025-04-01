import { useState } from "react"


export default function Login() {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     setStudents(prevState => [...prevState, {id: prevState.length + 1, name, age: age ?? 0}])
    //     setAge(undefined)
    //     setName('')
    // }

    return (
        <>

        <form onSubmit={() => {}}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => {
                setName(e.target.value)
            }}/>
            <input type="password" placeholder="age" value={password} onChange={(e) => {
                setPassword((e.target.value))
            }}/>
            <input type="submit" name="Submit"/>
        </form>
        </>
    )
}