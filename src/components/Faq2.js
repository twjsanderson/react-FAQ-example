import React, { Fragment } from 'react';
import Nav1 from './NavBar';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';

// added button

const Faq1 = () => {
  return (
    <Fragment>
      <Nav1 />
      <Container style={{ height: 1000 }}> 
      <Row className="p-3 justify-content-center align-items-center">
          <Col md={8} className="text-center">
              <h1 className="text-black">Main Title</h1>
              <p className="text-black pt-3">
                  Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                  tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                  eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a 
                  scelerisque purus semper eget duis
              </p>
          </Col>
        </Row>
        <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                Question 1
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                    eleifend mi in nulla.
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                Question 2
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body>
                    Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                    eleifend mi in nulla.
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                Question 3
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                <Card.Body>
                    Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                    eleifend mi in nulla.
                </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
      </Container>
    </Fragment>
  );
}

export default Faq1;