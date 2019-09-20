import React from 'react';
import './style.css';

const Body = ({propImage, title}) => (
  <div className="App-body">
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
        Learn React
    </a> 
    <p>
      {title}
    </p>
    <img src={propImage} className="App-image-logo" alt="logo" /> 
  </div>
);

export default Body;