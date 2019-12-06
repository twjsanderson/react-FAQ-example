import React, { Fragment } from 'react';
import Nav1 from './NavBar';
import { Container, Row, Col } from 'react-bootstrap';

// added button

const Faq1 = () => {
  return (
    <Fragment>
      <Nav1 />
      <Container style={{ height: 1000 }}> 
      <Row className="p-3 justify-content-center align-items-center">
          <Col>
              <h1 className="text-center">Title</h1>
          </Col>
        </Row>
      <Row className="p-3 justify-content-center align-items-center">
          <Col>
              <h3 className="text-black">Subtitle</h3>
              <p className="text-black p-3" style={{ border: 'solid 0.5px black'}}>
                  Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                  tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                  eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a 
                  scelerisque purus semper eget duis
              </p>
          </Col>
        </Row>
        <Row className="p-3 justify-content-center align-items-center">
          <Col>
              <h3 className="text-black">Subtitle</h3>
              <p className="text-black p-3" style={{ border: 'solid 0.5px black'}}>
                  Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                  tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                  eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a 
                  scelerisque purus semper eget duis
              </p>
          </Col>
        </Row>
        <Row className="p-3 justify-content-center align-items-center">
          <Col>
              <h3 className="text-black">Subtitle</h3>
              <p className="text-black p-3" style={{ border: 'solid 0.5px black'}}>
                  Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                  tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                  eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a 
                  scelerisque purus semper eget duis
              </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Faq1;