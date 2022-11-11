import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllEvents } from "./eventsSlice";
import { me } from "../auth/authSlice";

export default function Events() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);

  useEffect(() => {
    dispatch(fetchAllEvents());
    dispatch(me());
  }, []);

  return (
    <div align="center">
      <h1 className="underline">List of Events</h1>

      {events?.map(
        ({
          id,
          image,
          title,
          address,
          description,
          date,
          time,
          tag,
          eventLink,
          status,
          longitude,
          latitude,
        }) => (
          <div key={id}>
            <img src={image} style={{ width: "800px", height: "500px" }} />
            <h2 className="underline">{title}</h2>
            <h3>
              Address: {address}
              <br />
              {description}
              <br />
              Date: {date}
              <br />
              Time: {time}
              <br />
              <a href={eventLink}>Link to more info...</a>
            </h3>
          </div>
        )
      )}
    </div>
  );
}
