import React, { useState } from 'react';
import logo from '../assets/logo.png';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext'; // Ensure this path matches your project structure

function Login() {
  const [isLoginDisabled, setIsLoginDisabled] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Using the login function from useAuth

  const handleLogin = (event) => {
    event.preventDefault();

    // Aquí deberías incluir la lógica para verificar las credenciales del usuario
    // Esta es solo una simulación de inicio de sesión exitoso
    if (email && password) {
      login(); // This sets isAuthenticated to true in your auth context
      navigate('/dashboard'); // Navigates to the protected route after login
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
                <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} disabled={isLoginDisabled} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} disabled={isLoginDisabled} />
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
