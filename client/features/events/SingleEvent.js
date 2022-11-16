import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { fetchSingleEvent } from "./eventsSlice";
import { addToFavEvents } from "../favorites/favoriteEventsSlice";

function SingleEvent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  useEffect(() => {
    dispatch(fetchSingleEvent(id));
  }, []);

  const addButton = (id) => {
    dispatch(addToFavEvents(id));
    navigate("/events");
  };

  return (
    <div align="center">
      <img src={image} style={{ width: "800px", height: "500px" }} />
      <h3 className="underline">{title}</h3>
      {isLoggedIn ? (
        <Button onClick={(ev) => addButton(id)}>Add to Favorites</Button>
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
