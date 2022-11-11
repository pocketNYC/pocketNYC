import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addEvent } from "./eventsSlice";

const AddEvent = () => {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const title = evt.target.title.value;
    const description = evt.target.description.value;
    const address = evt.target.address.value;
    const image = evt.target.image.value;
    const date = evt.target.date.value;
    const time = evt.target.time.value;
    dispatch(
      addEvent({
        title,
        description,
        address,
        image,
        date,
        time,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="title" placeholder="Enter Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control type="description" placeholder="Enter Description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control type="address" placeholder="Enter Address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="image">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Enter Image URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="Enter Date" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="time">
        <Form.Label>Time</Form.Label>
        <Form.Control type="time" placeholder="Enter Time" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddEvent;
