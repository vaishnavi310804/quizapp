import React, { createContext, useEffect, useState } from 'react'
import { data } from '../assets/data';

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {

  const [theme,setTheme] = useState(false);
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  
  const[user,setUser] = useState({
    fullName: '',
    rollNo :'',
    email : ''
  })
  
  const copiedData = data.map(item => ({...item,answer:''}));

  const [selectedAnswer,setSelectedAnswer] = useState(copiedData);

    const requriedValue = {
      selectedAnswer,
      setSelectedAnswer,
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


