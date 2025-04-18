import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { toast } from 'react-toastify'

const ProtectedRoute = ({children}) => {

    const navigate = useNavigate()

    const {setIsAuthenticated} = useContext(UserContext)

    useEffect(()=>{

        const token = localStorage.getItem('token')
        if(!token){
            navigate('/form')
            toast.warn('Please Login',{autoClose:1000})
        }
        else{
            setIsAuthenticated(true)
        }
    },[])

  return (
    <div>
      {children}
    </div>
  )
}

export default ProtectedRoute
