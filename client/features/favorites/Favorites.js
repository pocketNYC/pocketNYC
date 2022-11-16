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

const Favorites = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteResources());
    dispatch(fetchFavoriteEvents());
  }, [dispatch]);
  const favResources = useSelector(selectFavoriteResources);
  const favEvents = useSelector(selectFavoriteEvents);
  const userId = useSelector((state) => state.auth.me.id);

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
        {favEvents.length
          ? favEvents?.map(({ event }) => {
              return (
                <li key={event.id}>
                  <Link to={`/events/${event.id}`}> {event.title}</Link>
                </li>
              );
            })
          : "No favorites to display yet"}
      </ul>
    </div>
  );
};

export default Favorites;
