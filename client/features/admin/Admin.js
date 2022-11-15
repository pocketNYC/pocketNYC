import React from "react";
import { useSelector } from "react-redux";

function Admin() {
  const { firstName } = useSelector((state) => state.auth.me);

  return (
    <div>
      <br />
      <h2>
        Pending Events Here
        <hr />
        Edit Admin Profile
        <hr />
        Edit a User Here
      </h2>
    </div>
  );
}

export default Admin;
