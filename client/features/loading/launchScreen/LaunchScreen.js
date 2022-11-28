import React from "react";

function LaunchScreen() {
  const myStyle={
    backgroundImage: 
"url('LoadingImage.jpg')",
    height:'100vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};


  return (
    <div className="loading-page" style={{ backgroundImage: "url(LoadingImage.jpg)", height:'100vh', display:'flex',   backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',}}>
      <h1 style={{ color: "red" }}>
        This page will load in a New York minute!
      </h1>
      {/* <img src="LoadingImage.jpg" alt="" /> */}
    </div>
  );
}

export default LaunchScreen;
