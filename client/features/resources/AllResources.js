import React from "react";

import { useNavigate } from "react-router-dom";

const AllResources = () => {
  const navigate = useNavigate();

  const navigateCategory = ({ target }) => {
    const category = target.id;
    navigate(`/resources/${category}`);
  };

  return (
    <div className="container-fluid" style={{ padding: "1rem" }}>
      <h1 className="fw-light text-center text-lg-center"> Resources </h1>
      <h3 className="fw-light text-center text-sm-center">
        Select a category below to start:
      </h3>
      <div className="row justify-content-center align-items-center row-cols-1 row-cols-md-4">
        <div className="cards">
          <img
            id="clothes"
            alt="clothing thumbnail"
            className="img-thumbnail"
            onClick={navigateCategory}
            style={{ width: "350px", height: "350px" }}
            src="https://i.imgur.com/a7XnSA4.png"
          />
        </div>
        <div className="cards">
          <img
            style={{ width: "350px", height: "350px" }}
            src="https://i.imgur.com/3Qcso6v.png"
            id="city services"
            alt="city services thumbnail"
            className="img-thumbnail"
            onClick={navigateCategory}
          />
        </div>
        <div className="cards">
          <img
            style={{ width: "350px", height: "350px" }}
            src="https://i.imgur.com/cLlro1G.png"
            id="seniors"
            className="img-thumbnail"
            alt="seniors thumbnail"
            onClick={navigateCategory}
          />
        </div>
        <div className="cards">
          <img
            style={{ width: "350px", height: "350px" }}
            src="https://i.imgur.com/3igRVdA.png"
            id="disability services"
            className="img-thumbnail"
            alt="disability services thumbnail"
            onClick={navigateCategory}
          />
        </div>
        <div className="cards">
          <img
            style={{ width: "350px", height: "350px" }}
            src="https://i.imgur.com/9dcsuh0.png"
            id="food"
            className="img-thumbnail"
            alt="food thumbnail"
            onClick={navigateCategory}
          />
        </div>
        <div className="cards">
          <img
            style={{ width: "350px", height: "350px" }}
            src="https://i.imgur.com/IzYWITm.png"
            id="health"
            className="img-thumbnail"
            alt="health thumbnail"
            onClick={navigateCategory}
          />
        </div>
        <div className="cards">
          <img
            id="education"
            className="img-thumbnail"
            alt="education thumbnail"
            onClick={navigateCategory}
            style={{ width: "350px", height: "350px" }}
            src="https://i.imgur.com/TuemK7p.png"
          />
        </div>
        <div className="cards">
          <img
            style={{ width: "350px", height: "350px" }}
            src="https://i.imgur.com/oAkSSwU.png"
            id="employment"
            alt="employment thumbnail"
            className="img-thumbnail"
            onClick={navigateCategory}
          />
        </div>
        <div className="cards">
          <img
            style={{ width: "350px", height: "350px" }}
            src="https://i.imgur.com/dGwI5R7.png"
            id="finance"
            alt="finance thumbnail"
            className="img-thumbnail"
            onClick={navigateCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default AllResources;
