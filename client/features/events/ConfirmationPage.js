import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { fetchUserEvents } from "../users/userSlice";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function ConfirmationPage({ user }) {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.user.singleUser);

  const { id } = user;

  useEffect(() => {
    dispatch(fetchUserEvents(id));
  }, [dispatch]);

  const event = events[0];
  return (
    <div className="container-fluid">
      <div className=" p-4 justify-content-center align-items-center">
        <div className="col-8 mx-auto">
          <div className="border border-3 border-primary"></div>
          <div className="card bg-white shadow p-5">
            <div className="mb-4 text-center">
              <CheckCircleIcon color="primary" sx={{ fontSize: 90 }} />
            </div>
            <div className="text-center">
              <h1>Thank you for your submission!</h1>
              <p>
                Your event is being shared with the PocketNYC team for approval
                and once approved, your event will apear on the{" "}
                <a href="/events">Events</a> page.
              </p>
            </div>
            <div className="text-center">
              <small>
                <strong>Title: </strong>
                {event?.title}
              </small>
              <br />
              <small>
                <strong>Description: </strong> {event?.description}
              </small>
              <br />
              <small>
                <strong>Start: </strong>
                {moment(event?.start).format("dddd, MMMM Do YYYY, h:mm a")}
              </small>
              <br />
              <small>
                <strong>End: </strong>
                {moment(event?.end).format("dddd, MMMM Do YYYY, h:mm a")}
              </small>
              <br />
              <small>
                <strong>Address: </strong> {event?.address}
              </small>
              <br />
              <small>
                <strong>Borough: </strong>
                {event?.borough}
              </small>
              <br />
              {event?.eventLink ? (
                <>
                  <small>
                    <strong>More Info: </strong>
                    <a target="_blank" href={`${event?.eventLink}`}>
                      {event?.eventLink}
                    </a>
                  </small>
                  <br />
                </>
              ) : null}
              <small>
                <strong>Image Link: </strong>
                <a target="_blank" href={`${event?.image}`}>
                  {event?.image}
                </a>
              </small>
              <br />
              <small>
                <strong>Event Tags: </strong> {event?.tags?.join(", ")}
              </small>
              <div className="p-2"></div>
              <Link to="/events">
                <button className="btn btn-primary">Close</button>
              </Link>
              &nbsp;
              <Link to="/add">
                <button className="btn btn-primary">Add Another Event</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
