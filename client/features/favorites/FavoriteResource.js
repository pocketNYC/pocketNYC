import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFavoriteResource,
  selectFavoriteResource,
} from "./favoriteResourceSlice";

const FavoriteResource = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoriteResource);
  console.log("FAVORITES", favorites);
  useEffect(() => {
    dispatch(fetchFavoriteResource());
  }, [dispatch]);

  return (
    <div>
      <h1>My Favorite Resources</h1>
      {/* <ul>
        {favorites?.map((fav) => {
          return <li>{fav.resourceId}</li>;
        })}
      </ul> */}
      {/* <ul>
        {favorites.length
          ? favorites.map((fav) => {
              return <li>{fav.resourceId}</li>;
            })
          : "No favorites to display yet"}
      </ul> */}
    </div>
  );
};

export default FavoriteResource;
