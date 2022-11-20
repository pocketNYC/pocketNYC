import React from "react";

import { useNavigate } from "react-router-dom";

const AllResources = () => {
  const navigate = useNavigate();

  const navigateCategory = ({ target }) => {
    const category = target.id;
    navigate(`/resources/${category}`);
  };

  return (
    <div class="container-fluid" style={{ padding: "1rem" }}>
      <h1 class="fw-light text-center text-lg-center"> Resources </h1>
      <h3 class="fw-light text-center text-sm-center">
        Select a category below to start:
      </h3>
      <div class="row justify-content-center align-items-center row-cols-1 row-cols-md-4">
        {/* <div class="col"> */}
        <img
          id="clothes"
          class="img-thumbnail"
          onClick={navigateCategory}
          style={{ width: "350px", height: "350px" }}
          src="https://i.imgur.com/a7XnSA4.png"
        />
        {/* </div> */}
        {/* <div class="col"> */}
        <img
          style={{ width: "350px", height: "350px" }}
          src="https://i.imgur.com/3Qcso6v.png"
          id="city services"
          class="img-thumbnail"
          onClick={navigateCategory}
        />
        {/* </div> */}
        {/* <div class="col"> */}
        <img
          style={{ width: "350px", height: "350px" }}
          src="https://i.imgur.com/cLlro1G.png"
          id="seniors"
          class="img-thumbnail"
          onClick={navigateCategory}
        />
        {/* </div> */}
        {/* <div class="col"> */}
        <img
          style={{ width: "350px", height: "350px" }}
          src="https://i.imgur.com/3igRVdA.png"
          id="disability services"
          class="img-thumbnail"
          onClick={navigateCategory}
        />
        {/* </div> */}
        {/* <div class="col"> */}
        <img
          style={{ width: "350px", height: "350px" }}
          src="https://i.imgur.com/9dcsuh0.png"
          id="food"
          class="img-thumbnail"
          onClick={navigateCategory}
        />
        {/* </div>
        <div class="col"> */}
        <img
          style={{ width: "350px", height: "350px" }}
          src="https://i.imgur.com/IzYWITm.png"
          id="health"
          class="img-thumbnail"
          onClick={navigateCategory}
        />
        {/* </div>
        <div class="col"> */}
        <img
          id="education"
          onClick={navigateCategory}
          style={{ width: "350px", height: "350px" }}
          src="https://i.imgur.com/TuemK7p.png"
        />
        {/* </div>
        <div class="col"> */}
        <img
          style={{ width: "350px", height: "350px" }}
          src="https://i.imgur.com/oAkSSwU.png"
          id="employment"
          class="img-thumbnail"
          onClick={navigateCategory}
        />
        {/* </div>
        <div class="col"> */}
        <img
          style={{ width: "350px", height: "350px" }}
          src="https://i.imgur.com/dGwI5R7.png"
          id="finance"
          class="img-thumbnail"
          onClick={navigateCategory}
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default AllResources;
