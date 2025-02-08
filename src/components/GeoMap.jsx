import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import iconlocation from "../assets/icon-location.svg";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
const customIcon = L.icon({
  iconUrl: iconlocation, // Replace with the path to your custom icon
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
  shadowSize: [41, 41], // Optional: size of the shadow
  shadowAnchor: [12, 41], // Optional: point of the shadow which will correspond to marker's location
});
function GeoMap(props) {
  const loc = props.info.loc.split(",").map(Number);

  function ChangeView({ center }) {
    const map = useMap();
    useEffect(() => {
      map.setView(center);
    }, [center, map]);
    return null;
  }

  return (
    <MapContainer center={loc} zoom={8} scrollWheelZoom={false}>
      <ChangeView center={loc} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={loc} icon={customIcon}></Marker>
    </MapContainer>
  );
}

export default GeoMap;
