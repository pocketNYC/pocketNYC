import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import { fetchSingleEvent } from "./eventsSlice";
import {
  addToFavEvents,
  selectFavoriteEvents,
} from "../favorites/favoriteEventsSlice";
import { addToCalendar } from "../calendar/calendarSlice";
import { Button } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function SingleEvent() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const { image, title, description, address, start, end, tag, eventLink } =
    useSelector((state) => state.events.event);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const favEvents = useSelector(selectFavoriteEvents);

  useEffect(() => {
    dispatch(fetchSingleEvent(id));
  }, []);

  const addFavButton = (ev, id) => {
    ev.preventDefault();
    dispatch(addToFavEvents(id));
  };

  const addCalButton = (ev, id) => {
    ev.preventDefault();
    dispatch(addToCalendar(id));
  };

  return (
    <div align="center">
      <img src={image} style={{ width: "800px", height: "500px" }} />
      <h3 className="underline">{title}</h3>
      {isLoggedIn ? (
        <>
          <Button
            variant="outlined"
            onClick={(ev) => addFavButton(ev, id)}
            color="error"
            startIcon={<FavoriteBorderOutlinedIcon />}
          >
            Add to Favorites
          </Button>
          &nbsp;
          <Button
            variant="outlined"
            onClick={(ev) => addCalButton(ev, id)}
            color="success"
            startIcon={<CalendarMonthIcon />}
          >
            Add to Calendar
          </Button>
        </>
      ) : null}
      <h4>
        {description}
        <br />
        Address: {address}
        <br />
        {moment(start).format("dddd, MMMM Do YYYY, h:mm a")} -{" "}
        {moment(end).format("dddd, MMMM Do YYYY, h:mm a")}
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
