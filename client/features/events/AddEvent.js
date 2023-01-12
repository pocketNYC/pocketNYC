import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typeahead } from "react-bootstrap-typeahead";
import { Container, Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import formInterest from "../auth/formInterest";
import DateTimePicker from "./DateTimePicker";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { addEvent } from "./eventsSlice";

const AddEvent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  };

  return (
    <div>
      <Container>
        <Card
          className="mb-3"
          style={{
            maxWidth: "1200px",
            padding: "10px",
            margin: "0 auto",
            boxShadow: "10px 10px 10px 10px rgb(207, 207, 207)",
          }}
        >
          <Row className="g-1">
            <Col xs>
              <img
                src="https://i.imgur.com/KY2tiV1.jpg"
                className="img-fluid h-100"
              ></img>
            </Col>
            <Col md>
              <Form
                className="event"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <center>
                  <h2>Create an Event</h2>
                  <hr />
                  <Row>
                    <Col md>
                      <FloatingLabel
                        controlId="title"
                        label="Title"
                        className="mb-3"
                      >
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Title"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a title.
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Col>
                  </Row>

                  <Row>
                    <Col sm>
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
                    <Col className="d-flex justify-content-between">
                      <Col sm className="d-flex justify-content-start">
                        <Form.Group controlId="start" className="mb-3" required>
                          <DateTimePicker
                            label="Starting Date and Time"
                            value={startVal}
                            onChange={(newValue) => setStartVal(newValue)}
                          />
                        </Form.Group>
                      </Col>
                      <Col sm className="d-flex justify-content-end">
                        <Form.Group controlId="end" className="mb-3" required>
                          <DateTimePicker
                            label="Ending Date and Time"
                            value={endVal}
                            onChange={(newValue) => setEndVal(newValue)}
                          />
                        </Form.Group>
                      </Col>
                    </Col>
                  </Row>

                  <Row>
                    <Col sm>
                      <FloatingLabel
                        controlId="address"
                        label="Address"
                        className="mb-3"
                      >
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Address"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide an address.
                        </Form.Control.Feedback>
                      </FloatingLabel>

                      <FloatingLabel
                        controlId="image"
                        label="Image URL"
                        className="mb-3"
                      >
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Image"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide an image.
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Col>
                  </Row>

                  <Row>
                    <Col sm>
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
                      <FloatingLabel
                        controlId="borough"
                        label="Borough"
                        className="mb-3"
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
                    </Col>
                  </Row>

                  <Row>
                    <Col sm>
                      <Form.Group className="mb-6" controlId="tags">
                        <label>
                          {" "}
                          Categories of interest (select up to 3):{" "}
                        </label>
                        <Typeahead
                          multiple
                          dropup
                          className="test-select mb-3"
                          id="tags"
                          placeholder="Select.."
                          name="tags"
                          onChange={handleChange}
                          options={formInterest}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="d-grid gap-2">
                    <Button variant="primary" type="submit" size="lg">
                      Submit
                    </Button>
                  </div>
                </center>
              </Form>
            </Col>
          </Row>
        </Card>
      </Container>
      <div className="p-2"></div>
    </div>
  );
};

export default AddEvent;
