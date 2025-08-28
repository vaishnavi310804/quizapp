import React, { useContext, useEffect, useState } from 'react'
import { data } from '../assets/data'
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Questions = () => {
    const[index , setIndex] = useState(0);
    const{selectedAnswer} = useContext(UserContext)


    const checkOption=(answer)=>{
        selectedAnswer[index].answer = answer;
        nextHandler()
      }

    const nextHandler =()=>{
        if(index < data.length-1){
           setIndex(index +1)
        }
    }

    const previousHandler =()=>{
        if(index>0){
            setIndex(index -1)
         }

    }

    const navigate = useNavigate()

    const submitHandler=()=>{
      toast.success("Quiz Submitted Successfully",{autoClose:1000})
        navigate('/result')
    }

    
 const{theme}=useContext(UserContext)

    
      return (
        <div className={`flex flex-col items-center justify-center min-h-screen ${theme?'bg-gray-700':'bg-gray-200'}  px-6`}>
          <div className={`w-full max-w-2xl ${theme?'bg-gray-300':'bg-white'}  rounded-xl shadow-lg p-8`}>
            <div className="mb-6">
              <p className="text-xl font-semibold text-blue-800">
                Question {index+1+'/'+data.length}
              </p>
              <p className="mt-4 text-lg text-black">{data[index].question}</p>
            </div>
    
            <div className="grid grid-cols-1 gap-4">
              {data[index].options.map((option, i) => (
                <div
                  key={i}
                  className={`w-full border border-indigo-600 ${theme?'bg-gray-200':'bg-gray-100'} text-black text-base font-medium py-3 px-2 hover:px-20 cursor-pointer rounded-md hover:bg-gray-500 hover:text-white transition-all duration-500`}
                  onClick={() => checkOption(option)}
                >
                  {option}
                </div>
              ))}
            </div>
    
            <div className="flex justify-between mt-8">
              {index!==0 && (
                <button
                  className="bg-blue-400 text-white text-base font-medium py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
                  onClick={previousHandler}
                >
                  Previous
                </button>
              )}
              {index!==data.length-1 && (
                <button
                  className="bg-blue-400 text-white text-base font-medium py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
                  onClick={nextHandler}
                >
                  Next
                </button>
              )}
            </div>
    
          
              <div className="mt-6 text-center">
                <button
                  className="w-full bg-green-500 text-white text-base font-medium py-3 rounded-md hover:bg-green-600 transition duration-300"
                  onClick={submitHandler}
                >
                  Submit
                </button>
              </div>
          </div>
        </div>
      );

}

export default Questions
