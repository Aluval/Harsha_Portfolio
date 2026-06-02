import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import DownloadIcon from "@mui/icons-material/Download";
import TextField from "@mui/material/TextField";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === "");
    setEmailError(email === "");
    setMessageError(message === "");

    if (name && email && message) {
      alert("Message Submitted Successfully!");

      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>

          <p>
            Interested in AI, Data Science, Machine Learning, IoT or Web
            Development projects?<br></br><br></br>     

            Let's connect and build something amazing.
          </p>

          <div className="contact-info">
            <p>📧 Email: sunrisesharsha467@gmail.com</p>
          </div>

          <div className="resume-buttons">
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              href="/resume/Harsha_AI_Engineer_Resume.pdf"
              target="_blank"
            >
              View Resume
            </Button>

            <Button
              variant="outlined"
              startIcon={<DownloadIcon />}
              href="/resume/Harsha_AI_Engineer_Resume.pdf"
              download
            >
              Download Resume
            </Button>
          </div>

          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                label="Your Name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />

              <TextField
                required
                label="Email / Phone"
                placeholder="Enter your email or phone"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={
                  emailError
                    ? "Please enter your email or phone number"
                    : ""
                }
              />
            </div>

            <TextField
              required
              multiline
              rows={8}
              label="Message"
              placeholder="Write your message..."
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter your message" : ""}
            />

            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendEmail}
            >
              Send Message
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;