import React , {useState} from 'react';
import Sidebar from './components/layout/Sidebar';
import AIPanel from './components/layout/AIPanel';
import EditorToolBar from './components/notes/EditorToolBar';
import EditorTab from './components/layout/EditorTabs';
import TextContentArea from './components/notes/ContentArea';
import StatsBar from './components/dashboard/StatsBar';
import './index.css';



function App() {

    const [showAIPanel, setShowAIPanel] = useState(true);

  return (
    <div className="min-h-screen bg-primary-deep text-text-primary">
      {/* Animated background gradient */}
      <div className="bg-gradient"></div>
      
      {/* Main layout container */}


      <div className="relative z-10 flex">
        {/* Left Sidebar */}
        <Sidebar />
        
        {/* Main Content Area (middle section) */}
        <div className="flex-1 p-8" style={{ marginRight: showAIPanel ? '340px' : '0'  , transition: 'margin-right 0.3s ease',
    minWidth: 0 , height : '100vh' , display: 'flex',              // ✅ Flex container
    flexDirection: 'column',      // ✅ Stack children vertically
    overflow: 'hidden'}}>
            <EditorToolBar title={'React Hooks-Complete Guide'} onToggleAI={() => setShowAIPanel(!showAIPanel)}/>

        {/* importing the editor tabs section below */}
        <EditorTab />
        <TextContentArea isAIPanelVisible={showAIPanel} />
        <StatsBar/>

         
        </div>
      </div>
      
      {/* Right AI Panel (fixed position, outside flex) */}
      <AIPanel isVisible={showAIPanel} onClose={() => setShowAIPanel(false)}/>

      
    </div>
  )
}

export default App;