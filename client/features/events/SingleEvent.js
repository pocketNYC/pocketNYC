import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleEvent } from "./eventsSlice";

function SingleEvent() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { image, title, description, address, date, time, tag, eventLink } =
    useSelector((state) => state.events.event);

  useEffect(() => {
    dispatch(fetchSingleEvent(id));
  }, []);

  return (
    <div align="center">
      <img src={image} style={{ width: "800px", height: "500px" }} />
      <h3 className="underline">{title}</h3>
      <h4>
        {description}
        <br />
        Address: {address}
        <br />
        Date: {date}
        <br />
        Time: {time}
        <br />
        Tag: {tag}
        <br />
        <a href={eventLink}>{eventLink}</a>
      </h4>
    </div>
  );
}

export default SingleEvent;
