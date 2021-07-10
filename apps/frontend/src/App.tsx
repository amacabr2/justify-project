import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {JustifyForm} from "./features";

const App: React.FC = () => {
  return (
      <Container fluid className="p-3">
          <Row className="justify-content-md-center">
              <Col lg="8">
                  <JustifyForm />
              </Col>
          </Row>
      </Container>
  );
}

export default App;
