import React from "react";
import { useSelector } from "react-redux";
import UserList from "./UserList";

function Admin() {
  const { firstName } = useSelector((state) => state.auth.me);

  return (
    <div>
      <br />
      <h2>
        Pending Events Here
        <hr />
        {/* TODO: might change later */}
        <UserList />
      </h2>
    </div>
  );
}

export default Admin;
