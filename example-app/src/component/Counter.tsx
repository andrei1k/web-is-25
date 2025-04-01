import { useState } from "react";

export default function Counter () {

    const [counter, setCounter] = useState(0);



    return (
        <>
            <h2>Counter: {counter}</h2>
            <button onClick={() => {setCounter(counter + 1)}}>Increment</ button>
        </>
    )
}