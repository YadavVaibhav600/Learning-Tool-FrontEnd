import React from "react";

// building the component here

const EditorToolBar = ({ title, onToggleAI }) => {
    const toolbarButtons = [
  { id: 1, icon: '💾', label: 'Save' },
  { id: 2, icon: '✏️', label: 'Edit' },
  { id: 3, icon: '🗑️', label: 'Delete' }
];
  return (
    <div style={{display: 'flex', 
  justifyContent: 'space-between',
  alignItems: 'center',           // ← Vertically center title & buttons
  padding: '20px 24px',           // ← Add space around
  backgroundColor: '#1a1d3a',     // ← Dark background
  borderBottom: '2px solid rgba(0, 217, 255, 0.3)',  // ← Cyan border
    // maxWidth: '100%',    // ✅ Add this
    // overflow: 'hidden'   // ✅ Add this

    }}>

    <h2 style={{ fontFamily: 'Sora, sans-serif',
  fontSize: '1.5rem',
  fontWeight: '600',
  background: 'linear-gradient(135deg, #9333EA, #00D9FF)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  margin: 0,
  maxWidth: '100%',      // ✅ Add this
  overflow: 'hidden',     // ✅ Add this
  textOverflow: 'ellipsis', // ✅ Add this   
  }}>{title}</h2>
    {/* below we are iterating over the buttons */}
    <div style={{display : 'flex' , gap : '0.5rem'}}>
        {toolbarButtons.map((btn) => (
            <button key = {btn.id} style={{
    backgroundColor: 'rgba(148, 163, 184, 0.08)',
    color: 'white',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '0.5rem 2rem 0.5rem 2rem',
    borderRadius: '12px',
    cursor: 'pointer',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.3s ease'
  }} onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = '#6366F1';
    e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = '#242856';
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
  }}>{btn.icon} {btn.label}</button>
        
    ))}

    <button onClick = {onToggleAI} style={{
    backgroundColor: '#00D9FF',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.3s ease',
    whiteSpace : 'nowrap'
  }} onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = '#0AC5E3';
    e.currentTarget.style.transform = 'scale(1.05)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = '#00D9FF';
    e.currentTarget.style.transform = 'scale(1)';
  }}> 🤖 AI Tools</button>
    </div>
    
    

    </div>
  );
};

// exporting the component
export default EditorToolBar; 
