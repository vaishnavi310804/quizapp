import React, { createContext, useState } from 'react'

export const UserContext = createContext()
export const UserContextProvider = ({children}) => {
    const[correct , setCorrect] = useState(0);
    const [theme,setTheme] = useState(false)
    const [isAuthenticated,setIsAuthenticated] = useState(false)

    const[user,setUser] = useState({
        fullName: '',
        rollNo :'',
        email : ''
    })

    const requriedValue = {
        correct , 
        setCorrect,
        user,
        setUser,
        theme,
        setTheme,
        isAuthenticated,
        setIsAuthenticated
    }
  return (
    <UserContext.Provider value={requriedValue}>
        {children}
    </UserContext.Provider>
  )
}


