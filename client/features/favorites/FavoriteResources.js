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
    <div>
      {favResourcesLoading ? (
        <LoadingScreen />
      ) : (
        <div className="table-responsive">
          {favResources.length ? (
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              {favResources?.map(({ resource }) => {
                return (
                  <tbody key={resource.id}>
                    <tr>
                      <td>
                        <Link to={`/resources/${resource.id}`}>
                          {resource.name}
                        </Link>
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
              })}
            </table>
          ) : (
            <small>No favorites to display</small>
          )}
        </div>
      )}
    </div>
  );
};

export default FavoriteResources;
