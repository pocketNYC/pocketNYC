import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUser } from "./userSlice";
import { fetchFavoriteEvents } from "../favorites/favoriteEventsSlice";
import { fetchFavoriteResources } from "../favorites/favoriteResourcesSlice";
import { fetchAllEvents } from "../events/eventsSlice";
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";


function SingleUserProfile({user}) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.me.id);
  const events = useSelector((state) => state.events.events);

  const { firstName, lastName, email, interests, borough, id } = user
  

  useEffect(() => {
    dispatch(fetchSingleUser(userId));
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
      <h4> Welcome, {`${firstName} ${lastName}`}! </h4>

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
              <h6>
                <strong>Email:</strong> {email}
              </h6>
              <h6>
                <strong>Interests: </strong>
                {[interests].toString().split(",").join(", ")}
              </h6>
              <h6>
                <strong>Borough: </strong>
                {borough}
              </h6>
            </div>
            <Link to={`/users/${userId}/edit`}><button>Edit Profile</button></Link>
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
                  ? myEvents.map(({ title, status, id, date }) => {
                      return (
                        <li key={id}>
                          {title}
                          <ul>
                            <li> Date: {date}</li>
                            <li> Status: {status}</li>
                          </ul>
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
  );
}

export default SingleUserProfile;
