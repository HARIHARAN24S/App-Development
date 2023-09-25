import React from 'react'
import './dbstats.css';
import { Link } from 'react-router-dom';
function Dbstats() {
    return (
        <div className='dbobg'>
         <div className='dbmainc'>
           
          <div className="viewc" > <img className='msv' src="mostviewed.png"></img><br></br> Most Viewed</div>
          <div className="likec"><img className='like' src="mostliked.jpeg"></img><br></br>Most Liked</div>
          <div className="view1c"><img className='msv1' src="highestrating.jpeg"></img><br></br>Highest Rating</div>
          <div className="like1c"><img className='like2' src="notinterested.png"></img><br></br>Not Interested</div>
         </div>
     
            <div className="dbside">
              <Link to="/Home">  <img className='homelogo' src="adminusericon.jpg"></img><b>Home</b></Link>
                  <Link to="/dbstats"><img className="statslogo" src="sats.png"></img><b>Stats</b></Link>
               <Link to="/dbuser"> <img className="userlogo" src="users12.png"></img><b>User info</b> </Link>
                  <Link to="/dash" > <img className="querieslogo" src="usericons.png"></img><b>Queries</b> </Link>
               <Link to="dbadmins">   <img className="adminlogo" src="admin user corner.jpg"></img><b>Admin-User corner</b></Link>
                </div>
               
            </div>
        
    )
}

export default Dbstats
