import React, { useEffect } from "react";
import {
  approveEvent,
  rejectEvent,
  fetchAllPendingEvents,
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
    dispatch(fetchAllPendingEvents());
  }, [dispatch]);

  const approveEventBtn = (ev, id) => {
    ev.preventDefault();
    dispatch(approveEvent(id)).then(() => {
      dispatch(fetchAllPendingEvents());
    });
  };

  const rejectEventBtn = (ev, id) => {
    ev.preventDefault();
    dispatch(rejectEvent(id)).then(() => {
      dispatch(fetchAllPendingEvents());
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
                <th scope="col">Yes/No</th>
              </tr>
            </thead>
            {events.length ? (
              events.map(({ title, id, start }) => {
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
