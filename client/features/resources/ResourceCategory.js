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
import LoadingScreen from "../loading/LoadingScreen";

const ResourceCategory = () => {
  const dispatch = useDispatch();
  const resources = useSelector(selectResources);
  const { category } = useParams();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const loading = useSelector((state) => state.resources.loading);

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
    <div> {loading ? (<LoadingScreen />): (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-2 p-4 g-4">
        {resources
          .filter((resource) => resource.tag.includes(category))
          .map(
            ({ id, name, imageUrl, description, address, hyperlink, tag }) => {
              return (
                <div key={id}>
                  <div className="card text-center h-100" key={id}>
                    <img
                      className="card-img-top fluid"
                      src={imageUrl}
                      alt={`Clip art for the ${name} resource`}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{name}</h5>
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
                      <p className="card-text">About: {description}</p>
                      <p className="card-text">Address: {address}</p>
                      <a className="card-link" href={hyperlink} target="_blank">
                        Visit site for more details
                      </a>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">
                        Tags: {tag?.join(", ")}
                      </small>
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
    </div>)}
    </div>
  );
};

export default ResourceCategory;
