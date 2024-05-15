import React from 'react';
import { Container, Row, Col, Image, Video } from 'react-bootstrap';
import Stack from 'react-stackai';
import arrow from '../assets/bottom-right.png';
import './Ai.css';

const Ai = () => {
  return (
    <Container className="my-5">
      <Hero />
      <Assistant />
    </Container>
  );
};



const Hero = () => {
  return (
    <section className="hero">
      <h1>Asistente Inteligente</h1>
      <p>
      Nuestro asistente virtual está diseñado para ayudarte a maximizar el potencial de tu negocio. Con 10 años de experiencia en business intelligence, puede ofrecerte:
      </p>
      <ul>
        <li>
            <p> <strong> Análisis de datos: </strong>Comprende tus datos, identifica tendencias y toma decisiones estratégicas.
            </p>
        </li>
        <li>
            <p> <strong> Inteligencia de negocios: </strong>Implementa estrategias de BI para mejorar eficiencia y rentabilidad.
            </p>
        </li>
        <li>
            <p> <strong> Visualización de datos: </strong>Crea dashboards y gráficos interactivos para comunicar información efectivamente.
            </p>
        </li>
        <li>
            <p> <strong> Toma de decisiones: </strong>Recibe apoyo en el proceso de toma de decisiones con información relevante y análisis objetivos.
            </p>
        </li>
      </ul>
    </section>
  );
};

const Assistant = () => {
  return (
    <section className="assistant">
        <h1>¿Como utilizarlo?</h1>
        <p>El asistente se encuentra a lo largo de toda la aplicación y siempre está a un click de distancia en la esquina inferior derecha. Directamente se puede comunicar con el mismo que le dará respuestas instantaneas sobre sus dudas e inquietudes referente a todo lo relacionado con analisis de datos, inteligencia de negocios, tomas de decisiones y visualización de datos.</p>
        
        <img src={arrow} className="assistant-arrow" alt="assistant-arrow" />
      <Stack project="https://www.stack-ai.com/embed/5b53ef14-204a-45cf-b5d0-7a9315bd8f5d/1c764b73-6a85-4e52-af2e-b4792c24db8b/662e9d7f1b60bdaf9dd2e8fb" />

    </section>
  );
};

export default Ai;
