import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAllEvents } from "../events/eventsSlice";

function FeaturedEvents() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const filteredEvents = [...events]
    .sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    })
    ?.filter((event) => {
      if (event.tag.includes("holidays") && event.status === "approved") {
        return event;
      }
    });
  const first = filteredEvents[0];
  const exclude1 = filteredEvents.filter((event) => {
    if (event.id !== filteredEvents[0].id) {
      return event;
    }
  });
  console.log(exclude1);

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="underline" align="center">
        Featured Events
      </h1>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            data-bs-interval="2000"
            key={first?.id}
          >
            <img
              class="d-block w-100"
              style={{ width: "200px", height: "600px", padding: "10px" }}
              src={first?.image}
              alt="..."
            />
            <div align="center">
              <h3>{first?.title}</h3>
              <h2>{first?.date}</h2>
            </div>
          </div>
          {exclude1?.map((event) => (
            <div className="carousel-item" data-bs-interval="2000">
              <img
                style={{ width: "200px", height: "600px", padding: "10px" }}
                class="d-block w-100"
                src={event.image}
                alt="..."
              />
              <div align="center">
                <h3>{event.title}</h3>
                <h2>{event.date}</h2>
              </div>
            </div>
          ))}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
export default FeaturedEvents;
