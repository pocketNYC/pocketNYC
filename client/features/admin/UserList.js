import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, updateAdminStatus } from "../users/userSlice";
import Toggle from "react-toggle";
import "./toggleButton.css";

function UserList() {
  const users = useSelector((state) => state.user.allUsers);
  const dispatch = useDispatch();
  const [adminStatus, setAdminStatus] = useState(false)

  const toggleAdminStatus = (id, isAdmin) => {
    // TODO: update This function
    //dispatch(updateAdminStatus({ id, isAdmin }, [dispatch]));
    console.log("toggled");
  };

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Users Dashboard</h2>
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
          {users?.map(({id, firstName, lastName, email, isAdmin}) => {
            return (
              <tr key={id}>
                <td>
                  <div>{firstName}</div>
                </td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>
                  <label>
                    <Toggle
                      defaultChecked={isAdmin}
                      value={isAdmin.toString()}
                      onChange={toggleAdminStatus}
                      onClick={(e) => console.log(e.target.value) }
                    />
                  </label>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
