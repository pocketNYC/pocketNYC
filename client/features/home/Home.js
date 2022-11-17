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
          <div>
            <FeaturedEvents />
          </div>
          <br />
          <div>
            {id && <UserFeed interests={interests} borough={borough} />}
          </div>
        </h2>
      ) : (
        <h2>
     
          <FeaturedEvents />
        </h2>
      )}
    </div>
  );
};

export default Home;
