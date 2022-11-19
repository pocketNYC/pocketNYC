import React, { useState } from "react";
import { useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useSelector } from "react-redux";
import {
  selectFavoriteEvents,
  fetchFavoriteEvents,
} from "../favorites/favoriteEventsSlice";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useDispatch } from "react-redux";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

const localizer = momentLocalizer(moment);

const UserCalendar = () => {
  const favEvents = useSelector(selectFavoriteEvents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteEvents());
  }, [dispatch]);

  const favEventsList = favEvents.map((evt) => {
    return {
      start: new Date(evt.event.date),
      end: new Date(evt.event.date),
      title: evt.event.title,
    };
  });

  console.log(favEventsList);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Calendar
        selectable
        localizer={localizer}
        events={favEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, padding: "10px" }}
    
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
};

export default UserCalendar;
