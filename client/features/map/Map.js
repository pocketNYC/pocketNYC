import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { icon } from "leaflet";
import { fetchAllEvents } from "../events/eventsSlice";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../loading/LoadingScreen";

const ICON = icon({
  iconUrl: "/geo-fill.svg",
  iconSize: [29, 29],
  className: "icon",
});

const Map = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const events = useSelector((state) => state.events.events);
  const loading = useSelector((state) => state.events.loading);

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  const navigateToEvent = (ev, id) => {
    ev.preventDefault();
    navigate(`/events/${id}`);
  };

  return (
    <div className="container-fluid">
      {loading && <LoadingScreen />}
      <div className="card ">
        <h1 align="center" style={{ fontSize: "50px" }}>
          PocketNYC Map
        </h1>
        <div id="map" className="map, underline">
          <div className="d-flex justify-content-center">
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
                    <Popup onClick={(ev) => navigateToEvent(ev, id)}>
                      <Link to={`/events/${event.id}`}>
                        {event.title} <br />
                      </Link>
                      {event.description}
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          </div>
        </div>
      </div>
      <div className="p-7"></div>
    </div>
  );
};

export default Map;
