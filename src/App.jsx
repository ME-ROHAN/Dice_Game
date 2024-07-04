import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './Component/Dashboard'
import Gamezone from './Component/Gamezone'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
  
  <Routes>
    <Route path='/' element = {<Dashboard></Dashboard>}>
    </Route>
    <Route path='/gamezone' element = {<Gamezone></Gamezone>}>

    </Route>
  </Routes>
     
    </>
  )
}

export default App
