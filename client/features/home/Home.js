import React from "react";
import { useSelector } from "react-redux";
import UserFeed from "../users/UserFeed";

const Home = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const { id, firstName } = useSelector((state) => state.auth.me);

  return (
    <div>
      {isLoggedIn ? (
        <h2>
          Welcome, {firstName}!
          <br />
          Featured Events Component Here...
          {id && <UserFeed />}
        </h2>
      ) : (
        <h2>Featured Events Component Here... </h2>
      )}
    </div>
  );
};

export default Home;
