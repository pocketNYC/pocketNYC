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
import Login from "./Login";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function LoginOrSignup({ name, displayName }) {
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
      <Card className="mx-auto" style={{ maxWidth: "800px" }}>
        <Col>
          <center>
            <Tabs
              defaultActiveKey="login"
              id="justify-tab-login"
              className="mb-3"
              justify
            >
              <Tab eventKey="login" title="Login">
                {<Login />}
              </Tab>
              <Tab eventKey="signup" title="Sign Up">
                {<Signup />}
              </Tab>
            </Tabs>
          </center>
        </Col>
      </Card>
      <div className="p-2"></div>
    </Container>
  );
}
export default LoginOrSignup;
