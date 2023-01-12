import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { authenticate } from "../../app/store";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typography from "@mui/material/Typography";
import { InputGroup } from "react-bootstrap";
import Signup from "./Signup";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Login() {
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

    if (validated) {
      navigate("/home");
    }
  };

  return (
    <Container>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        name="login"
      >
        <hr />
        <Row className="p-2" style={{ margin: "0px", padding: "0px" }}>
          <Form.Group controlId="email">
            <Row style={{ margin: "0px", padding: "0px" }}>
              <Form.Label
                className="fw-bold"
                label="Email Address"
                style={{ paddingLeft: "16px" }}
              >
                Email Address
              </Form.Label>
            </Row>

            <Col sm={6}>
              <InputGroup>
                <Form.Control required type="text" placeholder="Enter email" />
                <Form.Control.Feedback type="invalid">
                  Please provide your email.
                </Form.Control.Feedback>
              </InputGroup>
            </Col>
          </Form.Group>
        </Row>
        <Row className="p-2" style={{ margin: "0px", padding: "0px" }}>
          <Form.Group controlId="password">
            <Row style={{ margin: "0px", padding: "0px" }}>
              <Form.Label
                className="fw-bold"
                label="Password"
                style={{ paddingLeft: "16px" }}
              >
                Password
              </Form.Label>
            </Row>

            <Col sm={6}>
              <InputGroup>
                <Form.Control
                  required
                  type={passwordShown ? "text" : "password"}
                  placeholder="Enter Password"
                />
                <Button
                  variant="outline-primary"
                  onClick={togglePassword}
                  size="md"
                >
                  {passwordShown ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                </Button>
                <Form.Control.Feedback type="invalid">
                  Please provide a password.
                </Form.Control.Feedback>
              </InputGroup>
            </Col>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit" size="md">
          Login
        </Button>
        <br />
      </Form>
      <div className="p-1"></div>
    </Container>
  );
}
export default Login;
