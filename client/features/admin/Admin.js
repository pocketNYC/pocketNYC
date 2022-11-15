import React, { useEffect } from "react";
import { editEvent, fetchAllEvents } from "../events/eventsSlice";
import { useSelector, useDispatch } from "react-redux";

function Admin() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  const pendingEvents = events?.filter((event) => {
    if (event.status === "pending") {
      return event;
    }
  });

  const editEventButton = (ev, id) => {
    dispatch(editEvent(id, ev));
  };

  return (
    <div>
      <br />
      <h2>Pending Events Here</h2>
      <>
        <ul>
          {pendingEvents.map(({ title, id, date, status }) => {
            return (
              <li key={id}>
                <small>{title}</small>
                <br />
                <small>{date}</small>
                <br />
                <button onClick={(ev) => editEventButton(ev, id)}>
                  Approve
                </button>
              </li>
            );
          })}
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
