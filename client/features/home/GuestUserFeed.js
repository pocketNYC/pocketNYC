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
      return new Date(a.date) - new Date(b.date);
    })
    .filter((event) => {
      const date = new Date(event.createdAt);

      if (
        date > start() &&
        date < end &&
        event.status === "approved" &&
        !event.tag.includes("holidays")
      ) {
        return event;
      }
    })
    .filter((a) => new Date(a.date) - new Date() > 0)
    .slice(0, 5);

  return (
    <div>
      <h1 className="underline" align="center">
        New this week!
      </h1>
      <ul>
        {sortedApprovedEvents?.map(({ id, image, title, date }) => (
          <li key={id}>
            <Link to={`/events/${id}`}>
              <img
                src={image}
                style={{ width: "500px", height: "300px" }}
                onClick={() => navigate(`/events/${id}`)}
              />
            </Link>

            <h3>{title}</h3>

            <h4>
              Date: {moment(date).format("dddd, MMMM Do, YYYY")}
              <br />
              <Link to={`/events/${id}`}>
                <h4>More Details</h4>
              </Link>
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default GuestUserFeed;
