import React from "react";

import { useNavigate } from "react-router-dom";

const AllResources = () => {
  const navigate = useNavigate();

  const navigateCategory = (ev) => {
    const category = ev.target.id;
    navigate(`/resources/${category}`);
  };

  return (
    <div>
      <h1> Resources </h1>
      <h3> Select a category below to start:</h3>
      <img
        id="clothes"
        onClick={(ev) => navigateCategory(ev)}
        style={{ width: "100px", height: "100px", padding: "10px" }}
        src="https://i.imgur.com/a7XnSA4.png"
      />

      <img
        style={{ width: "100px", height: "100px", padding: "10px" }}
        src="https://i.imgur.com/3Qcso6v.png"
        id="city services"
        onClick={(ev) => navigateCategory(ev)}
      />

      <img
        style={{ width: "100px", height: "100px", padding: "10px" }}
        src="https://i.imgur.com/cLlro1G.png"
        id="seniors"
        onClick={(ev) => navigateCategory(ev)}
      />

      <img
        style={{ width: "100px", height: "100px", padding: "10px" }}
        src="https://i.imgur.com/3igRVdA.png"
        id="disability services"
        onClick={(ev) => navigateCategory(ev)}
      />

      <img
        style={{ width: "100px", height: "100px", padding: "10px" }}
        src="https://i.imgur.com/9dcsuh0.png"
        id="food"
        onClick={(ev) => navigateCategory(ev)}
      />

      <img
        style={{ width: "100px", height: "100px", padding: "10px" }}
        src="https://i.imgur.com/IzYWITm.png"
        id="health"
        onClick={(ev) => navigateCategory(ev)}
      />

      <img
        id="education"
        onClick={(ev) => navigateCategory(ev)}
        style={{ width: "100px", height: "100px", padding: "10px" }}
        src="https://i.imgur.com/TuemK7p.png"
      />

      <img
        style={{ width: "100px", height: "100px", padding: "10px" }}
        src="https://i.imgur.com/oAkSSwU.png"
        id="employment"
        onClick={(ev) => navigateCategory(ev)}
      />

      <img
        style={{ width: "100px", height: "100px", padding: "10px" }}
        src="https://i.imgur.com/dGwI5R7.png"
        id="finance"
        onClick={(ev) => navigateCategory(ev)}
      />
    </div>
  );
};

export default AllResources;
