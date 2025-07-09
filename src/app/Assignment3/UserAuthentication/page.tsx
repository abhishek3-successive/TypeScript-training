"use client"

import { createContext, useState } from "react"
import Child from "../Components/userAuthentication";


const contextProvider= createContext();

export default function Parent()
{
    const [isLoggedIn,setLoggedIn]=useState(false);
    const username = "Abhishek";


    function login()
    {
        setLoggedIn(true);
    }

    return(
      <contextProvider.Provider value={{isLoggedIn,username,login}}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Authentication</h2>
        <Child/>
      </contextProvider.Provider>
    )
}

export {contextProvider}
