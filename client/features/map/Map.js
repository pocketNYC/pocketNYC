import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { icon } from "leaflet";
import { fetchAllEvents } from "../events/eventsSlice";
import { fetchResources, selectResources } from "../resources/resourcesSlice";
import { useNavigate, useParams } from "react-router-dom";

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

  const filteredResources = resources.filter((resource) => {
    if (resource.latitude !== null && resource.longitude !== null) {
      return resource;
    }
  });

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

  return (
    <div className="container-fluid">
      <div className="card ">
        <div id="map" className="map, underline">
          <h1 align="center">Map</h1>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Map Key
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item">Events</a>
          </li>
          <li>
            <a class="dropdown-item">Resources</a>
          </li>
        </ul>
      </div>
      <br />
          <div className="d-flex justify-content-center">
            <MapContainer center={[40.6782, -73.9442]} zoom={11}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
          dropdown-item.class === "Events" ? (
              {events.map((event) => {
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
          ):(
          {filteredResources.map((resource) => {
            return (
              <Marker
                icon={rescourceIcon}
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
          )
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
