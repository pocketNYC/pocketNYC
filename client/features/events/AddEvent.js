import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typeahead } from "react-bootstrap-typeahead";
import { useRef } from "react";
// import Form from "react-bootstrap/Form";
import { Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import formInterest from "../auth/formInterest";
import DateTimePicker from "./DateTimePicker";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { addEvent } from "./eventsSlice";
import Modal from "react-bootstrap/Modal";

const AddEvent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.auth.me.id);
  const [validated, setValidated] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [startVal, setStartVal] = useState(new Date());
  const [endVal, setEndVal] = useState(new Date());
  const [errors, setErrors] = useState("");
  const nonMobile = useMediaQuery("(mid-width: 1000px)");

  // const [show, setShow] = useState(false);
  // const addNewEventButton = () => {
  //   setShow(false);
  //   setValidated(false);
  //   typeaheadRef.current.clear();
  //   setStartVal(new Date());
  //   setEndVal(new Date());
  //   navigate("/add");

  //   console.log(selectedOptions);
  // };

  // const handleClose = () => {
  //   setShow(false);
  //   setValidated(false);
  //   navigate("/events");
  // };
  // const typeaheadRef = useRef(null);
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
    const tags = selectedOptions;
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
        tags,
        eventLink,
        userId,
      })
    );

    setValidated(true);
    navigate("/add/success");

    // if (title && description && address && image && start && end && eventLink)
    //   setShow(true);
    // evt.target.reset();
  };

  return (
    // <Box
    //   width={nonMobile ? "50%" : "75%"}
    //   p="2 rem"
    //   m="15rem auto"
    //   borderRadius="2rem"
    //   boxShadow="10px 10px 10px 10px rgb(207, 207, 207)"
    //   backgroundColor="beige"
    // >
    //   <Box
    //     display="grid"
    //     gap="10px"
    //     gridTemplateColumns="repeat(1, minmax(1, 1fr))"
    //     sx={{ "& > div": { gridColumn: nonMobile ? undefined : "span 4" } }}
    //   >
    <Container fluid className="justify-content-md-center">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h2>Create an Event</h2>
        <hr />
        <Row>
          <Col sm>
            <FloatingLabel controlId="title" label="Title">
              <Form.Control required type="text" placeholder="Enter Title" />
              <Form.Control.Feedback type="invalid">
                Please provide a title.
              </Form.Control.Feedback>
            </FloatingLabel>
            <FloatingLabel
              controlId="description"
              label="Description"
              className="mb-3"
            >
              <Form.Control
                required
                type="text"
                placeholder="Enter Description"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a description of the event.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col sm>
            <FloatingLabel controlId="address" label="Address" className="mb-3">
              <Form.Control required type="text" placeholder="Enter Address" />
              <Form.Control.Feedback type="invalid">
                Please provide an address.
              </Form.Control.Feedback>
            </FloatingLabel>

            <FloatingLabel controlId="image" label="Image" className="mb-3">
              <Form.Control required type="text" placeholder="Enter Image" />
              <Form.Control.Feedback type="invalid">
                Please provide an image.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col sm>
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
            <FloatingLabel
              controlId="eventLink"
              label="Event Link"
              className="mb-3"
            >
              <Form.Control
                required
                type="text"
                placeholder="Enter Event Link"
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col sm>
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
          </Col>
        </Row>
        <br />

        <Row>
          <Col sm>
            <Form.Group className="mb-6" controlId="tags">
              <label> Categories of interest (select up to 3): </label>
              <Typeahead
                multiple
                className="test-select"
                id="tags"
                placeholder="Select.."
                name="tags"
                onChange={handleChange}
                options={formInterest}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>

        {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Woohoo, thanks for submitting an event to PocketNYC!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Your event is currently under review. Once the PocketNYC team
            approves the event, it will be listed on the{" "}
            <a href="/events">Events</a> page.
            <br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={addNewEventButton}>
              Add New Event
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal> */}
      </Form>
    </Container>
    //   </Box>
    // </Box>
  );
};

export default AddEvent;
