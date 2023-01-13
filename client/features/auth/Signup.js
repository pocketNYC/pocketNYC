import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input, Typeahead } from "react-bootstrap-typeahead";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import formInterest from "./formInterest";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { authenticate } from "../../app/store";

function Signup({ displayName, name }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [passwordShown, setPasswordShown] = useState(false);
  const [errors, setErrors] = useState("");

  const togglePassword = (evt) => {
    evt.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const handleChange = (formInterest) => {
    const selections = formInterest.map((interest) => interest.value);
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

    if (!borough || borough === "Select") {
      setErrors("Please provide a borough.");
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

    if (validated) {
      navigate("/home");
    }
  };

  return (
    <div className="container h-100">
      <Container>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          name="signup"
        >
          <Row className="p-2" style={{ margin: "0px", padding: "0px" }}>
            <Form.Group controlId="firstName">
              <Row style={{ margin: "0px" }}>
                <Form.Label label="First Name">First Name</Form.Label>
              </Row>

              <Col sm={6}>
                <InputGroup>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter First Name"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your first name.
                  </Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>
          </Row>

          <Row className="p-2" style={{ margin: "0px", padding: "0px" }}>
            <Form.Group controlId="lastName">
              <Row style={{ margin: "0px", padding: "0px" }}>
                <Form.Label label="Last Name">Last Name</Form.Label>
              </Row>
              <Col sm={6}>
                <InputGroup>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Last Name"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your last name.
                  </Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>
          </Row>

          <Row className="p-2" style={{ margin: "0px", padding: "0px" }}>
            <Form.Group className="mb-6" controlId="interests">
              <Row style={{ margin: "0px", padding: "0px" }}>
                <Form.Label>
                  Categories of interest (select up to 3):{" "}
                </Form.Label>{" "}
              </Row>
              <Col sm={6}>
                <InputGroup>
                  <Typeahead
                    multiple
                    className="test-select"
                    id="interests"
                    placeholder="Select.."
                    name="interests"
                    onChange={handleChange}
                    options={formInterest}
                  />
                </InputGroup>
              </Col>
            </Form.Group>
          </Row>

          <Row className="p-2" style={{ margin: "0px", padding: "0px" }}>
            <Form.Group controlId="email">
              <Row style={{ margin: "0px", padding: "0px" }}>
                <Form.Label label="Email Address">Email Address</Form.Label>
              </Row>
              <Col sm={6}>
                <InputGroup>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter email"
                  />
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
                <Form.Label label="Password" style={{ paddingLeft: "16px" }}>
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
                    style={{ zIndex: 0 }}
                  >
                    {passwordShown ? (
                      <VisibilityOffIcon />
                    ) : (
                      <RemoveRedEyeIcon />
                    )}
                  </Button>
                  <Form.Control.Feedback type="invalid">
                    Please provide a password.
                  </Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>
          </Row>

          <Row className="p-2" style={{ margin: "0px", padding: "0px" }}>
            <Form.Group controlId="borough">
              <Row style={{ margin: "0px", padding: "0px" }}>
                <Form.Label label="Borough" style={{ paddingLeft: "16px" }}>
                  Borough
                </Form.Label>
              </Row>
              <Col sm={6}>
                <InputGroup>
                  <Form.Select isInvalid={errors}>
                    <option>Select</option>
                    <option value="Bronx">Bronx</option>
                    <option value="Brooklyn">Brooklyn</option>
                    <option value="Queens">Queens</option>
                    <option value="Manhattan">Manhattan</option>
                    <option value="Staten Island">Staten Island</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors}
                  </Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
        <div className="p-1"></div>
      </Container>
    </div>
  );
}

export default Signup;
