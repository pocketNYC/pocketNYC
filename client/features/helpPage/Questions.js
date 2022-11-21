import React from "react";
import { Link } from "react-router-dom";

function Questions() {
   return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Where can I find resources?
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Resources can be found by clicking <Link to="/resources">here</Link>{" "}
            or by clicking on "Resources" in the navigation bar.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Can I update my information?
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Yes. Navigate to the "User" section and click on "My Profile. From
            there, you can see your User Information and an "Edit Profile"
            button. <br />
            <strong>User > My Profile > User Information > Edit Profile</strong>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Can I keep track of the resources or events I like?
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Yes. You can add events and/or resources to your "Favorites" for
            easy access. Your "Favorites" are located in the User section of the
            navigation bar.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingFour">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            I have an event that I am planning, can I submit an event to be
            featured?
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFour"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Of course! You can always submit an event{" "}
            <Link to="/add">here</Link> or click the plus sign ('+')
            towards the bottom of the screen. Please be advised that you{" "}
            <strong> must have an account</strong> to submit an event.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingFive">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFive"
            aria-expanded="false"
            aria-controls="flush-collapseFive"
          >
            Are all events and resources free?
          </button>
        </h2>
        <div
          id="flush-collapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFive"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Our goal is to be a hub for low-cost or free services and events. To
            the best of our knowledge, all of our resources and events are free,
            however, because each event is independently managed, that
            information is subject to change.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingSix">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseSix"
            aria-expanded="false"
            aria-controls="flush-collapseSix"
          >
            How do I log out of my account?
          </button>
        </h2>
        <div
          id="flush-collapseSix"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingSix"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Navigate to the "User" section of the navigation bar. Then, click
            "Log out"
            <br />
            <strong>User > Log out</strong>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingSeven">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseSeven"
            aria-expanded="false"
            aria-controls="flush-collapseSeven"
          >
            How do I change the language of the app?
          </button>
        </h2>
        <div
          id="flush-collapseSeven"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingSeven"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            We are currently in the process of making our app accessible to
            people that speak languages other than English. Please check back
            periodically.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;



