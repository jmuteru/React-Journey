import React from 'react'
import {useState} from 'react'
function NewCounter({realName ,alias}) {
    const [count, setCount] = useState(0);
    const handleCount =()=>{
        setCount(count +1)
    }
    return (
        <div>
            <h1>Counter:{count}</h1>
            <button onClick ={()=>handleCount()}>Count</button>
            <p>Your  name is {realName} a.k.a {alias}</p>
        </div>
    )
}

export default NewCounter
