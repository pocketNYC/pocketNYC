import React, { useEffect } from "react";
import {
  fetchSingleResource,
  selectSingleResource,
} from "./singleResourceSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import {
  addToFavResources,
  removeFromFavResources,
  fetchFavoriteResources,
  selectFavoriteResources,
} from "../favorites/favoriteResourcesSlice";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const SingleResource = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const favResources = useSelector(selectFavoriteResources);
  const { name, description, address, tag, hyperlink, imageUrl } =
    useSelector(selectSingleResource);

  useEffect(() => {
    dispatch(fetchSingleResource(id));
    dispatch(fetchFavoriteResources());
  }, [dispatch]);

  const addToFavoritesButton = (ev, id) => {
    ev.preventDefault();
    dispatch(addToFavResources(id)).then(() => {
      dispatch(fetchFavoriteResources());
    });
  };

  const removeFromFavoritesButton = (ev, id) => {
    ev.preventDefault();
    dispatch(removeFromFavResources(id)).then(() => {
      dispatch(fetchFavoriteResources());
    });
  };

  const isItInMyFavs = favResources.filter((resource) => {
    if (resource.resourceId == id) {
      return resource;
    }
  });

  return (
    <div className="container-fluid p-4">
      <div className="card border-light text-center d-flex align-items-center h-50 ">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={imageUrl}
              className="img-fluid rounded-start h-100"
              alt={`image of ${name}`}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body" style={{ verticalAlign: "middle" }}>
              <h5 className="card-title"> {name}</h5>

              <p className="card-text">Address: {address}</p>
              <p className="card-text">About: {description}</p>

              <a href={hyperlink} target="_blank">
                Click for more details
              </a>

              <p className="card-text">
                <small className="text-muted">Tags: {tag?.join(", ")}</small>
              </p>

              {isLoggedIn ? (
                <>
                  {isItInMyFavs.length ? (
                    <Button
                      variant="outlined"
                      onClick={(ev) => removeFromFavoritesButton(ev, id)}
                      color="error"
                      startIcon={<FavoriteBorderOutlinedIcon />}
                    >
                      Remove from Favorites
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      onClick={(ev) => addToFavoritesButton(ev, id)}
                      color="success"
                      startIcon={<FavoriteBorderOutlinedIcon />}
                    >
                      Add to Favorites
                    </Button>
                  )}
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleResource;
