import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import { authenticate } from "../../app/store";

function Login({ name, displayName }) {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const email = evt.target.email.value;
    const password = evt.target.password.value;

    dispatch(authenticate({ email, password, method: formName }));
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
        <FloatingLabel controlId="email" label="Email Address" className="mb-3">
          <Form.Control
            required
            type="text"
            placeholder="Email"
          />
          <Form.Control.Feedback type="invalid">
            Please enter an email.
          </Form.Control.Feedback>
        </FloatingLabel>

        <FloatingLabel controlId="password" label="Password" className="mb-3">
          <Form.Control required type="password" placeholder="Password" />
          <Form.Control.Feedback type="invalid">
            Please enter a password.
          </Form.Control.Feedback>
        </FloatingLabel>
        <Button variant="primary" type="submit">
          {displayName}
        </Button>
      </Form>
    </>
  );
}

export default Login;
