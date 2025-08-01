import React from 'react';
import './Preloader.css'; // Changed to PascalCase

export function Preloader() {
  return (
    <div className="preloader">
      <div className="loader-text">
        <span className="char">N</span>
        <span className="char">J</span>
      </div>
    </div>
  );
}