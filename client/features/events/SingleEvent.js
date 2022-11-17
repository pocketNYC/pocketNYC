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
  const { image, title, description, address, date, time, tag, eventLink } =
    useSelector((state) => state.events.event);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

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
        Date: {moment(date).format("dddd, MMMM Do, YYYY")}
        <br />
        Time: {moment(time, "hhmm").format("h:mm a")}
        <br />
        Tags: {tag?.join(", ")}
        <br />
        <a href={eventLink}>{eventLink}</a>
      </h4>
    </div>
  );
}

export default SingleEvent;
