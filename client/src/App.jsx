import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './Register'
import Login from './Login'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
