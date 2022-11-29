import React from "react";
import { useSelector } from "react-redux";
import LoggedInUserFeed from "./LoggedInUserFeed";
import GuestUserFeed from "./GuestUserFeed";
import FeaturedEvents from "./FeaturedEvents";
import LoadingScreen from "../loading/LoadingScreen";

const Home = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const { id, interests, borough } = useSelector((state) => state.auth.me);
  const loading = useSelector((state) => state.events.loading);

  return (
    <div className="container-fluid">
      {loading && <LoadingScreen />}
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
