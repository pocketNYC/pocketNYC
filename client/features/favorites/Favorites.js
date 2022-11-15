import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFavoriteResource,
  selectFavoriteResource,
} from "./favoriteResourceSlice";
import { Link } from "react-router-dom";
import { fetchFavoriteEvent, selectFavoriteEvent } from "./favoriteEventSlice";

const Favorites = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // o: shouldn't these be plural?
    dispatch(fetchFavoriteResource());
    dispatch(fetchFavoriteEvent());
  }, [dispatch]);
  const favResources = useSelector(selectFavoriteResource);
  const favEvents = useSelector(selectFavoriteEvent);
  const userId = useSelector((state) => state.auth.me.id);

  return (
    <div>
      <h1>My Favorite Resources</h1>
      <ul>
        {/* o: is there an instance where favResources does not have a length? */}
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
        {/* o: is there an instance where favResources does not have a length? */}
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
