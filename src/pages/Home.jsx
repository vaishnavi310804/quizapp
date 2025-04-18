import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'


const Home = () => {
  
  const {theme} = useContext(UserContext)
    const navigate = useNavigate()

    const clickHandler= ()=>{
        navigate ('/form')
    }

    return (
      <div>
        <div className={`h-screen flex flex-col justify-center items-center ${theme?'bg-gray-700':'bg-gradient-to-b from-gray-100 to-blue-50'}`}>
          <h1 className={`text-7xl text-center ${theme?'text-white':'text-indigo-800'} font-extrabold`}>
            Welcome to QuizNest
          </h1>
          <hr className={`${theme?'border-white':'border-indigo-600'} w-1/2 mx-auto my-5`} />
          <p className={`text-xl ${theme?'text-white':'text-gray-700'} font-medium text-center`}>
            Test Your Knowledge. Beat the Clock. Rule the Nest!
          </p>
          <div className="my-8">
            <button
              onClick={clickHandler}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md transition duration-300"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    )
}

export default Home
