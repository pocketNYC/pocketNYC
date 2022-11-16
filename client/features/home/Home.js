import React from "react";
import { useSelector } from "react-redux";
import UserFeed from "../users/UserFeed";
import FeaturedEvents from "../events/FeaturedEvents";

const Home = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const { id, firstName, interests, borough } = useSelector(
    (state) => state.auth.me
  );

  return (
    <div>
      {isLoggedIn ? (
        <h2>
          <div>Welcome, {firstName}!</div>
          <br />
          <div>Featured Events Component Here...</div>
          <br />
          <div>
            <FeaturedEvents />
          {id && <UserFeed interests={interests} borough={borough} />}
          </div>
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
