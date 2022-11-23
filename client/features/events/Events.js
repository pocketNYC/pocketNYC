import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { fetchAllApprovedEvents } from "./eventsSlice";
import { me } from "../auth/authSlice";
import { Button, Tooltip } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddIcon from "./AddIcon";
import LoadingScreen from "../loading/LoadingScreen";

export default function Events() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const events = useSelector((state) => state.events.events);
  const loading = useSelector((state) => state.events.loading);

  useEffect(() => {
    dispatch(fetchAllApprovedEvents());
    dispatch(me());
  }, []);

  return (
    <div className="container-fluid">
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="container">
          {isLoggedIn && <AddIcon />}
          <h1 className="fw-light text-center text-lg-center p-4">
            {" "}
            All Events{" "}
          </h1>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {events?.map(({ id, image, title, start, tag }) => (
              <div key={id}>
                <div className="card text-center h-100">
                  <img
                    className="card-img-top "
                    src={image}
                    alt={`Image of ${title}`}
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
                      />
                    </div>{" "}
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
                bottom: "120px",
                right: "10px",
                textAlign: "center",
              }}
            >
              <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
            </Button>
          </Tooltip>
        </div>
      )}
    </div>
  );
}
