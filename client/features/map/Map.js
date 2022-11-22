// import React from "react";
// import "leaflet/dist/leaflet.css";
// import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
// import { icon } from "leaflet";

// const ICON = icon({
//   iconUrl: "/geo-fill.svg",
//   iconSize: [29, 29],
// });

// function Map() {
//   return (
//     <div id="map" className="map, underline">
//       <h1 align="center">Map</h1>
//       <div className="d-flex justify-content-center">
//         <MapContainer
//           center={[40.6782, -73.9442]}
//           zoom={11}
//           scrollWheelZoom={true}
//         >
//           <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           <div>
//             <Marker
//               icon={ICON}
//               position={[40.70296058477033, -74.01551608783149]}
//             >
//               <Popup>
//                 A testing popup. <br /> This is The Battery Park.
//               </Popup>
//             </Marker>
//           </div>
//         </MapContainer>
//       </div>
//     </div>
//   );
// }

// export default Map;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { icon } from "leaflet";
import { fetchAllEvents } from "../events/eventsSlice";
import { useNavigate } from "react-router-dom";

const ICON = icon({
  iconUrl: "/geo-fill.svg",
  iconSize: [29, 29],
});

const Map = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const events = useSelector((state) => state.events.events);

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  const navigateToEvent = (ev, id) => {
    ev.preventDefault();
    navigate(`/events/${id}`);
  };

  console.log(fetchAllEvents, "our events!!!");

  // const currentUser = useAuth();

  // const userLocation = [currentUser.lat, currentUser.lng];
  return (
    <div id="map" className="map, underline">
      <h1 align="center">Map</h1>
      <MapContainer center={[40.6782, -73.9442]} zoom={11}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {events.map((event) => {
          return (
            <Marker
              icon={ICON}
              key={event.id}
              position={[event.latitude, event.longitude]}
            >
              <Popup>onClick={(ev) => navigateToEvent(ev, id)}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
