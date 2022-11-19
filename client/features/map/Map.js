import React from "react";
import "leaflet/dist/leaflet.css";
import PushPinRoundedIcon from "@mui/icons-material/PushPinRounded";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const Map = () => {
  return (
    <div id="map" className="map, underline, center">
      <h1 align="center">Map</h1>
      <MapContainer
        center={[40.6782, -73.9442]}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <div>
          <Marker position={[40.574879, -73.982872]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </div>
      </MapContainer>
      <PushPinRoundedIcon />
    </div>
  );
};

export default Map;
