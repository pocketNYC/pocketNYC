import React, { useEffect } from "react";
import { fetchResources, selectResources } from "./resourcesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToFavResource } from "../favorites/favoriteResourceSlice";
import { Link } from "react-router-dom";

const ResourceCategory = () => {
  const dispatch = useDispatch();
  const resources = useSelector(selectResources);
  const { category } = useParams();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  useEffect(() => {
    dispatch(fetchResources());
  }, [dispatch]);

  const addButton = (ev, id) => {
    dispatch(addToFavResource(id));
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
                      <button onClick={(ev) => addButton(ev, id)}>
                        Add to Favorites
                      </button>
                    ) : null}
                    <p>About: {description}</p>
                    <p>Address: {address}</p>
                    <p>
                      More Info: <a href={hyperlink}>{hyperlink}</a>
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
