import React from 'react';
import './PageStyles.css';

const Home = () => {
  return (
    <div className="page-container">
      <h1>Welcome to AyannaSudoko </h1>
      <p>This is an intelligent and interactive Sudoku solver that allows you to solve puzzles with just one click.</p>
      <ul>
        <li>Enter your own puzzle or generate one.</li>
        <li> Solve it using powerful logic algorithms.</li>
        <li> Enjoy a beautiful and friendly interface!</li>
      </ul>
    </div>
  );
};

export default Home;
