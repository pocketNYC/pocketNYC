import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { Calendar, momentLocalizer, Navigate } from "react-big-calendar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import moment from "moment";
import { useSelector } from "react-redux";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useDispatch } from "react-redux";
import { fetchCalendarEvents, selectCalendar } from "./calendarSlice";
import { useNavigate } from "react-router-dom";
import interactionPlugin from "@fullcalendar/interaction";
// import { Calendar } from "react-calendar";

const localizer = momentLocalizer(moment);

const UserCalendar = () => {
  const calEvents = useSelector(selectCalendar);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchCalendarEvents());
  }, [dispatch]);

  const calendarEvents = calEvents.map((evt) => {
    return {
      start: new Date(evt.event.start),
      end: new Date(evt.event.end),
      title: evt.event.title,
      id: evt.eventId,
      address: evt.event.address,
      description: evt.event.description,
      link: evt.event.eventLink,
    };
  });

  const [selected, setSelected] = useState();
  const [date, setDate] = useState(new Date());

  const clickRef = useRef(null);

  // useEffect(() => {
  //   return () => {
  //     window.clearTimeout(clickRef?.current);
  //   };
  // }, []);

  // const handleSelected = (event) => {
  //   setSelected(event);
  //   window.clearTimeout(clickRef?.current);
  //   clickRef.current = window.setTimeout(() => {
  //     alert(event.title + "\r" + event.address + "\r" + event.description);
  //   }, 250);
  //   console.log(event);
  // };

  const handleSelected = (event) => {
    setSelected(event);
    navigate(`/events/${event.id}`);

    window.clearTimeout(clickRef?.current);
    clickRef.current = window.setTimeout(() => {
      alert(
        `Event: ${event.title} \nDate & Time: ${moment(event.start).format(
          "dddd, MMMM Do YYYY, h:mm a"
        )} \nMore Details: ${event.description}`
      );
    }, 250);
  };

  return (
    <div>
      {/* * <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        // selectable
        // localizer={localizer}
        events={calendarEvents}
        eventClick={(arg) => {
          console.log(arg.event);

          alert(
            `Event: ${arg.event._def.title} \nDate & Time: ${moment(
              arg.event._instance.range.start
            ).format("dddd, MMMM Do YYYY, h:mm a")}`
          );
        }} * */}
      <Calendar
        selectable
        localizer={localizer}
        events={calendarEvents}
        onSelectEvent={handleSelected}
        startAccessor="start"
        endAccessor="end"
        popup
        style={{ height: 500, padding: "10px" }}
      />
    </div>
  );
};

export default UserCalendar;
