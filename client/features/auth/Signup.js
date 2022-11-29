import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typeahead } from "react-bootstrap-typeahead";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import formInterest from "./formInterest";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
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
    <div>
      <Grid>
        <Card
          style={{
            maxWidth: 600,
            padding: "20px 5px 10px",
            margin: "0 auto",
            mt: "50px",
            backgroundColor: "#F8F7EF",
            borderRadius: "2rem",
            boxShadow: "10px 10px 10px 10px rgb(207, 207, 207)",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h4" align="center">
              Sign up
            </Typography>
            <hr />
            <Grid container spacing={2}>
              <center>
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                  name={name}
                >
                  <Grid item xs={6} md={6}>
                    <FloatingLabel
                      controlId="firstName"
                      label="First Name"
                      className="mb-3"
                    >
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter First Name"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your first name.
                      </Form.Control.Feedback>
                    </FloatingLabel>

                    <FloatingLabel
                      controlId="lastName"
                      label="Last Name"
                      className="mb-3"
                    >
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter Last Name"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your last name.
                      </Form.Control.Feedback>
                    </FloatingLabel>

                    <Form.Group className="mb-6" controlId="interests">
                      <Form.Label>
                        Categories of interest (select up to 3):{" "}
                      </Form.Label>
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

                    <FloatingLabel
                      controlId="email"
                      label="Email"
                      className="mb-3"
                    >
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter Email"
                      />
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
                    <Button
                      variant="outline-primary"
                      onClick={togglePassword}
                      size="sm"
                    >
                      {passwordShown ? (
                        <VisibilityOffIcon />
                      ) : (
                        <RemoveRedEyeIcon />
                      )}
                    </Button>
                    <FloatingLabel controlId="borough" label="Borough">
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

                    <Button variant="primary" type="submit">
                      {displayName}
                    </Button>
                  </Grid>
                </Form>
              </center>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Signup;
