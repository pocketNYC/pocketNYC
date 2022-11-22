import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { fetchCalendarEvents, selectCalendar } from "./calendarSlice";
import { useNavigate } from "react-router-dom";

// o: is there a reason this is outside the function definition?
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
      />
    </div>
  );
};

export default UserCalendar;
