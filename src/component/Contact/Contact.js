import React from 'react'
import './Contact.css'
import linkedIn from '../../asset/download.png'
import facebook from '../../asset/facebook.png'
import instagram from '../../asset/instagram.jpeg'

export default function contact() {
  return (
    <div className='contact-page container'>
      <h1 className='contact-heading'>Contact Me</h1>
      <p className='contant-disc'>Please leave your message</p>
      <form action="" className='contact-form'>
        <input type="text" className="your-name" placeholder='Your Name..'/>
        <input type="email" className="your-email" placeholder='Your email..' />
        <textarea name="message" id="" className="message" rows="5"></textarea>
        <button type="submit" value="send" className="submit">Submit</button>

        <div className="links">
          <a href="https://www.linkedin.com/in/ankit-kumar-1065b3259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_main'><img className="img-fluid" src={linkedIn} alt="linkedin" className="link" /></a>
          <a href="https://www.instagram.com/_ankiit12?igsh=MWhrM3pyODI5NG8wYQ==" target='_main'><img className="img-fluid" src={instagram} alt="instagram" className="link" /></a>
          <a href="https://www.facebook.com/share/F6uSp82zxC2k29qS/?mibextid=qi2Omg" target='_main'><img className="img-fluid" src={facebook} alt="facebook" className="link" /></a>
        </div>
      </form>
    </div>
  )
}
