import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Main = () => {
  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-heading">Welcome</h2>
        <h4 className="form-subheading">Choose between: </h4>
        <div className="center-button">
          <Link to="/login" className="button">Login</Link>
        </div>
        <div className="center-button">
          <Link to="/register" className="button">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
