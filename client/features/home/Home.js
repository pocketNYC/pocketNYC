import React from "react";
import { useSelector } from "react-redux";
import LoggedInUserFeed from "./LoggedInUserFeed";
import GuestUserFeed from "./GuestUserFeed";
import FeaturedEvents from "./FeaturedEvents";

const Home = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const { id, interests, borough } = useSelector((state) => state.auth.me);

  return (
    <div className="container-fluid">
      <div>
        {isLoggedIn ? (
          <>
            <FeaturedEvents />
            <div className="p-2"> </div>
            {id && <LoggedInUserFeed interests={interests} borough={borough} />}
          </>
        ) : (
          <>
            <FeaturedEvents />
            <div className="p-2"> </div>
            <GuestUserFeed />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
