import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { fetchAllEvents } from "./eventsSlice";
import { me } from "../auth/authSlice";
import { addToFavEvents } from "../favorites/favoriteEventsSlice";
import { addToCalendar } from "../calendar/calendarSlice";
import { useNavigate } from "react-router-dom";
import { Button, Tooltip } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function Events() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const events = useSelector((state) => state.events.events);

  useEffect(() => {
    dispatch(fetchAllEvents());
    dispatch(me());
  }, []);

  const sortedApprovedEvents = [...events]
    .sort((a, b) => {
      return new Date(a.start) - new Date(b.start);
    })
    .filter((event) => {
      if (event.status === "approved") {
        return event;
      }
    })
    .filter((a) => new Date(a.start) - new Date() > 0);

  const addButton = (ev, id) => {
    ev.preventDefault();
    dispatch(addToFavEvents(id));
  };

  const addCalButton = (ev, id) => {
    ev.preventDefault();
    dispatch(addToCalendar(id));
  };

  return (
    <div align="center">
      <h1 className="underline">List of Events</h1>

      {sortedApprovedEvents?.map(({ id, image, title, start, end }) => (
        <div key={id}>
          <img
            src={image}
            style={{ width: "800px", height: "500px", cursor: "pointer" }}
            onClick={() => navigate(`/events/${id}`)}
          />
          <h3 className="underline">{title}</h3>
          {isLoggedIn ? (
            <>
              <Button
                variant="outlined"
                onClick={(ev) => addButton(ev, id)}
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
            {moment(start).format("dddd, MMMM Do YYYY, h:mm a")} -{" "}
            {moment(end).format("dddd, MMMM Do YYYY, h:mm a")}
          </h4>
        </div>
      ))}
      <Tooltip title="Scroll to Top">
        <Button
          className="scroll"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          variant="contained"
          size="small"
          style={{
            position: "fixed",
            borderRadius: "50%",
            padding: "1rem 1rem",
            bottom: "40px",
            right: "40px",
            textAlign: "center",
          }}
        >
          <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
        </Button>
      </Tooltip>
    </div>
  );
}
