import React from "react";

function Questions() {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
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
            <h5>Frequently Asked Questions</h5>
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <ul>
              <li>
                {" "}
                <button
                  className="accordion-button collapsed"
                  type="button"
                  // data-bs-toggle="collapse"
                  // data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Where can I find resources?
                </button>
              </li>
              <ul>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body">
                    <li>Resource Answer</li>
                  </div>
                </div>
              </ul>
              <li>How do I change the language of the app?</li>
              <li>How can I update my information?</li>
              <li>Can I keep track of the resources or events I like?</li>
              <li>
                I have an event idea, can I submit an event to be featured?
              </li>
              <li>Are all events and resources free?</li>
            </ul>
          </div>
          <p>
            Have a question that isn't already answered? Please use the{" "}
            <b> Contact Us</b> form below and a member of our team will get back
            to you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Questions;
