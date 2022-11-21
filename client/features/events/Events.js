import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { fetchAllEvents } from "./eventsSlice";
import { me } from "../auth/authSlice";
import { addToFavEvents } from "../favorites/favoriteEventsSlice";
import { addToCalendar } from "../calendar/calendarSlice";
import { useNavigate } from "react-router-dom";
import { Button, Tooltip } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Paper from "@mui/material/Paper";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import IconButton from "@mui/material/IconButton";

import FavoriteIcon from "@mui/icons-material/Favorite";

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

  // const addButton = (ev, id) => {
  //   ev.preventDefault();
  //   dispatch(addToFavEvents(id));
  // };

  // const addCalButton = (ev, id) => {
  //   ev.preventDefault();
  //   dispatch(addToCalendar(id));
  // };

  return (
    <div className="container-fluid">
      <h1 class="fw-light text-center text-lg-center"> All Events </h1>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        {sortedApprovedEvents?.map(({ id, image, title, start, tag }) => (
          <div>
            <div
              className="card text-center"
              // style={{ padding: "5px", margin: "5px" }}
              key={id}
            >
              <img
                className="card-img-top "
                src={image}
                alt="images of events"
                onClick={() => navigate(`/events/${id}`)}
                s
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {moment(start).format("dddd, MMMM Do, YYYY")}
                </h6>
                <small className="card-subtitle mb-2 text-muted">
                  Tags: {tag.join(", ")}
                </small>

                {isLoggedIn ? (
                  <div>
                    <Tooltip title="Add to Favorites">
                      <IconButton
                        onClick={(ev) => addFavButton(ev, id)}
                        aria-label="add to favorites"
                      >
                        <FavoriteIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Add to Calendar">
                      <IconButton
                        aria-label="add to calendar"
                        onClick={(ev) => addCalButton(ev, id)}
                      >
                        <CalendarMonthIcon />
                      </IconButton>
                    </Tooltip>
                    <Button
                      size="small"
                      onClick={() => navigate(`/events/${id}`)}
                    >
                      More Info
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
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
