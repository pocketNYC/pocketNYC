import React, { useEffect, useState } from "react";
import { fetchResources, selectResources } from "./resourcesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Tooltip } from "@mui/material";
import {
  addToFavResources,
  fetchFavoriteResources,
} from "../favorites/favoriteResourcesSlice";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

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
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-md-2 g-4">
        {resources
          .filter((resource) => resource.tag.includes(category))
          .map(
            ({ id, name, imageUrl, description, address, hyperlink, tag }) => {
              return (
                <div>
                  <div class="card text-center h-100" key={id}>
                    <img class="card-img-top-fluid" src={imageUrl} />
                    <div class="card-body">
                      <h5 class="card-title">{name}</h5>
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
                      <p class="card-text">About: {description}</p>
                      <p class="card-text">Address: {address}</p>
                      <a class="card-link" href={hyperlink} target="_blank">
                        Click for more details
                      </a>
                    </div>
                    <div class="card-footer">
                      <small class="text-muted">Tags: {tag?.join(", ")}</small>
                    </div>
                  </div>
                </div>
              );
            }
          )}
      </div>
      <Tooltip title="Scroll to Top">
        <Button
          className="scroll"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          variant="contained"
          size="small"
          style={{
            position: "fixed",
            borderRadius: "50%",
            padding: "1rem 1rem",
            bottom: "40px",
            right: "40px",
            textAlign: "center",
          }}
        >
          <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
        </Button>
      </Tooltip>
    </div>
  );
};

export default ResourceCategory;
