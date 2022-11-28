import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { editUser } from "./userSlice";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import formInterest from "../auth/formInterest";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditUserProfile({ user }) {
  const { id, firstName, lastName, email, interests, borough } = user;

  const [userFirstName, setUserFirstName] = useState(firstName);
  const [userLastName, setUserLastName] = useState(lastName);
  const [userEmail, setUserEmail] = useState(email);
  const [userBorough, setUserBorough] = useState(borough);
  const [validated, setValidated] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dispatch = useDispatch();
  const animated = makeAnimated();

  const notify = () =>
    toast.success("Your changes have been submitted.", {
      position: "top-right",
      padding: "30px",
      autoClose: 3200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleChange = (formInterest) => {
    let selections = [];
    formInterest.map((interest) => selections.push(interest.value));
    setSelectedOptions(selections);
  };

  const clearText = (evt) => {
    evt.target.value = "";
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    notify();

    dispatch(
      editUser({
        id,
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
        borough: userBorough,
        interests: selectedOptions,
      })
    );

    setValidated(true);
  };

  return (
    <div className="container-fluid p-4">
      <div className="card p-2 text-center">
        <h2>Edit Your Details Below</h2>
        <h6>
          Click on a field to edit your information. Please reselect your
          interests.
        </h6>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-6" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              onClick={clearText}
              type="text"
              onChange={(e) => {
                setUserFirstName(e.target.value);
              }}
              defaultValue={userFirstName}
              onFocus={(e) => (e.target.placeholder = "Enter Your First Name")}
              onBlur={(e) => (e.target.placeholder = userFirstName)}
            />
          </Form.Group>

          <Form.Group className="mb-6" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              onClick={clearText}
              defaultValue={userLastName}
              onChange={(e) => {
                setUserLastName(e.target.value);
              }}
              onFocus={(e) => (e.target.placeholder = "Enter Your Last Name")}
              onBlur={(e) => (e.target.placeholder = userLastName)}
            />
          </Form.Group>
          <Form.Group className="mb-6" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              onClick={clearText}
              type="email"
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
              defaultValue={userEmail}
              onFocus={(e) => (e.target.placeholder = "Enter Email")}
              onBlur={(e) => (e.target.placeholder = userEmail)}
            />
          </Form.Group>
          <Form.Group className="mb-6" controlId="borough">
            <Form.Label>Borough</Form.Label>
            <Form.Select
              onChange={(e) => {
                setUserBorough(e.target.value);
              }}
            >
              <option defaultValue>{borough}</option>
              <option value="Bronx">Bronx</option>
              <option value="Brooklyn">Brooklyn</option>
              <option value="Queens">Queens</option>
              <option value="Manhattan">Manhattan</option>
              <option value="Staten Island">Staten Island</option>
            </Form.Select>
          </Form.Group>
          <br />
          <Form.Group className="mb-6" controlId="interests">
            <Form.Label>
              Choose your categories of interest (select up to 3):{" "}
            </Form.Label>
            <Typeahead
              multiple
              id="interests"
              placeholder="Select.."
              name="interests"
              onChange={handleChange}
              options={formInterest}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <ToastContainer />
        </Form>
      </div>
    </div>
  );
}
export default EditUserProfile;
