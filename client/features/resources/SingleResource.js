import React, { useEffect } from "react";
import { fetchResources, selectResources } from "./resourcesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToFavorites } from "../favorites/favoriteResourceSlice";

const SingleResource = () => {
  const dispatch = useDispatch();
  const resources = useSelector(selectResources);
  const { category } = useParams();

  useEffect(() => {
    dispatch(fetchResources());
  }, [dispatch]);

  const addButton = (ev, id) => {
    console.log("clicked", id);
    dispatch(addToFavorites(id));
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
                    <p>About: {description}</p>
                    <p>Address: {address}</p>
                    <p>
                      More Info: <a href={hyperlink}>{hyperlink}</a>
                    </p>
                    <p>Tags: {tag ? tag.join(", ") : null}</p>
                    <button onClick={(ev) => addButton(ev, id)}>
                      Add to Favorites
                    </button>
                  </div>
                </li>
              );
            }
          )}
      </ul>
    </div>
  );
};

export default SingleResource;
