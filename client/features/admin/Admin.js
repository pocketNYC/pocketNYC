import React, { useEffect } from "react";
import { editEvent, fetchAllEvents } from "../events/eventsSlice";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

function Admin() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  const sortedPendingEvents = [...events]
    .sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    })
    .filter((event) => {
      if (event.status === "pending") {
        return event;
      }
    });

  const editEventButton = (ev, id) => {
    dispatch(editEvent(id, ev)).then(() => {
      dispatch(fetchAllEvents());
    });
  };

  return (
    <div>
      <br />
      <h2>Pending Events Here</h2>
      <>
        <ul>
          {sortedPendingEvents.length
            ? sortedPendingEvents.map(({ title, id, date, status }) => {
                return (
                  <li key={id}>
                    <small>
                      <Link to={`/events/${id}`}>{title} </Link>
                    </small>
                    <br />
                    <small>
                      Date: {moment(date).format("dddd, MMMM Do, YYYY")}
                    </small>
                    <br />
                    <button onClick={(ev) => editEventButton(ev, id)}>
                      Approve
                    </button>
                  </li>
                );
              })
            : "No pending events remaining"}
        </ul>
      </>

      <hr />
      <h2> Edit Admin Profile</h2>
      <hr />
      <h2>Edit a User Here</h2>
    </div>
  );
}

export default Admin;
