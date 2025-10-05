import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    const createBubble = (x, y) => {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.style.left = `${x}px`;
      bubble.style.top = `${y}px`;
      document.body.appendChild(bubble);

      setTimeout(() => {
        bubble.remove();
      }, 2000);
    };

    const handleMouseMove = (e) => {
      const count = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < count; i++) {
        createBubble(
          e.clientX + (Math.random() * 20 - 10),
          e.clientY + (Math.random() * 20 - 10)
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="d-flex flex-column vh-100 text-green"
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg?semt=ais_hybrid&w=740&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{
          backgroundColor: "rgba(0, 50, 0, 0.9)",
          boxShadow: "0 0 15px green",
        }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand text-glow"
            href="#home"
            style={{ color: "limegreen", fontWeight: "700" }}
          >
            My Portfolio
          </a>
          <button
            className="navbar-toggler bg-success"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {["Home", "Skills", "Experience", "Contact"].map((item, i) => (
                <li className="nav-item" key={i}>
                  <a
                    className="nav-link text-glow"
                    href={`#${item.toLowerCase()}`}
                    style={{
                      color: "limegreen",
                      margin: "0 10px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main id="home" className="flex-grow-1 overflow-auto container mt-5 pt-5 mb-5">
        <div
          className="d-flex flex-column justify-content-center align-items-center text-center"
          style={{
            minHeight: "80vh",
            backgroundColor: "rgba(0,0,0,0.6)",
            borderRadius: "15px",
            padding: "20px",
            marginTop: "100px",
          }}
        >
          <h1 className="display-3 fw-bold text-glow">
            Hello, I&apos;m <br />
            Irfan Pathan
          </h1>

          <p
            className="mt-4 hero-text text-glow"
            style={{ maxWidth: "800px", lineHeight: "1.8", color: "limegreen" }}
          >
            Hi, I’m <strong>Irfan Pathan</strong>, a passionate{" "}
            <strong>Customer Support Associate</strong> and{" "}
            <strong>Frontend Developer</strong>.
            <br />
            <br />
            I hold a <strong>Bachelor’s degree in Arts (B.A.)</strong>, along
            with certifications in <strong>MERN Full Stack Development</strong>{" "}
            and <strong>Securities Market Operations (NISM VII)</strong>.
            <br />
            <br />
            With hands-on experience at <strong>Tech Mahindra</strong>, I
            managed customer interactions through{" "}
            <strong>Share.Market, UBON, Avaya</strong>, and{" "}
            <strong>Freshdesk</strong>, strengthening my{" "}
            <strong>communication, problem-solving, and customer satisfaction</strong>{" "}
            skills.
            <br />
            <br />
            On the technical side, I enjoy creating web interfaces using{" "}
            <strong>HTML, CSS, JavaScript</strong>, and{" "}
            <strong>React</strong>, combining a{" "}
            <strong>customer-first mindset</strong> with{" "}
            <strong>development expertise</strong>.
          </p>
        </div>

        {/* Skills Section */}
        <section
          id="skills"
          className="my-5 p-4 rounded"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <h2 className="text-center mb-4 text-glow">Skills</h2>
          <div className="row text-center">
            {[
              {
                title: "Technical Skills",
                text: "React.js, HTML, CSS, Bootstrap, Node.js, Git, GitHub",
              },
              {
                title: "Software Skills",
                text: "MS Word, MS Excel, PowerPoint",
              },
              {
                title: "Customer Support Skills",
                text: "Communication, Problem-solving, Ticket Management, Customer Satisfaction",
              },
            ].map((skill, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <div className="p-4 bg-dark rounded shadow skill-card text-glow">
                  <h5>{skill.title}</h5>
                  <p>{skill.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="my-5 p-4 rounded position-relative"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <h2 className="text-center mb-5 text-glow">03 EXPERIENCE</h2>

          <div
            className="timeline position-relative mx-auto"
            style={{
              width: "2px",
              backgroundColor: "green",
              height: "calc(100% - 60px)",
              top: "30px",
            }}
          ></div>

          {/* Tech Mahindra */}
          <div className="timeline-item d-flex justify-content-between mb-5 position-relative text-glow">
            <div className="text-end w-50 pe-4">
              <p>2024-2025</p>
              <h5>Customer Support Associate - Tech Mahindra</h5>
              <p>
                Handled inbound/outbound queries, tickets on Freshdesk, and
                resolved issues using UBON and Share.market.
              </p>
            </div>
            <div className="timeline-dot position-absolute start-50 translate-middle"></div>
            <div className="text-start w-50 ps-4"></div>
          </div>

          {/* Antariksh Motors */}
          <div className="timeline-item d-flex justify-content-between mb-5 position-relative text-glow">
            <div className="text-end w-50 pe-4"></div>
            <div className="timeline-dot position-absolute start-50 translate-middle"></div>
            <div className="text-start w-50 ps-4">
              <p>2023-2024</p>
              <h5>DMS Operator - Antariksh Motors</h5>
              <p>
                Worked in Sales, managed customer data, and maintained records
                for smooth operations.
              </p>
            </div>
          </div>

          {/* Full Stack Academy */}
          <div className="timeline-item d-flex justify-content-between position-relative text-glow">
            <div className="text-end w-50 pe-4">
              <p>2022-2023</p>
              <h5>Frontend Developer (Intern) - Full Stack Academy</h5>
              <p>
                Gained 6 months of practical experience using React, HTML, CSS,
                and JavaScript for responsive UI projects.
              </p>
            </div>
            <div className="timeline-dot position-absolute start-50 translate-middle"></div>
            <div className="text-start w-50 ps-4"></div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="my-5 p-4 rounded text-center text-glow"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <h2 className="mb-4">Contact Me 7820949997</h2>
          <p>Reach out via WhatsApp or Email</p>
          <div className="d-flex justify-content-center gap-3">
            <a
              href="https://wa.me/7820949997"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-success text-glow"
            >
              📱 WhatsApp
            </a>
            <a
              href="mailto:pathanirfan7820@gmail.com"
              className="btn btn-outline-light text-glow"
            >
              ✉️ Email
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="text-center py-3"
        style={{
          backgroundColor: "rgba(0, 50, 0, 0.9)",
          boxShadow: "0 0 10px green",
          color: "limegreen",
        }}
      >
        <p className="mb-0">© 2025 My Website | All Rights Reserved</p>
      </footer>

      {/* Styles */}
      <style>
        {`
          * {
            color: limegreen !important;
            scroll-behavior: smooth;
          }

          .text-glow {
            transition: all 0.3s ease;
          }

          .text-glow:hover {
            text-shadow: 0 0 10px limegreen, 0 0 20px limegreen;
            border-bottom: 1px solid limegreen;
          }

          .skill-card {
            transition: all 0.5s ease;
            border: 1px solid green;
            cursor: pointer;
            position: relative;
            overflow: hidden;
          }

          .skill-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: rgba(0, 255, 0, 0.1);
            transform: rotate(45deg) translateX(-100%);
            transition: all 0.7s ease;
          }

          .skill-card:hover::before {
            transform: rotate(45deg) translateX(100%);
          }

          .skill-card:hover {
            transform: scale(1.08) rotate(1deg);
            box-shadow: 0 0 30px limegreen;
            border-color: limegreen;
          }

          .timeline-dot {
            width: 14px;
            height: 14px;
            background-color: limegreen;
            border-radius: 50%;
            top: 10px;
          }

          @media (max-width: 768px) {
            .timeline-item {
              flex-direction: column !important;
              align-items: center !important;
              text-align: center !important;
            }

            .timeline-item .text-end,
            .timeline-item .text-start {
              width: 100% !important;
              padding: 0 !important;
            }

            .timeline-dot {
              position: relative !important;
              left: auto !important;
              transform: none !important;
              margin-bottom: 10px;
            }
          }

          .bubble {
            position: fixed;
            width: 10px;
            height: 10px;
            background-color: rgba(0, 255, 0, 0.7);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: bubbleMove 2s linear forwards;
          }

          @keyframes bubbleMove {
            0% { transform: translateY(0) scale(1); opacity: 1; }
            100% { transform: translateY(-50px) scale(0.5); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}

export default App;
