import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5zs5vww', 'template_hpvuslj', form.current, {
        publicKey: 'CwKZn_ZC7-QnlBzfk',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label><br />
      <input type="text" name="from_name" /><br />
      <label>Email</label><br />
      <input type="email" name="from_email" /><br />
      <label>Message</label><br />
      <textarea name="message" /><br />
      <input type="submit" value="Send" /><br />
    </form>
  );
};

export default ContactUs