import React from "react";
import { useSelector } from "react-redux";

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <h2>Welcome, {username}</h2>
      <h2>Featured Events</h2>
      <h2>Feed</h2>
    </div>
  );
};

export default Home;
