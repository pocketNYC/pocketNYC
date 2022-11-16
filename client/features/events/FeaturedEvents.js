import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAllEvents } from "./eventsSlice";

function FeaturedEvents() {
  const dispatch = useDispatch();
  const { tag } = useParams();
  // console.log(tag);
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
        ?.map(({ id, image, title, date }) => (
          <div class="carousel-item" key={id}>
            <img src={image} alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h3>{title}</h3>
              <h2>{date}</h2>
            </div>
          </div>
        ))}
    </div>
  );
}

export default FeaturedEvents;
