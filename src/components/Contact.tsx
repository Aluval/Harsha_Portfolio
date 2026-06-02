import React, { useState } from "react";
import "../assets/styles/Contact.scss";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import DownloadIcon from "@mui/icons-material/Download";
import TextField from "@mui/material/TextField";

function Contact() {
const [result, setResult] = useState("");

const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
event.preventDefault();

```
setResult("Sending...");

const formData = new FormData(event.currentTarget);

formData.append(
  "access_key",
  "0ab396ce-722f-4547-b612-08f1538e0c8e"
);

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
  event.currentTarget.reset();
} else {
  setResult("❌ Failed to send message");
  console.log(data);
}
```

};

return ( <div id="contact"> <div className="items-container"> <div className="contact_wrapper">

```
      <h1>Contact Me</h1>

      <p>
        Interested in AI, Data Science, Machine Learning,
        IoT or Web Development projects?
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
            required
            fullWidth
            label="Your Name"
            placeholder="Enter your name"
          />

          <TextField
            name="email"
            required
            fullWidth
            label="Email / Phone"
            placeholder="Enter your email or phone"
          />

        </div>

        <TextField
          name="message"
          required
          fullWidth
          multiline
          rows={8}
          label="Message"
          placeholder="Write your message..."
          className="body-form"
        />

        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Send Message
        </Button>

        <p className="form-status">
          {result}
        </p>

      </Box>

    </div>
  </div>
</div>
```

);
}

export default Contact;
