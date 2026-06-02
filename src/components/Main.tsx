import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// TypeScript may complain about importing SCSS without type declarations.
// Suppress the error for this side-effect style import.
// @ts-ignore
import '../assets/styles/Main.scss';
import avatar from "../assets/images/Harsha.jpeg";



function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Harsha" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/aluval" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/aluvala-ediga-harsha-vardhan-goud-83241a296/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Aluvla Ediga Harsha Vardhan Goud</h1>
          <p>AI Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/aluval" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/aluvala-ediga-harsha-vardhan-goud-83241a296/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;