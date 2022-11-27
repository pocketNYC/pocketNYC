import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addEvent } from "./eventsSlice";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import formInterest from "../auth/formInterest";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

const AddEvent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const animated = makeAnimated();
  const [validated, setValidated] = useState(false);
  const userId = useSelector((state) => state.auth.me.id);

  const [selectedOptions, setSelectedOptions] = useState([]);

  const [show, setShow] = useState(false);
  const addNewEventButton = () => {
    setShow(false).then(navigate("/add"));
  };
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (formInterest) => {
    let selections = [];
    formInterest.map((tags) => selections.push(tags.value));
    setSelectedOptions(selections);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const title = evt.target.title.value;
    const description = evt.target.description.value;
    const address = evt.target.address.value;
    const image = evt.target.image.value;
    const start = evt.target.start.value;
    const end = evt.target.end.value;
    const tag = selectedOptions;
    const borough = evt.target.borough.value;
    const eventLink = evt.target.eventLink.value;

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
    evt.target.reset();
    // navigate("/add/success");

    setValidated(true);
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
        <Form.Group className="mb-6" controlId="start">
          <Form.Label>Date:</Form.Label>
          <Form.Control required type="date" />
          <Form.Control.Feedback type="invalid">
            Please provide a starting date.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-6" controlId="end">
          <Form.Label>Time:</Form.Label>
          <Form.Control required type="time" />
          <Form.Control.Feedback type="invalid">
            Please provide a ending time.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control required type="text" placeholder="Enter Image URL" />
          <Form.Control.Feedback type="invalid">
            Please provide an image.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="eventLink">
          <Form.Label>More Information</Form.Label>

          <Form.Control required type="text" placeholder="Enter Event Link" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="borough">
          <Form.Label>Borough</Form.Label>
          <Form.Select>
            <option defaultValue>Select</option>
            <option value="Bronx">Bronx</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Staten-Island">Staten Island</option>
          </Form.Select>
        </Form.Group>
        <br />
        <label htmlFor="tags" style={{ padding: "10px" }}>
          Choose your event tags (select up to 3):
        </label>
        <Select
          isMulti
          options={formInterest}
          components={animated}
          closeMenuOnSelect={false}
          onChange={handleChange}
          isOptionDisabled={() => selectedOptions.length >= 5}
        />
        {/* <Button className="primary" type="submit">
          Submit
        </Button> */}
        <Button className="primary" onClick={handleShow} type="submit">
          Submit
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Woohoo, thanks for submitting an event to PocketNYC!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Your event is currently under review. Once the PocketNYC Admins
            approve the event, it will be listed on the{" "}
            <a href="/events">Events</a> page.
            <br />
            <br /> Below is a summary of the event you submitted:
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={addNewEventButton}>
              Add New Event
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </>
  );
};

export default AddEvent;
