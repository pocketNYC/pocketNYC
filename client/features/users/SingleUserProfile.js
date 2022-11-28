import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUser } from "./userSlice";
import { fetchFavoriteEvents } from "../favorites/favoriteEventsSlice";
import { fetchFavoriteResources } from "../favorites/favoriteResourcesSlice";
import { fetchAllEvents } from "../events/eventsSlice";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import LoadingScreen from "../loading/LoadingScreen";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteResources from "../favorites/FavoriteResources";
import FavoriteEvents from "../favorites/FavoriteEvents";

function SingleUserProfile({ user }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.me.id);
  const loading = useSelector((state) => state.auth.loading);
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
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="container-fluid">
          <div className="row p-4">
            <h1 className="text-center">User Dashboard</h1>
            <div className="col-md-4">
              <div
                className="card text-center"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body text-center">
                  <div className="mt-3 mb-4">
                    <img
                      src="https://ih1.redbubble.net/image.348125876.6557/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"
                      className="rounded-circle mx-auto"
                      style={{
                        width: "200px",
                      }}
                    />
                  </div>

                  <h4 className="mb-2">
                    {firstName} {lastName}
                  </h4>
                  <h6 className="text-muted mb-4">
                    <strong>My Interests: </strong>
                    {[interests].toString().split(",").join(", ")}
                    <strong>
                      <br />
                      My Email:{" "}
                    </strong>
                    {email}
                  </h6>
                </div>
                <Link to={`/users/${userId}/edit`}>
                  <Button>
                    <EditIcon /> Edit Profile
                  </Button>
                  <div className="p-2"></div>
                </Link>
              </div>
            </div>

            <div className="col-md-8">
              <div className="card">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
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
                        {myEvents.length ? (
                          <table className="table table-borderless">
                            <thead>
                              <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Date(s)</th>
                                <th scope="col">Status</th>
                              </tr>
                            </thead>
                            {myEvents.map(
                              ({ title, status, id, start, end }) => {
                                return (
                                  <tbody>
                                    <tr>
                                      <td>{title}</td>
                                      <td>
                                        {moment(start).format(
                                          "dddd, MMMM Do YYYY, h:mm a"
                                        )}{" "}
                                        -{" "}
                                        {moment(end).format(
                                          "dddd, MMMM Do YYYY, h:mm a"
                                        )}
                                      </td>
                                      <td>{status}</td>
                                    </tr>
                                  </tbody>
                                );
                              }
                            )}
                          </table>
                        ) : (
                          <small> No events to display</small>
                        )}
                      </div>
                    </div>
                  </div>

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
                        My Favorite Resources
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <FavoriteResources />
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        My Favorite Events
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <FavoriteEvents />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleUserProfile;
