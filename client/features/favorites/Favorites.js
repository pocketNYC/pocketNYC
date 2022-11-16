import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFavoriteResources,
  selectFavoriteResources,
} from "./favoriteResourcesSlice";
import { Link } from "react-router-dom";
import {
  fetchFavoriteEvents,
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
                </li>
              );
            })
          : "No favorites to display yet"}
      </ul>
      <h1>My Favorite Events</h1>
      <ul>
        <p style={{ textDecorationLine: "underline" }}>Upcoming Events:</p>
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
                  </ul>
                </li>
              );
            })
          : "No favorites to display yet"}
      </ul>
      <ul>
        <p style={{ color: "red", textDecorationLine: "underline" }}>
          Past Events:
        </p>
        {pastEvents.length
          ? pastEvents?.map(({ event }) => {
              return (
                <li key={event.id}>
                  <Link to={`/events/${event.id}`}> {event.title}</Link>
                  <ul>
                    <li>
                      Date: {moment(event.date).format("dddd, MMMM Do, YYYY")}
                    </li>
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
