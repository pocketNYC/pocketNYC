import React from "react";

function UserFeed({ interests, borough }) {

  //user feed: APPROVED events, in my BOROUGH, matching my INTERESTS
  return (
    <div>
      <p>USER FEED HERE:</p>
      <p>
        I'm interested in {interests} events happening in {borough}
      </p>
    </div>
  );
}

export default UserFeed;
