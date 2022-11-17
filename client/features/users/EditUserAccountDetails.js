import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { authenticate } from "../../app/store";
import { fetchSingleUser, updateUserInfo } from "./userSlice";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import formInterest from "../auth/formInterest";

function EditUserProfile({ user }) {
  const { id, firstName, lastName, email, interests, borough } = user


  const [userFirstName, setUserFirstName] = useState(firstName);
  const [userLastName, setUserLastName] = useState(lastName);
  const [userEmail, setUserEmail] = useState(email);
  const [userInterests, setUserInterests] = useState(interests);
  const [userBorough, setUserBorough] = useState([borough]);
  const [validated, setValidated] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const dispatch = useDispatch();
  const animated = makeAnimated();

  const handleChange = (formInterest) => {
    let selections = [];
    formInterest.map((interest) => selections.push(interest.value));
    setSelectedOptions(selections);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const updates = {
    };
    if (evt.target.firstName.value !== userFirstName) {
      setUserFirstName(evt.target.firstName.value);
      updates.firstName = evt.target.firstName.value
    }
    if(evt.target.lastName.value !== userLastName) {
        setUserLastName(evt.target.lastName.value)
        updates.lastName = evt.target.lastName.value
    }
    if(evt.target.email.value !== userEmail) {
         setUserEmail(evt.target.email.value)
        updates.email = evt.target.email.value
    }
    if (evt.target.borough.value !== userBorough) {
         setUserBorough(evt.target.borough.value)
        updates.borough = evt.target.borough.value
    }
    if(selectedOptions !== userInterests) {
         setSelectedOptions(selectedOptions)
        updates.interests = selectedOptions
    }
 console.log(updates)

    // const firstName = evt.target.firstName.value;
    //const lastName = evt.target.lastName.value;
    //const email = evt.target.email.value;
    //const password = evt.target.password.value; TODO: *** <-- will come back to this
    //const borough = evt.target.borough.value;
    // const interests = selectedOptions; <-- TODO: double check this***

    dispatch(
        console.log(updates),
    // updateUserInfo(updates)

    );
    setValidated(true);
    alert("Your changes have been submitted.");
  };

  return (
    <>
      <div>
        <h2 style={{textAlign:'center'}}>Edit Your Details Below</h2></div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-6" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            type="text"
            defaultValue={userFirstName}
            placeholder="Enter First Name"
          />
          <Form.Control.Feedback type="invalid">
            Please provide your first name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-6" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            type="text"
            defaultValue={userLastName}
            placeholder="Enter Your Last Name"
          />
          <Form.Control.Feedback type="invalid">
            Please provide your last name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-6" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            defaultValue={userEmail}
            placeholder="Enter Email"
          />
          <Form.Control.Feedback type="invalid">
            Please provide an email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-6" controlId="borough">
          <Form.Label>Borough</Form.Label>
          <Form.Select>
            <option defaultValue>{userBorough}</option>
            <option value="Bronx">Bronx</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Staten Island">Staten Island</option>
          </Form.Select>
        </Form.Group>
        <br />
        <label htmlFor="interest" style={{ padding: "10px" }}>
          Choose your categories of interest: (limit 3*)
        </label>
        <Select
          isMulti
          options={formInterest}
          components={animated}
          closeMenuOnSelect={false}
          onChange={handleChange}
          isOptionDisabled={() => selectedOptions.length >= 3}
          className="interest-multi-select"
        />
        <Button variant="primary" type="submit">
          SUBMIT
        </Button>
      </Form>
    </>
  );
}

export default EditUserProfile;