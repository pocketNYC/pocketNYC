import React from "react";
import { useSelector } from "react-redux";
import LoggedInUserFeed from "./LoggedInUserFeed";
import GuestUserFeed from "./GuestUserFeed";
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
          <div>
            <FeaturedEvents />
          </div>
          <br />
          <div>
            {id && <LoggedInUserFeed interests={interests} borough={borough} />}
          </div>
        </h2>
      ) : (
        <div>
          <FeaturedEvents />
          <br />
          <GuestUserFeed />
        </div>
      )}
    </div>
  );
};

export default Home;
