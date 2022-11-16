import React from "react";
import { useSelector } from "react-redux";
import UserFeed from "../users/UserFeed";

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
            {id && <UserFeed interests={interests} borough={borough} />}
          </div>
        </h2>
      ) : (
        <h2>Featured Events Component Here... </h2>
      )}
    </div>
  );
};

export default Home;
