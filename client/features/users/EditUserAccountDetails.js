import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { editUser } from "./userSlice";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import formInterest from "../forms/formInterest";
import { Update } from "@mui/icons-material";

function EditUserProfile({ user }) {
  const { id, firstName, lastName, email, interests, borough } = user;

  const [userFirstName, setUserFirstName] = useState(firstName);
  const [userLastName, setUserLastName] = useState(lastName);
  const [userEmail, setUserEmail] = useState(email);
  const [userInterests, setUserInterests] = useState(interests);
  const [userBorough, setUserBorough] = useState(borough);
  const [validated, setValidated] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const dispatch = useDispatch();
  const animated = makeAnimated();

  const handleChange = (formInterest) => {
    let selections = [];
    formInterest.map((interest) => selections.push(interest.value));
    setSelectedOptions(selections);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(
      editUser({
        id,
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
        borough: userBorough,
        interests: selectedOptions,
      })
    );
  };

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>Edit Your Details Below</h2>
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-6" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            type="text"
            onChange={(e) => {
              setUserFirstName(e.target.value);
            }}
            defaultValue={userFirstName}
            placeholder="Enter First Name"
          />
          <Form.Control.Feedback type="invalid">
            Please provide your first name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-6" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            type="text"
            defaultValue={userLastName}
            onChange={(e) => {
              setUserLastName(e.target.value);
            }}
            placeholder="Enter Your Last Name"
          />
          <Form.Control.Feedback type="invalid">
            Please provide your last name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-6" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            defaultValue={userEmail}
            placeholder="Enter Email"
          />
          <Form.Control.Feedback type="invalid">
            Please provide an email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-6" controlId="borough">
          <Form.Label>Borough</Form.Label>
          <Form.Select
            onChange={(e) => {
              setUserBorough(e.target.value);
            }}
          >
            <option defaultValue>{borough}</option>
            <option value="Bronx">Bronx</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Staten Island">Staten Island</option>
          </Form.Select>
        </Form.Group>
        <br />
        <label htmlFor="interest" style={{ padding: "10px" }}>
          Choose your categories of interest: (limit 3*)
        </label>
        <Select
          isMulti
          options={formInterest}
          components={animated}
          closeMenuOnSelect={false}
          onChange={handleChange}
          isOptionDisabled={() => selectedOptions.length >= 3}
          className="interest-multi-select"
        />
        <Button variant="primary" type="submit">
          SUBMIT
        </Button>
      </Form>
    </>
  );
}

export default EditUserProfile;
