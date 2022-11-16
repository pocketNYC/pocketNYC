import React, { useEffect } from "react";
import {
  fetchSingleResource,
  selectSingleResource,
} from "./singleResourceSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleResource = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { name, description, address, tag, hyperlink, imageUrl } =
    useSelector(selectSingleResource);

  useEffect(() => {
    dispatch(fetchSingleResource(id));
  }, [dispatch]);

  return (
    <div>
      <h1>{name}</h1>
      <img src={imageUrl} style={{ height: "200px", width: "300px" }} />
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
