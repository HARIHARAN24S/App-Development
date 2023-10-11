import React, { forwardRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Queries.css';
import base from '../../redux/store'
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
    const firstName = event.target[0].value;
    const secondName = event.target[1].value;
    const phoneNo = event.target[2].value;
    const emailId = event.target[3].value;
    const query = event.target[4].value;
    const timestamp = Date.now();
    const dataKey = `userData_${timestamp}`;
    const userData = {
      firstName,
      secondName,
      phoneNo,
      emailId,
      query,
    };
    localStorage.setItem(dataKey, JSON.stringify(userData));
    navigate('/home');
  }
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
    <button className="dropbtn">Genre</button>
    <div className="dropdown-content">
    <Link to="/lifestyle">Lifestyle</Link>
      <Link to="/love">Love</Link>
      <Link to="/crime">Crime</Link>
      <Link to="/mythology">Mythology</Link>
      <Link to="/sports">Sports</Link>
      <Link to="/comedy">Comedy</Link>
      <Link to="/horror">Horror</Link>
      <Link to="/history">History</Link>
      <Link to="/kids">Kids</Link>
    </div>
  </div>
  <Link to="/shortstory">ShortStory</Link>
  <Link to="/contact">Contact Us</Link>
  <Link to="/add">Add Story</Link>
  <Link to="/">Sign In</Link>
  <div className='rr'>
  <div className="dropdown">
    <div className="dropdown-content">
      </div>
    </div>
   <div className='cr'> <img className='logo' src="ic2.png"></img>
    <p>{base.getState().email.email}</p>
    </div>
    </div>
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
});
export default Queries;
