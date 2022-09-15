import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Results-driven and motivated Software Engineer with a demonstrated experience in improving software performance,
             <span className="purple"> testing and updating existing software, and developing new software functionalities, strong attention to detail, and ability to finish projects on time. </span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> For the love of the code.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
