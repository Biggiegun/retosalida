import React, {useState, useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import '../styles.css'

export const Ubicacion = () => {

    const [location, setLocation] = useState({
        latitude: 0,
        longitude: 0
    })

    useEffect(() => {
       handleUbication()
    }, [])

    const handleUbication = () =>{
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            }
        )
    }

    return (
        <div id="mapContainer">
            <div>
            <h1 id="tituloUbicacion">Accede a tu ubicación!!</h1>
            <div id="mapContainer">
            <MapContainer center={[6.217 , -75.567]} zoom={12} scrollWheelZoom={true}>
                <TileLayer
                     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[location.latitude,location.longitude]}>
                    <Popup>
                        Estás aquí!!
                    </Popup>
                </Marker>
            </MapContainer>
            </div>
            </div>
        </div>
    )
}
