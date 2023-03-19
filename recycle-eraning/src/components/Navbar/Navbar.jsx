import React from 'react'
import "./Navbar.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
function Navbar({setShowSign,showSign}) {

  const handleClick=()=>{
    setShowSign(true);
  }
  const user=false

  return (
    <div className="navbar">
      <div className="navbar-wrapper">
      <div className="logo">

      </div>
      
      <div className="Menu-wrapper">
      <div className="Menu">
        <p>Home</p>
        <p>Buy plastic</p>
        <p >collect plastic</p>
        <p active={true}>My points</p>
        
      </div>
      <div className="Login">
          <button onClick={handleClick}>Login</button>
      </div>
     
      </div>  
      </div>      
      <div  className="green-color">
        
      </div>
    </div>
  )
}

export default Navbar