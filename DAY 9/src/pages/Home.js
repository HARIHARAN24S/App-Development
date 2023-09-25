import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Home.css';
import { Link } from 'react-router-dom';
import base from '../redux/store'

export default function Home() {
  
  const [searchQuery, setSearchQuery] = useState('');


  const contentData = [
    { title: 'Lifestyle', img: 'lifestyle.jpg' },
    { title: 'Love', img: 'lovi.jpg' },
    { title: 'Crime', img: 'crimy.jpg' },
    { title: 'Mythology', img: 'MYTHY.jpg' },
    { title: 'Sports', img: 'gamy.jpg' },
    { title: 'Comedy', img: 'comdy.jpg' },
    { title: 'Horror', img: 'hory.jpg' },
    { title: 'History', img: 'history.jpg' },
    { title: 'Kids', img: 'KIDY.jpg' },
   
  ];


  const filteredContent = contentData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    < div className='hbg'>

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
  
 
  <div className='rr'>
  <div className="dropdown">
  
    <div className="dropdown-content">
    
     
     
      </div>
    </div>
   <div className='cr'> <img className='logo' src="ic.png"></img>
    <p>{base.getState().email.email}</p></div>
    </div>

</div>
    <div className="search-bar">
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleSearchChange}
    />
  </div>
      {filteredContent.map((item, index) => (
        <div className={`con${index + 1}`} key={index}>
          <img className={`img${index + 1}`} src={item.img} alt={item.title} />
          <div className='ol3'>{item.title}</div><br></br> 
        </div>
        
        
        
      ))}
 
     <div className="footer"> 
     <Link to="/terms"><div className="hlo">Terms&conditions</div></Link>
     <Link to="/policies"><div className="bro">Privacy Policy</div></Link>
     <Link to="https://www.legalzoom.com/articles/the-term-all-rights-reserved-explained"><div className="cry">Copyright © 2023.All rights reserved</div></Link>
     
  </div>
  </div>
  );
}
