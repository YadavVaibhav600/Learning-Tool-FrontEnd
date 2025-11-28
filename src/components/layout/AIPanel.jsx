import React, { useState } from "react";
import '../../index.css';
import ActiveRecallModal from "../modals/ActiveRecallModal";
import HandleTestingPanel from "../modals/TestingSessionContainer";

const AIPanel = ({ isVisible, onClose }) => {
  // State for modal
  const [isRecallModalOpen, setIsRecallModalOpen] = useState(false);
  const[isTestingSessionOpen ,setIsTestingSessionOpen] = useState(false);
  const [sessionConfig, setSessionConfig] = useState(null);


  // Function to open modal (only for Active Recall card)
  const openModal = (feature) => {
    if (feature.id === 1) {
      setIsRecallModalOpen(true);
    }
  };

  // function to handle when user clicks on Start Session 
  const handleStartSession = (mode , questionType) => {
    setSessionConfig({mode , questionType});
    setIsRecallModalOpen(false);
    setIsTestingSessionOpen(true);
  }


  const aiFeatures = [
    { id: 1, icon: '🧠', name: 'Active Recall', desc: 'Test your memory with AI-generated questions' },
    { id: 2, icon: '📄', name: 'Generate Test', desc: 'Create comprehensive tests from your notes' },
    { id: 3, icon: '📋', name: 'Summarize', desc: 'Extract key points and main concepts' },
    { id: 4, icon: '📅', name: 'Study Scheduler', desc: 'Optimize review timing with spaced repetition' },
    { id: 5, icon: '✂️', name: 'Extract Sections', desc: 'Select text portions for focused practice' },
    { id: 6, icon: '📊', name: 'Progress Analytics', desc: 'Track learning metrics and improve' }
  ];

  return (
    <>
      {/* AI Panel */}
      <div className='test' style={{
        position: 'fixed',
        right: 0,
        top: 0,
        width: '350px',
        height: '100vh',
        backgroundColor: 'rgba(30, 34, 62, 0.8)',
        zIndex: 9999,
        overflowY: 'auto',
        transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease-in-out'
      }}>
        
        {/* Header */}
        <div style={{
          padding: '20px',
          background: 'rgba(30, 34, 62, 0.8)',
          borderImage: 'linear-gradient(90deg, #9333EA, #00D9FF) 1',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backdropFilter: 'blur(10px)',
        }}>
          
          <h2 className="ai-title">
            AI Learning Tools
          </h2>
          
          <button 
            onClick={onClose}
            style={{ 
              fontSize: '1.5rem',
              color: '#94A3B8',
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(244, 63, 94, 0.2)';
              e.currentTarget.style.color = '#F43F5E';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#CBD5E1';
            }}
          >
            ×
          </button>
        </div>

        {/* AI Features Cards */}
        <div style={{ 
          padding: '16px',
          background: 'rgba(30, 34, 62, 0.8)'
        }}>
          {aiFeatures.map((feature) => (
            <div 
              onClick={() => openModal(feature)}
              key={feature.id}
              className="ai-feature-card"
              style={{
                background: '#1e213a',
                borderRadius: '16px',
                padding: '1.5rem 1.5rem 1rem 1.5rem',
                marginBottom: '1rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Icon */}
              <div style={{ 
                fontSize: '1.5rem',
                marginBottom: '0.75rem'
              }}>
                {feature.icon}
              </div>
              
              {/* Title */}
              <div style={{ 
                fontSize: '1rem',
                fontWeight: '600',
                color: 'white',
                fontFamily: 'Sora, sans-serif',
                marginBottom: '0.25rem'
              }}>
                {feature.name}
              </div>
              
              {/* Description */}
              <div style={{ 
                fontSize: '0.85rem',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: '1.4',
                fontFamily: 'Inter, sans-serif'
              }}>
                {feature.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Recall Modal - Sibling to Panel */}
      {isRecallModalOpen && (
        <ActiveRecallModal 
          isOpen={isRecallModalOpen} 
          onClose={() => setIsRecallModalOpen(false)}
          onStartSession={handleStartSession} 
        />
      )}

{/* Testing Session Panel */}
      {isTestingSessionOpen && (
        <HandleTestingPanel 
          isOpen={isTestingSessionOpen}
          sessionConfig={sessionConfig}
          onClose={() => setIsTestingSessionOpen(false)}
        />
      )}

    </>
  );
};

export default AIPanel;