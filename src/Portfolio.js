import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Portfolio() {
  const projects = [
    { id: 1, title: "Project 01", img: "/images/project1.jpg" },
    { id: 2, title: "Project 02", img: "/images/project2.jpg" },
    { id: 3, title: "Project 03", img: "/images/project3.jpg" },
  ];

  return (
    <section id="portfolio" className="py-5 bg-light">
      <Container>
        <h2 className="mb-4">02 Portfolio</h2>
        <Row>
          {projects.map((p) => (
            <Col md={4} key={p.id} className="mb-3">
              <Card>
                <Card.Img variant="top" src={p.img} />
                <Card.Body>
                  <Card.Title>{p.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
