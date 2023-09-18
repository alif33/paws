"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

const Map = ({ width, height }) => {
  return (
    <MapContainer className="rounded-lg" style={{ width, height }} center={[51.505, -0.09]} zoom={9}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default Map;
