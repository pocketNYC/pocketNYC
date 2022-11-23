import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { authenticate } from "../../app/store";
import InputGroup from "react-bootstrap/InputGroup";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Login({ name, displayName }) {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = (evt) => {
    evt.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const email = evt.target.email.value;
    const password = evt.target.password.value;

    dispatch(authenticate({ email, password, method: formName }));
    setValidated(true);
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} name={name}>
      <Form.Group className="mb-6" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control required type="text" placeholder="Enter Email" />
        <Form.Control.Feedback type="invalid">
          Please provide your email.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-6" controlId="password">
        <Form.Label>Password</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            required
            type={passwordShown ? "text" : "password"}
            placeholder="Enter Password"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a password.
          </Form.Control.Feedback>
          <InputGroup.Text id="basic-addon2">
            <button onClick={togglePassword}>
              {passwordShown ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
            </button>
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>
      <Button variant="primary" type="submit">
        {displayName}
      </Button>
    </Form>
  );
}

export default Login;
