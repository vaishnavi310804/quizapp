import React from 'react'
import Form from './components/Form'
import Questions from './components/Questions'
import Result from './pages/Result'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
     
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/form' element={<Form/>} />
          <Route path='/quiz' element={<ProtectedRoute><Questions/></ProtectedRoute>} />
          <Route path='/result' element={<ProtectedRoute><Result/></ProtectedRoute>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
