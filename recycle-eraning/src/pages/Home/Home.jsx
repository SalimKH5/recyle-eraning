import React, { useState } from 'react'
import "./Home.css"

import Bottle from "../Image/bottle-transparrent.png"
import BBLue from "../Image/Blue bouchon.png"
import BWhite from "../Image/White bouchon.png"
import BOrange from "../Image/Orange bouchon.png"
import Bottles from "../Image/assets.euromoneydigital.jpeg"
import Signin from '../../components/Signin/Signin'
import Recycle from "../Image/image-recycle2.jpg"
import Money from "../Image/shutterstock_1724615215-1.jpg"
function Home({setShowSign,showSign}) {



  const handleClick=()=>{
    setShowSign(true);
  }

  return (
    <div className="home-wrapper">
       
            <div className="banner-container">
                <img src={Bottle} alt="Bottle" id="bottle"/>
                <div className="titles">
                    <h1>BOTTLE MONEY</h1>
                    <h2>Recycle your plastic into your pocket</h2>
                </div>
            
            </div>
            <div className="catch-phrase">
            <p>Why throw when you can make money with your own plastic garbage ?</p> 

            <p>Our goal is to make you rich and the world a cleanest place.</p>

             <p> Join us and be one of a hero that the planet needs.</p>

               Don’t waste time and start now !
            </div>
            <button className="btn-donate" onClick={handleClick}>Throw my plastic</button>
            <img src={BBLue} alt="BBLue" id="BBLue" />
            <img src={BWhite} alt="BWhite" id="BWhite" />
            <img src={BOrange} alt="BOrange" id="BOrange" />
            <div className="green-content2"></div>

            <div className="about-us">
                <div className="about-content">
                    <p>Every year, about 8 million tons of plastic waste escapes into the oceans from coastal nations. That's the equivalent of setting 
                      five garbage bags full of trash on every foot of coastline around the world.</p>
                    <img src={Bottles} alt="Bottles" />
                </div>
                <div className="about-content">
                <img src={Recycle} alt="Recycle" />
                    <p>When you recycle, you're extending the life of something that took energy 
                      and resources to create. It's like a little act of kindness.</p>
                </div>
                <div className="about-content">
                    <p>Individuals, schools, non-profits, workplaces, and communities 
                      can collect plastic bags and wrap for recycling or promote local recycling programs. 
                      One way to incentivize this is by offering monetary rewards for collected plastics</p>
                    <img src={Money} alt="Money" />
                </div>
            </div>

            {showSign && <Signin setShowSign={setShowSign} />}
    </div>
  )
}

export default Home