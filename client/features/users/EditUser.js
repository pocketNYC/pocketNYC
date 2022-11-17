import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUser } from "./userSlice";

function EditUser() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.me.id);
  const user = useSelector((state) => state.user.singleUser);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [borough, setBorough] = useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(editUser({ userId, firstName, lastName, email, borough }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h4>Edit User Info</h4>
      </label>
      <p>First Name: {user.firstName}</p>
      <input
        name="First Name"
        value={firstName || ""}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <p>Last Name: {user.lastName}</p>
      <input
        name="Last Name"
        value={lastName || ""}
        onChange={(e) => setLastName(e.target.value)}
      />
      <p>Email: {user.email || ""}</p>
      <input
        name="email"
        value={email || ""}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <select onChange={(e) => setBorough(e.target.value)}>
        <option defaultValue>Select</option>
        <option value="Bronx">Bronx</option>
        <option value="Brooklyn">Brooklyn</option>
        <option value="Queens">Queens</option>
        <option value="Manhattan">Manhattan</option>
        <option value="Staten Island">Staten Island</option>
      </select>
      <br />

      <br />
      <button type="submit">Update</button>
    </form>
  );
}
export default EditUser;
