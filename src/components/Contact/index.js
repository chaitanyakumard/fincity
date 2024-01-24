
import React from 'react';
import linkedinIcon from './icons/linkedin.svg';  // Adjust the path accordingly
import instagramIcon from './icons/instagram.svg';  // Adjust the path accordingly
import emailIcon from './icons/mail.svg';  // Adjust the path accordingly
import "./styles.css"

const Contact = () => {
  return (
    <div>
      <div>
        <ul className="contact-icons">
          <li>
            <img className='image' src={linkedinIcon} alt="LinkedIn" />
            {/* <span>LinkedIn</span> */}
          </li>
          <li>
            <img className='image' src={instagramIcon} alt="Instagram" />
            {/* <span>Instagram</span> */}
          </li>
          <li>
            <img className='image' src={emailIcon} alt="Email" />
            {/* <span>Email</span> */}
          </li>
        </ul>
      </div>
      <p className='copy-rights'>Copyrights © 2024 All right reserved</p>
    </div>
  );
}

export default Contact;
