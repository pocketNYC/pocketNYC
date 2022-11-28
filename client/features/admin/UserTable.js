import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../users/userSlice";
import Toggle from "react-toggle";
import "./toggleButton.css";
import { editUser } from "../users/userSlice";
import "./userTable.css";
import LoadingScreen from "../loading/LoadingScreen";

function UserTable() {
  const users = useSelector((state) => state.user.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className="p-4">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">User</th>
            <th scope="col">Administrator Privileges</th>
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
                <tr key={id}>
                  <td>
                    <strong>Name:</strong> {`${firstName} ${lastName}`}
                    <br />
                    <strong>Email:</strong> {email}
                  </td>
                  <td>
                    <label>
                      <Toggle
                        defaultChecked={isAdmin}
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
