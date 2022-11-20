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
    <div class="card text-center">
      <div class="row">
        <div class="col">
          <img src={image} class="card-img-top w-50" alt="image of event" />

          <div class="card-body" style={{ verticalAlign: "middle" }}>
            <h5 class="card-title"> {title}</h5>
            <p class="card-text ">
              {moment(start).format("dddd, MMMM Do YYYY, h:mm a")} -{" "}
              {moment(end).format("dddd, MMMM Do YYYY, h:mm a")}
            </p>
            <p class="card-text">Address: {address}</p>
            <p class="card-text">About: {description}</p>

            <a href={eventLink} target="_blank">
              Click for more details
            </a>

            <p class="card-text">
              <small class="text-muted">Tags: {tag?.join(", ")}</small>
            </p>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleEvent;
