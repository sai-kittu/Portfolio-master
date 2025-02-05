import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sai Krishna </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently a Student at Indiana Weselyean University.
            <br />
            I am doing my Master's (MS) in Information Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            It's not just about building things... it's about building something that truly makes a difference."{" "}
          </p>
          <footer className="blockquote-footer">Sai Krishna</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
