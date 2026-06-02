import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <footer style={{ padding: "1rem 0" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <a href="https://github.com/aluval/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/aluvala-ediga-harsha-vardhan-goud-83241a296/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
    </footer>
  );
}

export default Footer;