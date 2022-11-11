import React, { useEffect } from "react";
import {
  fetchSingleResource,
  selectSingleResource,
} from "./singleResourceSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleResource = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const resource = useSelector(selectSingleResource);
  const { name, description, address, tag, boro, hyperlink, imageUrl } =
    resource;

  useEffect(() => {
    dispatch(fetchSingleResource(id));
  }, [dispatch]);

  return (
    <div>
      <h1>{name}</h1>
      <img src={imageUrl} />
      <p>About: {description}</p>
      <p>Address: {address}</p>
      <p>
        More Info: <a href={hyperlink}>{hyperlink}</a>
      </p>
      <p>Tags: {tag}</p>
    </div>
  );
};

export default SingleResource;
