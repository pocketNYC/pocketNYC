import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import formInterest from "./formInterest";
import { authenticate } from "../../app/store";

function Signup({ displayName, name }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const animated = makeAnimated();
  const [validated, setValidated] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (formInterest) => {
    let selections = [];
    formInterest.map((interest) => selections.push(interest.value));
    setSelectedOptions(selections);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const firstName = evt.target.firstName.value;
    const lastName = evt.target.lastName.value;
    const email = evt.target.email.value;
    const password = evt.target.password.value;
    const interests = selectedOptions;
    const borough = evt.target.borough.value;

    dispatch(
      authenticate({
        firstName,
        lastName,
        email,
        password,
        interests,
        borough,
        method: "signup",
      })
    );
    setValidated(true);
    navigate('/')
  };

  return (
    <>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        name={name}
      >
        <Form.Group className="mb-6" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter First Name" />
          <Form.Control.Feedback type="invalid">
            Please provide your first name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-6" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Your Last Name"
          />
          <Form.Control.Feedback type="invalid">
            Please provide your last name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-6" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control required type="text" placeholder="Enter Email" />
          <Form.Control.Feedback type="invalid">
            Please provide an email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-6" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" placeholder="Enter Password" />
          <Form.Control.Feedback type="invalid">
            Please provide a password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-6" controlId="borough">
          <Form.Label>Borough</Form.Label>
          <Form.Select>
            <option defaultValue>Select</option>
            <option value="Bronx">Bronx</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Staten Island">Staten Island</option>
          </Form.Select>
        </Form.Group>
        <br />
        <label htmlFor="interest" style={{ padding: "10px" }}>
          Choose your categories of interest (select up to 3):
        </label>
        <Select
          isMulti
          options={formInterest}
          components={animated}
          closeMenuOnSelect={false}
          onChange={handleChange}
          isOptionDisabled={() => selectedOptions.length >= 3}
        />
        <Button variant="primary" type="submit">
          {displayName}
        </Button>
      </Form>
    </>
  );
}

export default Signup;
