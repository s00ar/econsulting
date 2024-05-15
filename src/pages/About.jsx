import React from 'react';
import { Container, Row, Col, Image, Video } from 'react-bootstrap';
import Stack from 'react-stackai';
import './Dashboard.css';  // Importamos el CSS para estilos

const About = () => {
  return (
    <Container className="my-5">
      <Hero />
      <Metricas />
    </Container>
  );
};



const Hero = () => {
  return (
    <section className="hero">
      <h1>Tablero de métricas</h1>
      {/* <p>
        Somos una red de profesionales especializados y con experiencia brindando
        servicios a empresas, equipos de trabajo y emprendedores.
      </p> */}
<Stack project="https://www.stack-ai.com/embed/5b53ef14-204a-45cf-b5d0-7a9315bd8f5d/1c764b73-6a85-4e52-af2e-b4792c24db8b/662e9d7f1b60bdaf9dd2e8fb" />
    </section>
  );
};

const Metricas = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>
      <div className="widgets">
        {/* Nuevo widget para el Iframe */}
        <div className="widget">
          <h2>Informe de Ventas</h2>
          <iframe 
            title="Sales Dashboard" 
            width="1000" 
            height="570" 
            src="https://app.powerbi.com/view?r=eyJrIjoiZDA1M2Y0ODUtMTQ4Yi00YTExLTlkMWYtOGNlMGU2MGNmZWYwIiwidCI6IjJhZTliMGQ5LTU1NzItNGY2Yy05ZDgwLWRhOTk3YjEwYzNhNyIsImMiOjR9" 
            frameborder="0" 
            allowFullScreen="false">
            </iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
