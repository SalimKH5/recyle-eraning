import React from 'react'


import "./Offer.css"
function Offer({ImageOffer,nameEntr,nbrpoints,text,back}) {
  return (
    <div className="offer-wrapper" >
        <p>{nbrpoints} points</p>
        <div className="offer-content" style={{borderColor:back}}>
            <img src={ImageOffer} alt="banner" />
            <p>{text}  {nameEntr}</p>
        </div>
    </div>
  )
}

export default Offer