import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={6}>
            <h1 className="hero-title">Hi, I'm Irfan 👋</h1>
            <p className="hero-subtitle">
              A Frontend Developer passionate about building beautiful,
              responsive, and user-friendly websites.
            </p>
            <div className="hero-buttons">
              <Button variant="primary" className="me-3">View Portfolio</Button>
              <Button variant="outline-light">Contact Me</Button>
            </div>
          </Col>
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Hero illustration"
              className="hero-img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
