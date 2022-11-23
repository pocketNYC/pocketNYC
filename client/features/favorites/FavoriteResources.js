import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFavoriteResources,
  selectFavoriteResources,
  removeFromFavResources,
} from "./favoriteResourcesSlice";
import { Link } from "react-router-dom";
import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import LoadingScreen from "../loading/LoadingScreen";

const FavoriteResources = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteResources());
  }, [dispatch]);

  const favResources = useSelector(selectFavoriteResources);
  const favResoucesLoading = useSelector(
    (state) => state.favoriteResources.loading
  );

  const removeFavResource = (ev, id) => {
    ev.preventDefault();
    dispatch(removeFromFavResources(id)).then(() => {
      dispatch(fetchFavoriteResources());
    });
  };

  return (
    <div>
      {favResoucesLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <ul>
            {favResources.length
              ? favResources?.map(({ resource }) => {
                  return (
                    <li key={resource.id}>
                      <Link to={`/r/${resource.id}`}>{resource.name}</Link>
                      &nbsp;
                      <Tooltip title="Remove from favorites">
                        <IconButton
                          onClick={(ev) => {
                            removeFavResource(ev, resource.id);
                          }}
                        >
                          <DeleteIcon color="error" />
                        </IconButton>
                      </Tooltip>
                    </li>
                  );
                })
              : "No favorites to display yet"}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FavoriteResources;
