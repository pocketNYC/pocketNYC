import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typeahead } from "react-bootstrap-typeahead";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import formInterest from "./formInterest";
import InputGroup from "react-bootstrap/InputGroup";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { authenticate } from "../../app/store";

function Signup({ displayName, name }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [passwordShown, setPasswordShown] = useState(false);
  const [errors, setErrors] = useState("");
  const nonMobile = useMediaQuery("(mid-width: 1000px)");

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
    <Box
      width={nonMobile ? "50%" : "75%"}
      p="2 rem"
      m="15rem auto"
      borderRadius="2rem"
      boxShadow="10px 10px 10px 10px rgb(207, 207, 207)"
      backgroundColor="beige"
    >
      <Box
        display="grid"
        gap="25px"
        gridTemplateColumns="repeat(1, minmax(0, 1fr))"
        sx={{ "& > div": { gridColumn: nonMobile ? undefined : "span 4" } }}
      >
        <h2>Sign up</h2>
        <hr />
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          name={name}
        >
          <FloatingLabel
            controlId="firstName"
            label="First Name"
            className="mb-3"

          >
            <Form.Control required type="text" placeholder="Enter First Name" />
            <Form.Control.Feedback type="invalid">
              Please provide your first name.
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel
            controlId="lastName"
            label="Last Name"
            className="mb-3"
          >
            <Form.Control required type="text" placeholder="Enter Last Name" />
            <Form.Control.Feedback type="invalid">
              Please provide your last name.
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel controlId="email" label="Email" className="mb-3">
            <Form.Control required type="text" placeholder="Enter Email" />
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
          <Button variant="outline-primary" onClick={togglePassword} size="md">
            {passwordShown ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
          </Button>

          <FloatingLabel
            controlId="borough"
            label="Borough"
          >
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
          </FloatingLabel>

          <Form.Group className="mb-6" controlId="interests">
            <label> Categories of interest (select up to 3): </label>
            <Typeahead
              multiple
              className="test-select"
              id="interests"
              placeholder="Select.."
              name="interests"
              onChange={handleChange}
              options={formInterest}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {displayName}
          </Button>
        </Form>
      </Box>
    </Box>
  );
}

export default Signup;
