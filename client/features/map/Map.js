import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";

const ICON = icon({
  iconUrl: "/geo-fill.svg",
  iconSize: [29, 29],
});

function Map() {
  return (
    <div id="map" className="map, underline">
      <h1 align="center">Map</h1>
      <div className="d-flex justify-content-center">
        <MapContainer
          center={[40.6782, -73.9442]}
          zoom={11}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <div>
            <Marker
              icon={ICON}
              position={[40.70296058477033, -74.01551608783149]}
            >
              <Popup>
                A testing popup. <br /> This is The Battery Park.
              </Popup>
            </Marker>
          </div>
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
