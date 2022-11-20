import React, { useEffect } from "react";
import { fetchAllEvents } from "../events/eventsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

function GuestUserFeed() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const events = useSelector((state) => state.events.events);

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  const end = new Date();
  const start = () => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
  };

  const sortedApprovedEvents = [...events]
    .sort((a, b) => {
      return new Date(a.start) - new Date(b.end);
    })
    .filter((event) => {
      const date = new Date(event.createdAt);

      if (
        start > start() &&
        end < end &&
        event.status === "approved" &&
        !event.tag.includes("holidays")
      ) {
        return event;
      }
    })
    .filter((a) => new Date(a.start) - new Date() > 0)
    .slice(0, 5);

  return (
    <div align="center">
      <h2 className="underline">New this week!</h2>
      <ul>
        {sortedApprovedEvents?.map(({ id, image, title, start, end }) => (
          <ul key={id}>
            <Link to={`/events/${id}`}>
              <img
                src={image}
                style={{ width: "600px", height: "300px" }}
                onClick={() => navigate(`/events/${id}`)}
              />
            </Link>

            <h3 className="underline">{title}</h3>

            <h4>
              {moment(start).format("dddd, MMMM Do YYYY, h:mm:ss a")}-
              {moment(end).format("dddd, MMMM Do YYYY, h:mm:ss a")}
              <br />
              <Link to={`/events/${id}`}>
                <h4>More Details</h4>
              </Link>
            </h4>
          </ul>
        ))}
      </ul>
    </div>
  );
}
export default GuestUserFeed;
