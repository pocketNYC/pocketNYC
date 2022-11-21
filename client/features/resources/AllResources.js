import React from "react";

import { useNavigate } from "react-router-dom";

const AllResources = () => {
  const navigate = useNavigate();

  const navigateCategory = ({ target }) => {
    const category = target.id;
    navigate(`/resources/${category}`);
  };

  return (
    <div>
      <h1> Resources </h1>
      <h3> Select a category below to start:</h3>
      <img
        id="clothes"
        onClick={navigateCategory}
        style={{ width: "200px", height: "200px", padding: "10px" }}
        src="https://i.imgur.com/a7XnSA4.png"
        alt='NYC Resources for Clothes '
      />

      <img
        style={{ width: "200px", height: "200px", padding: "10px" }}
        src="https://i.imgur.com/3Qcso6v.png"
        alt="NYC Services"
        id="city services"
        onClick={navigateCategory}
      />

      <img
        style={{ width: "200px", height: "200px", padding: "10px" }}
        src="https://i.imgur.com/cLlro1G.png"
        alt= 'NYC Senior Services'
        id="seniors"
        onClick={navigateCategory}
      />

      <img
        style={{ width: "200px", height: "200px", padding: "10px" }}
        src="https://i.imgur.com/3igRVdA.png"
        id="disability services"
        alt='NYC Disability Resources'
        onClick={navigateCategory}
      />

      <img
        style={{ width: "200px", height: "200px", padding: "10px" }}
        src="https://i.imgur.com/9dcsuh0.png"
alt="NYC Food Resources"
        id="food"
        onClick={navigateCategory}
      />

      <img
        style={{ width: "200px", height: "200px", padding: "10px" }}
        src="https://i.imgur.com/IzYWITm.png"
        id="health"
        alt= "NYC Health Resources"
        onClick={navigateCategory}
      />

      <img
        id="education"
        onClick={navigateCategory}
        style={{ width: "200px", height: "200px", padding: "10px" }}
        alt='NYC Education Resources'
        src="https://i.imgur.com/TuemK7p.png"
      />

      <img
        style={{ width: "200px", height: "200px", padding: "10px" }}
        src="https://i.imgur.com/oAkSSwU.png"
        alt="NYC Employment Resources"
        id="employment"
        onClick={navigateCategory}
      />

      <img
        style={{ width: "200px", height: "200px", padding: "10px" }}
        src="https://i.imgur.com/dGwI5R7.png"
        alt="NYC Financial Services"
        id="finance"
        onClick={navigateCategory}
      />
    </div>
  );
};

export default AllResources;
