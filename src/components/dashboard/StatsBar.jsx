import React from 'react';

const StatsBar = () => {
  const stats = [
    { id: 1, value: '4.5h', label: 'STUDY TIME' },
    { id: 2, value: '85%', label: 'RETENTION' },
    { id: 3, value: '12', label: 'DAY STREAK' },
    { id: 4, value: '3', label: 'TOPICS TODAY' },
    { id: 5, value: '156', label: 'TOTAL CARDS' },
    { id: 6, value: '2.5h', label: 'ACTIVE RECALL' }
  ];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: '#1a1d3a',
      borderTop: '1px solid rgba(148, 163, 184, 0.2)',
      padding : '20px'
    }}>
      {stats.map((stat) => (
        <div 
          key={stat.id}
          style={{
            textAlign: 'center',
            minWidth: '100px'
          }}
        >
          {/* Value */}
          <div style={{
            fontSize: 'clamp(1.5rem, 2vw, 2rem)',
            fontWeight: '700',
            // color : '#F8FAFC',
            color: '#FFB830',
            marginBottom: '4px',
            fontFamily: 'Sora, sans-serif',
            // background: 'linear-gradient(135deg, #FFB830, #F43F5E)'
          }}>
            {stat.value}
          </div>
          
          {/* Label */}
          <div style={{
            fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)',
            fontWeight: '500',
            color: '#94A3B8',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            fontFamily: 'Inter, sans-serif'
          }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;