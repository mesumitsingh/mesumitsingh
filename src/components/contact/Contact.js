/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import './Contact.css';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "3em",
  },
  form: {
    width: '100%',
  },
  formfield: {
    width: '100%',
    marginBottom: '2rem',
  },
}));

export const Contact = () => {
  const classes = useStyles();
  const greetings = "Say hello.";
  const form = useRef();

  // State variables to hold the form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle change to update form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: 'warning',
        title: 'Please fill in all fields before sending the message',
        position: 'center',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

      emailjs.sendForm('service_3tvsfj5', 'template_wzwoe6s', form.current, 'xui86eurGDZC5Ve-w')
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'You have sent an email!',
          showConfirmButton: false,
          timer: 1500
        });
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="contact">
          <div className="_form_wrapper">
            <form ref={form} onSubmit={sendEmail} className={classes.form}>
              <TextField
                id="outlined-name-input"
                label="Name"
                type="text"
                size="small"
                variant="filled"
                name="name"
                className={classes.formfield}
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                id="outlined-email-input"
                label="Email"
                type="email"
                size="small"
                variant="filled"
                name="email"
                className={classes.formfield}
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                id="outlined-message-input"
                label="Message"
                type="textarea"
                size="small"
                multiline
                minRows={5}
                variant="filled"
                name="message"
                className={classes.formfield}
                value={formData.message}
                onChange={handleChange}
              />
              <button type="submit" value="Send" className="submit-btn">
                <i className="fas fa-terminal"></i>
                <Typography component='span'> Send Message</Typography>
              </button>
            </form>
          </div>
          <h1 className="contact_msg">
            <TextDecrypt text={greetings} />
          </h1>
        </div>
      </Container>
    </section>
  );
};
