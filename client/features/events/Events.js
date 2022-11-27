import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { fetchAllApprovedEvents } from "./eventsSlice";
import { me } from "../auth/authSlice";
import { Button } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddIcon from "./AddIcon";
import LoadingScreen from "../loading/LoadingScreen";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function Events() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const events = useSelector((state) => state.events.events);
  const loading = useSelector((state) => state.events.loading);
  let [eventList, setEventList] = useState([]);
  const [render, setRender] = useState(true);
  const [key, setKey] = useState("all");

  useEffect(() => {
    dispatch(fetchAllApprovedEvents());
  }, [dispatch]);

  const filterCategoryButton = (ev) => {
    const category = ev.target.dataset.rrUiEventKey;

    if (category === "All") {
      setEventList(events);
    } else {
      setEventList(events.filter((event) => event.tag.includes(category)));
    }
    render ? setRender(false) : setRender(true);
  };

  eventList.length === 0 && events.length > 0 ? setEventList(events) : null;

  const tags = [
    "city-services",
    "education",
    "employment",
    "family-friendly",
    "health",
    "holidays",
    "multicultural",
    "arts",
    "outdoors",
    "sports",
  ];

  function capitalize(word) {
    return word
      .toLowerCase()
      .replace(/(^\w)|([-\s]\w)/g, (firstLetter) => firstLetter.toUpperCase());
  }
  return (
    <div className="container-fluid">
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="container-fluid">
          {isLoggedIn && <AddIcon />}
          <h1 className="fw-light text-center text-lg-center p-4"> Events </h1>

          <Tabs
            activeKey={key}
            id="controlled-tab-example"
            transition={false}
            onSelect={(k) => setKey(k)}
            className="mb-3 justify-content-center text-secondary"
            onClick={(ev) => filterCategoryButton(ev)}
          >
            <Tab eventKey="all" title="All"></Tab>
            {tags?.map((tag) => {
              return (
                <Tab key={tag} eventKey={tag} title={capitalize(tag)}></Tab>
              );
            })}

            {/* <Tab eventKey={tag} title={capitalize(tag)}></Tab> */}
          </Tabs>

          {/* <ul
            className="nav nav-tabs justify-content-center"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link  text-secondary"
                id="all"
                data-bs-toggle="tab"
                data-bs-target="#all"
                type="button"
                role="tab"
                aria-controls="all"
                aria-selected="true"
                onClick={(ev) => filterCategoryButton(ev)}
              >
                All
              </button>
            </li>

            {tags?.map((tag) => (
              <li key={tag} className="nav-item" role="presentation">
                <button
                  className="nav-link text-secondary"
                  id={tag}
                  data-bs-toggle="tab"
                  data-bs-target={`#${tag}`}
                  type="button"
                  role="tab"
                  aria-controls={tag}
                  aria-selected="false"
                  onClick={(ev) => filterCategoryButton(ev)}
                >
                  {capitalize(tag)}
                </button>
              </li>
            ))}
          </ul> */}

          <div className="tab-content" id="nav-tabContent">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {eventList?.map(({ id, image, title, start, tag }) => (
                <div key={id}>
                  <div className="card text-center h-100">
                    <img
                      className="card-img-top "
                      src={image}
                      alt={`image of ${title}`}
                      onClick={() => navigate(`/events/${id}`)}
                    />

                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {moment(start).format("dddd, MMMM Do, YYYY")}
                      </h6>
                      {/* <small className="card-subtitle mb-2 text-muted">
                        Tags: {tag.join(", ")}
                      </small> */}
                      <div>
                        <Button
                          size="small"
                          onClick={() => navigate(`/events/${id}`)}
                        >
                          More Info
                        </Button>
                      </div>
                    </div>
                    <div className="card-footer">
                      <small className="card-subtitle mb-2 text-muted">
                        Tags: {tag.join(", ")}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <OverlayTrigger
              key="top"
              placement="top"
              overlay={<Tooltip>Scroll to top</Tooltip>}
            >
              <Button
                className="scroll"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
                variant="contained"
                size="small"
                style={{
                  position: "fixed",
                  bottom: "120px",
                  right: "5px",
                  textAlign: "center",
                }}
              >
                <KeyboardArrowUpIcon
                  style={{ color: "white" }}
                ></KeyboardArrowUpIcon>
              </Button>
            </OverlayTrigger>
          </div>
        </div>
      )}
    </div>
  );
}
