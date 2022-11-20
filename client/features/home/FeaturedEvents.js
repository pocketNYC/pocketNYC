import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { fetchAllEvents } from "../events/eventsSlice";
import { Link } from "react-router-dom";

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
    <div class="row">
      <div class="col mx-auto">
        {/* <h2 className="underline">Holiday Events: 2022</h2> */}
        <div class="card text-center">
          <h1 class="card-header">Upcoming Holiday Events</h1>

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
                {/* <Link to={`/events/${first?.id}`}> */}
                <img
                  className="d-block w-100"
                  style={{ width: "300px", height: "600px", padding: "10px" }}
                  src={first?.image}
                  alt="..."
                />
                {/* </Link> */}
                <div class="carousel-caption d-none d-md-block">
                  <h5>{first?.title}</h5>
                  <p>
                    {moment(first?.start).format("dddd, MMMM Do YYYY, h:mm a")}{" "}
                    - {moment(first?.end).format("dddd, MMMM Do YYYY, h:mm a")}
                  </p>
                </div>
                {/* <div align="center">
              <h3 className="underline">{first?.title}</h3>
              <h4>
                {moment(first?.start).format("dddd, MMMM Do YYYY, h:mm a")} -{" "}
                {moment(first?.end).format("dddd, MMMM Do YYYY, h:mm a")}
              </h4>
            </div> */}
              </div>
              {exclude1?.map(({ id, image, title, start, end }) => (
                <div key={id} className="carousel-item" data-bs-interval="4500">
                  {/* <Link to={`/events/${id}`}> */}
                  <img
                    style={{ width: "300px", height: "600px", padding: "10px" }}
                    className="d-block w-100"
                    src={image}
                    alt="..."
                  />
                  {/* </Link> */}
                  {/* <div align="center">
                <h3 className="underline">{title} </h3>
                <h4>
                  {moment(start).format("dddd, MMMM Do YYYY, h:mm a")} -{" "}
                  {moment(end).format("dddd, MMMM Do YYYY, h:mm a")}
                </h4>
              </div> */}
                  <div class="carousel-caption d-none d-md-block">
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
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeaturedEvents;
