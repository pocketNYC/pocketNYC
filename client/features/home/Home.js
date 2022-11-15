import React from "react";
import { useSelector } from "react-redux";
import UserFeed from "../users/UserFeed";
import FeaturedEvents from "../events/FeaturedEvents";

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
          <FeaturedEvents />
          {id && <UserFeed />}
        </h2>
      ) : (
        <h2>
          Featured Events Component Here...
          <FeaturedEvents />
        </h2>
      )}
    </div>
  );
};

export default Home;
