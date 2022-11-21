import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import { fetchSingleEvent } from "./eventsSlice";
import {
  addToFavEvents,
  fetchFavoriteEvents,
  removeFromFavEvents,
  selectFavoriteEvents,
} from "../favorites/favoriteEventsSlice";
import {
  addToCalendar,
  fetchCalendarEvents,
  removeFromCalendar,
  selectCalendar,
} from "../calendar/calendarSlice";
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
  const calEvents = useSelector(selectCalendar);

  useEffect(() => {
    dispatch(fetchSingleEvent(id));
  }, []);

  const addToFavsButton = (ev, id) => {
    ev.preventDefault();
    dispatch(addToFavEvents(id)).then(() => {
      dispatch(fetchFavoriteEvents());
    });
  };

  const removeFromFavsButton = (ev, id) => {
    ev.preventDefault();
    dispatch(removeFromFavEvents(id)).then(() => {
      dispatch(fetchFavoriteEvents());
    });
  };

  const addToCalButton = (ev, id) => {
    ev.preventDefault();
    dispatch(addToCalendar(id)).then(() => {
      dispatch(fetchCalendarEvents());
    });
  };

  const removeFromCalButton = (ev, id) => {
    ev.preventDefault();
    dispatch(removeFromCalendar(id)).then(() => {
      dispatch(fetchCalendarEvents());
    });
  };

  const isItOnMyCal = calEvents.filter((ev) => {
    if (ev.eventId == id) {
      return ev;
    }
  });
  const isItInMyFavs = favEvents.filter((ev) => {
    if (ev.eventId == id) {
      return ev;
    }
  });

  return (
    <div className="card text-center">
      <div className="row">
        <div className="col">
          <img src={image} className="card-img-top w-50" alt="image of event" />

          <div className="card-body" style={{ verticalAlign: "middle" }}>
            <h5 className="card-title"> {title}</h5>
            <p className="card-text ">
              {moment(start).format("dddd, MMMM Do YYYY, h:mm a")} -{" "}
              {moment(end).format("dddd, MMMM Do YYYY, h:mm a")}
            </p>
            <p className="card-text">Address: {address}</p>
            <p className="card-text">About: {description}</p>

            <a href={eventLink} target="_blank">
              Click for more details
            </a>

            <p className="card-text">
              <small className="text-muted">Tags: {tag?.join(", ")}</small>
            </p>
            {isLoggedIn ? (
              <>
                {isItInMyFavs.length ? (
                  <Button
                    variant="outlined"
                    onClick={(ev) => removeFromFavsButton(ev, id)}
                    color="error"
                    startIcon={<FavoriteBorderOutlinedIcon />}
                  >
                    Remove from Favorites
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    onClick={(ev) => addToFavsButton(ev, id)}
                    color="error"
                    startIcon={<FavoriteBorderOutlinedIcon />}
                  >
                    Add to Favorites
                  </Button>
                )}
                &nbsp;
                {isItOnMyCal.length ? (
                  <Button
                    variant="outlined"
                    onClick={(ev) => removeFromCalButton(ev, id)}
                    color="success"
                    startIcon={<CalendarMonthIcon />}
                  >
                    Remove from Calendar
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    onClick={(ev) => addToCalButton(ev, id)}
                    color="success"
                    startIcon={<CalendarMonthIcon />}
                  >
                    Add to Calendar
                  </Button>
                )}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleEvent;
