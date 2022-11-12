import React from "react";
import { useSelector } from "react-redux";

/**
 * COMPONENT
 */
 
const Home = (props) => {
  const firstName = useSelector((state) => state.auth.me.firstName);

  return (
    <div>

      <h3>Welcome, {firstName}</h3>
      <h2>Featured Events</h2>
      <h2>Feed</h2>
    </div>
  );
};

export default Home;
