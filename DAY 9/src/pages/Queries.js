import React, { forwardRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Queries.css';

const Queries = forwardRef(({}, ref) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    phoneNo: '',
    emailId: '',
    query: '',
  });

  function onSubmit(event) {
    event.preventDefault();

    // Get user input data
    const firstName = event.target[0].value;
    const secondName = event.target[1].value;
    const phoneNo = event.target[2].value;
    const emailId = event.target[3].value;
    const query = event.target[4].value;

    // Create a unique key for this set of data (using a timestamp)
    const timestamp = Date.now();
    const dataKey = `userData_${timestamp}`;

    // Create a user object
    const userData = {
      firstName,
      secondName,
      phoneNo,
      emailId,
      query,
    };

    // Store user data in localStorage with the unique key
    localStorage.setItem(dataKey, JSON.stringify(userData));

    // Navigate to the dashboard
    navigate('/home');
  }

  // Function to handle form input changes
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <div className="cbg">
       <div className="navbar">
  <Link to="/home">Home</Link>
  <div className="dropdown">
    <button className="dropbtn">Genre </button>
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
  <Link to="/Login">Sign In</Link>

    
        </div>
        <div className="form1">
          <form onSubmit={onSubmit}>
            <br></br>
            <div className="heado">
              <b>Enter your Details</b>
            </div>
            <br></br>
            <br></br>
            <div className="f1">FirstName:</div>
            <input
              className="h1"
              type="text"
              placeholder="Enter FirstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            ></input>
            <br></br>
            <br></br>

            <div className="f2">SecondName:</div>
            <input
              className="h2"
              type="text"
              placeholder="Enter SecondName"
              name="secondName"
              value={formData.secondName}
              onChange={handleInputChange}
            ></input>
            <br></br>
            <br></br>

            <div className="f3">PhoneNo:</div>
            <input
              className="h3"
              type="text"
              placeholder="Enter PhoneNo"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleInputChange}
            ></input>
            <br></br>
            <br></br>

            <div className="f4">EmailId:</div>
            <input
              className="h4"
              type="text"
              placeholder="Enter EmailId"
              name="emailId"
              value={formData.emailId}
              onChange={handleInputChange}
            ></input>
            <br></br>
            <br></br>

            <div className="f5">Query:</div>

            <div className="h5">
              <textarea
                name="query"
                placeholder="Enter Query"
                value={formData.query}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <br></br>
            <br></br>
            <button type="submit" ref={ref} className="btr">
              <div className="bro">Submit response</div>
            </button>
          </form>
        </div>
        <div className="footer"></div>
        <div className="pp1">
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <div className="cop1">Copyright © 2023. All rights reserved</div>
        <div className="tc1">
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    
  );
});

export default Queries;
