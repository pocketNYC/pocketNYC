import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import { fetchSingleEvent } from "./eventsSlice";
import { addToFavEvents } from "../favorites/favoriteEventsSlice";
import { Button } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function SingleEvent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { image, title, description, address, start, end, tag, eventLink } =
    useSelector((state) => state.events.event);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  useEffect(() => {
    dispatch(fetchSingleEvent(id));
  }, []);

  const addButton = (ev, id) => {
    ev.preventDefault();
    dispatch(addToFavEvents(id));
    navigate("/events");
  };

  return (
    <div align="center">
      <img src={image} style={{ width: "800px", height: "500px" }} />
      <h3 className="underline">{title}</h3>
      {isLoggedIn ? (
        <Button
          variant="outlined"
          onClick={(ev) => addButton(ev, id)}
          color="error"
          startIcon={<FavoriteBorderOutlinedIcon />}
        >
          Add to Favorites
        </Button>
      ) : null}
      <h4>
        {description}
        <br />
        Address: {address}
        <br />
        {moment(start).format("dddd, MMMM Do YYYY, h:mm a")} - {moment(end).format("dddd, MMMM Do YYYY, h:mm a")}
        <br />
        Tags: {tag?.join(", ")}
        <br />
        <a href={eventLink} target="_blank">
          {eventLink}
        </a>
      </h4>
    </div>
  );
}

export default SingleEvent;
