import React from 'react'


//Destructuring props!
function Greet({name , heroname}) {
    return (
        <div>
            <h1>Your name is {name} aka {heroname}</h1>
        </div>
    )
}

export default Greet
