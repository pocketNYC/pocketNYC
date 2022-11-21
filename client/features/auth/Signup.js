import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { authenticate } from "../../app/store";
import FormContainer from "../forms/FormContainter";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import formInterest from "../forms/formInterest";
import { YupSchema } from "../forms/YupSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function Signup({ displayName, name }) {
  const dispatch = useDispatch();
  const animated = makeAnimated();
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState("");

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (formInterest) => {
    let selections = [];
    formInterest.map((interest) => selections.push(interest.value));
    setSelectedOptions(selections);
  };

  // const { handleSubmit } = useForm({ resolver: yupResolver(YupSchema) });

  const onSubmit = (evt) => {
    evt.preventDefault();

    const firstName = evt.target.firstName.value;
    const lastName = evt.target.lastName.value;
    const email = evt.target.email.value;
    const password = evt.target.password.value;
    const interests = selectedOptions;
    const borough = evt.target.borough.value;
    console.log(borough);

    if (borough === "Select") {
      setErrors("Please select a borough!!!");
    }

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
  };

  return (
    <FormContainer>
      <Form noValidate validated={validated} onSubmit={onSubmit} name={name}>
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
        <Form.Group controlId="borough">
          <Form.Label>Borough</Form.Label>
          {/* <Form.Control required type="text" /> */}
          <Form.Select isInvalid>
            <option defaultValue>Select</option>
            <option value="Bronx">Bronx</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Staten Island">Staten Island</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please enter a borough.
          </Form.Control.Feedback>
        </Form.Group>
        <br />
        <Form.Label htmlFor="interest" style={{ padding: "10px" }}>
          Choose your categories of interest (select up to 3):
        </Form.Label>
        <Select
          isMulti
          options={formInterest}
          components={animated}
          closeMenuOnSelect={false}
          onChange={handleChange}
          isOptionDisabled={() => selectedOptions.length >= 3}
          autoFocus={true}
        />
        <Button variant="primary" type="submit">
          {displayName}
        </Button>
      </Form>
    </FormContainer>
  );
}

export default Signup;
