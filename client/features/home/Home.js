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
      {isLoggedIn ? (
        <>
          <FeaturedEvents />
          <div className="p-2"> </div>
          {id && <LoggedInUserFeed interests={interests} borough={borough} />}
          <div className="p-2"> </div>
        </>
      ) : (
        <>
          <FeaturedEvents />
          <div className="p-2"> </div>
          <GuestUserFeed />
        </>
      )}
      <div className="p-2"> </div>
    </div>
  );
};

export default Home;
