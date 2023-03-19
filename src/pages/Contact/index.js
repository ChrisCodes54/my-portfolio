import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Transitions from "../transitions";
import './style.css'

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d0eiqek', 'template_6ddebja', form.current, 'user_e3xioD9DxjxuKMVKwRYSc')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div id="contact-section">
      
      <Transitions>
        <h1 id='contact-header'>Contact Me</h1>
        <div>
        <form id='form-box' ref={form} onSubmit={sendEmail}>
          <label id='label'>Name</label>
          <input type="text" name="user_name" />
          <label id='label'>Email</label>
          <input type="email" name="user_email" />
          <label id='label' >Message</label>
          <textarea id='message' name="message" />
          <input type="submit" value="Send" />
        </form>
        </div>
      </Transitions>
    </div>
  )
}