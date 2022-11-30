import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { icon } from "leaflet";
import { fetchAllEvents } from "../events/eventsSlice";
import { fetchResources, selectResources } from "../resources/resourcesSlice";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Dropdown } from "bootstrap";
import { DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownContext from "react-bootstrap/esm/DropdownContext";

const eventIcon = icon({
  iconUrl: "/geo-fill.svg",
  iconSize: [29, 29],
  className: "icon",
});
const rescourceIcon = icon({
  iconUrl: "/pin-map.svg",
  iconSize: [29, 29],
  className: "icon",
});

const Map = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const events = useSelector((state) => state.events.events);

  const { id } = useParams();
  const resources = useSelector(selectResources);
  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    dispatch(fetchAllEvents());
    dispatch(fetchResources());
  }, [dispatch]);

  const filteredResources = resources.filter((resource) => {
    if (resource.latitude != null && resource.longitude != null) {
      return resource;
    }
  });

  console.log(filteredResources);
  const navigateToEvent = (ev, id) => {
    ev.preventDefault();
    navigate(`/events/${id}`);
  };

  const navigateToResource = (ev, id) => {
    ev.preventDefault();
    navigate(`/resources/${id}`);
  };

  const handleCheck = (ev) => {
    const category = ev.target.value;
    console.log(ev.target.value);

    if (category === "Events") {
      setDisplayed(events);
    }
    if (category === "Resources") {
      setDisplayed(filteredResources);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="card ">
          <div id="map" className="map">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="Events"
                onClick={handleCheck}
              />
              <label class="form-check-label" for="inlineCheckbox1">
                Events
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="Resources"
                onClick={handleCheck}
              />
              <label class="form-check-label" for="inlineCheckbox2">
                Resources
              </label>
            </div>
            <h1 align="center" style={{ fontSize: "50px" }}>
              PocketNYC Map
            </h1>
            <br />{" "}
            <div className="d-flex justify-content-center">
              <MapContainer center={[40.6782, -73.9442]} zoom={11}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {displayed.map((event) => {
                  return (
                    <Marker
                      icon={eventIcon}
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
    </>
  );
};

export default Map;
