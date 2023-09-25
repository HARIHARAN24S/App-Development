import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import './Contact.css'
import { Link } from 'react-router-dom';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m5qxhrm",
        "template_felenr6",
        form.current,
        "39XIv3BAEqfhMIzdo"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true); // Set messageSent to true when the message is sent
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactt">
      <div className="navbar1">
        <Link to="/home">Home</Link>
        <div className="dropdown">
          <button className="dropbtn">Genre</button>
          <div className="dropdown-content">
            <Link to="/lifestyle">Lifestyle</Link>
            <Link to="/lifestyle">Love</Link>
            <Link to="/lifestyle">Crime</Link>
            <Link to="/lifestyle">Mythology</Link>
            <Link to="/lifestyle">Sports</Link>
            <Link to="/lifestyle">Comedy</Link>
            <Link to="/lifestyle">Horror</Link>
            <Link to="/lifestyle">History</Link>
            <Link to="/lifestyle">Kids</Link>
          </div>
        </div>
        <Link to="/shortstory">ShortStory</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/FAQ">FAQ</Link>
        <Link to="/queries">Queries</Link>
        <Link to="/Login">Sign In</Link>
        <div className='rr'>
          <div className="dropdown">
            <div className="dropdown-content">
            </div>
          </div>
        </div>
      </div>
      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail}>
          <div className="fullname">Contact Us</div>
          <label>Name</label>
          <input type="text" name="fullName" />
          <label>Phone Number</label>
          <input type="text" name="phone" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
      {messageSent && (
        <div className="popup-message">
          Message sent successfully!
        </div>
      )}
      <br></br>
      <div className="image-containers">
        <div className="addresss">
          <img src="address.png" alt="address" />
        </div>
        <div className="phone">
          <img src="phonenumber.png" alt="phone no" />
        </div>
        <div className="mail">
          <img src="email.png" alt="email" />
        </div>
        <div className="faxx">
          <img src="fax.png" alt="fax" />
        </div>
      </div>
      <br></br>
      <div className="image-containers">
        <div className="image-container1">
          <img className="facebook2" src="facebook.png" alt="Facebook" />
        </div>
        <div className="image-container2">
          <img className="insta2" src="instagram.png" alt="Instagram" />
        </div>
        <div className="image-container3">
          <img className="twitter2" src="twitter.png" alt="Twitter" />
        </div>
        <div className="image-container4">
          <img className="youtube2" src="youtube.png" alt="YouTube" />
        </div>
      </div>
      <div className="footer">
        <Link to="/terms">
          <div className="hlo">Terms & conditions</div>
        </Link>
        <Link to="/policies">
          <div className="bro">Privacy Policy</div>
    </Link>
        <Link to="https://www.legalzoom.com/articles/the-term-all-rights-reserved-explained">
          <div className="cry">Copyright © 2023. All rights reserved</div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
