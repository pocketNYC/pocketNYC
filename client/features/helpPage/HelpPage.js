import React from "react";
import AboutUs from "./AboutUs";
import Questions from "./Questions";

function Faq() {
  return (
    <div style={{ padding: "20px" }}>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Frequently Asked Questions
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <Questions />
            </div>
          </div>
        </div>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOutsideTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOutsideTwo"
                aria-expanded="false"
                aria-controls="flush-collapseOutsideTwo"
              >
                About Us
              </button>
            </h2>
            <div
              id="flush-collapseOutsideTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOutsideTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <AboutUs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
