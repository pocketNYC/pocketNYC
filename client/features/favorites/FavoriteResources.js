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
  const favResourcesLoading = useSelector(
    (state) => state.favoriteResources.loading
  );

  const removeFavResource = (ev, id) => {
    ev.preventDefault();
    dispatch(removeFromFavResources(id)).then(() => {
      dispatch(fetchFavoriteResources());
    });
  };

  return (
    <div className="container-fluid">
      {favResourcesLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            {favResources.length ? (
              favResources?.map(({ resource }) => {
                return (
                  <tbody key={resource.id}>
                    <tr>
                      <td>
                        <Link to={`/r/${resource.id}`}>{resource.name}</Link>
                      </td>
                      <td>
                        <Tooltip title="Remove from favorites">
                          <IconButton
                            onClick={(ev) => {
                              removeFavResource(ev, resource.id);
                            }}
                          >
                            <DeleteIcon color="error" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  </tbody>
                );
              })
            ) : (
              <tbody>
                <tr>
                  <td>No favorites to display</td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      )}
    </div>
  );
};

export default FavoriteResources;
