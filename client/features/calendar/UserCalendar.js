import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { fetchCalendarEvents, selectCalendar } from "./calendarSlice";
import { useNavigate } from "react-router-dom";
import "./Calendar.css";

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

  const handleSelected = (event) => {
    setSelected(event);
    navigate(`/events/${event.id}`);
  };

  return (
    <div className="container">
      <div className="p-2">
        <h1 className="text-center" style={{ fontSize: "50px" }}>
          PocketNYC Calendar
        </h1>
        <h6 className="text-center">
          Browse events and add them directly to your calendar with a simple
          click!
        </h6>
        <div className="card mx-auto">
          <Calendar
            selectable
            localizer={localizer}
            events={calendarEvents}
            onSelectEvent={handleSelected}
            startAccessor="start"
            endAccessor="end"
            popup
            style={{ height: 400, padding: "10px" }}
          />
        </div>
      </div>
      <div className="p-2"></div>
    </div>
  );
};

export default UserCalendar;
