import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import background from "../../Assets/Projects/Background.png";
import quiz from "../../Assets/Projects/quiz.png";
import visual from "../../Assets/Projects/visual.png";
import list from "../../Assets/Projects/list.png";
import password from "../../Assets/Projects/password.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={visual}
              isBlog={false}
              title="3D-Image"
              description="This 3D image depicts a high-fidelity isometric view of a futuristic urban environment. The scene features meticulously detailed architectural elements with a symmetrical design and sleek metallic finishes. Realistic textures and soft ambient lighting enhance the visual appeal, while shadows and reflections contribute to a dynamic sense of depth."
              ghLink="https://github.com/sai-kittu/3D-Boxes"
              demoLink=" https://sai-kittu.github.io/3D-Boxes/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={password}
              isBlog={false}
              title="Password-Generator"
              description="The tool ensures the generation of unpredictable passwords, making it difficult for attackers to guess or brute-force. It can be integrated into web applications, desktop utilities, or browser extensions to help users protect sensitive information."
              ghLink="https://github.com/sai-kittu/password-generator"
              demoLink="https://sai-kittu.github.io/password-generator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz-App"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/sai-kittu/Quiz-App.git"
              demoLink=" https://sai-kittu.github.io/Quiz-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={background}
              isBlog={false}
              title="Backgoround Changer"
              description="Background changes refer to the alteration of a website or application’s visual backdrop, often involving color, images, or patterns. They enhance the user experience by creating a visually appealing environment that aligns with the brand's identity. Dynamic background changes can also convey themes, moods, or responses to user interactions. Effective use of background changes improves aesthetics and user engagement while maintaining readability."
              ghLink="https://github.com/sai-kittu/Background-Slider.git"
              demoLink="https://sai-kittu.github.io/Background-Slider/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={list}
              isBlog={false}
              title="To Do List"
              description="A To-Do List is a simple tool used to organize tasks by listing them in order of priority. It helps users keep track of daily activities, deadlines, and goals. Tasks can be marked as complete once finished, providing a sense of accomplishment. To-Do Lists improve productivity, reduce stress, and ensure important tasks are not forgotten."
              ghLink="https://github.com/sai-kittu/TO-DO-LIST.git"
              demoLink="https://sai-kittu.github.io/TO-DO-LIST/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
