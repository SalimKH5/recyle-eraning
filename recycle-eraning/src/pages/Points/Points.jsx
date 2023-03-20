import React from 'react'
import Banner from '../../components/Banner/Banner'
import "./Points.css"
import Rectangle from "../Image/Rectangle 3.png"
import Offer from '../../components/Offer/Offer'
import Djezzy from "./Djezzy.png"
import Yassir from "./Yassir.png"
function Points() {
  return (
        <div className="Points-wrapper">
            <Banner page={3} height="70vh"/>
            <div className="points-content">
                  <div className="rectangle-wrapper">
                          <div className="rectangle">
                              <img src={Rectangle} alt="Rectangle"  />
                          </div>
                  </div>
                  <div className="conversion-offers">
                    <div className="conversion-wrapper">
                              <Offer back="#FC8800" text="20% off" nameEntr="Yassir" 
                              nbrpoints={6000} ImageOffer={Yassir}/>
                              <Offer back="#FF0000" text="200DA " nameEntr="Djezzy" 
                              nbrpoints={5000} ImageOffer={Djezzy}/>
                              
                              <Offer back="#FC8800" text="20% off" nameEntr="Yassir" 
                              nbrpoints={6000} ImageOffer={Yassir}/>
                              <Offer back="#FF0000" text="200DA " nameEntr="Djezzy" 
                              nbrpoints={5000} ImageOffer={Djezzy}/>
                              
                              <Offer back="#FC8800" text="20% off" nameEntr="Yassir" 
                              nbrpoints={6000} ImageOffer={Yassir}/>
                              <Offer back="#FF0000" text="200DA " nameEntr="Djezzy" 
                              nbrpoints={5000} ImageOffer={Djezzy}/>
                              
                             
                    </div>
                  </div>
                  <div className="footer">
                        Contact us
                  </div>
          </div>
          
        </div>
  )
}

export default Points