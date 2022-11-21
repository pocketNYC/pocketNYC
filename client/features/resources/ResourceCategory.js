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

  const addToFavoritesButton = (ev, id) => {
    ev.preventDefault();
    dispatch(addToFavResources(id)).then(() => {
      dispatch(fetchFavoriteResources());
    });
  };

  return (
    <div>
      {resources
        .filter(
          (resource) => resource.tag
          .includes(category)
        )
        .map(({ id, name, imageUrl, description, address, hyperlink, tag }) => {
          return (
            <div key={id} style={{ padding: "10px" }}>
              <img src={imageUrl} style={{ width: "700px", height: "500px" }} />
              <h3>
                {name} &nbsp;
                {isLoggedIn ? (
                  <Button
                    variant="outlined"
                    onClick={(ev) => addToFavoritesButton(ev, id)}
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
          );
        })}
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
