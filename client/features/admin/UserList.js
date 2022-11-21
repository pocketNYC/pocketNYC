import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../users/userSlice";
import Toggle from "react-toggle";
import "./toggleButton.css";
import UserTable from "./UserTable";
import { editUser } from "../users/userSlice";

function UserList() {
  const users = useSelector((state) => state.user.allUsers);
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
