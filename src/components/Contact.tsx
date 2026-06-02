import React, { useState } from "react";
import "../assets/styles/Contact.scss";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import SendIcon from "@mui/icons-material/Send";
import DownloadIcon from "@mui/icons-material/Download";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setResult("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "0ab396ce-722f-4547-b612-08f1538e0c8e"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message Sent Successfully!");
        form.reset();
      } else {
        setResult("❌ Failed to send message");
        console.error(data);
      }
    } catch (error) {
      setResult("❌ Something went wrong");
      console.error(error);
    }
  };

  return (
    <section id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>

          <p>
            Interested in AI, Data Science, Machine Learning,
            IoT, or Web Development projects?
            <br />
            <br />
            Let's connect and build something amazing.
          </p>

          <div className="contact-info">
            <p className="email-text">
              📧 Email: sunrisesharsha467@gmail.com
            </p>
          </div>

          <div className="resume-buttons">
            <Button
              variant="outlined"
              startIcon={<DownloadIcon />}
              href={`${process.env.PUBLIC_URL}/resume/Harsha_AI_Engineer_Resume.pdf`}
              download
            >
              Download Resume
            </Button>
          </div>

          <Box
            component="form"
            onSubmit={onSubmit}
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                name="name"
                label="Your Name"
                placeholder="Enter your name"
                required
                fullWidth
              />

              <TextField
                name="email"
                label="Email / Phone"
                placeholder="Enter your email or phone"
                required
                fullWidth
              />
            </div>

            <TextField
              name="message"
              label="Message"
              placeholder="Write your message..."
              required
              fullWidth
              multiline
              rows={8}
              className="body-form"
            />

            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
            >
              Send Message
            </Button>

            {result && (
              <p className="form-status">
                {result}
              </p>
            )}
          </Box>
        </div>
      </div>
    </section>
  );
};

export default Contact;
