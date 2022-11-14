import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFavoriteResource,
  selectFavoriteResource,
} from "./favoriteResourceSlice";
import { Link } from "react-router-dom";
import { fetchFavoriteEvent, selectFavoriteEvent } from "./favoriteEventSlice";

const FavoriteResource = () => {
  const dispatch = useDispatch();
  useEffect(() => {
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
                  {event.title}
                  {/* add link once single event page is set up*/}
                </li>
              );
            })
          : "No favorites to display yet"}
      </ul>
    </div>
  );
};

export default FavoriteResource;
