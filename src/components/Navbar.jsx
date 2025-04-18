import React, { useContext } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { theme, setTheme,isAuthenticated,setIsAuthenticated } = useContext(UserContext);
  const navigate = useNavigate()
  const registerUser = ()=>{
    navigate('/form')
  }

  const LogoutUser = ()=>{
    localStorage.removeItem('token')
    setIsAuthenticated(false)
    navigate('/form')
  }
 const navigateToHome =()=>{
  navigate('/')
 }

  return (
    <div className="fixed top-0 w-full">
    <div className={`flex items-center justify-between p-3 shadow-md ${theme?'bg-gray-800':'bg-gray-200'}`}>
      <div onClick={navigateToHome} className={`text-2xl cursor-pointer font-medium ${theme?'text-white':'text-indigo-800'}`}>QuizNest</div>
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => setTheme(!theme)}
          className="bg-indigo-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 flex items-center gap-2"
        >
          {theme ? <IoSunnyOutline /> : <IoMoonOutline /> }
        </button>

          {isAuthenticated?(<button onClick={LogoutUser} className="bg-indigo-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 flex items-center gap-2">Logout
            </button>):(<button onClick={registerUser} className="bg-indigo-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 flex items-center gap-2">Register
              </button>)}
        
      </div>
    </div>
    </div>
  );
};

export default Navbar;
