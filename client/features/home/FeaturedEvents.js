import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { fetchAllEvents } from "../events/eventsSlice";

function FeaturedEvents() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const filteredEvents = [...events]
    .sort((a, b) => {
      return new Date(a.start) - new Date(b.end);
    })
    ?.filter((event) => {
      if (event.tag.includes("holidays") && event.status === "approved") {
        return event;
      }
    })
    .filter((a) => new Date(a.start) - new Date() > 0);

  const first = filteredEvents[0];

  const exclude1 = filteredEvents.filter((event) => {
    if (event.id !== filteredEvents[0].id) {
      return event;
    }
  });

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  return (
    <div className="row">
      <div className="col mx-auto">
        <div className="card text-center">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div
                className="carousel-item active"
                data-bs-interval="4500"
                key={first?.id}
              >
                <img className="d-block w-100" src={first?.image} alt="..." />

                <div className="carousel-caption d-none d-md-block">
                  <h5>{first?.title}</h5>
                  <p>
                    {moment(first?.start).format("dddd, MMMM Do YYYY, h:mm a")}{" "}
                    - {moment(first?.end).format("dddd, MMMM Do YYYY, h:mm a")}
                  </p>
                </div>
              </div>
              {exclude1?.map(({ id, image, title, start, end }) => (
                <div key={id} className="carousel-item" data-bs-interval="4500">
                  <img className="d-block w-100" src={image} alt="..." />

                  <div className="carousel-caption d-none d-md-block">
                    <h5>{title}</h5>
                    <p>
                      {moment(start).format("dddd, MMMM Do YYYY, h:mm a")} -{" "}
                      {moment(end).format("dddd, MMMM Do YYYY, h:mm a")}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeaturedEvents;
