import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'

import Home from './pages/Home/Home'
import {Routes,Route} from "react-router-dom"
import "./App.css"
import User from './pages/User/User'
import Donnate from './pages/Donnate/Donnate'
import Signin from './components/Signin/Signin'
import Collecteur from './pages/Collecteur/Collecteur'
import Points from './pages/Points/Points'
function App() {

  const [showSign,setShowSign]=useState(false)
 const user=true
  return (
    <>
        <Navbar showSign={showSign} setShowSign={setShowSign}/>
        <div className="App-wrapper">
        <Routes>
          
             <Route path="/" element={<Home showSign={showSign} setShowSign={setShowSign} />}/>
             <Route path="/User" element={<User/>}/>
             <Route path="/Donnate" element={<Donnate/>}/>
             <Route path="/collecteur" element={<Collecteur/>}/>
             <Route path="/Points" element={<Points/>}/>

             
        </Routes>
        {showSign && <Signin setShowSign={setShowSign} />}
        </div>
        
    </>
  )
}

export default App