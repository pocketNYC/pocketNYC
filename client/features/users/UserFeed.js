import React, { useEffect } from "react";
import { fetchAllEvents } from "../events/eventsSlice";
import { useSelector, useDispatch } from "react-redux";
import { addToFavEvent } from "../favorites/favoriteEventSlice";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserFeed({ interests, borough }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  const events = useSelector((state) => state.events.events);
  const addButton = (ev, id) => {
    dispatch(addToFavEvent(id));
  };
  const filteredByBoro = events.filter((event) => {
    if (event.status === "approved" && event.borough === borough) {
      return event;
    }
  });

  const filteredByInterest = filteredByBoro.filter((event) => {
    for (let i = 0; i < event.tag.length; i++) {
      console.log(event.tag, "event.tag");
      let tag = event.tag[i];
      console.log("tag", tag);
      if (interests.includes(tag)) {
        return event;
      }
    }
  });

  //user feed: APPROVED events, in my BOROUGH, matching my INTERESTS
  return (
    <div>
      <p>Events matching your interests & borough:</p>
      <ul>
        {filteredByInterest
          ? filteredByInterest?.map(({ id, image, title, date }) => (
              <li key={id}>
                <Link to={`/events/${id}`}>
                  <img
                    src={image}
                    style={{ width: "500px", height: "300px" }}
                    onClick={() => navigate(`/events/${id}`)}
                  />
                </Link>

                <h3>{title}</h3>

                <h4>
                  Date: {date}
                  <br />
                  <Link to={`/events/${id}`}>
                    <h4>More Details</h4>
                  </Link>
                  {/* <Button variant="primary" onClick={(ev) => addButton(ev, id)}>
                  Add to Favorites
                </Button> */}
                </h4>
              </li>
            ))
          : "No events matching your interests/borough."}
      </ul>
    </div>
  );
}

export default UserFeed;
