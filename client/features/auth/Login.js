import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { authenticate } from "../../app/store";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Login({ name, displayName }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    <div className="tempMain">
      <div className="tempSubMain">
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          name={name}
          className="rounded p-4 p-sm-3"
        >
          <h2 className="loginHeader">Login</h2>
          <hr />

          <FloatingLabel
            controlId="email"
            label="Email Address"
            className="mb-3"
          >
            <Form.Control required type="text" placeholder="Email" />
            <Form.Control.Feedback type="invalid">
              Please provide your email.
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel controlId="password" label="Password">
            <Form.Control
              required
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a password.
            </Form.Control.Feedback>
          </FloatingLabel>

          <center>
            <Button
              variant="outline-primary"
              onClick={togglePassword}
              size="sm"
              className="show-hide-pw"
            >
              {passwordShown ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
            </Button>
          </center>

          <center>
            <Button
              variant="outline-primary"
              type="submit"
              className="loginButton"
            >
              {displayName}
            </Button>
          </center>
        </Form>
      </div>
    </div>
  );
}

{
  /* <InputGroup className="mb-3"> */
}
{
  /* </InputGroup> */
}
export default Login;
