import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleEvent } from "./eventsSlice";
import { addToFavEvent } from "../favorites/favoriteEventSlice";

function SingleEvent() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { image, title, description, address, date, time, tag, eventLink } =
    useSelector((state) => state.events.event);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  useEffect(() => {
    dispatch(fetchSingleEvent(id));
  }, []);

  const addButton = (ev, id) => {
    dispatch(addToFavEvent(id));
  };

  return (
    <div align="center">
      <img src={image} style={{ width: "800px", height: "500px" }} />
      <h3 className="underline">{title}</h3>
      {isLoggedIn ? (
        <button onClick={(ev) => addButton(ev, id)}>Add to Favorites</button>
      ) : null}
      <h4>
        {description}
        <br />
        Address: {address}
        <br />
        Date: {date}
        <br />
        Time: {time}
        <br />
        Tag: {tag}
        <br />
        <a href={eventLink}>{eventLink}</a>
      </h4>
    </div>
  );
}

export default SingleEvent;
