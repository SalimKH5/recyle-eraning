import React from 'react'
import "./Banner.css"
import Logo from "./logo-no-background.png"

function Banner({pargraph,setShowSign,page,height}) {



  const handleClick=()=>{
    setShowSign(true);
  }

  return (
    <div className="Banner-wrapper" style={{height:height}}>

        <img src={Logo} alt="" />
        {page===1?
        <>
        
        <div className="Banner-paragraph">
            {
              pargraph.map((text)=>(
                <p >{text}</p>
              ))
            }
             <button className="btn-donate" onClick={handleClick}>Throw my plastic</button>
        </div>
        </>
        
        :
        page===2?
        <div className="donnate-text">
          <p>Where is?</p>
          <p>Look in nearby Location</p>
        </div>
        :
        page===3?
        <div className="points-text">
         <p>Hey Joe doe, you have <span>XXXX points</span> in your account </p>
        </div>
        :
        page===4?
        <div className="collecteur-form">
                <div className='collecteur-text'>
                <p>Hello, [Name] !</p>
                <p>Please insert this informations to register as a ramasseur :</p>
                </div>
                <form action="">
                  <div><label htmlFor="">Mark of car </label><input type="text" name="" id="" placeholder='Mark of the car'/></div>
                  <div><label htmlFor="">Model of car </label><input type="text" name="" id="" placeholder='Model of the car'/></div>
                  <div><label htmlFor="">Id of car </label><input type="text" name="" id="" placeholder='Id the car'/></div>
                  
                </form>         
        </div>
        :
        <>
        </>
        }
    </div>
  )
}

export default Banner