import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typeahead } from "react-bootstrap-typeahead";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import formInterest from "./formInterest";
import InputGroup from "react-bootstrap/InputGroup";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
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
    <div className="container-fluid">
      <div>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          name={name}
        >
          <h2 className="loginHeader">Sign Up</h2>
          <hr />
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
            <InputGroup className="mb-6">
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

          <Form.Group className="mb-6" controlId="borough">
            <Form.Label>Borough</Form.Label>
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
          </Form.Group>
          <br />

          <Form.Group controlId="interests">
            <Form.Label>Categories of interest (select up to 3): </Form.Label>
            <Typeahead
              multiple
              id="interests"
              label="test"
              placeholder="Select.."
              name="interests"
              onChange={handleChange}
              inputProps={{ required: true }}
              options={formInterest}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {displayName}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
