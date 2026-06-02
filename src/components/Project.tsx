import React from "react";

import datasci_logo from "../assets/images/datasci_logo.png";
import AI_Fan from "../assets/images/AI_Fan.jpeg";
import QRVoiceEducation from "../assets/images/QRVoiceEducation.jpeg";
import SmartLockTOTP from "../assets/images/SmartLockTOTP.jpeg";
import BlinkVerfiy_AI from "../assets/images/BlinkVerfiy_AI.jpeg";
import EmoFace_AI from "../assets/images/EmoFace_AI.jpeg";
import QROTPVoiceHouse from "../assets/images/QROTPVoiceHouse.jpeg";
import VisuNav_AI from "../assets/images/VisuNav_AI.jpeg";

import "../assets/styles/Project.scss";

function Project() {
  const projects = [
    {
      title: "DataSci – AI Powered Data Analysis",
      image: datasci_logo,
      link: "https://github.com/Aluval/DataSci",
      description:
        "AI-powered platform for CSV cleaning, visualization, machine learning predictions and PDF report generation."
    },

    {
      title: "AI Smart Ceiling Fan",
      image: AI_Fan,
      link: "https://github.com/Aluval/AI-Enabled-Smart-Ceiling-Fan-with-Occupancy-and-Temperature-Adaptive-Control-for-Energy-Efficiency",
      description:
        "AI-enabled occupancy and temperature adaptive smart ceiling fan system for energy-efficient smart homes."
    },

    {
      title: "QR & Voice Attendance System",
      image: QRVoiceEducation,
      link: "https://github.com/Aluval/QR-Voice-Attendance-System",
      description:
        "Secure attendance system using QR code scanning, AI-powered voice authentication and cloud storage."
    },

    {
      title: "Smart Lock with TOTP Authentication",
      image: SmartLockTOTP,
      link: "https://github.com/Aluval/Smart-Lock-System-with-TOTP-Authentication",
      description:
        "Smart lock system integrated with Google Authenticator and RFC-6238 TOTP security."
    },

    {
      title: "Eye Detection Blink Module",
      image: BlinkVerfiy_AI,
      link: "https://github.com/Aluval/Eye-Detection-Blink-Module",
      description:
        "Real-time eye blink detection and liveness verification system using OpenCV."
    },

    {
      title: "Real-Time Facial Emotion Detection",
      image: EmoFace_AI,
      link: "https://github.com/Aluval/Real-Time-Facial-Emotion-Detection-System",
      description:
        "AI-powered facial emotion recognition system using MediaPipe, DeepFace and OpenCV."
    },

    {
      title: "QR OTP Voice Smart Lock",
      image: QROTPVoiceHouse,
      link: "https://github.com/Aluval/QR-OTP-Voice-Smart-Lock-System",
      description:
        "Multi-factor smart lock system using QR verification, OTP validation and voice authentication."
    },

    {
      title: "AI Assistive System for the Blind",
      image: VisuNav_AI,
      link: "https://github.com/Aluval/Al-Assistive-System-for-the-Blind",
      description:
        "AI-powered assistive system with obstacle detection, voice alerts and intelligent navigation support."
    }
  ];

  return (
    <div className="projects-container" id="projects">
      <h1>My Projects</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                className="zoom"
                alt={project.title}
                width="100%"
              />
            </a>

            <a href={project.link} target="_blank" rel="noreferrer">
              <h2>{project.title}</h2>
            </a>

            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;