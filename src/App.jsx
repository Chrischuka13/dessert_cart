import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage/HomePage'
import ConfirmOrder from './components/HomePage/ConfirmOrder'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'


function App() {

  return (
    <>
      {/* <Home/> */}
      <Routes>
        <Route path='/orders' element={
          <>
        <HomePage/>
        <ConfirmOrder/>
        </>
      }/>
        <Route path='/' element={<Home/>}/>
        <Route path='/orders' element={<HomePage/>}/>       
        
      </Routes>
    </>
  )
}

export default App
