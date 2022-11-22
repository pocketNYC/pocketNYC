import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../users/userSlice";
import Toggle from "react-toggle";
import "./toggleButton.css";
import { editUser } from "../users/userSlice";
import "./userTable.css";

function UserTable() {
  const users = useSelector((state) => state.user.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className="userTable">
      <table className="table table-hover">
        <thead>
          <tr className="table-headers-user-dash">
            <th className="user-containter">User</th>
            <th className="admin-priv-container">Administrator Privileges</th>
          </tr>
        </thead>
        <tbody>
          {users?.map(
            ({
              id,
              firstName,
              lastName,
              email,
              borough,
              interests,
              isAdmin,
            }) => {
              return (
                <tr key={id} className="user-info-dashboard-table">
                  <td className="user-dash-userInfo">
                    <div className="user-text">
                      <strong>Name:</strong> {`${firstName} ${lastName}`} <br />
                      <strong>Email:</strong> {email}
                    </div>
                  </td>
                  <td>
                    <label className="toggle-label">
                      <Toggle
                        defaultChecked={isAdmin}
                        // o: this should be a function defined outside of this
                        //  onClick... also, avoid using ternaries in this way
                        // isAdmin = isAdmin ? false : true;
                        onClick={() => {
                          isAdmin ? (isAdmin = false) : (isAdmin = true);
                          dispatch(
                            editUser({
                              id,
                              firstName,
                              lastName,
                              email,
                              borough,
                              interests,
                              isAdmin,
                            }),
                            [dispatch]
                          );
                        }}
                      />
                    </label>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
