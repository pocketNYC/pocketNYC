import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { useCallback } from "react";
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
import { fetchCalendarEvents, selectCalendar } from "./calendarSlice";
import Tooltip from "@mui/material/Tooltip";

const localizer = momentLocalizer(moment);

const UserCalendar = () => {
  // const favEvents = useSelector(selectFavoriteEvents);

  // useEffect(() => {
  //   dispatch(fetchFavoriteEvents());
  // }, [dispatch]);

  // const favEventsList = favEvents.map((evt) => {
  //   return {
  //     start: new Date(evt.event.date),
  //     end: new Date(evt.event.date),
  //     title: evt.event.title,
  //   };
  // });

  // console.log(favEventsList);
  const calEvents = useSelector(selectCalendar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCalendarEvents());
  }, [dispatch]);

  const calendarEvents = calEvents.map((evt) => {
    return {
      start: new Date(evt.event.date),
      end: new Date(evt.event.date),
      title: evt.event.title,
    };
  });

  const [selected, setSelected] = useState();

  const clickRef = useRef(null);

  useEffect(() => {
    return () => {
      window.clearTimeout(clickRef?.current);
    };
  }, []);

  const handleSelected = (event) => {
    setSelected(event);
    window.clearTimeout(clickRef?.current);
    clickRef.current = window.setTimeout(() => {
      alert(event.title + "\r" + event.start);
    }, 250);
    console.log(event.end);
  };

  return (
    <div>
      <Calendar
        selectable
        localizer={localizer}
        events={calendarEvents}
        onSelectEvent={handleSelected}
        startAccessor="start"
        endAccessor="end"
        popup={true}
        style={{ height: 500, padding: "10px" }}
      ></Calendar>
    </div>
  );
};

export default UserCalendar;
