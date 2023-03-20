import React from 'react'
import Banner from '../../components/Banner/Banner'
import "./Collecteur.css"
import BBLue from "../Image/Blue bouchon.png"
import BWhite from "../Image/White bouchon.png"
import BOrange from "../Image/Orange bouchon.png"

function Collecteur() {
  return (
    <div className='Collecteur-wrapper' >
        <Banner page={4} height="auto"/>
        <img src={BBLue} alt="BBLue" id="BBLue" />
        <img src={BWhite} alt="BWhite" id="BWhite" />
        <img src={BOrange} alt="BOrange" id="BOrange" />
    </div>
  )
}

export default Collecteur