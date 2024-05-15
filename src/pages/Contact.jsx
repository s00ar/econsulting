import React from 'react';
import { Form, Button, Container, Row, Col, Card, Image } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="mb-4">Contáctanos</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Card className="mb-4 shadow">
            <Card.Body>
              <Card.Title>
                DETALLES DE CONTACTO
              </Card.Title>
              <Card.Text>
                Llámenos o visítenos en cualquier momento, nos esforzamos por responder a todas las consultas dentro de los días hábiles. Estaremos encantados de responder a sus preguntas.
                <br /><br />
                <strong>CORREO:</strong><br />
                info@elevenconsulting.com.ar<br />
                <strong>TELÉFONO: </strong><br />
                +62 111-444-90<br />
              </Card.Text>
            </Card.Body>
          </Card>
          {/* Optional: Add a map component or image here */}
        </Col>
        <Col lg={6}>
          <Form className="shadow p-4 mb-5 bg-white rounded">
            <h2>CONTACTANOS</h2>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Tu Nombre *</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu nombre" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tu Email *</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu correo electrónico" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSubject">
              <Form.Label>Asunto *</Form.Label>
              <Form.Control type="text" placeholder="Ingresa el asunto" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Tu teléfono *</Form.Label>
              <Form.Control type="tel" placeholder="Ingresa tu número de teléfono" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Mensaje...</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje aquí" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar Mensaje
              </Button>
          </Form>
        </Col>
      </Row>
      <Row className="text-center pt-4">
        <Col>
          <p>Síguenos en nuestras redes sociales:</p>
          <a href="https://www.facebook.com/elevenconsultingcomar" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.linkedin.com/company/eleven-consulting-argentina/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.instagram.com/elevenconsulting.com.ar/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;

