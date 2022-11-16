import React, { useEffect } from "react";
import { fetchAllEvents } from "../events/eventsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

function UserFeed({ interests, borough }) {
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

  const filteredByInterest = sortedApprovedEvents.filter((event) => {
    for (let i = 0; i < event.tag.length; i++) {
      let tag = event.tag[i];
      if (interests.includes(tag)) {
        return event;
      }
    }
  });

  return (
    <div>
      <p>Events matching your interests & borough:</p>
      <ul>
        {filteredByInterest
          ? filteredByInterest?.map(({ id, image, title, date }) => (
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
            ))
          : "No events matching your interests/borough."}
      </ul>
    </div>
  );
}

export default UserFeed;
