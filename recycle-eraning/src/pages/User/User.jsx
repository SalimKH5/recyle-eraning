import React from 'react'

import Bottle from "../Image/bottle-transparrent.png"
import BBLue from "../Image/Blue bouchon.png"
import BWhite from "../Image/White bouchon.png"
import BOrange from "../Image/Orange bouchon.png"
import Bottles from "../Image/assets.euromoneydigital.jpeg"
import Signin from '../../components/Signin/Signin'
import Recycle from "../Image/image-recycle2.jpg"
import Money from "../Image/shutterstock_1724615215-1.jpg"

import "./User.css"
function User() {
  return (
    <div className="User-wrapper">
            <div className="banner-container">
                <img src={Bottle} alt="Bottle" id="bottle"/>
                <div className="titles">
                    <h1>BOTTLE MONEY</h1>
                    <h2>Recycle your plastic into your pocket</h2>
                </div>
            </div>
            <div className="MyPoints-wrapper">
                    <div className="MyPoints-content">
                        <h3>Hey Jon doe You current points are 124</h3>
                    </div>
            </div>
            <img src={BBLue} alt="BBLue" id="BBLue" />
            <img src={BWhite} alt="BWhite" id="BWhite" />
            <img src={BOrange} alt="BOrange" id="BOrange" />
    </div>
  )
}

export default User