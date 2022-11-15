import React, { useEffect } from "react";
import { fetchAllEvents } from "../events/eventsSlice";
import { useSelector, useDispatch } from "react-redux";
import { addToFavEvent } from "../favorites/favoriteEventSlice";
import { Button } from "react-bootstrap";

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

  console.log("ALL EVENTS", events);
  console.log("F EVENTS", filteredByBoro);
  console.log("interests", interests);
  console.log("F INTEREST", filteredByInterest);

  //user feed: APPROVED events, in my BOROUGH, matching my INTERESTS
  return (
    <div>
      <p>USER FEED HERE:</p>
      <p>
        I'm interested in {interests} events happening in {borough}
      </p>
      <p>Events matching your interests & borough:</p>
      {filteredByInterest
        ? filteredByInterest?.map(({ id, image, title, date }) => (
            <div key={id}>
              <img
                src={image}
                style={{ width: "500px", height: "300px" }}
                onClick={() => navigate(`/events/${id}`)}
              />
              <h3 className="underline">{title}</h3>
              <h4>
                Date: {date}
                <br />
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
