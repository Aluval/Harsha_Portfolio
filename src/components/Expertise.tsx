import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faReact,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import { faBrain, faLock, faChartLine } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
// @ts-ignore
import "../assets/styles/Expertise.scss";

const aiSkills = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "OpenCV",
  "YOLOv8",
  "DeepFace",
  "MediaPipe",
  "Scikit-Learn",
  "NumPy",
  "Pandas"
];

const dataSkills = [
  "Data Analysis",
  "Data Visualization",
  "Power BI",
  "Excel",
  "Pandas",
  "NumPy",
  "SQL",
  "Jupyter Notebook",
  "Plotly",
  "Machine Learning"
];

const webSkills = [
  "React",
  "Flask",
  "FastAPI",
  "Firebase",
  "MongoDB",
  "SQL",
  "HTML5",
  "CSS3",
  "JavaScript",
  "GitHub"
];

const securitySkills = [
  "Face Recognition",
  "Voice Authentication",
  "QR Authentication",
  "OTP",
  "TOTP",
  "Google Authenticator",
  "OpenSSL",
  "Firebase",
  "Cyber Security"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>My Expertise</h1>

        <div className="skills-grid">

          <div className="skill">
            <FontAwesomeIcon icon={faBrain} size="3x" />
            <h3>Artificial Intelligence & Machine Learning</h3>
            <p>
              Experienced in developing AI-powered applications including
              computer vision systems, emotion detection, healthcare prediction,
              occupancy detection, blind assistance systems, and intelligent
              automation solutions.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech Stack:</span>
              {aiSkills.map((skill, index) => (
                <Chip key={index} className="chip" label={skill} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faChartLine} size="3x" />
            <h3>Data Science & Analytics</h3>
            <p>
              Skilled in data preprocessing, exploratory data analysis,
              visualization, predictive modeling, and AI-powered data analytics
              platforms using modern Python-based tools.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech Stack:</span>
              {dataSkills.map((skill, index) => (
                <Chip key={index} className="chip" label={skill} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Development</h3>
            <p>
              Built scalable web applications, dashboards, AI-integrated
              platforms, and cloud-based solutions using modern frontend and
              backend technologies.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech Stack:</span>
              {webSkills.map((skill, index) => (
                <Chip key={index} className="chip" label={skill} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faLock} size="3x" />
            <h3>AI Security & Authentication Systems</h3>
            <p>
              Developed secure authentication systems using facial recognition,
              voice verification, QR authentication, OTP, and TOTP-based
              multi-factor security mechanisms.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech Stack:</span>
              {securitySkills.map((skill, index) => (
                <Chip key={index} className="chip" label={skill} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>Cloud, DevOps & Deployment</h3>
            <p>
              Experience deploying applications and AI solutions using Docker,
              GitHub, AWS services, Firebase, Linux environments, and cloud
              hosting platforms.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech Stack:</span>
              <Chip className="chip" label="Docker" />
              <Chip className="chip" label="AWS" />
              <Chip className="chip" label="Firebase" />
              <Chip className="chip" label="Git" />
              <Chip className="chip" label="GitHub Actions" />
              <Chip className="chip" label="Linux" />
              <Chip className="chip" label="Render" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;