import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchFavoriteEvents,
  removeFromFavEvents,
  selectFavoriteEvents,
} from "./favoriteEventsSlice";
import moment from "moment";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import LoadingScreen from "../loading/LoadingScreen";

const FavoriteEvents = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteEvents());
  }, [dispatch]);

  const favEvents = useSelector(selectFavoriteEvents);
  const eventsLoading = useSelector((state) => state.events.loading);

  const removeFavEvent = (ev, id) => {
    ev.preventDefault();
    dispatch(removeFromFavEvents(id)).then(() => {
      dispatch(fetchFavoriteEvents());
    });
  };

  const futureEvents = [...favEvents]
    .sort((a, b) => {
      return new Date(a.event.start) - new Date(b.event.end);
    })
    .filter((a) => new Date(a.event.start) - new Date() > 0);

  const pastEvents = [...favEvents]
    .sort((a, b) => {
      return new Date(a.event.start) - new Date(b.event.end);
    })
    .filter((a) => new Date(a.event.start) - new Date() < 0);

  return (
    <div>
      {eventsLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <p style={{ fontWeight: "bold" }}>Upcoming Events:</p>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col"> Title</th>

                <th scope="col">Remove</th>
              </tr>
            </thead>
            {futureEvents.length ? (
              futureEvents?.map(({ event }) => {
                return (
                  <>
                    <tbody>
                      <tr key={event.id}>
                        <td>
                          {moment(event.start).format(
                            "dddd, MMMM Do YYYY, h:mm a"
                          )}
                        </td>

                        <td>
                          <Link to={`/events/${event.id}`}>{event.title}</Link>
                        </td>
                        <td>
                          <IconButton
                            onClick={(ev) => {
                              removeFavEvent(ev, event.id);
                            }}
                          >
                            <DeleteIcon color="error" />
                          </IconButton>
                        </td>
                      </tr>
                    </tbody>
                  </>
                );
              })
            ) : (
              <tbody>
                <tr>
                  <td>No favorites to display</td>
                </tr>
              </tbody>
            )}
          </table>
          <p
            style={{
              color: "red",
              fontWeight: "bold",
            }}
          >
            Past Events:
          </p>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col"> Title</th>
                <th scope="col">Remove </th>
              </tr>
            </thead>

            {pastEvents.length ? (
              pastEvents?.map(({ event }) => {
                return (
                  <>
                    <tbody>
                      <tr key={event.id}>
                        <td>
                          {moment(event.start).format(
                            "dddd, MMMM Do YYYY, h:mm a"
                          )}
                        </td>
                        <td>
                          <Link to={`/events/${event.id}`}>{event.title}</Link>
                        </td>
                        <td>
                          <IconButton
                            onClick={(ev) => {
                              removeFavEvent(ev, event.id);
                            }}
                          >
                            <DeleteIcon color="error" />
                          </IconButton>
                        </td>
                      </tr>
                    </tbody>
                  </>
                );
              })
            ) : (
              <tbody>
                <tr>
                  <td>No favorites to display</td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      )}
    </div>
  );
};

export default FavoriteEvents;
