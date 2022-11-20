import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { Calendar, momentLocalizer, Navigate } from "react-big-calendar";
import moment from "moment";
import { useSelector } from "react-redux";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useDispatch } from "react-redux";
import { fetchCalendarEvents, selectCalendar } from "./calendarSlice";
import { useNavigate } from "react-router-dom";

const localizer = momentLocalizer(moment);

const UserCalendar = () => {
  const calEvents = useSelector(selectCalendar);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchCalendarEvents());
  }, [dispatch]);

  const calendarEvents = calEvents.map((evt) => {
    console.log("Evt", evt);
    return {
      start: new Date(evt.event.start),
      end: new Date(evt.event.end),
      title: evt.event.title,
      id: evt.eventId,
      address: evt.event.address,
      description: evt.event.description,
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
      alert(event.title + "\r" + event.address + "\r" + event.description);
    }, 250);
    console.log(event);
  };

  // const handleSelected = (event) => {
  //   setSelected(event);
  //   navigate(`/events/${event.id}`);

  //   // window.clearTimeout(clickRef?.current);
  //   // clickRef.current = window.setTimeout(() => {
  //   //   alert(event.title + "\r" + event.start);
  //   // }, 250);
  // };
  return (
    <div>
      <Calendar
        selectable
        localizer={localizer}
        events={calendarEvents}
        onSelectEvent={handleSelected}
        startAccessor="start"
        endAccessor="end"
        popup
        style={{ height: 500, padding: "10px" }}
      ></Calendar>
    </div>
  );
};

export default UserCalendar;
