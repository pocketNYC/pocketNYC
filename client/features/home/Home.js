import React from "react";
import { useSelector } from "react-redux";
import UserFeed from "../users/UserFeed";

/**
 * COMPONENT
 */

const Home = () => {
  const { id, firstName } = useSelector((state) => state.auth.me);

  return (
    <div>
      <h2>
        Welcome, {firstName}!
        <br />
        Featured Events Component Here...
        {id && <UserFeed />}
      </h2>
    </div>
  );
};

export default Home;
