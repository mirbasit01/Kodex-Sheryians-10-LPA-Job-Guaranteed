import React, { createContext, useEffect, useState }  from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorg'

export const AuthContext =  createContext()

function AuthProvider({children}) {
    // localStorage.clear()

    const [userData, setuserData] = useState({employees: [], admin:[] })  // Initializing with default empty data

    useEffect(() => {
        setLocalStorage()
        const {employees} = getLocalStorage()
        setuserData(employees)
    }, [] )
    
 
   
    // const data = getLocalStorage()
    // console.log(data.employees)
    
  return ( <div>
    <AuthContext.Provider value={[userData,setuserData]}>
      {children}
    </AuthContext.Provider>
      
      </div>
  )
}

export default AuthProvider