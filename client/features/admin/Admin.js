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
      return new Date(a.start) - new Date(b.start);
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
    <div className="container-fluid">
      <div className="p-4">
        <h1 className="text-center">Pending Events</h1>
        <div className="card">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Date(s)</th>
                <th scope="col">Approve</th>
                <th scope="col">Reject</th>
              </tr>
            </thead>
            {sortedPendingEvents.length ? (
              sortedPendingEvents.map(({ title, id, start }) => {
                return (
                  <tbody key={id}>
                    <tr>
                      <td>
                        <Link to={`/events/${id}`}>{title} </Link>
                      </td>
                      <td>
                        {moment(start).format("dddd, MMMM Do YYYY, h:mm a")}
                      </td>
                      <td>
                        <IconButton onClick={(ev) => approveEventBtn(ev, id)}>
                          <CheckBoxIcon color="success" />
                        </IconButton>
                      </td>
                      <td>
                        <IconButton onClick={(ev) => rejectEventBtn(ev, id)}>
                          <DisabledByDefaultIcon color="error" />
                        </IconButton>
                      </td>
                    </tr>
                  </tbody>
                );
              })
            ) : (
              <tbody>
                <tr>
                  <td>No pending events to approve</td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;
