import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFavoriteResources,
  selectFavoriteResources,
  removeFromFavResources,
} from "./favoriteResourcesSlice";
import { Link } from "react-router-dom";
import {
  fetchFavoriteEvents,
  removeFromFavEvents,
  selectFavoriteEvents,
} from "./favoriteEventsSlice";
import moment from "moment";

const Favorites = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.me.id);
  useEffect(() => {
    dispatch(fetchFavoriteResources());
    dispatch(fetchFavoriteEvents());
  }, [dispatch]);

  const favResources = useSelector(selectFavoriteResources);
  const favEvents = useSelector(selectFavoriteEvents);

  const removeFavEvent = (ev, id) => {
    ev.preventDefault();
    dispatch(removeFromFavEvents(id)).then(() => {
      dispatch(fetchFavoriteEvents());
    });
  };

  const removeFavResource = (ev, id) => {
    ev.preventDefault();
    dispatch(removeFromFavResources(id)).then(() => {
      dispatch(fetchFavoriteResources());
    });
  };

  const futureEvents = [...favEvents]
    .sort((a, b) => {
      return new Date(a.event.date) - new Date(b.event.date);
    })
    .filter((a) => new Date(a.event.date) - new Date() > 0);

  const pastEvents = [...favEvents]
    .sort((a, b) => {
      return new Date(a.event.date) - new Date(b.event.date);
    })
    .filter((a) => new Date(a.event.date) - new Date() < 0);

  return (
    <div>
      <h1>My Favorite Resources</h1>
      <ul>
        {favResources.length
          ? favResources?.map(({ resource }) => {
              return (
                <li key={resource.id}>
                  <Link to={`/users/${userId}/favorites/${resource.id}`}>
                    {resource.name}
                  </Link>
                  <br />
                  <button
                    onClick={(ev) => {
                      removeFavResource(ev, resource.id);
                    }}
                  >
                    Remove from favorites
                  </button>
                </li>
              );
            })
          : "No favorites to display yet"}
      </ul>
      <h1>My Favorite Events</h1>
      <ul>
        <p style={{ textDecorationLine: "underline", fontWeight: "bold" }}>
          Upcoming Events:
        </p>
        {futureEvents.length
          ? futureEvents?.map(({ event }) => {
              return (
                <li key={event.id}>
                  {event.title}
                  <ul>
                    <li>
                      Date: {moment(event.date).format("dddd, MMMM Do, YYYY")}
                    </li>
                    <li>
                      <Link to={`/events/${event.id}`}>More Details</Link>
                    </li>
                    <button
                      onClick={(ev) => {
                        removeFavEvent(ev, event.id);
                      }}
                    >
                      Remove from favorites
                    </button>
                  </ul>
                </li>
              );
            })
          : "No favorites to display yet"}
      </ul>
      <ul>
        <p
          style={{
            color: "red",
            fontWeight: "bold",
            textDecorationLine: "underline",
          }}
        >
          Past Events:
        </p>
        {pastEvents.length
          ? pastEvents?.map(({ event }) => {
              return (
                <li key={event.id}>
                  {event.title}
                  <ul>
                    <li>
                      Date: {moment(event.date).format("dddd, MMMM Do, YYYY")}
                    </li>
                    <li>
                      <Link to={`/events/${event.id}`}>More Details</Link>
                    </li>
                    <button
                      onClick={(ev) => {
                        removeFavEvent(ev, event.id);
                      }}
                    >
                      Remove from favorites
                    </button>
                  </ul>
                </li>
              );
            })
          : "No past favorites to display"}
      </ul>
    </div>
  );
};

export default Favorites;
