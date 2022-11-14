import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllEvents } from "./eventsSlice";
import { me } from "../auth/authSlice";
import { addToFavEvent } from "../favorites/favoriteEventSlice";

export default function Events() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  useEffect(() => {
    dispatch(fetchAllEvents());
    dispatch(me());
  }, []);

  const addButton = (ev, id) => {
    dispatch(addToFavEvent(id));
  };

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
            {isLoggedIn ? (
              <button onClick={(ev) => addButton(ev, id)}>
                Add to Favorites
              </button>
            ) : null}
            <h3>
              {description}
              <br />
              Address: {address}
              <br />
              Date: {date}
              <br />
              Time: {time}
              <br />
              <a href={eventLink}>{eventLink}</a>
              <br />
            </h3>
          </div>
        )
      )}
    </div>
  );
}
