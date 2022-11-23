import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Typeahead } from "react-bootstrap-typeahead";
import FormContainer from "../forms/FormContainer";
import formInterest from "../forms/formInterest";
import { authenticate } from "../../app/store";

function DemoSignup() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const setField = (field, value) => {
    setForm({ ...form, [field]: value });

    if (!!errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  const validateForm = () => {
    const { firstName, lastName, borough, interests } = form;
    const newErrors = {};

    if (!firstName || firstName === "")
      newErrors.firstName = "Please provide your first name.";

    if (!lastName || lastName === "")
      newErrors.lastName = "Please provide your last name.";

    if (!borough || borough === "Select")
      newErrors.borough = "Please provide a borough.";

    if (!interests || interests === "")
      newErrors.interests = "Please select your interest.";

    return newErrors;
  };

  const handleSubmit = (evt) => {
    const { firstName, lastName, borough, interests } = form;
    evt.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log("form submitted");
    }

    dispatch(
      authenticate({
        firstName,
        lastName,
        // email,
        // password,
        interests,
        borough,
        method: "signup",
      })
    );
  };
  return (
    // <FormContainer>
    <Form>
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter First Name"
          value={form.firstName}
          onChange={(e) => setField("firstName", e.target.value)}
          isInvalid={!!errors.firstName}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.firstName}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Last Name"
          value={form.lastName}
          onChange={(e) => setField("lastName", e.target.value)}
          isInvalid={!!errors.lastName}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.lastName}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="borough">
        <Form.Label>Borough</Form.Label>
        <Form.Select
          value={form.borough}
          isInvalid={!!errors.borough}
          onChange={(e) => setField("borough", e.target.value)}
        >
          <option>Select</option>
          <option value="Bronx">Bronx</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Queens">Queens</option>
          <option value="Manhattan">Manhattan</option>
          <option value="Staten-Island">Staten Island</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.borough}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-6" controlId="interests">
        <Form.Label>Interests</Form.Label>
        <Typeahead
          multiple
          id="interests"
          placeholder="Select an Interest"
          name="interests"
          onChange={(selected) =>
            setField("interests", selected && selected[0])
          }
          className={!!errors.interests && "red-border"}
          inputProps={{ required: true }}
          options={formInterest}
        />
        <div className="red">{errors.interests}</div>
      </Form.Group>
      <Form.Group controlId="submit">
        <Button type="submit" variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form.Group>
    </Form>
    // {/* </FormContainer> */}
  );
}

export default DemoSignup;
