import React, { useEffect, useState } from "react";
import { fetchResources, selectResources } from "./resourcesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { Button } from "react-bootstrap";
import { Button } from "@mui/material";
import {
  addToFavResources,
  fetchFavoriteResources,
} from "../favorites/favoriteResourcesSlice";
import { IconButton } from "@mui/material";
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
                    <h3>{name}</h3>
                    <img
                      src={imageUrl}
                      style={{ width: "600px", height: "300px" }}
                    />
                    <br />
                    {isLoggedIn ? (
                      <>
                        <Button
                          variant="outlined"
                          onClick={(ev) => addButton(ev, id)}
                          color="error"
                          startIcon={<FavoriteBorderOutlinedIcon />}
                        >
                          Add to Favorites
                        </Button>

                        <IconButton
                          onClick={(ev) => addButton(ev, id)}
                          color="error"
                        >
                          <FavoriteBorderOutlinedIcon />
                        </IconButton>
                      </>
                    ) : null}
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
