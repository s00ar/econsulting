import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Asegúrate de que la ruta sea correcta

export const NavigationBar = () => {
    const { isAuthenticated, logout } = useAuth(); // Utiliza el contexto de autenticación
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // Llama a la función de logout del contexto de autenticación
        navigate('/login'); // Redirige al usuario a la página de inicio
    };

    return (
        <Navbar bg="light" expand="lg" className="mb-4">
            <Navbar.Brand as={Link} to="/">Eleven Consulting</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/dashboard">
                        <Nav.Link>Panel Principal</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link>Metricas</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/ai">
                        <Nav.Link>Asistente Inteligente</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <Nav.Link>Contáctanos</Nav.Link>
                    </LinkContainer>
                    {isAuthenticated ? (
                        <Button onClick={handleLogout} variant="outline-danger">Logout</Button>
                    ) : (
                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                    )}
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
    );
};
