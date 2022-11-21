import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import { FloatingLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FormContainer from "../forms/FormContainer";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import formInterest from "../forms/formInterest";
import { YupSchema } from "../forms/YupSchema";
import { authenticate } from "../../app/store";

function Signup({ displayName, name }) {
  const dispatch = useDispatch();
  const animated = makeAnimated();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChanges = (formInterest) => {
    let selections = [];
    formInterest.map((interest) => selections.push(interest.value));
    setSelectedOptions(selections);
  };

  const onSubmit = (evt) => {
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
  };

  return (
    <Formik
      validationSchema={YupSchema}
      onSubmit={onSubmit}
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        interests: "",
        borough: "",
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <FormContainer>
          <Form noValidate onSubmit={handleSubmit} name={name}>
            <FloatingLabel
              className="mb-3"
              controlId="firstName"
              label="First Name"
            >
              <Form.Control
                required
                name="firstName"
                type="text"
                placeholder="Enter First Name"
                onChange={handleChange}
                value={values.firstName}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </FloatingLabel>
            <FloatingLabel
              className="mb-3"
              controlId="lastName"
              label="Last Name"
            >
              <Form.Control
                required
                name="lastName"
                type="text"
                placeholder="Enter Last Name"
                onChange={handleChange}
                value={values.lastName}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </FloatingLabel>
            <FloatingLabel className="mb-3" controlId="email" label="Email">
              <Form.Control
                required
                name="email"
                type="text"
                placeholder="Enter Email"
                onChange={handleChange}
                value={values.email}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </FloatingLabel>
            <FloatingLabel
              className="mb-3"
              controlId="password"
              label="Password"
            >
              <Form.Control
                required
                type="password"
                placeholder="Enter Password"
                onChange={handleChange}
                value={values.password}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </FloatingLabel>
            <Form.Group controlId="borough">
              <Form.Label>Borough</Form.Label>
              <Form.Select onChange={handleChange} isInvalid={!!errors.borough}>
                <option>Select</option>
                <option value="Bronx">Bronx</option>
                <option value="Brooklyn">Brooklyn</option>
                <option value="Queens">Queens</option>
                <option value="Manhattan">Manhattan</option>
                <option value="Staten Island">Staten Island</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.borough}
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
              onChange={handleChanges}
              isOptionDisabled={() => selectedOptions.length >= 3}
              autoFocus={true}
            />
            <Button variant="primary" type="submit">
              {displayName}
            </Button>
          </Form>
        </FormContainer>
      )}
    </Formik>
  );
}

export default Signup;
