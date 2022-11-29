import React, { useEffect } from "react";
import { fetchAllEvents } from "../events/eventsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
        !event.tags?.includes("holidays")
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
        <>
          <div className="card" key={id}>
            <div className="row g-0">
              <div className="col-md-6 ">
                <div
                  className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src={image}
                    alt={`Image of ${title}`}
                    className="img-fluid rounded-start"
                    style={{ height: "400px", width: "700px" }}
                  />
                  <a>
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15" }}
                    ></div>
                  </a>
                </div>
              </div>

              <div className="col-md-6 mb-2">
                <div className="card-body">
                  <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
                    New this week!
                  </span>
                  <h4>
                    <strong>{title}</strong>
                  </h4>
                  <p className="text-muted">{description}</p>
                  <button
                    type="button"
                    onClick={(ev) => navigateToEvent(ev, id)}
                    className="btn btn-primary"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-1"></div>
        </>
      ))}
      <div className="p-2"></div>
    </div>
  );
}
export default GuestUserFeed;
