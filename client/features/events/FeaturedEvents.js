import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAllEvents } from "./eventsSlice";

function FeaturedEvents() {
  const dispatch = useDispatch();
  const { tag } = useParams();
  const events = useSelector((state) => state.events.events);
  // console.log(events);
  const filteredEvents = events?.filter((event) => {
    if (
      event.tag.includes("holidays")
      // && event.status === "approved"
    ) {
      return event;
    }
  });
  console.log(filteredEvents[0]);

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="underline">Featured Events</h1>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {filteredEvents?.map(({ id, image, title, date }) =>
            console.log(filteredEvents[0].id === id) ? (
              <div className="carousel-item-active" key={id}>
                <img src={image} alt="..." />
                <div>
                  <h3>{title}</h3>
                  <h2>{date}</h2>
                </div>
              </div>
            ) : (
              <div className="carousel-item" key={id}>
                <img src={image} alt="..." />
                <div>
                  <h3>{title}</h3>
                  <h2>{date}</h2>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default FeaturedEvents;
