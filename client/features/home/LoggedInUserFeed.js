import React, { useEffect } from "react";
import { fetchAllEvents } from "../events/eventsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

function LoggedInUserFeed({ interests, borough }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  const events = useSelector((state) => state.events.events);

  const sortedApprovedEvents = [...events]
    .sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    })
    .filter((event) => {
      if (event.status === "approved" && event.borough === borough) {
        return event;
      }
    });

  const filteredByInterest = sortedApprovedEvents
    .filter((event) => {
      for (let i = 0; i < event.tag.length; i++) {
        let tag = event.tag[i];
        if (interests.includes(tag) && tag !== "holidays") {
          return event;
        }
      }
    })
    .filter((a) => new Date(a.date) - new Date() > 0);

  return (
    <div align="center">
      <p className="underline">Events matching your Interests & Borough</p>
      <ul>
        {filteredByInterest.length ? (
          filteredByInterest?.map(({ id, image, title, date }) => (
            <ul key={id}>
              <Link to={`/events/${id}`}>
                <img
                  src={image}
                  style={{ width: "500px", height: "300px" }}
                  onClick={() => navigate(`/events/${id}`)}
                />
              </Link>

              <h3 className="underline">{title}</h3>

              <h4>
                {moment(date).format("dddd, MMMM Do, YYYY")}
                <br />
                <Link to={`/events/${id}`}>
                  <h4>More Details</h4>
                </Link>
              </h4>
            </ul>
          ))
        ) : (
          <small>
            No events currently matching your interests and borough. Visit our{" "}
            <Link to="/events">Events</Link> page for a full list of all
            upcoming events.
          </small>
        )}
      </ul>
    </div>
  );
}

export default LoggedInUserFeed;
