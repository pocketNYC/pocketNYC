import React from "react";
import "./LaunchScreen.css";

function LaunchScreen() {
// const splash = document.querySelector('.splash')

// document.addEventListener('DOMContentLoaded', (e) => {
//   setTimeout(() => {
//     splash.classList.add('display-none')
//   }, 2000);
// })
  return (
    <div className="splash fade-out" style={{backgroundImage: 'url("LoadingImage.jpg")'}}>
      {/* <h1 style={{ color: "red" }}>
        This page will load in a New York minute!
      </h1> */}

    </div>
  );
}

export default LaunchScreen;
