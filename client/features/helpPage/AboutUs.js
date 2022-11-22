import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function AboutUs() {
  return (
    <div>
      <h3>About Us</h3>
      <p>
        PocketNYC is a Progressive Web App (PWA) developed by Breana, Corinna,
        Cynthia, and Noor as their Fullstack Academy Capstone Project. PocketNYC
        is an app for New Yorkers, by New Yorkers, with the goal of sharing
        critical information regarding <strong>free and low-cost</strong>{" "}
        <Link to="/resources">resources</Link> and{" "}
        <Link to="/events"> events</Link> available around the city. From the
        PocketNYC team, we hope you enjoy using our app as much as we enjoyed
        making it for you!
      </p>
      <br />
      <h4>Breana Johnson</h4>
      <a href="https://www.linkedin.com/in/breanaj/" target={"_blank"}>
        <LinkedInIcon />
        linkedin.com/in/breanaj/
      </a>
      <br />
      <a href="https://github.com/bjohnson122" target={"_blank"}>
        <GitHubIcon />
        github.com/bjohnson122
      </a>
      <hr />
      <h4>Corinna De Jesus</h4>
      <a href="https://www.linkedin.com/in/corinnadejesus/" target={"_blank"}>
        <LinkedInIcon />
        linkedin.com/in/corinnadejesus/
      </a>
      <br />
      <a href="https://github.com/Corinnadejesus" target={"_blank"}>
        <GitHubIcon />
        github.com/Corinnadejesus
      </a>
      <hr />
      <h4>Cynthia Brito-Mena</h4>
      <a href="https://www.linkedin.com/in/cynthiabritomena/" target={"_blank"}>
        <LinkedInIcon />
        linkedin.com/in/cynthiabritomena/
      </a>
      <br />
      <a href="https://github.com/cb2866" target={"_blank"}>
        <GitHubIcon />
        github.com/cb2866
      </a>
      <hr />
      <h4>Noor Mudassar</h4>
      <a href="https://www.linkedin.com/in/noormudassar/" target={"_blank"}>
        <LinkedInIcon />
        linkedin.com/in/noormudassar/
      </a>
      <br />
      <a href="https://github.com/noormudassar" target={"_blank"}>
        <GitHubIcon />
        github.com/noormudassar
      </a>
      <hr />
    </div>
  );
}

export default AboutUs;
