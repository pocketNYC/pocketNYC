import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, updateAdminStatus } from "../users/userSlice";

function UserList() {
  const users = useSelector((state) => state.user.allUsers);
  const [buttonText, setButtonText] = useState('Click Test');

  const toggler = (id, isAdmin) => {
    // TODO: update This function
    //updateAdminStatus(id, isAdmin)
 console.log("toggled")
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers())
    //dispatch(updateAdminStatus({id, isAdmin}));
  }, [dispatch]);

  return (
    <div>
      <h2  style={{ textAlign: "center" }}>Users Dashboard</h2>
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
          {users?.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <div>{user.firstName}</div>
                </td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin === false ? "no" : "yes"}</td>
                <td>
                  <button onClick={() => {console.log('toggled')}}>
                    {user.isAdmin === false ? "BASIC" : "ADMIN USER"}
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

export default UserList;
