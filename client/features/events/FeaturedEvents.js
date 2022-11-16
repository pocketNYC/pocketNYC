import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAllEvents } from "./eventsSlice";

function FeaturedEvents() {
  const dispatch = useDispatch();
  const { tag } = useParams();
  console.log(tag);
  const events = useSelector((state) => state.events.events);

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  return (
    // <div align="center">
    //   <h1 className="underline">Featured Events</h1>

    //   {events?.map(({ id, image, title, date }) => (
    //     <div>
    //       <img src={image} />
    //       <h3>{title}</h3>
    //     </div>
    //   ))}
    // </div>
    <div>
      <h1 className="underline">Featured Events</h1>
      {events
        ?.filter((event) => {
          if (event.tag.includes("holiday")) {
            return event;
          }
        })
        ?.map(({ id, image, title, date, tag }) => (
          <div>
            <h1>{title}</h1>
            {/* <h3>{tag.includes("holidays")}</h3> */}
          </div>
        ))}
    </div>
  );
}

export default FeaturedEvents;
