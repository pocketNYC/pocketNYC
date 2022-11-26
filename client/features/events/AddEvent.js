import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typeahead } from "react-bootstrap-typeahead";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import formInterest from "../auth/formInterest";
import DateTimePicker from "./DateTimePicker";
import { addEvent } from "./eventsSlice";
import "react-bootstrap-typeahead/css/Typeahead.css";

const AddEvent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const animated = makeAnimated();
  const userId = useSelector((state) => state.auth.me.id);
  const [validated, setValidated] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [startVal, setStartVal] = useState(new Date());
  const [endVal, setEndVal] = useState(new Date());
  const [errors, setErrors] = useState("");

  const handleChange = (formInterest) => {
    const selections = formInterest.map((tag) => tag.value);
    setSelectedOptions(selections);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const title = evt.target.title.value;
    const description = evt.target.description.value;
    const address = evt.target.address.value;
    const image = evt.target.image.value;
    const start = startVal;
    const end = endVal;
    const borough = evt.target.borough.value;
    const tag = selectedOptions;
    const eventLink = evt.target.eventLink.value;

    if (!borough || borough === "Select") {
      setErrors("Please provide a borough.");
    }

    dispatch(
      addEvent({
        title,
        description,
        address,
        image,
        start,
        end,
        borough,
        tag,
        eventLink,
        userId,
      })
    );

    setValidated(true);

    if (validated) {
      navigate("/add/success");
    }
  };

  return (
    <>
      <h2 style={{ padding: "15px" }}>Create an Event</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-6" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control required type="text" placeholder="Enter Title" />
          <Form.Control.Feedback type="invalid">
            Please provide a title.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-6" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control required placeholder="Enter Description" />
          <Form.Control.Feedback type="invalid">
            Please provide a description of the event.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-6" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control required type="text" placeholder="Enter Address" />
          <Form.Control.Feedback type="invalid">
            Please provide an address.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control required type="text" placeholder="Enter Image URL" />
          <Form.Control.Feedback type="invalid">
            Please provide an image.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="borough">
          <Form.Label>Borough</Form.Label>
          <Form.Select required isInvalid={errors}>
            <option defaultValue>Select</option>
            <option value="Bronx">Bronx</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Staten-Island">Staten Island</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="eventLink">
          <Form.Label>More Information</Form.Label>
          <Form.Control type="text" placeholder="Enter Event Link" />
        </Form.Group>

        <br />
        <Form.Group className="mb-6" controlId="start" required>
          <DateTimePicker
            label="Starting Date and Time"
            value={startVal}
            onChange={(newValue) => setStartVal(newValue)}
          />
        </Form.Group>
        <Form.Group className="mb-6" controlId="end">
          <DateTimePicker
            label="Ending Date and Time"
            value={endVal}
            onChange={(newValue) => setEndVal(newValue)}
          />
        </Form.Group>
        <Form.Group className="mb-6" controlId="tags">
          <Form.Label>Choose your event tags (select up to 3): </Form.Label>
          {/* <Select
            isMulti
            options={formInterest}
            components={animated}
            closeMenuOnSelect={false}
            onChange={handleChange}
            isOptionDisabled={() => selectedOptions.length >= 3}
          /> */}
          <Typeahead
            multiple
            id="interests"
            placeholder="Select an Interest"
            name="interests"
            onChange={handleChange}
            inputProps={{ required: true }}
            options={formInterest}
          />
        </Form.Group>
        <Button className="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddEvent;
