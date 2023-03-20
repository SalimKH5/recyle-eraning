import React from 'react'
import "./Navbar.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Logo from "./image(1)(1) 1.png"
import Profil from "./profile.jpg"
import { Link } from 'react-router-dom';
function Navbar({setShowSign,showSign}) {

  const handleClick=()=>{
    setShowSign(true);
  }
  const user=false

  return (
    <div className="navbar">
      <div className="navbar-wrapper">
      <Link to="/" className="logo">
          <img src={Logo} alt="Logo" />
      </Link>
      
      <div className="Menu-wrapper">
      <div className="Menu">

          <Link to="/Donnate">Buy plastic</Link>
          <Link to="/collecteur">collect plastic</Link>
          <Link active={true}>My points</Link>
      </div>
      <div className="Login">
          {!user?<button onClick={handleClick}>Login</button>:
          <>
          <strong>Joe doe</strong>
          </>}
      </div>
     
      </div>  
      </div>      
      
    </div>
  )
}

export default Navbar