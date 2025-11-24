import React from 'react';


const TextContentArea = ({ isAIPanelVisible }) => {
    const sampledata = [
        {
            title : 'React Hooks',
            content : `React Hooks are functions that let you "hook into" React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes.`
        },
        {
            title : 'Express js',
            content : 'Context provides a way to pass data through the component tree without having to pass props down manually at every level. useContext accepts a context object and returns the current context value.'
        },
        {
            title : 'Express js',
            content : 'Context provides a way to pass data through the component tree without having to pass props down manually at every level. useContext accepts a context object and returns the current context value.'
        }
    ]

    return (
  <>
    <style>{`
      .content-area-scroll::-webkit-scrollbar {
        width: 8px;
      }

      .content-area-scroll::-webkit-scrollbar-track {
        background: rgba(26, 29, 58, 0.3);
        border-radius: 10px;
        margin: 4px 0;
      }

      .content-area-scroll::-webkit-scrollbar-thumb {
        background: #00d9ff;
        border-radius: 10px;
      }

      .content-area-scroll::-webkit-scrollbar-thumb:hover {
        background: #FFB830;
      }
    `}</style>

  <div
    className="content-area-scroll"
    style={{
    padding: '32px',
    paddingRight: isAIPanelVisible ? '24px' : '40px',
  backgroundColor: '#1a1d3a',
  borderRadius: '0 0 12px 12px',
  flex: 1,                        // ✅ Take remaining space
  overflowY: 'auto',
  minHeight: 0
  }}>
    
    {/* Max-width wrapper for better readability */}
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      width: '100%'
    }}>
      {sampledata.map((data, index) => (
        <div key={index} style={{
          marginBottom: '32px'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: '600',
            color: '#F8FAFC',
            marginBottom: '12px',
            fontFamily: 'Sora, sans-serif'
          }}>
            {data.title}
          </h2>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            lineHeight: '1.7',
            color: '#CBD5E1',
            fontFamily: 'Inter, sans-serif'
          }}>
            {data.content}
          </p>
        </div>
      ))}
    </div>
  </div>
  </>
);

}







// exporting our component 
export default TextContentArea; 