import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import { fetchSingleEvent } from "./eventsSlice";
import {
  addToFavEvents,
  removeFromFavEvents,
  selectFavoriteEvents,
  fetchFavoriteEvents,
} from "../favorites/favoriteEventsSlice";
import { addToCalendar } from "../calendar/calendarSlice";
import { Button } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function SingleEvent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { image, title, description, address, date, time, tag, eventLink } =
    useSelector((state) => state.events.event);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const favEvents = useSelector(selectFavoriteEvents);
  console.log("favs", favEvents);
  const [disabled, setDisabled] = useState(false);
  const [calDisabled, setCalDisabled] = useState(false);

  useEffect(() => {
    dispatch(fetchSingleEvent(id));
    // dispatch(fetchFavoriteEvents());
  }, []);

  const addFavButton = (ev, id) => {
    ev.preventDefault();
    dispatch(addToFavEvents(id));
    setDisabled(true);
    // navigate("/events");
  };

  // const removeFavButton = (ev, id) => {
  //   ev.preventDefault();
  //   dispatch(removeFromFavEvents(id)).then(() => {
  //     dispatch(fetchFavoriteEvents());
  //   });
  // };

  const addCalButton = (ev, id) => {
    ev.preventDefault();
    setCalDisabled(true);
    dispatch(addToCalendar(id));
  };

  return (
    <div align="center">
      <img src={image} style={{ width: "800px", height: "500px" }} />
      <h3 className="underline">{title}</h3>
      {isLoggedIn ? (
        <>
          {/* {favEvents.map((ev) => {
            ev.eventId == id;
          }) ? ( */}
          {/* {favEvents.map((ev) => {
            if (ev.eventId === id) {
              console.log(id);
              return true;
            }
            return false;
          }) ? (
            <Button
              variant="outlined"
              onClick={(ev) => removeFavButton(ev, id)}
              color="error"
              startIcon={<FavoriteBorderOutlinedIcon />}
            >
              Remove from Favorites
            </Button>
          ) : ( */}
          <Button
            variant="outlined"
            disabled={disabled}
            onClick={(ev) => addFavButton(ev, id)}
            color="error"
            startIcon={<FavoriteBorderOutlinedIcon />}
          >
            Add to Favorites
          </Button>
          {/* )}  */}
          &nbsp;
          <Button
            variant="outlined"
            disabled={calDisabled}
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
        Date: {moment(date).format("dddd, MMMM Do, YYYY")}
        <br />
        Time: {moment(time, "hhmm").format("h:mm a")}
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
