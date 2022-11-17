import React from "react";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Questions from "./Questions";

function Faq() {
  return (
    <div style={{padding: '20px'}}>
      <Questions />
      <hr />
      <AboutUs />
      <hr />
      <ContactUs />
    </div>
  );
}

export default Faq;
