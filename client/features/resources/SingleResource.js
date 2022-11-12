import React, { useEffect } from "react";
import { fetchResources, selectResources } from "./resourcesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleResource = () => {
  const dispatch = useDispatch();
  const resources = useSelector(selectResources);
  const { category } = useParams();

  useEffect(() => {
    dispatch(fetchResources());
  }, [dispatch, category]);

  return (
    <div>
      <ul>
        {resources
          .filter((resource) => resource.tag.includes(category))
          .map((resource) => {
            return (
              <li key={resource.id}>
                <div>
                  <h3>{resource.name}</h3>
                  <img
                    src={resource.imageUrl}
                    style={{ width: "200px", height: "200px" }}
                  />
                  <p>About: {resource.description}</p>
                  <p>Address: {resource.address}</p>
                  <p>
                    More Info:{" "}
                    <a href={resource.hyperlink}>{resource.hyperlink}</a>
                  </p>
                  <p>Tags: {resource.tag ? resource.tag.join(", ") : null}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SingleResource;
