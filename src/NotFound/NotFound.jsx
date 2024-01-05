import React from "react";
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img
        src='https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_960_720.png'
        alt="404"
        className="not-found-image"
      />
      <h1 className="not-found-title">404 - Not Found</h1>
      <p className="not-found-text">
        Oops! The page you are looking for cannot be found.
      </p>
    </div>
  );
}

export default NotFound;