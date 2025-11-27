import React, { useState } from "react";

const ActiveRecallModal = ({ isOpen, onClose }) => {
  // State for selected mode (single selection)
  const [selectedMode, setSelectedMode] = useState("Smart Focus");

  // State for selected question types (multi-selection)
  const [selectedTypes, setSelectedTypes] = useState([]);

  // Function to toggle question type selection
//   const toggleQuestionType = (typeName) => {
//     if (selectedTypes.includes(typeName)) {
//       // Remove if already selected
//       setSelectedTypes(selectedTypes.filter(type => type !== typeName));
//     } else {
//       // Add if not selected
//       setSelectedTypes([...selectedTypes, typeName]);
//     }
//   };

const toggleQuestionType = (typeName) => {
  setSelectedTypes([typeName]);  // Replace entire array with just this one
};

  // Don't render if modal is closed
  if (!isOpen) return null;

  const options = [
    { 
      id: "1", 
      icon: "📚",
      name: "Full Content", 
      description: "Test on entire note" 
    },
    {
      id: "2",
      icon: "📑",
      name: "Selected Sections",
      description: "Choose specific topics",
    },
    { 
      id: "3", 
      icon: "🎯",
      name: "Smart Focus", 
      description: "AI picks weak areas" 
    },
  ];

  const questionTypes = [
    "Multiple Choice",
    "Short Answer",
    "True/False",
    "Fill in Blanks",
    "Explain Concept",
    "Code Output",
    "Compare & Contrast",
    "Real-world Application"
  ];

  return (
    // Overlay
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.85)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10000,
      }}
    >
      {/* Modal Content */}
      <div className='test'
        style={{
          background: "rgba(30, 34, 62, 0.8)",
          border: "1px solid #00D9FF",
          borderRadius: "20px",
          padding: "2rem",
          maxWidth: "800px",
          width: "90%",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
        >
          <h2
            style={{
              fontFamily: "Sora, sans-serif",
              fontSize: "1.5rem",
              fontWeight: "600",
              background: "linear-gradient(135deg, #FFB830, #F43F5E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              margin: 0,
            }}
          >
            Active Recall Session
          </h2>
          
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "#94A3B8",
              fontSize: "1.5rem",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#F43F5E";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#94A3B8";
            }}
          >
            ×
          </button>
        </div>

        {/* Recall Options (Mode Cards) */}
        <div
          style={{
            display: "grid",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          {options.map((option) => {
            const isSelected = selectedMode === option.name;
            return (
              <div
                key={option.id}
                onClick={() => setSelectedMode(option.name)}
                style={{
                  background: isSelected
                    ? "linear-gradient(135deg, #9333EA, #00D9FF)"
                    : "rgba(148, 163, 184, 0.08)",
                  border: isSelected
                    ? "1px solid rgba(148, 163, 184, 0.08)"
                    : "1px solid rgba(148, 163, 184, 0.08)",
                  borderRadius: "12px",
                  padding: "1rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.background = "rgba(148, 163, 184, 0.15)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.background = "rgba(148, 163, 184, 0.08)";
                  }
                }}
              >
                {/* Icon */}
                <span style={{ fontSize: "1.5rem" }}>
                  {option.icon}
                </span>
                
                {/* Text */}
                <div>
                  <div style={{ 
                    fontWeight: "600",
                    color: isSelected ? "white" : "#F8FAFC",
                    marginBottom: "0.25rem"
                  }}>
                    {option.name}
                  </div>
                  <div style={{ 
                    fontSize: "0.875rem", 
                    color: isSelected ? "rgba(255, 255, 255, 0.9)" : "#94A3B8"
                  }}>
                    {option.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Question Type Section */}
        <div style={{ marginTop: "1.5rem" }}>
          <div
            style={{
              fontWeight: "600",
              marginBottom: "0.75rem",
              color: "#F8FAFC",
            }}
          >
            Question Type:
          </div>
          
          {/* Question Type Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0.5rem",
            }}
          >
            {questionTypes.map((type, index) => {
              const isSelected = selectedTypes.includes(type);
              return (
                <button
                  key={index}
                  onClick={() => toggleQuestionType(type)}
                  style={{
                    background: isSelected
                      ? "linear-gradient(135deg, #FFB830, #F43F5E)"
                      : "rgba(148, 163, 184, 0.08)",
                    border: "1px solid rgba(148, 163, 184, 0.08)",
                    borderRadius: "20px",
                    padding: "0.5rem 1rem",
                    fontSize: "0.875rem",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    color: isSelected ? "white" : "#F8FAFC",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = "rgba(148, 163, 184, 0.15)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = "rgba(148, 163, 184, 0.08)";
                    }
                  }}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <button
            style={{
              background: "linear-gradient(135deg, #FFB830, #F43F5E)",
              border: "none",
              borderRadius: "12px",
              padding: "0.75rem",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              boxShadow: "0 4px 12px rgba(255, 184, 48, 0.2)",
              flex: 1,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(255, 184, 48, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(255, 184, 48, 0.2)";
            }}
          >
            Start Session
          </button>
          
          <button
            style={{
              background: "rgba(148, 163, 184, 0.08)",
              border: "1px solid rgba(148, 163, 184, 0.08)",
              borderRadius: "10px",
              padding: "0.5rem 1rem",
              color: "#CBD5E1",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              flex: 1,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(148, 163, 184, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(148, 163, 184, 0.08)";
            }}
          >
            Configure Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveRecallModal;