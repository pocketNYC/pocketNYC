import React, { useEffect, useState } from "react";
import resourcesSlice, {
  fetchResources,
  selectResources,
} from "./resourcesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const AllResources = () => {
  const dispatch = useDispatch();
  const resources = useSelector(selectResources);
  let [resourcesList, setResourcesList] = useState([]);

  useEffect(() => {
    dispatch(fetchResources());
  }, [dispatch]);

  const filterCategoriesButton = (ev) => {
    const category = ev.target.id;

    if (category === "clothes") {
      setResourcesList(
        resources.filter((resource) => resource.tag.includes(category))
      );
    }
    if (category === "city services") {
      setResourcesList(
        resources.filter((resource) => resource.tag.includes(category))
      );
    }
    if (category === "seniors") {
      setResourcesList(
        resources.filter((resource) => resource.tag.includes(category))
      );
    }
    if (category === "disability services") {
      setResourcesList(
        resources.filter((resource) => resource.tag.includes(category))
      );
    }
    if (category === "food") {
      setResourcesList(
        resources.filter((resource) => resource.tag.includes(category))
      );
    }
    if (category === "health") {
      setResourcesList(
        resources.filter((resource) => resource.tag.includes(category))
      );
      console.log(resourcesList);
    }
    if (category === "education") {
      setResourcesList(
        resources.filter((resource) => resource.tag.includes(category))
      );
      console.log(resourcesList);
    }
    if (category === "employment") {
      setResourcesList(
        resources.filter((resource) => resource.tag.includes(category))
      );
    }
    if (category === "finance") {
      setResourcesList(
        resources.filter((resource) => resource.tag.includes(category))
      );
    }
  };

  return (
    <div>
      <h1> Resources </h1>
      <h3> Select a category below to start:</h3>
      <img
        id="clothes"
        onClick={(ev) => filterCategoriesButton(ev)}
        style={{ width: "100px", height: "100px", padding: "10px" }}
        src="https://i.imgur.com/a7XnSA4.png"
      />

      <img
        style={{ width: "100px", height: "100px", padding: "10px" }}
        src="https://i.imgur.com/3Qcso6v.png"
        id="city services"
        onClick={(ev) => filterCategoriesButton(ev)}
      />

      <img
        style={{ width: "100px", height: "100px", padding: "10px" }}
        src="https://i.imgur.com/cLlro1G.png"
        id="seniors"
        onClick={(ev) => filterCategoriesButton(ev)}
      />

      <img
        style={{ width: "100px", height: "100px", padding: "10px" }}
        src="https://i.imgur.com/3igRVdA.png"
        id="disability services"
        onClick={(ev) => filterCategoriesButton(ev)}
      />

      <img
        style={{ width: "100px", height: "100px", padding: "10px" }}
        src="https://i.imgur.com/9dcsuh0.png"
        id="food"
        onClick={(ev) => filterCategoriesButton(ev)}
      />

      <img
        style={{ width: "100px", height: "100px", padding: "10px" }}
        src="https://i.imgur.com/IzYWITm.png"
        id="health"
        onClick={(ev) => filterCategoriesButton(ev)}
      />

      <img
        id="education"
        onClick={(ev) => filterCategoriesButton(ev)}
        style={{ width: "100px", height: "100px", padding: "10px" }}
        src="https://i.imgur.com/TuemK7p.png"
      />

      <img
        style={{ width: "100px", height: "100px", padding: "10px" }}
        src="https://i.imgur.com/oAkSSwU.png"
        id="employment"
        onClick={(ev) => filterCategoriesButton(ev)}
      />

      <img
        style={{ width: "100px", height: "100px", padding: "10px" }}
        src="https://i.imgur.com/dGwI5R7.png"
        id="finance"
        onClick={(ev) => filterCategoriesButton(ev)}
      />

      <ul>
        {resourcesList.map((resource) => {
          return (
            <li key={resource.id}>
              <div>
                <h3>{resource.name}</h3>
                <img
                  src={resource.imageUrl}
                  style={{ width: "200px", height: "200px" }}
                />
                <p>About: {resource.description}</p>
                <p>Address: {resource.address}</p>
                <p>
                  More Info:{" "}
                  <a href={resource.hyperlink}>{resource.hyperlink}</a>
                </p>
                <p>Tags: {resource.tag ? resource.tag.join(", ") : null}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllResources;
