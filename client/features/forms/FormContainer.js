import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function FormContainer({ children }) {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={5} md={2}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default FormContainer;
