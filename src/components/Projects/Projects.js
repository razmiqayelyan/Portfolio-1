import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CryptoWebsite from "../../Assets/Projects/crypto-hunter.png";
import KotKalash from "../../Assets/Projects/kotkalash.png";
import BetSet from "../../Assets/Projects/betset.png";
import Chat from "../../Assets/Projects/chat.png";


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
              imgPath={CryptoWebsite}
              isBlog={false}
              title="Crypto Hunter"
              description="Crypto Currency Website build with React.js, Material-UI, and Firebase. Have features witch allows users to see price of cryptocurrencies, login or register and add favorite cryptocurrencies to favorites."
              ghLink="https://github.com/razmiqayelyan/myapp"
              demoLink="https://mikalyan.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chat}
              isBlog={false}
              title="Razo's Chat"
              description={`Razos Chat is a simple web massenger with 1 To 1 and Group Chat functions, full developed by me.
              \nTechnologies that i use in this app
                \nFrontend : React, Redux Toolkit, MUI, CSS, socket.io-client
                \nBackend : Node.js, Express, MongoDB Atlas, Mongoose, Socket.io, JWT, Bcrypt. 
              `}
              ghLink="https://github.com/razmiqayelyan/chat-frontend"
              demoLink="https://chat.mikalyan.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KotKalash}
              isBlog={false}
              title="Kot Kalash"
              description="KotKalash Random Cat Images Website build with React.js, Material-UI. In this website you can find and download very interesting random cat images, also you can filter that by categories."
              ghLink="https://github.com/razmiqayelyan/kotkalash"
              demoLink="https://kotkalash.mikalyan.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BetSet}
              isBlog={false}
              title="BetSet"
              description="Online Bet Predictions Website build with React.js,Express. Website now in development..."
              ghLink="https://github.com/razmiqayelyan/jwt-user-crud"
              demoLink="https://betset.am/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
