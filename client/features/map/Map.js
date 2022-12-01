import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { icon } from "leaflet";
import { fetchAllEvents } from "../events/eventsSlice";
import { fetchResources, selectResources } from "../resources/resourcesSlice";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../loading/LoadingScreen";

const eventIcon = icon({
  iconUrl: "/geo-fill.svg",
  iconSize: [29, 29],
  className: "icon",
});

const Map = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const events = useSelector((state) => state.events.events);
  const resources = useSelector(selectResources);

  const [displayed, setDisplayed] = useState("");
  const filteredResources = resources.filter((resource) => {
    if (resource.latitude !== null && resource.longitude !== null) {
      return resource;
    }
  });
  const loading = useSelector((state) => state.events.loading);

  useEffect(() => {
    dispatch(fetchAllEvents());
    dispatch(fetchResources());
  }, [dispatch]);

  const navigateToEvent = (ev, id) => {
    ev.preventDefault();
    navigate(`/events/${id}`);
  };

  const navigateToResource = (ev, id) => {
    ev.preventDefault();
    navigate(`/resources/${id}`);
  };

  const handleCheck = (ev) => {
    const category = ev.target.text;

    if (category === "Events") {
      setDisplayed("events");
    }
    if (category === "Resources") {
      setDisplayed("resources");
    }
  };

  return (
    <div className="container-fluid">
      {loading && <LoadingScreen />}
      <div className="card ">
        <h1 align="center">PocketNYC Map</h1>
        <h6 className="text-center">Display Events or Resources!</h6>
        <div id="map" className="map">
          <div className="dropdown text-center">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Key
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link
                  className="dropdown-item"
                  onClick={(ev) => handleCheck(ev)}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  onClick={(ev) => handleCheck(ev)}
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <br />
          <div className="d-flex justify-content-center">
            <MapContainer
              style={{ zIndex: 0 }}
              center={[40.6782, -73.9442]}
              zoom={11}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {displayed == "events"
                ? events?.map((event) => {
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
                  })
                : filteredResources?.map((resource) => {
                    return (
                      <Marker
                        icon={eventIcon}
                        key={resource.id}
                        position={[resource.latitude, resource.longitude]}
                      >
                        <Popup onClick={(ev) => navigateToResource(ev, id)}>
                          <Link to={`/resources/${resource.id}`}>
                            {resource.name} <br />
                          </Link>
                          {resource.description}
                        </Popup>
                      </Marker>
                    );
                  })}
            </MapContainer>
          </div>
        </div>
      </div>
      <div className="p-2"></div>
    </div>
  );
};

export default Map;
