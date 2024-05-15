import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [isLoginDisabled, setIsLoginDisabled] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    // Aquí iría la lógica de comprobación de las credenciales
    // Por ahora, vamos a suponer que el inicio de sesión es correcto si se ingresa cualquier dato

    if (email && password) {
      // Redireccionar al componente de administración del backend
      navigate('/backend-manager');
    } else {
      alert('Please enter email and password.');
    }
  };

  return (
    <Container className="Login">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <header className="Login-header">
            <img src={logo} className="Login-logo" alt="logo" />
            <h1>Welcome</h1>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" disabled={isLoginDisabled} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" disabled={isLoginDisabled} />
              </Form.Group>

              <Button variant="primary" type="submit" disabled={isLoginDisabled}>
                Login
              </Button>
            </Form>
          </header>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;