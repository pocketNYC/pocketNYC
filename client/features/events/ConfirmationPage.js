import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { Button } from "react-bootstrap";
import { fetchAllEvents } from "../events/eventsSlice";

function ConfirmationPage({ user }) {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const { firstName, id } = user;
  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  const myEvents = events
    .filter((event) => {
      if (event.userId == id && event.status === "pending") {
        return event;
      }
    })
    .sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

  const current = myEvents[0];

  return (
    <div>
      <h2>{`Thank you, ${firstName}!`}</h2>
      <h6>
        Your event has been submitted for approval. Below is a summary of the event
        details submitted:
      </h6>
      <small>
        <strong>Title: </strong>
        {current?.title}
      </small>
      <br />
      <small>
        <strong>Description: </strong> {current?.description}
      </small>
      <br />
      <small>
        <strong>Date & Time: </strong>
        {moment(current?.start).format("dddd, MMMM Do YYYY, h:mm:ss a")} -
        {moment(current?.end).format("dddd, MMMM Do YYYY, h:mm:ss a")}
      </small>
      <br />
      <small>
        <strong>Address: </strong> {current?.address}
      </small>
      <br />
      <small>
        <strong>Borough: </strong>
        {current?.borough}
      </small>
      <br />
      {current?.eventLink ? (
        <>
          <small>
            <strong>More Info: </strong> {current?.eventLink}
          </small>
          <br />
        </>
      ) : null}
      <small>
        <strong>Event Tags: </strong> {current?.tag.join(", ")}
      </small>
      <br />
      <small>
        <strong>Image Link: </strong>
        {current?.image}
      </small>
      <br />
      <Link to="/events">
        <Button className="confirm-evt-btn-close">Close</Button>
      </Link>
      &nbsp;
      <Link to="/add">
        <Button className="confirm-evt-btn-add-more">Add Another Event</Button>
      </Link>
    </div>
  );
}

export default ConfirmationPage;
