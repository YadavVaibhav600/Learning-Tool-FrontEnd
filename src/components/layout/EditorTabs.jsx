import React, { useState } from "react";

const EditorTab = () => {
  const [activeTab, setActiveTab] = useState('Content');
  
  const tabs = [
    {id: 1, name: 'Content'},
    {id: 2, name: 'Active Recall'},
    {id: 3, name: 'Test History'},
    {id: 4, name: 'Summary'}
  ];

  return(
    <div style={{
      display: 'flex',
      gap: '32px',
      borderBottom: '2px solid rgba(148, 163, 184, 0.2)',
      padding: '0 24px',
      backgroundColor: '#1a1d3a',
      marginTop: '16px'
    }}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.name)}
          style={{
            background: 'none',
            border: 'none',
            padding: '12px 0',
            fontSize: '15px',
            fontWeight: '500',
            cursor: 'pointer',
            color: activeTab === tab.name ? '#00D9FF' : '#94A3B8',
            borderBottom: activeTab === tab.name ? '2px solid #00D9FF' : '2px solid transparent',
            marginBottom: '-2px',
            transition: 'all 0.3s ease'
          }}
        >
          {tab.name}
        </button>
      ))}
    </div>
  ); 
}

export default EditorTab;