import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUser } from "./userSlice";
import { fetchFavoriteEvents } from "../favorites/favoriteEventsSlice";
import { fetchFavoriteResources } from "../favorites/favoriteResourcesSlice";
import { fetchAllEvents } from "../events/eventsSlice";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function SingleUserProfile({ user }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.me.id);
  const events = useSelector((state) => state.events.events);

  const { firstName, lastName, email, interests, borough, id } = user;

  useEffect(() => {
    dispatch(fetchFavoriteEvents());
    dispatch(fetchFavoriteResources());
    dispatch(fetchAllEvents());
  }, [dispatch]);

  const myEvents = events.filter((event) => {
    if (event.userId === id) {
      return event;
    }
  });

  return (
    <div className="container-fluid">
      <div className="row p-4">
        <div className="card">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  My User Information
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div class="container py-2 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                      <div class="col-md-12 col-xl-4">
                        <div class="card" style={{ borderRadius: "15px" }}>
                          <div class="card-body text-center">
                            <div class="mt-3 mb-4">
                              <img
                                src="https://images.cf.nycsubway.org/images/maps/subway-map-2019a.png"
                                class="rounded-circle"
                                style={{ width: "100px", height: "100px" }}
                              />
                            </div>
                            <h4 class="mb-2">
                              {firstName} {lastName}
                            </h4>
                            <h6 class="text-muted mb-4">
                              <strong>My Interests: </strong>
                              {[interests].toString().split(",").join(", ")}
                              <strong>
                                <br />
                                My Email:{" "}
                              </strong>
                              {email}
                            </h6>

                            <Link to={`/users/${userId}/edit`}>
                              <Button>Edit Profile</Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    My Submitted Events
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <ul>
                      {myEvents.length
                        ? myEvents.map(({ title, status, id, start, end }) => {
                            return (
                              <li key={id}>
                                <h6>
                                  {title}
                                  <ul>
                                    <li>
                                      {moment(start).format(
                                        "dddd, MMMM Do YYYY, h:mm a"
                                      )}{" "}
                                      -{" "}
                                      {moment(end).format(
                                        "dddd, MMMM Do YYYY, h:mm a"
                                      )}
                                    </li>
                                    <li> Status: {status}</li>
                                  </ul>
                                </h6>
                              </li>
                            );
                          })
                        : "No events to display"}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleUserProfile;
