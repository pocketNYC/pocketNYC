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
import Tooltip from "react-bootstrap/Tooltip";
import { OverlayTrigger } from "react-bootstrap";

function PendingEvents() {
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
      <div className="p-2">
        <div className="table-responsive">
          {events.length ? (
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Date(s)</th>
                  <th scope="col">Approve Event</th>
                  <th scope="col">Reject Event</th>
                </tr>
              </thead>

              {events.map(({ title, id, start, end }) => {
                return (
                  <tbody key={id}>
                    <tr>
                      <td>
                        <Link to={`/events/${id}`}>{title} </Link>
                      </td>
                      <td>
                        {moment(start).format("dddd, MMMM Do YYYY, h:mm a")} -{" "}
                        {moment(end).format("dddd, MMMM Do YYYY, h:mm a")}
                      </td>
                      <td>
                        <OverlayTrigger
                          key="event approval"
                          placement="top"
                          overlay={<Tooltip>Approve Event</Tooltip>}
                        >
                          <IconButton onClick={(ev) => approveEventBtn(ev, id)}>
                            <CheckBoxIcon color="success" />
                          </IconButton>
                        </OverlayTrigger>
                      </td>
                      <td>
                        <OverlayTrigger
                          key="event rejection"
                          placement="top"
                          overlay={<Tooltip>Reject Event</Tooltip>}
                        >
                          <IconButton onClick={(ev) => rejectEventBtn(ev, id)}>
                            <DisabledByDefaultIcon color="error" />
                          </IconButton>
                        </OverlayTrigger>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          ) : (
            <>
              <br />
              <p className="text-center">No pending events to approve</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PendingEvents;
