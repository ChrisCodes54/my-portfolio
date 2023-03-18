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
    <div id="contact">
      <Transitions>
        <h1 id='contact-header'>Contact Me</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </Transitions>
    </div>
  )
}