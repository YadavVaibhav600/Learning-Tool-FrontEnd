import React, { useState, useEffect } from 'react';
import ActiveRecallTestingPanel from './ActiveRecallTestingPanel';

const HandleTestingPanel = ({ isOpen, sessionConfig, onClose }) => {
  // State declarations - MUST be at the top
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch/generate a new question
  const fetchQuestion = () => {
    setIsLoading(true);
    
    // Mock question for testing (later replace with backend API call)
    const mockQuestion = {
      question: 'What are the five main React hooks?',
      type: sessionConfig?.questionType || 'short_answer',
      correctAnswer: 'useState, useEffect, useContext, useReducer, useRef'
    };
    
    setCurrentQuestion(mockQuestion);
    setQuestionNumber(questionNumber + 1);
    setIsLoading(false);
  };

  // Fetch first question when component mounts
  useEffect(() => {
    fetchQuestion();
  }, []); // Empty array = run once on mount

  // Handler for Next Question button
  const handleNextQuestion = () => {
    fetchQuestion();
  };

  // Handler for Previous button (dummy for now)
  const handlePreviousQuestion = () => {
    console.log('Previous clicked - not implemented yet');
  };

  // Handler for Check Answer button
  const handleCheckAnswer = (userAnswer) => {
    console.log('User answered:', userAnswer);
    console.log('Correct answer:', currentQuestion?.correctAnswer);
    // TODO: Later we'll validate with backend API
  };

  // Conditional return - if not open, don't render
  if (!isOpen) return null;

  return (
    <ActiveRecallTestingPanel 
      isOpen={isOpen}
      onClose={onClose}
      sessionTopic={sessionConfig?.mode || 'Active Recall'}
      sessionSubTopic={sessionConfig?.questionType || 'Short Answer'}
      currentQuestion={currentQuestion}
      prevQuestion={handlePreviousQuestion}
      nextQuestion={handleNextQuestion}
    />
  );
};

export default HandleTestingPanel;