import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUser } from "./userSlice";
import { fetchFavoriteEvents } from "../favorites/favoriteEventsSlice";
import { fetchFavoriteResources } from "../favorites/favoriteResourcesSlice";
import { fetchAllEvents } from "../events/eventsSlice";

function SingleUserProfile() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.me.id);
  const events = useSelector((state) => state.events.events);

  const { firstName, lastName, email, interests, borough, id } = useSelector(
    (state) => state.user.singleUser
  );

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
  console.log(myEvents, "MYEVTS");

  return (
    <div>
      <h4> {`${firstName} ${lastName}`} </h4>
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
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button
                class="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                My Events Submitted
              </button>
            </h2>
          </div>
          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              <ul>
                {myEvents.map(({ title, status, id, date }) => {
                  return (
                    <li key={id}>
                      {title}
                      <ul>
                        <li> Date: {date}</li>
                        <li> Status: {status}</li>
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Collapsible Group Item #2
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleUserProfile;
