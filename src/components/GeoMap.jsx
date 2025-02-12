import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import iconlocation from "../assets/icon-location.svg";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
const customIcon = L.icon({
  iconUrl: iconlocation,
  iconSize: [30, 35], 
  iconAnchor: [12, 41], 
  popupAnchor: [1, -34], 
  shadowSize: [41, 41], 
  shadowAnchor: [12, 41], 
});
function GeoMap(props) {
  const loc = props.info != null ? props.info.loc.split(",").map(Number) : [0, 0];

  function ChangeView({ center }) {
    const map = useMap();
    useEffect(() => {
      map.setView(center);
    }, [center, map]);
    return null;
  }

  return (
    <MapContainer center={loc} zoom={8} scrollWheelZoom={false}>
      {props.info && <ChangeView center={loc} />}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {props.info && <Marker position={loc} icon={customIcon}></Marker>}
    </MapContainer>
  );
}

export default GeoMap;
