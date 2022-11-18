import React, { useEffect } from "react";
import {
  approveEvent,
  rejectEvent,
  fetchAllEvents,
} from "../events/eventsSlice";
import { useSelector, useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
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

  const approveEventBtn = (ev, id) => {
    ev.preventDefault();
    dispatch(approveEvent(id, status)).then(() => {
      dispatch(fetchAllEvents());
    });
  };

  const rejectEventBtn = (ev, id) => {
    ev.preventDefault();
    dispatch(rejectEvent(id, status)).then(() => {
      dispatch(fetchAllEvents());
    });
  };

  return (
    <div>
      <br />
      <h2>Pending Events:</h2>
      <>
        <ul>
          {sortedPendingEvents.length
            ? sortedPendingEvents.map(({ title, id, date, status }) => {
                return (
                  <li key={id}>
                    <strong>
                      <Link to={`/events/${id}`}>{title} </Link>
                      <IconButton onClick={(ev) => approveEventBtn(ev, id)}>
                        <CheckBoxIcon color="success" />
                      </IconButton>
                      <IconButton onClick={(ev) => rejectEventBtn(ev, id)}>
                        <DisabledByDefaultIcon color="error" />
                      </IconButton>
                    </strong>
                    <br />
                    <strong>
                      Date: {moment(date).format("dddd, MMMM Do, YYYY")}
                    </strong>
                  </li>
                );
              })
            : "No pending events remaining"}
        </ul>
      </>

      <hr />
    </div>
  );
}

export default Admin;
