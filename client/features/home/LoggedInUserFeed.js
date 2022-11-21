import React, { useEffect } from "react";
import { fetchAllEvents } from "../events/eventsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GuestUserFeed from "./GuestUserFeed";

function LoggedInUserFeed({ interests, borough }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  const events = useSelector((state) => state.events.events);

  const sortedApprovedEvents = [...events]
    .sort((a, b) => {
      return new Date(a.start) - new Date(b.start);
    })
    .filter((event) => {
      if (event.status === "approved" && event.borough === borough) {
        return event;
      }
    });

  const filteredByInterest = sortedApprovedEvents
    .filter((event) => {
      for (let i = 0; i < event.tag.length; i++) {
        let tag = event.tag[i];

        if (tag !== "holidays") {
          if (interests.includes(tag)) {
            return event;
          }
        }
      }
    })
    .filter((a) => new Date(a.start) - new Date() > 0);

  const navigateToEvent = (ev, id) => {
    ev.preventDefault();
    navigate(`/events/${id}`);
  };

  return (
    <div>
      {filteredByInterest.length ? (
        filteredByInterest?.map(({ id, image, title, description }) => (
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
                    style={{ height: "400px", width: "600px" }}
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
                <div class="align-middle">
                  <span class="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
                    Personalized Recommendation
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
        ))
      ) : (
        <GuestUserFeed />
      )}
    </div>
  );
}

export default LoggedInUserFeed;
