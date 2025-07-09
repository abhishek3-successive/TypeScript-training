// 1.Create a React component with an input field. Implement it as a controlled component where the input value is controlled by the component's state. When the user types into the input field, the component's state should update accordingly.
'use client'

import { useState } from "react"

export default function ControlledCompo(){
    const[input , setinput] = useState(" ")
    return(
        <>
        <input
        type="text"
        value={input}
        onChange={(e)=>setinput(e.target.value)} ></input>

        <h1> Hello {input}</h1>
        </>
    );
}