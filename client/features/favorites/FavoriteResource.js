import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFavoriteResource,
  selectFavoriteResource,
} from "./favoriteResourceSlice";
import { Link } from "react-router-dom";

const FavoriteResource = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteResource());
  }, [dispatch]);
  const favorites = useSelector(selectFavoriteResource);

  console.log("FAVORITES", favorites);

  return (
    <div>
      <h1>My Favorite Resources</h1>
      <ul>
        {favorites
          ? favorites?.map(({ resource }) => {
              return (
                <li key={resource.id}>
                  <Link to={`/resources/${resource.id}`}>{resource.name} </Link>
                </li>
              );
            })
          : "No favorites to display yet"}
      </ul>
    </div>
  );
};

export default FavoriteResource;
