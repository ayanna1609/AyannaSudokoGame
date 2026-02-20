import React, { useState, useEffect, useCallback } from 'react';
import './SudokuBoard.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const SudokuBoard = () => {
  const [board, setBoard] = useState(Array(9).fill().map(() => Array(9).fill('')));
  const [originalBoard, setOriginalBoard] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPuzzle = useCallback(() => {
    setLoading(true);
    fetch(`${API_URL}/get-puzzle`)
      .then(response => response.json())
      .then(data => {
        if (data.puzzle) {
          const puzzleString = data.puzzle;
          const boardArray = [];

          for (let i = 0; i < 9; i++) {
            const row = [];
            for (let j = 0; j < 9; j++) {
              const value = parseInt(puzzleString[i * 9 + j], 10);
              row.push(value === 0 ? '' : value.toString());
            }
            boardArray.push(row);
          }

          setBoard(boardArray);
          setOriginalBoard(boardArray.map(r => [...r]));
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching puzzle:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchPuzzle();
  }, [fetchPuzzle]);

  const handleChange = (row, col, value) => {
    if (originalBoard && originalBoard[row][col] !== '') return; // prevent editing original clues
    const newBoard = board.map(r => [...r]);
    newBoard[row][col] = value;
    setBoard(newBoard);
  };

  const handleSolve = async () => {
    try {
      const numericBoard = board.map(row => row.map(cell => parseInt(cell) || 0));
      const response = await fetch(`${API_URL}/solve`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ board: numericBoard })
      });

      const data = await response.json();
      if (data.solution) {
        setBoard(data.solution.map(row => row.map(cell => cell.toString())));
      } else {
        alert(data.error || 'Failed to solve puzzle');
      }
    } catch (err) {
      console.error('Solve error:', err);
      alert('Backend not reachable');
    }
  };

  const handleClear = () => {
    if (originalBoard) {
      setBoard(originalBoard.map(r => [...r]));
    }
  };

  if (loading) return <p>Loading puzzle...</p>;

  return (
    <div className="sudoku-container">
      {board.map((row, rowIndex) => (
        <div className="sudoku-row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <input
              key={colIndex}
              className={`sudoku-cell${originalBoard && originalBoard[rowIndex][colIndex] !== '' ? ' fixed' : ''}`}
              type="text"
              maxLength="1"
              value={cell}
              readOnly={originalBoard && originalBoard[rowIndex][colIndex] !== ''}
              onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
            />
          ))}
        </div>
      ))}
      <div className="button-row">
        <button className="solve-btn" onClick={handleSolve}>Solve</button>
        <button className="solve-btn new-btn" onClick={fetchPuzzle}>New Puzzle</button>
        <button className="solve-btn clear-btn" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default SudokuBoard;
