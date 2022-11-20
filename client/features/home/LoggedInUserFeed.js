import React, { useEffect } from "react";
import { fetchAllEvents } from "../events/eventsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

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
            console.log(event);
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
        <small>
          No events currently match your interests or borough. Visit our{" "}
          <Link to="/events">Events</Link> page for a full list of all upcoming
          events.
        </small>
      )}
    </div>

    /* // <div>
    //   <p className="underline">Events matching your Interests & Borough</p>
    //   <div className="card"> */
    //     <ul>
    //       {filteredByInterest.length ? (
    //         filteredByInterest?.map(({ id, image, title, start, end }) => (
    //           <ul key={id}>
    //             <Link to={`/events/${id}`}>
    //               <img
    //                 src={image}
    //                 style={{ width: "500px", height: "300px" }}
    //                 onClick={() => navigate(`/events/${id}`)}
    //               />
    //             </Link>

    //             <h3 className="underline">{title}</h3>

    //             <h4>
    //               {moment(start).format("dddd, MMMM Do YYYY, h:mm a")} -{" "}
    //               {moment(end).format("dddd, MMMM Do YYYY, h:mm a")}
    //               <br />
    //               <Link to={`/events/${id}`}>
    //                 <h4>More Details</h4>
    //               </Link>
    //             </h4>
    //           </ul>
    //         ))
    //       ) : (
    //         <small>
    //           No events currently match your interests or borough. Visit our{" "}
    //           <Link to="/events">Events</Link> page for a full list of all
    //           upcoming events.
    //         </small>
    //       )}
    //     </ul>
    //   </div>
    // </div>
  );
}

export default LoggedInUserFeed;
