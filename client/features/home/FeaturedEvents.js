import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchAllEvents } from "../events/eventsSlice";

function FeaturedEvents() {
  const dispatch = useDispatch();

  const events = useSelector((state) => state.events.events);

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  return (
    <div>
      <h1 className="underline">Featured Events</h1>
      {events
        ?.filter((event) => {
          if (event.tag.includes("holidays")) {
            return event;
          }
        })
        ?.map(({ id, image, title, date, tag }) => (
          <div>
            <h1>{title}</h1>
          </div>
        ))}
    </div>
  );
}

export default FeaturedEvents;
