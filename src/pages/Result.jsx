import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { data } from "../assets/data";

const Result = () => {
  const { correct, user } = useContext(UserContext);
  const {theme}=useContext(UserContext)
  console.log(data)

  return (
    <div className={`flex justify-center items-center h-screen ${theme?'bg-gray-700':'bg-gradient-to-b from-gray-100 to-blue-50'}`}>
      <div className={`px-12 py-8 text-xl ${theme?'bg-gray-300':'bg-white'} shadow-lg rounded-lg border border-gray-300`}>
        <div className="text-3xl text-indigo-800 font-semibold text-center p-4">
          Quiz Result
        </div>
        <div className="flex items-start justify-center gap-2 flex-col py-5 px-8">
          <h5 className={`text-xl ${theme?'text-black':'text-gray-700'} `}>
            Name: <span className="font-light">{user.fullName}</span>
          </h5>
          <h5 className={`text-xl ${theme?'text-black':'text-gray-700'} `}>
            Admission No: <span className="font-light">{user.rollNo}</span>
          </h5>
          <h5 className={`text-xl ${theme?'text-black':'text-gray-700'} `}>
            E-mail: <span className="font-light">{user.email}</span>
          </h5>
        </div>
  
        <div className="text-indigo-800 text-center text-2xl font-medium p-4">
          Score: <span className="font-semibold">{correct} / {data.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Result;
