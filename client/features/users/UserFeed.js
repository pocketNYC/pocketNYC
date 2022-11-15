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

      {filteredByInterest
        ? filteredByInterest?.map(({ id, image, title, date }) => (
            <div key={id}>
              <img
                src={image}
                style={{ width: "500px", height: "300px" }}
                onClick={() => navigate(`/events/${id}`)}
              />
              <Link to={`/events/${id}`}>
                <h3 className="underline">{title}</h3>
              </Link>
              <h4>
                Date: {date}
                <br />
                <Button variant="primary" onClick={(ev) => addButton(ev, id)}>
                  Add to Favorites
                </Button>
              </h4>
            </div>
          ))
        : "No events matching your interests/borough."}
    </div>
  );
}

export default UserFeed;
