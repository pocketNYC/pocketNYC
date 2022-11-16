import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllEvents } from "./eventsSlice";
import { me } from "../auth/authSlice";
import { addToFavEvents } from "../favorites/favoriteEventsSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Events() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const events = useSelector((state) => state.events.events);

  useEffect(() => {
    dispatch(fetchAllEvents());
    dispatch(me());
  }, []);

  const approvedEvents = events?.filter((event) => {
    if (event.status === "approved") {
      return event;
    }
  });
  const addButton = (ev, id) => {
    ev.preventDefault();
    dispatch(addToFavEvents(id));
  };

  return (
    <div align="center">
      <h1 className="underline">List of Events</h1>

      {approvedEvents?.map(({ id, image, title, date }) => (
        <div key={id}>
          <img
            src={image}
            style={{ width: "800px", height: "500px" }}
            onClick={() => navigate(`/events/${id}`)}
          />
          <h3 className="underline">{title}</h3>
          <h4>
            Date: {date}
            <br />
            {isLoggedIn ? (
              <>
                <Button
                  variant="primary"
                  onClick={(ev) => {
                    addButton(ev, id);
                  }}
                >
                  Add to Favorites
                </Button>
              </>
            ) : null}
          </h4>
        </div>
      ))}
    </div>
  );
}
