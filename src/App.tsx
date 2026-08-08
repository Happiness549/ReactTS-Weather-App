import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home/Home'
import { Settings } from './pages/Home/Settings'


function App() {
  

  return (

    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Settings' element={<Settings/>}/>
    </Routes>
    </BrowserRouter>


     
  
  )
}

export default App
