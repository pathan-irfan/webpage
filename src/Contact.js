import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="mb-4">04 Contact</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Your Email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={3} placeholder="Message" />
          </Form.Group>
          <Button variant="primary">Send</Button>
        </Form>
      </Container>
    </section>
  );
}

export default Contact;
