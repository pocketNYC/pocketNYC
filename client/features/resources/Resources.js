import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Tooltip } from "@mui/material";
import { fetchResources, selectResources } from "./resourcesSlice";
import { useDispatch, useSelector } from "react-redux";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LoadingScreen from "../loading/LoadingScreen";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Resources = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resources = useSelector(selectResources);
  let [resourcesList, setResourcesList] = useState([]);
  const [render, setRender] = useState(true);
  const [key, setKey] = useState("all");
  // const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const loading = useSelector((state) => state.resources.loading);

  useEffect(() => {
    dispatch(fetchResources());
  }, []);

  const filterCategoryButton = (ev) => {
    const category = ev.target.dataset.rrUiEventKey;

    if (category === "All") {
      setResourcesList(resources);
    } else {
      setResourcesList(
        resources?.filter((resource) => resource.tag?.includes(category))
      );
    }
    render ? setRender(false) : setRender(true);
  };

  resourcesList.length === 0 && resources.length > 0
    ? setResourcesList(resources)
    : null;

  const tags = [
    "city services",
    "clothes",
    "disability services",
    "education",
    "employment",
    "finance",
    "food",
    "health",
    "seniors",
  ];

  function capitalize(word) {
    return word
      .toLowerCase()
      .replace(/(^\w)|([-\s]\w)/g, (firstLetter) => firstLetter.toUpperCase());
  }

  return (
    <div className="container-fluid">
      {/* {loading ? (
        <LoadingScreen />
      ) : ( */}
      <div className="container-fluid">
        <h1 className="fw-light text-center text-lg-center p-4"> Resources </h1>

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
            return <Tab key={tag} eventKey={tag} title={capitalize(tag)}></Tab>;
          })}
        </Tabs>

        <div className="tab-content" id="nav-tabContent">
          <div className="row row-cols-1 row-cols-md-2 p-4 g-4">
            {resourcesList?.map(({ id, name, imageUrl, borough, tag }) => (
              <div key={id}>
                <div className="card text-center h-100" key={id}>
                  <img
                    className="card-img-top"
                    src={imageUrl}
                    alt={`Clip art for the ${name} resource`}
                    onClick={() => navigate(`/resources/${id}`)}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"> {borough.join(', ')}, NY</p>
                    <div>
                      <Button
                        size="small"
                        onClick={() => navigate(`/resources/${id}`)}
                      >
                        More Info
                      </Button>
                    </div>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      Tags: {tag?.join(", ")}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Tooltip title="Scroll to Top">
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
        </Tooltip>
      </div>
    </div>
  );
};

export default Resources;
