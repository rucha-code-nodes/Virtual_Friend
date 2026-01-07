


// // src/App.jsx
// import React from 'react';
// import './App.css';
// import AvatarOrb from './components/AvatarOrb';
// import { useVoiceAssistant } from './hooks/useVoiceAssistant';

// function App() {
//   const { isListening, isSpeaking, status, startListening } = useVoiceAssistant();

//   return (
//     <div className="main-container">
//       {/* Header */}
//       <div style={{ textAlign: 'center' }}>
//         <h2 style={{ margin: 0, fontWeight: 300 }}>Virtual Companion</h2>
//       </div>

//       {/* The Visualizer */}
//       <AvatarOrb isSpeaking={isSpeaking} isListening={isListening} />

//       {/* Status Text */}
//       <div className="status-text">{status}</div>

//       {/* Controls */}
//       <button 
//         className={`mic-button ${isListening ? 'active' : ''}`}
//         onClick={startListening}
//         disabled={isSpeaking}
//       >
//         {isListening ? (
//           <i className="fa fa-stop"></i> // Use FontAwesome or simple text
//         ) : (
//           <i className="fa fa-microphone"></i> 
//         )}
//         {/* Simple CSS shape for mic icon if no font library */}
//         <span style={{ fontSize: '24px' }}>🎤</span>
//       </button>
//     </div>
//   );
// }

// export default App;





import React from 'react';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    // The Dashboard contains the entire "Mobile App" layout
    <Dashboard />
  );
}

export default App;