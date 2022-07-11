import image from "../../Pics/headshot.jpg";
import React from "react";
import { Row, Col } from 'reactstrap';
import skills from "../../Info/skills";
import './style.css';
import { renderMatches } from "react-router-dom";


class About extends React.Component {
  state = {
    skills
  };
  
  render() {
    return (
      <div className="AboutMe">
        <img id="image" src={image} alt="Image of myself"></img>
        <h1 className="font">
          <span className="p1">let Greeting</span>
          <span className="p2"> = </span>
          <span className="p3"> "Hello! My name is Dexter Vorbe and I am a Software Developer"</span>
          <span className="p4">;</span>
        </h1>
        <p className="disc">
           As an avid gamer 🎮 I was always interested in the world of code and wanted to know how it all worked 🤔. Being able to create mobile responsive web applications helped me gain a better understanding of code, and has turned into a passion of mine.
           As a ✨perfectionist✨ I want to make sure my code is flawless. I enjoy working with groups of like-minded and knowledgeable individuals, where I can further surpass my skills as a developer.
        </p>
        <p>Technical Skills</p>
        <Row className="Justify-content-center">

        {this.state.skills.map(skill => (
          <Col>
        
          <img className="skillsLogo" src={skill.src} alt="Logo" />
          <hr className="my-2" />
          <p>{skill.skill}</p>
          </Col>
        ))}
        </Row>
      </div>
    );
  };
}

export default About;
