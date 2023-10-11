import React from 'react'
import './dboverview.css';
import { Link } from 'react-router-dom';
function Dboverview() {
    return (
        <div className='dbobg'>
         <div className='dbmainc'>
            <div className='code'>
            <br></br><br></br>
                Welcome Admin!!!<br></br>
                Go ahead sir<br>
                </br>
                Here you will access our app based on our app guidelines
                <br></br><br></br>
                Have a great one!!
            </div>
            <img className='admin' src="analytics.webp"></img>
         </div>
            <div className="dbside">
            <Link to="/Home">  <img className='homelogo' src="adminusericon.jpg"></img><b>Home</b></Link>
                  <Link to="/dbstats"><img className="statslogo" src="sats.png"></img><b>Stats</b></Link>
               <Link to="/usercrud"> <img className="userlogo" src="users12.png"></img><b>User info</b> </Link>
                  <Link to="/feedcrud" > <img className="querieslogo" src="usericons.png"></img><b>Queries info</b> </Link>
               <Link to="/storycrud">   <img className="adminlogo" src="admin user corner.jpg"></img><b>Story info</b></Link>
                </div>
            </div>       
    )
}
export default Dboverview
