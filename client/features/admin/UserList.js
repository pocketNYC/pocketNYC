import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllUsers } from "../users/userSlice";
import "./toggleButton.css";
import './userTable.css'
import UserTable from "./UserTable";

function UserList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Users Dashboard</h2>
      <UserTable />
    </div>
  );
}

export default UserList;
