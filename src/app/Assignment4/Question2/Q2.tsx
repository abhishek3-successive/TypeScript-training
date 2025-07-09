// 2.Build a form that includes various input fields like text inputs, checkboxes, and radio buttons. 
// Ensure that each input is a controlled component. When the user submits the form, log the form data to the console.
'use client'
import { useState } from "react"

export default function ControlledForm(){
    const [input , setinput] = useState('');
    const [checkboxes, setcheckboxes] = useState(false)
    const [radio , setradio] = useState(false)

    const handleradio = ()=> setradio(!radio);
    return(
        <>
        <input 
        type = 'text'
        value={input}
        onChange={(e)=>setinput(e.target.value)}
        />

        <input
        type="checkbox"
        onClick={()=>setcheckboxes(!checkboxes)}
        />
        <input
        type="radio"
        onClick={handleradio}
        />
        </>
    )
}