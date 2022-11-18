import React, { useEffect, useState } from "react";
import { fetchResources, selectResources } from "./resourcesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import {
  addToFavResources,
  fetchFavoriteResources,
} from "../favorites/favoriteResourcesSlice";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const ResourceCategory = () => {
  const dispatch = useDispatch();
  const resources = useSelector(selectResources);
  const { category } = useParams();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  useEffect(() => {
    dispatch(fetchResources());
  }, [dispatch]);

  const addButton = (ev, id) => {
    dispatch(addToFavResources(id));
  };

  return (
    <div>
      <ul>
        {resources
          .filter((resource) => resource.tag.includes(category))
          .map(
            ({ id, name, imageUrl, description, address, hyperlink, tag }) => {
              return (
                <li key={id}>
                  <div>
                    <img
                      src={imageUrl}
                      style={{ width: "700px", height: "500px" }}
                    />
                    <h3>
                      {name} &nbsp;
                      {isLoggedIn ? (
                        <Button
                          variant="outlined"
                          onClick={(ev) => addButton(ev, id)}
                          color="error"
                          startIcon={<FavoriteBorderOutlinedIcon />}
                        >
                          Add to Favorites
                        </Button>
                      ) : null}
                    </h3>
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
                </li>
              );
            }
          )}
      </ul>
    </div>
  );
};

export default ResourceCategory;
