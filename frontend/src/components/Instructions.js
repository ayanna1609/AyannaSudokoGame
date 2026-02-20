import React from 'react';
import './PageStyles.css';

const Instructions = () => {
  return (
    <div className="page-container">
      <h1>How to Use </h1>
      <ol>
        <li>Click on any cell in the Sudoku board to enter a number (1-9).</li>
        <li>Leave empty cells blank or type 0.</li>
        <li>Press the <strong>Solve</strong> button to get the solution instantly.</li>
        <li>You can modify the board and re-solve anytime.</li>
      </ol>
      <p> Note: The solver uses a backtracking algorithm to guarantee correctness.</p>
    </div>
  );
};

export default Instructions;
