import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { authenticate } from "../../app/store";
import Select from "react-select";
import makeAnimated from "react-select/animated";

function Signup() {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);

  const formInterest = [
    { value: "1", label: "Holidays" },
    { value: "2", label: "Multicultural" },
    { value: "3", label: "Family-Friendly" },
    { value: "4", label: "Music/Arts" },
    { value: "5", label: "Outdoors" },
    { value: "6", label: "Sports" },
    { value: "7", label: "Clothes" },
    { value: "8", label: "Health" },
    { value: "9", label: "Food" },
    { value: "10", label: "Education" },
    { value: "11", label: "Employment" },
    { value: "12", label: "Seniors" },
    { value: "13", label: "Finance" },
    { value: "14", label: "City Services" },
    { value: "15", label: "Disability Services" },
  ];

  const animatedComponents = makeAnimated();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const firstName = evt.target.firstName.value;
    const lastName = evt.target.lastName.value;
    const email = evt.target.email.value;
    const password = evt.target.password.value;
    // const interest = evt.target.interest.value;
    // const borough = evt.target.borough.value;

    dispatch(
      authenticate({
        firstName,
        lastName,
        email,
        password,
        // interest,
        // borough,
        method: formName,
      })
    );
    setValidated(true);
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
            <option value="1">Bronx</option>
            <option value="2">Brooklyn</option>
            <option value="3">Queens</option>
            <option value="4">Manhattan</option>
            <option value="5">Staten Island</option>
          </Form.Select>
        </Form.Group>

        <br />
        <label htmlFor="interest" style={{ padding: "10px" }}>
          Choose your categories of interest:
        </label>
        <Select
          isMulti
          options={formInterest}
          components={animatedComponents}
          closeMenuOnSelect={false}
        />
        <Button variant="primary" type="submit">
          {displayName}
        </Button>
      </Form>
    </>
  );
}

export default Signup;
