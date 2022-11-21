import React, { useEffect } from "react";
import { fetchAllEvents } from "../events/eventsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

function GuestUserFeed() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const events = useSelector((state) => state.events.events);

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  const end = new Date();
  const start = () => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
  };

  const sortedApprovedEvents = [...events]
    .sort((a, b) => {
      return new Date(a.start) - new Date(b.end);
    })
    .filter((event) => {
      const date = new Date(event.createdAt);

      if (
        date > start() &&
        date < end &&
        event.status === "approved" &&
        !event.tag.includes("holidays")
      ) {
        return event;
      }
    })
    .filter((a) => new Date(a.start) - new Date() > 0)
    .slice(0, 5);

  const navigateToEvent = (ev, id) => {
    ev.preventDefault();
    navigate(`/events/${id}`);
  };

  return (
    <div>
      {sortedApprovedEvents?.map(({ id, image, title, description }) => (
        <div class="card" key={id}>
          <div class="row g-2">
            <div class="col-md-6 mb-2">
              <div
                class="bg-image hover-overlay ripple shadow-2-strong rounded-5"
                data-mdb-ripple-color="light"
              >
                <img
                  src={image}
                  class="img-fluid rounded-start"
                  style={{ height: "400px", width: "700px" }}
                />
                <a>
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15" }}
                  ></div>
                </a>
              </div>
            </div>

            <div class="col-md-6 mb-2">
              <div class="card-body">
                <span class="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
                  New this week!
                </span>
                <h4>
                  <strong>{title}</strong>
                </h4>
                <p class="text-muted">{description}</p>
                <button
                  type="button"
                  onClick={(ev) => navigateToEvent(ev, id)}
                  class="btn btn-primary"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    // <div class="card-body d-flex align-items-center justify-content-center" style=" height:150px">
  );
}
export default GuestUserFeed;
