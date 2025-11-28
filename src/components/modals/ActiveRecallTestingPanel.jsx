// this file contains the testing component which will appear 

import React, { useState } from 'react';

const ActiveRecallTestingPanel = ({ 
  isOpen, 
  onClose, 
  sessionTopic, 
  sessionSubTopic, 
  currentQuestion,
  prevQuestion,
  nextQuestion 
}) => {
    
  const [answer, setAnswer] = useState("");

  // if panel open value is set to false, do not call the component simply 
  if (!isOpen) return null; 

  return (
    // Overlay - full screen dark background
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      
      {/* Modal Content */}
      <div className="modal-content-scrollable" style={{
        background: 'rgba(30, 34, 62, 0.8)',
        border: '1px solid #00D9FF',
        borderRadius: '20px',
        padding: '2rem',
        maxWidth: '800px',
        width: '90%',
        maxHeight: '80vh',
        overflowY: 'auto'
      }}>
        
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem'
        }}>
          <h2 style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: '1.5rem',
            fontWeight: '600',
            background: 'linear-gradient(135deg, #FFB830, #F43F5E)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0
          }}>
            {sessionTopic} - {sessionSubTopic}
          </h2>
          
          <button onClick={onClose} style={{
            background: 'none',
            border: 'none',
            color: '#94A3B8',
            fontSize: '1.5rem',
            cursor: 'pointer',
            transition: 'color 0.3s ease'
          }}>
            ×
          </button>
        </div>

        {/* Content section */}
        <div style={{ marginBottom: '1.5rem' }}>
          
          {/* Question Header */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            marginBottom: '1rem' 
          }}>
            <span style={{ color: '#F8FAFC', fontWeight: '600' }}>
              Question 1
            </span>
            <span style={{ color: '#94A3B8', fontSize: '0.875rem' }}>
              Short Answer
            </span>
          </div>

          {/* Question Text */}
          <div style={{ 
            background: 'rgba(148, 163, 184, 0.08)', 
            padding: '1rem', 
            borderRadius: '12px', 
            marginBottom: '1.5rem', 
            color: '#F8FAFC', 
            fontSize: '1.1rem' 
          }}>
            {currentQuestion ? currentQuestion.question : 'Loading question...'}
          </div>

          {/* Answer Input */}
          <textarea  
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer here..."
            style={{ 
              width: '100%', 
              minHeight: '100px', 
              background: 'rgba(148, 163, 184, 0.08)', 
              border: '1px solid rgba(148, 163, 184, 0.2)', 
              borderRadius: '12px', 
              padding: '1rem', 
              color: '#F8FAFC', 
              fontSize: '1rem', 
              fontFamily: 'Inter, sans-serif', 
              resize: 'vertical' 
            }}
          />

          {/* Check Answer Button */}
          <button 
            onClick={() => console.log('Check answer:', answer)}
            style={{ 
              background: 'linear-gradient(135deg, #FFB830, #F43F5E)', 
              border: 'none', 
              borderRadius: '12px', 
              padding: '0.75rem 2rem', 
              color: 'white', 
              fontWeight: '600', 
              cursor: 'pointer', 
              marginTop: '1rem', 
              width: '100%' 
            }}
          >
            Check Answer
          </button>

        </div>
        
        {/* TODO: Navigation section - we'll build this after */}

        {/* Navigation Buttons */}
<div style={{ 
  display: 'flex', 
  gap: '1rem', 
  marginTop: '2rem' 
}}>
  
  {/* Previous Button */}
  <button 
    onClick={prevQuestion}
    style={{ 
      background: 'rgba(148, 163, 184, 0.08)', 
      border: '1px solid rgba(148, 163, 184, 0.2)', 
      borderRadius: '12px', 
      padding: '0.75rem 1.5rem', 
      color: '#CBD5E1', 
      cursor: 'pointer', 
      transition: 'all 0.3s ease', 
      fontWeight: '500' 
    }}
  >
    ← Previous
  </button>
  
  {/* Next Question Button */}
  <button 
    onClick={nextQuestion}
    style={{ 
      background: 'linear-gradient(135deg, #9333EA, #00D9FF)', 
      border: 'none', 
      borderRadius: '12px', 
      padding: '0.75rem 2rem', 
      color: 'white', 
      fontWeight: '600', 
      cursor: 'pointer', 
      transition: 'all 0.3s ease', 
      flex: 1 
    }}
  >
    Next Question →
  </button>

</div>
        
      </div>
    </div>
  );
};

export default ActiveRecallTestingPanel;