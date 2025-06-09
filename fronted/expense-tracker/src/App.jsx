import React from 'react'
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom"
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import Home from './pages/Dashboard/Home'
import Expense from './pages/Dashboard/Expense'
import Income from './pages/Dashboard/Income'

function App() {
  return (
    <div className=''>
      <Router>
        <Routes>
          <Route path='/' element={<Root/>} />
          <Route path='/login' exact element={<Login/>} />
          <Route path='/signUp' exact element={<SignUp/>} />
          <Route path='/dashboard' exact element={<Home/>} />
          <Route path='/expense' exact element={<Expense/>}/>
          <Route path='/income' exact element={<Income/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

const Root = () => {
  // Check if token exist in localstorage
  const isAuthenticated = !!localStorage.getItem("token")

  // redirect to dashboard if authenticated,otherwise to login
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="login" />
  )
}