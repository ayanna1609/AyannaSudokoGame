import React from 'react';
import './PageStyles.css';

const About = () => {
  return (
    <div className="page-container">
      <h1>About AyannaSudoko </h1>
      <p>
        AyannaSudoko is a Sudoku puzzle solver web app built with <strong>React</strong> (frontend) and <strong>Flask</strong> (backend).
        It uses classic Data Structures & Algorithms to solve Sudoku puzzles logically and efficiently.
      </p>
      <p>
        This project aims to help you learn how Sudoku works, and it also serves as a demo of full-stack integration.
      </p>
    </div>
  );
};

export default About;
