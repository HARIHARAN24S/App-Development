import React, { useState, useEffect } from 'react';
import './Stories.css';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import StarRating from './StarRating';
import base from '../../../redux/store';
function Story() {
  const [hisStories, setHisStories] = useState([]);
  const [userRating, setUserRating] = useState(0);
  const token = localStorage.getItem('token');

  useEffect(() => {
    // Create an axios instance with headers
    const axiosInstance = axios.create({
      baseURL: 'http://localhost:8080/api',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    axiosInstance.get('/story/byGenre/sports')
      .then((response) => {
        setHisStories(response.data.map(story => ({
          ...story,
          likeCount: 0,
          dislikeCount: 0,
          isReading: false, // Add isReading property to track reading state
        })));
      })
      .catch((error) => {
        console.error('Error fetching historical stories:', error);
      });
  }, [token]); // Add token as a dependency

  const handleReadStory = (story) => {
    setHisStories(prevStories => {
      const updatedStories = prevStories.map(s => {
        if (s.storyid === story.storyid) {
          const newIsReading = !s.isReading; // Toggle the isReading state
          if (newIsReading) {
            const speech = new SpeechSynthesisUtterance(s.content);
            window.speechSynthesis.speak(speech);
          } else {
            window.speechSynthesis.cancel();
          }
          return { ...s, isReading: newIsReading };
        }
        return { ...s, isReading: false }; // Set isReading to false for other stories
      });
      return updatedStories;
    });
  };

  const handleLike = (story) => {
    setHisStories(prevStories => {
      const updatedStories = prevStories.map(s => {
        if (s.storyid === story.storyid) {
          return { ...s, likeCount: s.likeCount + 1 };
        }
        return s;
      });
      return updatedStories;
    });
  };

  const handleDislike = (story) => {
    setHisStories(prevStories => {
      const updatedStories = prevStories.map(s => {
        if (s.storyid === story.storyid) {
          return { ...s, dislikeCount: s.dislikeCount + 1 };
        }
        return s;
      });
      return updatedStories;
    });
  };

  const handleRatingChange = (newRating) => {
    setUserRating(newRating);
  };

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div>
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
        <div className="rr">
          <div className="dropdown">
            <div className="dropdown-content"></div>
          </div>
          <div className="cr">
            <img className="logo" src="ic2.png" alt="Logo" />
            <p>{base.getState().email.email}</p>
          </div>
        </div>
      </div>
      <div className="story-container">
        <br />
        <h1 className="story-title">Sports Stories</h1>
        {/* <h5 className="story-content">
          Your story content here
        </h5> */}
        {hisStories.map((story) => (
          <li key={story.storyid}>
            <h2 className="story-title">{story.storytitle}</h2>
            <h4 className="story-author">{story.author}</h4>
            <img src={story.storyphoto} alt="Story" className="story-image" />
            <h5 className="story-content">{story.content}</h5>
            <div>
              <button onClick={() => handleLike(story)} className="like-button">
                Like
              </button>
              <span className="like-count">{story.likeCount} Likes</span>
              <button onClick={() => handleDislike(story)} className="dislike-button">
                Dislike
              </button>
              <span className="dislike-count">{story.dislikeCount} Dislikes</span>
            </div>
            <div className="rating-container">
              <span className='t7'>Rating</span>
              <StarRating
                initialRating={userRating}
                onRatingChange={handleRatingChange}
              />
              <br /><br />
            </div>
            <button onClick={() => handleReadStory(story)}>
              {story.isReading ? 'Stop Reading' : 'Read Story'}
            </button>
            <br /><br />
            <hr></hr>
          </li>
        ))}
        <div>
        </div>
      </div>
      <div className="footer">
        <Link to="/terms">
          <div className="hlo">Terms & conditions</div>
        </Link>
        <Link to="/policies">
          <div className="bro">Privacy Policy</div>
        </Link>
        <a href="https://www.legalzoom.com/articles/the-term-all-rights-reserved-explained">
          <div className="cry">Copyright © 2023. All rights reserved</div>
        </a>
      </div>
    </div>
  );
}

export default Story;
