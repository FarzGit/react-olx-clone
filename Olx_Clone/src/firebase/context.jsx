/* eslint-disable react/prop-types */

import {createContext, useState} from 'react'
import {useEffect,} from "react"


   export const FirebaseContext = createContext(null)
   export const AuthContext = createContext(null)
   import { auth } from "./config"
   import { onAuthStateChanged } from "firebase/auth"

function Context ({children}){

   const [user,setUser] = useState('Hallo')
  useEffect(()=>{
    console.log(user)
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      setUser(user)
    })

    return ()=> unsubscribe();
  },[])

   return(
      <AuthContext.Provider value={{user,setUser}}>
            {children}
      </AuthContext.Provider>
   )
}

export default Context


