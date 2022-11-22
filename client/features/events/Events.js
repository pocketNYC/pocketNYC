import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { fetchAllEvents } from "./eventsSlice";
import { me } from "../auth/authSlice";
import { Button, Tooltip } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddIcon from "./AddIcon";

export default function Events() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const events = useSelector((state) => state.events.events);

  useEffect(() => {
    dispatch(fetchAllEvents());
    dispatch(me());
  }, []);

  // o: why not filter once?
  const sortedApprovedEvents = [...events]
    .sort((a, b) => {
      return new Date(a.start) - new Date(b.start);
    })
    .filter((event) => {
      // o: you don't need to return the event here
      if (event.status === "approved") {
        return event;
      }
    })
    .filter((a) => new Date(a.start) - new Date() > 0);

  return (
    <div className="container-fluid">
      {isLoggedIn && <AddIcon />}
      <h1 className="fw-light text-center text-lg-center p-4"> All Events </h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {sortedApprovedEvents?.map(({ id, image, title, start, tag }) => (
          <div key={id}>
            <div className="card text-center h-100">
              <img
                className="card-img-top "
                src={image}
                alt={`image of ${title}`}
                onClick={() => navigate(`/events/${id}`)}
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {moment(start).format("dddd, MMMM Do, YYYY")}
                </h6>
                <small className="card-subtitle mb-2 text-muted">
                  Tags: {tag.join(", ")}
                </small>
                <div>
                  <Button
                    size="small"
                    onClick={() => navigate(`/events/${id}`)}
                  >
                    More Info
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Tooltip title="Scroll to Top">
        <Button
          className="scroll"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          variant="contained"
          size="small"
          style={{
            position: "fixed",
            borderRadius: "50%",
            padding: "1rem 1rem",
            bottom: "40px",
            right: "40px",
            textAlign: "center",
          }}
        >
          <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
        </Button>
      </Tooltip>
    </div>
  );
}
