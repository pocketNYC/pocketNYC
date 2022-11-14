import React from "react";
import { useSelector } from "react-redux";

function Admin() {
  const { firstName } = useSelector((state) => state.auth.me);

  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
      <br />
      <h2>
        Pending Events Here
        <hr />
        Edit Admin Profile
        <hr />
        All Users Here
        <hr />
        Edit a User Here
      </h2>
    </div>
  );
}

export default Admin;
