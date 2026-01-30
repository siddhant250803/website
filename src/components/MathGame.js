import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './MathGame.css';

const MathGame = ({ onClose }) => {
  const [problem, setProblem] = useState('');
  const [answer, setAnswer] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameActive, setGameActive] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  const totalAnswers = useMemo(() => correctAnswers + incorrectAnswers, [correctAnswers, incorrectAnswers]);

  const generateProblem = useCallback(() => {
    const operations = ['+', '-', '×', '÷'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let num1, num2, result;
    
    switch (operation) {
      case '+':
        num1 = Math.floor(Math.random() * 90) + 10; // 10-99
        num2 = Math.floor(Math.random() * 90) + 10; // 10-99
        result = num1 + num2;
        setProblem(`${num1} + ${num2}`);
        break;
      case '-':
        num1 = Math.floor(Math.random() * 90) + 10; // 10-99
        num2 = Math.floor(Math.random() * num1) + 1; // 1 to num1 (ensures positive result)
        result = num1 - num2;
        setProblem(`${num1} - ${num2}`);
        break;
      case '×':
        num1 = Math.floor(Math.random() * 12) + 2; // 2-13
        num2 = Math.floor(Math.random() * 12) + 2; // 2-13
        result = num1 * num2;
        setProblem(`${num1} × ${num2}`);
        break;
      case '÷':
        // Generate clean division problems
        result = Math.floor(Math.random() * 15) + 2; // 2-16
        num2 = Math.floor(Math.random() * 12) + 2; // 2-13
        num1 = result * num2;
        setProblem(`${num1} ÷ ${num2}`);
        break;
      default:
        num1 = 1;
        num2 = 1;
        result = 2;
        setProblem('1 + 1');
    }
    
    setAnswer(result);
  }, []);

  const checkAnswer = useCallback(() => {
    if (userAnswer === '') return;
    
    const userNum = parseInt(userAnswer);
    const isCorrect = userNum === answer;
    
    // Batch state updates for better performance
    if (isCorrect) {
      setScore(prev => prev + 1);
      setCorrectAnswers(prev => prev + 1);
    } else {
      setIncorrectAnswers(prev => prev + 1);
    }
    
    // Immediately move to next problem without feedback
    generateProblem();
    setUserAnswer('');
  }, [userAnswer, answer, generateProblem]);

  const handleTimeUp = useCallback(() => {
    setGameActive(false);
  }, []);

  const startGame = useCallback(() => {
    setGameStarted(true);
    generateProblem();
  }, [generateProblem]);

  const finalMessage = useMemo(() => {
    if (!gameActive) {
      const accuracy = totalAnswers > 0 ? (correctAnswers / totalAnswers * 100).toFixed(1) : 0;
      
      let performance = '';
      if (score >= 25) performance = 'Outstanding! 🎉';
      else if (score >= 20) performance = 'Excellent! 🌟';
      else if (score >= 15) performance = 'Great! 👍';
      else if (score >= 10) performance = 'Good! 👌';
      else performance = 'Keep practicing! 💪';
      
      return `Time's up! Score: ${score}/60 (${accuracy}% accuracy) - ${performance}`;
    }
    return '';
  }, [gameActive, score, totalAnswers, correctAnswers]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter' && gameActive && userAnswer !== '') {
      checkAnswer();
    }
  }, [checkAnswer, gameActive, userAnswer]);

  // Timer effect - only runs when game has started
  useEffect(() => {
    if (gameStarted && timeLeft > 0 && gameActive) {
      const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (gameStarted && timeLeft === 0 && gameActive) {
      handleTimeUp();
    }
  }, [gameStarted, timeLeft, gameActive, handleTimeUp]);

  // Memoize accuracy calculation
  const accuracy = useMemo(() => {
    return totalAnswers > 0 ? Math.round((correctAnswers / totalAnswers) * 100) : 0;
  }, [totalAnswers, correctAnswers]);

  // Memoize progress width
  const progressWidth = useMemo(() => {
    return `${((60 - timeLeft) / 60) * 100}%`;
  }, [timeLeft]);

  return (
    <div className="math-game-overlay">
      <div className="math-game">
        <button className="close-btn" onClick={onClose}>✕</button>
        
        <div className="game-header">
          <h2>Mental Math Challenge</h2>
          <div className="game-stats">
            <div className="stat">
              <span className="stat-label">Time:</span>
              <span className="stat-value">{timeLeft}s</span>
            </div>
            <div className="stat">
              <span className="stat-label">Score:</span>
              <span className="stat-value">{score}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Accuracy:</span>
              <span className="stat-value">
                {accuracy}%
              </span>
            </div>
          </div>
        </div>

        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: progressWidth }}
          ></div>
        </div>

        {!gameStarted ? (
          <div className="game-start-screen">
            <h3>Ready to Test Your Math Skills?</h3>
            <p>You'll have 60 seconds to solve as many math problems as possible.</p>
            <div className="start-instructions">
              <p>• Addition, subtraction, multiplication, and division</p>
              <p>• Press Enter or click Submit to answer</p>
              <p>• Try to be both fast and accurate!</p>
            </div>
            <button onClick={startGame} className="start-game-btn">
              Start Game
            </button>
          </div>
        ) : gameActive ? (
          <div className="game-content">
            <div className="problem-display">
              <span className="problem-text">{problem} = ?</span>
            </div>
            
            <input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyPress={handleKeyPress}
              className="answer-input"
              placeholder="Your answer"
              autoFocus
            />
            
            <button onClick={checkAnswer} className="submit-btn">
              Submit Answer
            </button>
            
            <div className="game-instructions">
              <p>💡 Press Enter to submit quickly!</p>
              <p>🎯 Solve as many problems as you can in 60 seconds</p>
            </div>
          </div>
        ) : (
          <div className="game-results">
            <h3>Game Over!</h3>
            <div className="final-stats">
              <div className="final-stat">
                <span className="final-label">Final Score:</span>
                <span className="final-value">{score}/60</span>
              </div>
              <div className="final-stat">
                <span className="final-label">Correct:</span>
                <span className="final-value">{correctAnswers}</span>
              </div>
              <div className="final-stat">
                <span className="final-label">Incorrect:</span>
                <span className="final-value">{incorrectAnswers}</span>
              </div>
              <div className="final-stat">
                <span className="final-label">Accuracy:</span>
                <span className="final-value">
                  {totalAnswers > 0 ? ((correctAnswers / totalAnswers) * 100).toFixed(1) : 0}%
                </span>
              </div>
            </div>
            <p className="final-message">{finalMessage}</p>
            <button onClick={onClose} className="play-again-btn">
              Close Game
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MathGame; 