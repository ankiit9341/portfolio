// import React from 'react'
import './Contact.css'
import linkedIn from '../../asset/download.png'
import facebook from '../../asset/facebook.png'
import instagram from '../../asset/instagram.jpeg'
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_goox6g5', 'template_tzhl98h', form.current, {
        publicKey: 'Ni8QEsQzhiBQEf2V9',
      })
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent !");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact-page container' id='contact'>
      <h1 className='contact-heading'>Contact Me</h1>
      <p className='contant-disc'>Please leave your message</p>
      <form action="" className='contact-form' ref={form} onSubmit={sendEmail}>
        <input type="text" className="your-name" placeholder='Your Name..' name='your_name'/>
        <input type="email" className="your-email" placeholder='Your email..' name='your_email'/>
        <textarea name="message" id="" className="message" rows="5"></textarea>
        <button type="submit" value="send" className="submit">Submit</button>

        <div className="links">
          <a href="https://www.linkedin.com/in/ankit-kumar-1065b3259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_main'><img className="img-fluid link" src={linkedIn} alt="linkedin"  /></a>
          <a href="https://www.instagram.com/_ankiit12?igsh=MWhrM3pyODI5NG8wYQ==" target='_main'><img className="img-fluid link" src={instagram} alt="instagram"  /></a>
          <a href="https://www.facebook.com/share/F6uSp82zxC2k29qS/?mibextid=qi2Omg" target='_main'><img className="img-fluid link" src={facebook} alt="facebook"  /></a>
        </div>
      </form>
    </div>
  )
}
