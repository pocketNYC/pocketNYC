import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { fetchSingleEvent } from "./eventsSlice";
import { addToFavEvent } from "../favorites/favoriteEventSlice";

function SingleEvent() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { image, title, description, address, date, time, tag, eventLink } =
    useSelector((state) => state.events.event);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const newDate = new Date(date);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  console.log(tag);
  useEffect(() => {
    dispatch(fetchSingleEvent(id));
  }, []);

  const addButton = (id) => {
    dispatch(addToFavEvent(id));
  };

  return (
    <div align="center">
      <img src={image} style={{ width: "800px", height: "500px" }} />
      <h3 className="underline">{title}</h3>
      {isLoggedIn ? (
        <Button onClick={(ev) => addButton(ev, id)}>Add to Favorites</Button>
      ) : null}
      <h4>
        {description}
        <br />
        Address: {address}
        <br />
        Date: {newDate?.toLocaleDateString("en-US", options)}
        <br />
        Time: {time}
        <br />
        Tags: {tag?.join(", ")}
        <br />
        <a href={eventLink}>{eventLink}</a>
      </h4>
    </div>
  );
}

export default SingleEvent;
