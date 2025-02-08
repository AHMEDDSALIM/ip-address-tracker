import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

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
      <Marker position={loc}></Marker>
    </MapContainer>
  );
}

export default GeoMap;
