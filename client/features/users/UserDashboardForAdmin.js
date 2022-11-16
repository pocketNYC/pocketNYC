import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "./userSlice";

function UserDashboardForAdmin() {
  const users = useSelector((state) => state.user.allUsers);
  const [buttonText, setButtonText] = useState("Click Test");

  const toggler = () => {
    if (buttonText === "BASIC") {
      setButtonText("ADMIN USER");
    }
    setButtonText("BASIC");
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>All Registered Users</h2>
      <table>
        <thead>
          <tr
            className="table-headers-user-dash"
            style={{ textAlign: "center" }}
          >
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Administrator Privileges</th>
          </tr>
        </thead>
        <tbody
          className="user-info-dashboard-table"
          style={{ textAlign: "center" }}
        >
          {users?.map(({ id, firstName, lastName, email, isAdmin }) => {
            return (
              <tr key={id}>
                <td>
                  <div>{firstName}</div>
                </td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{isAdmin === false ? "no" : "yes"}</td>
                <td>
                  <button onClick={toggler}>
                    {isAdmin === false ? "BASIC" : "ADMIN USER"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserDashboardForAdmin;
