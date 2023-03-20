import React from 'react'
import "./Donnate.css"
import Bottle from "../Image/bottle-transparrent.png"
import BBLue from "../Image/Blue bouchon.png"
import BWhite from "../Image/White bouchon.png"
import BOrange from "../Image/Orange bouchon.png"
import Banner from '../../components/Banner/Banner'
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';
import Rectangle from "../Image/Rectangle 3.png"
function Donnate() {
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBTZJa7wYu68UBeejY8fpLV_4patTTtQWU"
  })



  const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const center = {
    lat:  	36.7323767592,
    lng: 3.18367086473
  };

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  return (
    <div className="Donnate-wrapper">
          <Banner page={2}/>
        <div className="maps-wrapper">
            <div className="maps-content">
            {isLoaded?(<GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    onLoad={onLoad}
                    onUnmount={onUnmount}             
                  >
                    <Marker position={{ lat:36.7323767592,lng: 3.18367086473}} title="Collecteur"/>
                    <Marker position={{ lat:36.7323767592,lng: 3.18467086473}} title="Collecteur"/>
             </GoogleMap>
            ):
            <></>
            }
          </div>
          
        </div>
        <div className="rectangle-wrapper">
                    <div className="rectangle">
                        <img src={Rectangle} alt="Rectangle"  />
                    </div>
        </div>
        <div className="notify-for-collecteur">
              <h2>Flemme de bouger</h2>
              <button>Notify nearby collectors</button>
              <p>Your location and number will be shared to collectors</p>
           </div>   
    </div>
  )
}

export default Donnate