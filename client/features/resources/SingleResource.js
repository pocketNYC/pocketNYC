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

  const modifyCasing = name
    ?.split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1).toLowerCase();
    })
    .join(" ");

  useEffect(() => {
    dispatch(fetchSingleResource(id));
  }, [dispatch]);

  return (
    <div>
      <h1>{modifyCasing}</h1>
      <img src={imageUrl} />
      <p>About: {description}</p>
      <p>Address: {address}</p>
      <p>
        More Info: <a href={hyperlink}>{hyperlink}</a>
      </p>
      <p>Tags: {tag ? tag.join(", ") : null}</p>
    </div>
  );
};

export default SingleResource;
