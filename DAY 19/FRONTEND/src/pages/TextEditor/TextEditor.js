import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
import './TextEditor.css';
import base from '../../redux/store';
import { Link, useNavigate } from "react-router-dom";

function TextEditor() {
  const navigate = useNavigate(); // Initialize navigate

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [storyImageURL, setStoryImageURL] = useState("");
  const [storytitle, setStoryTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const handleImageURLChange = (e) => {
    setStoryImageURL(e.target.value);
  };

  const onSaveContent = () => {
    const content = editorState.getCurrentContent().getPlainText();

    const token = localStorage.getItem('token');

    const postData = {
      storytitle,
      content,
      storyphoto: storyImageURL,
      author,
      genre,
    };

    axios
      .post(
        "http://localhost:8080/api/story/createstory",
        postData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);

        setEditorState(EditorState.createEmpty());
        setStoryImageURL("");
        setStoryTitle("");
        setAuthor("");
        setGenre("");

    
        if (genre.toLowerCase() === "love") {
          navigate("/love");
        }
        if (genre.toLowerCase() === "horror") {
          navigate("/horror");
        }
       if(genre.toLowerCase() ==="crime")
        {
         navigate("/crime");
        }
        if(genre.toLowerCase()  ==="lifestyle")
        {
         navigate("/lifestyle");
        }
       if(genre.toLowerCase() ==="comedy")
        {
         navigate("/comedy");
        }
       if(genre.toLowerCase()  ==="sports")
        {
         navigate("/sports");
        }
       if(genre.toLowerCase()  ==="kids")
        {
         navigate("/kids");
        }
       if(genre.toLowerCase()   ==="history")
        {
         navigate("/history");
        }
        if(genre.toLowerCase()  ==="mythology")
        {
         navigate("/mythology");
        }
      })
      .catch((error) => {
        console.error("Error saving content:", error);

        setErrorMessage("Error saving content. Please try again.");
      });
  };

  return (
    <div>
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
      </div>
      <br></br><br></br><br></br>
      <div className="txb">
      <div className="editor">
        <div>
          <Editor
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
          />
        </div>
        <div>
          <input
            className="rdw-image-modal-url-input"
            name="storyImageURL"
            value={storyImageURL}
            onChange={handleImageURLChange}
            placeholder="Enter Image URL"
          />
          <button className="bts" onClick={onSaveContent}>Save Content</button>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
      <form>
        <div className="ck">
          <input
            className="ck11"
            type="text"
            name="storytitle"
            value={storytitle}
            onChange={(e) => setStoryTitle(e.target.value)}
            placeholder="Story Title"
          />
          <input
            className="ck1"
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
          />
          <input
            className="ck1"
            type="text"
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="Genre"
          />
        </div>
        <br></br> <br></br> <br></br> <br></br> 
      </form>
      <div className="footer"> 
     <Link to="/terms"><div className="hlo">Terms&conditions</div></Link>
     <Link to="/policies"><div className="bro">Privacy Policy</div></Link>
     <Link to="https://www.legalzoom.com/articles/the-term-all-rights-reserved-explained"><div className="cry">Copyright © 2023.All rights reserved</div></Link>   
     
  </div>
      </div>
    </div>
    
  );
}
export default TextEditor;