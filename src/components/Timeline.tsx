import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faLaptopCode,
  faGraduationCap,
  faTrophy,
  faAward,
  faRobot,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">

        {/* EXPERIENCE */}
        <h1>Professional Experience</h1>

        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2026 - Present"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faLaptopCode} />}
          >
            <h3>Associate Developer</h3>
            <h4>SRIIT Pvt Ltd (Remote)</h4>
            <p>
              Developing real-time software applications using Python,
              FastAPI, React.js, Docker, Git, and AWS. Building AI-powered
              solutions and collaborating with international teams - Australia.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2024 - Apr 2024"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Data Science Intern</h3>
            <h4>Interncall, Kurnool</h4>
            <p>
              Data Analysis, Visualization, Predictive Analytics,
              SQL Reporting, Power BI Dashboards, and Machine Learning.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2023 - Feb 2024"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Artificial Intelligence Intern</h3>
            <h4>Corizo (Online)</h4>
            <p>
              Machine Learning, Data Preprocessing, Feature Engineering,
              Model Evaluation, OpenCV, Pandas, NumPy and Scikit-Learn.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>

        {/* EDUCATION */}
        <h1 className="section-title">Education</h1>

        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2024 - 2026"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3>Master of Computer Applications (MCA)</h3>
            <h4>RGM College of Engineering & Technology</h4>
            <p>
              Specialized in Artificial Intelligence, Machine Learning,
              Data Science, Cloud Computing and IoT.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021 - 2024"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3>Bachelor of Commerce (Computer Applications)</h3>
            <h4>St. Joseph's Degree & PG College, Kurnool</h4>
            <p>
              Computer Applications, Programming Fundamentals,
              Database Systems and Information Technology.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>

        {/* ACHIEVEMENTS */}
        <h1 className="section-title">Achievements</h1>

        <VerticalTimeline>

          <VerticalTimelineElement
            date="2025"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faTrophy} />}
          >
            <h3>Hackathon Finalist</h3>
            <p>
              Top 4 Team in Smart Attendance System Hackathon using
              Face Recognition and AI-powered Attendance Monitoring.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2025"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faAward} />}
          >
            <h3>NPTEL Certification</h3>
            <p>Introduction to Internet of Things (78%).</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2025"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faAward} />}
          >
            <h3>NPTEL Certification</h3>
            <p>Cloud Computing Certification (62%).</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2024"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faAward} />}
>
            <h3>Artificial Intelligence Training</h3>
            <p>Corizo - Completed AI Training Program.</p>
            </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2024"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faAward} />}
          >
            <h3>Artificial Intelligence Internship</h3>
            <p>Corizo - Successfully completed AI Internship.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2024"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faAward} />}
          >
            <h3>Data Science with Python Internship</h3>
            <p>InternCall - 3 Month Data Science Internship.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2024"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faAward} />}
          >
            <h3>Python Developer Certification</h3>
            <p>SoloLearn Certified Python Developer.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2024"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faTrophy} />}
          >
            <h3>IoT Masterclass Appreciation Award</h3>
            <p>Recognized for active participation in InternCall IoT Masterclass.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="Sports"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faMedal} />}
          >
            <h3>State Level Carrom Player</h3>
            <p>
              Represented at State-Level competitions and achieved
              competitive rankings.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>

      </div>
    </div>
  );
}

export default Timeline;