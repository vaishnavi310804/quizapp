import {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { toast } from 'react-toastify'

const Form = () => {

    const {setUser} = useContext(UserContext)

    const[form , setForm] = useState({
        fullName: '',
        rollNo :'',
        email : ''
    })

    const changeHandler= (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const {theme}=useContext(UserContext)
    const navigate = useNavigate()
    
    const submitHandler=(e)=>{
        e.preventDefault()
        setUser(form)
        localStorage.setItem('token','ticket')
        toast.success('Successfully Login',{autoClose:1000})
        navigate('/quiz')
      }
      
    
    return (
      <div className={`flex justify-center items-center h-screen ${theme?'bg-gray-700':'bg-gradient-to-b from-gray-100 to-blue-50'}`}>
        <form
          onSubmit={submitHandler}
          className={`w-full max-w-md ${theme?'bg-gray-300':'bg-white border'} border-gray-300 rounded-lg shadow-lg p-8`}
        >
          <h2 className="text-2xl font-bold text-indigo-800 text-center mb-6">
            Registration Form
          </h2>
    
          <div className="mb-4">
            <label
              htmlFor='fullName'
              className="block text-sm font-semibold text-indigo-600 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter your Name"
              className={`w-full px-4 py-2 border placeholder:text-gray-700 ${theme?'bg-gray-200':''} border-gray-300 rounded-lg`}
              value={form.fullName}
              onChange={changeHandler}
              required
            />
          </div>
    
          <div className="mb-4">
            <label
              htmlFor="rollNo"
              className="block text-sm font-semibold text-indigo-600 mb-2"
            >
              Roll No.
            </label>
            <input
              type="text"
              name="rollNo"
              id="rollNo"
              placeholder="Enter your Roll No."
              className={`w-full px-4 py-2 border placeholder:text-gray-700 ${theme?'bg-gray-200':''} border-gray-300 rounded-lg`}
              value={form.rollNo}
              onChange={changeHandler}
              required
            />
          </div>
    
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-indigo-600 mb-2"
            >
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="abc@gmail.com"
              className={`w-full px-4 py-2 border placeholder:text-gray-700 ${theme?'bg-gray-200':''} border-gray-300 rounded-lg`}
              value={form.email}
              onChange={changeHandler}
              required
            />
          </div>
    
          <button
            type="submit"
            className="w-full bg-indigo-800 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    );

}
export default Form;

