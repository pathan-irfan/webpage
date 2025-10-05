import React, { useEffect, useState } from "react";
import { Container, ProgressBar } from "react-bootstrap";

function Skills() {
  const [progress, setProgress] = useState({
    html: 0,
    css: 0,
    js: 0,
    react: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setProgress({ html: 90, css: 85, js: 80, react: 75 });
    }, 500);
  }, []);

  return (
    <section id="skills" className="py-5 bg-dark text-light">
      <Container>
        <h2 className="mb-4">01 Professional</h2>
        <p>My knowledge level in software</p>

        <h5>HTML</h5>
        <ProgressBar now={progress.html} label={`${progress.html}%`} animated />

        <h5 className="mt-3">CSS</h5>
        <ProgressBar now={progress.css} label={`${progress.css}%`} animated />

        <h5 className="mt-3">JavaScript</h5>
        <ProgressBar now={progress.js} label={`${progress.js}%`} animated />

        <h5 className="mt-3">React.js</h5>
        <ProgressBar now={progress.react} label={`${progress.react}%`} animated />
      </Container>
    </section>
  );
}

export default Skills;
