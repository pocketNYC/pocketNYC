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
  const favResources = useSelector(selectFavoriteResources);
  console.log(favResources);
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
    <div>
      <h1>{name}</h1>
      <img src={imageUrl} style={{ height: "200px", width: "300px" }} alt={`image of ${name}`} />
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

      <p>About: {description}</p>
      <p>Address: {address}</p>
      <p>
        More Info:{" "}
        <a href={hyperlink} target="_blank">
          {hyperlink}
        </a>
      </p>
      <p>Tags: {tag ? tag.join(", ") : null}</p>
    </div>
  );
};

export default SingleResource;
