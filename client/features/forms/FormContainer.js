import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function FormContainer({ children }) {
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col sm={5} md={2}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default FormContainer;
