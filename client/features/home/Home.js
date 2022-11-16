import React from "react";
import { useSelector } from "react-redux";
import UserFeed from "../users/UserFeed";
import FeaturedEvents from "../events/FeaturedEvents";

const Home = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const { id, firstName, interests, borough } = useSelector(
    (state) => state.auth.me
  );

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

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
          Today is {date}
          <FeaturedEvents />
        </h2>
      )}
    </div>
  );
};

export default Home;
