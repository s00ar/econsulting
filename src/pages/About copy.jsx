import React from 'react';
import { Container, Row, Col, Image, Video } from 'react-bootstrap';
import Stack from 'react-stackai';

const About = () => {
  return (
    <Container className="my-5">
      <Hero />
      <SobreNosotros />
      <Servicios />
      <Planes />
      <Contacto />
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

const SobreNosotros = () => {
  return (
    <section className="sobre-nosotros">
      <h2>Sobre Nosotros</h2>
      <p>
        Eleven Consulting es una empresa dedicada a brindar soluciones
        integrales a empresas de todos los tamaños. Contamos con un equipo de
        profesionales altamente calificados y con amplia experiencia en las
        diferentes áreas de negocio.
      </p>
      <p>
        Nuestra misión es ayudar a nuestros clientes a alcanzar sus objetivos
        empresariales mediante la ارائه de servicios de alta calidad,
        innovadores y personalizados.
      </p>
      <p>
        Nuestra visión es ser la empresa líder en consultoría empresarial en
        Latinoamérica, reconocida por su excelencia, profesionalismo y compromiso
        con el éxito de sus clientes.
      </p>
      <ul>
        <li>Profesionalismo</li>
        <li>Responsabilidad social</li>
        <li>Innovación</li>
        <li>Excelencia en el servicio al cliente</li>
      </ul>
    </section>
  );
};

const Servicios = () => {
  return (
    <section className="servicios">
      <h2>Servicios</h2>
      <ul>
        <li>Consultoría empresarial</li>
        <li>Asesoría financiera</li>
        <li>Tercerización de procesos</li>
        <li>Capacitación y desarrollo</li>
        <li>Marketing digital</li>
      </ul>
    </section>
  );
};


const Planes = () => {
return (
<section className="planes">
<h2>Planes</h2>
<ul>
<li>Plan Básico</li>
<li>Plan Standard</li>
<li>Plan Premium</li>
</ul>
</section>
);
};

const Contacto = () => {
return (
<section className="contacto">
<h2>Contacto</h2>
<ul>
<li>Teléfono: +62 111-444-90</li>
<li>Email: info@elevenconsulting.com.ar</li>
</ul>
</section>
);
};

export default About;
