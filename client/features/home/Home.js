import React from "react";
import { useSelector } from "react-redux";
import Admin from "../admin/Admin";

/**
 * COMPONENT
 */

const Home = (props) => {
  const { isAdmin, firstName } = useSelector((state) => state.auth.me);

  return (
    <div>
      {isAdmin ? (
        <Admin />
      ) : (
        <>
          <h2>Welcome, {firstName}!</h2>
          <h2>Featured Events</h2>
          <h2>Feed</h2>
        </>
      )}
    </div>
  );
};

export default Home;
