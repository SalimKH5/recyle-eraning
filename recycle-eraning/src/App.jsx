import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'

import Home from './pages/Home/Home'
import {Routes,Route} from "react-router-dom"
import "./App.css"
import User from './pages/User/User'
function App() {

  const [showSign,setShowSign]=useState(false)
  return (
    <>
        <Navbar showSign={showSign} setShowSign={setShowSign}/>
        <div className="App-wrapper">
        <Routes>
             <Route path="/" element={<Home showSign={showSign} setShowSign={setShowSign} />}/>
             <Route path="/User" element={<User/>}/>
        </Routes>
        </div>
        
    </>
  )
}

export default App