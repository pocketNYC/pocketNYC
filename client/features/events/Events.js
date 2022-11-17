import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { fetchAllEvents } from "./eventsSlice";
import { me } from "../auth/authSlice";
import { addToFavEvents } from "../favorites/favoriteEventsSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

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
      return new Date(a.date) - new Date(b.date);
    })
    .filter((event) => {
      if (event.status === "approved") {
        return event;
      }
    })
    .filter((a) => new Date(a.date) - new Date() > 0);

  const addButton = (ev, id) => {
    ev.preventDefault();
    dispatch(addToFavEvents(id));
  };

  return (
    <div align="center">
      <h1 className="underline">List of Events</h1>

      {sortedApprovedEvents?.map(({ id, image, title, date }) => (
        <div key={id}>
          <img
            src={image}
            style={{ width: "800px", height: "500px", cursor: "pointer" }}
            onClick={() => navigate(`/events/${id}`)}
          />
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
          <h4>Date: {moment(date).format("dddd, MMMM Do, YYYY")}</h4>
        </div>
      ))}
    </div>
  );
}
