



// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import FeatureCard from './FeatureCard';
// import Avatar from './Avatar'; // <--- 1. IMPORT THE NEW AVATAR
// import SoundscapesView from './SoundscapesView';
// import MeditateView from './MeditateView';
// import { useVoiceAssistant } from '../hooks/useVoiceAssistant';
// import Journal from './Journal';

// const Dashboard = () => {
//   const [activePage, setActivePage] = useState('home');
//   const { isListening, isSpeaking, status, startListening } = useVoiceAssistant();

//   // --- VIEW 1: Home ---
//   const HomeView = () => (
//     <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
//       <div>
//         <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Hey Friend 👋🏻</h1>
//         <p style={{ color: '#A0A1C5', fontSize: '1.1rem', marginTop: '10px' }}>Let's find some clarity today.</p>
//       </div>

//       {/* Hero Section */}
//       <div style={{ display: 'flex', gap: '30px', height: '400px' }}> {/* Increased height slightly for the avatar */}
        
//         {/* Left Side: Text & Button */}
//         <div style={{ 
//           flex: 2, background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
//           borderRadius: '32px', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//           position: 'relative', overflow: 'hidden', boxShadow: '0 20px 50px rgba(118, 75, 162, 0.3)'
//         }}>
//            <div style={{ zIndex: 2, maxWidth: '50%' }}>
//               <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Talk to SoulSync</h2>
//               <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '30px', lineHeight: '1.6' }}>{status}</p>
//               <button onClick={startListening} style={{
//                  background: isListening ? '#FF7E67' : 'white', color: isListening ? 'white' : '#764BA2',
//                  border: 'none', padding: '15px 35px', borderRadius: '30px', fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
//                  boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
//               }}>
//                  {isListening ? 'Listening...' : 'Start Conversation'}
//               </button>
//            </div>
           
//            {/* Right Side: The NEW Character Avatar */}
//            <div style={{ marginRight: '20px' }}>
//               <Avatar isSpeaking={isSpeaking} isListening={isListening} />
//            </div>
//         </div>

//         {/* Right Panel: Mood Tracker */}
//         <div style={{ 
//           flex: 1, background: '#1A1B4B', borderRadius: '32px', padding: '30px',
//           display: 'flex', flexDirection: 'column', justifyContent: 'center'
//         }}>
//            <h3 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>How are you feeling?</h3>
//            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
//               {['😔', '😐', '🙂', '😁'].map((emoji, i) => (
//                 <div key={i} style={{
//                   background: 'rgba(255,255,255,0.05)', borderRadius: '20px', height: '80px', 
//                   display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', cursor: 'pointer'
//                 }}>
//                   {emoji}
//                 </div>
//               ))}
//            </div>
//         </div>
//       </div>
      
//       {/* Feature Cards */}
//       <div>
//          <h3 style={{ fontSize: '1.5rem', marginBottom: '25px' }}>Explore Wellness</h3>
//          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px' }}>
//             <FeatureCard title="Meditation" subtitle="Calm your mind" color="#C4F5EE" icon="🧘‍♀️" onClick={() => setActivePage('meditate')} />
//             <FeatureCard title="Anxiety" subtitle="Release stress" color="#FDEE98" icon="🌤️" onClick={() => setActivePage('meditate')} />
//             <FeatureCard title="Journaling" subtitle="Write it out" color="#E0DEFF" icon="📔" onClick={() => setActivePage('journal')} />
//             <FeatureCard title="Sleep" subtitle="Rest better" color="#FFD8C9" icon="🌙" onClick={() => setActivePage('sounds')} />
//          </div>
//       </div>
//     </div>
//   );

//   // --- Main Render ---
//   return (
//     <div style={{ display: 'flex', width: '100vw', height: '100vh', background: '#121336' }}>
//       <Sidebar activePage={activePage} setActivePage={setActivePage} />
//       <div className="scroll-container" style={{ flex: 1, padding: '40px 60px', overflowY: 'auto' }}>
//         {activePage === 'home' && <HomeView />}
//         {activePage === 'meditate' && <MeditateView onBack={() => setActivePage('home')} />}
//         {activePage === 'journal' && <Journal />}
//         {activePage === 'sounds' && <SoundscapesView />}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState } from 'react';
import Sidebar from './Sidebar';
import FeatureCard from './FeatureCard';
import Avatar from './Avatar'; 
import SoundscapesView from './SoundscapesView';
import MeditateView from './MeditateView';
import { useVoiceAssistant } from '../hooks/useVoiceAssistant';
import Journal from './Journal';

const Dashboard = () => {
  const [activePage, setActivePage] = useState('home');
  const { isListening, isSpeaking, status, startListening } = useVoiceAssistant();

  // --- VIEW 1: Home ---
  const HomeView = () => (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <div>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Hey Friend 👋🏻</h1>
        <p style={{ color: '#A0A1C5', fontSize: '1.1rem', marginTop: '10px' }}>Let's find some clarity today.</p>
      </div>

      {/* Hero Section */}
      <div style={{ display: 'flex', gap: '30px', height: '400px' }}> 
        
        {/* Left Side: Text & Button */}
        <div style={{ 
          flex: 2, background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
          borderRadius: '32px', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          position: 'relative', overflow: 'hidden', boxShadow: '0 20px 50px rgba(118, 75, 162, 0.3)'
        }}>
           <div style={{ zIndex: 2, maxWidth: '50%' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Talk to SoulSync</h2>
              <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '30px', lineHeight: '1.6' }}>{status}</p>
              <button onClick={startListening} style={{
                 background: isListening ? '#FF7E67' : 'white', color: isListening ? 'white' : '#764BA2',
                 border: 'none', padding: '15px 35px', borderRadius: '30px', fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
                 boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
              }}>
                  {isListening ? 'Listening...' : 'Start Conversation'}
              </button>
           </div>
           
           {/* Right Side: The NEW Character Avatar */}
           <div style={{ marginRight: '20px' }}>
              <Avatar isSpeaking={isSpeaking} isListening={isListening} />
           </div>
        </div>

        {/* Right Panel: Mood Tracker */}
        <div style={{ 
          flex: 1, background: '#1A1B4B', borderRadius: '32px', padding: '30px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center'
        }}>
           <h3 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>How are you feeling?</h3>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              {['😔', '😐', '🙂', '😁'].map((emoji, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.05)', borderRadius: '20px', height: '80px', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', cursor: 'pointer'
                }}>
                  {emoji}
                </div>
              ))}
           </div>
        </div>
      </div>
      
      {/* Feature Cards */}
      <div>
         <h3 style={{ fontSize: '1.5rem', marginBottom: '25px' }}>Explore Wellness</h3>
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px' }}>
            <FeatureCard title="Meditation" subtitle="Calm your mind" color="#C4F5EE" icon="🧘‍♀️" onClick={() => setActivePage('meditate')} />
            <FeatureCard title="Anxiety" subtitle="Release stress" color="#FDEE98" icon="🌤️" onClick={() => setActivePage('meditate')} />
            <FeatureCard title="Journaling" subtitle="Write it out" color="#E0DEFF" icon="📔" onClick={() => setActivePage('journal')} />
            <FeatureCard title="Sleep" subtitle="Rest better" color="#FFD8C9" icon="🌙" onClick={() => setActivePage('sounds')} />
         </div>
      </div>
    </div>
  );

  // --- Main Render ---
  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh', background: '#121336' }}>
      
      {/* UPDATED: Passed the 'onBack' prop here. 
          When clicked, it sets the active page back to 'home'.
      */}
      <Sidebar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onBack={() => setActivePage('home')} 
      />

      <div className="scroll-container" style={{ flex: 1, padding: '40px 60px', overflowY: 'auto' }}>
        {activePage === 'home' && <HomeView />}
        {activePage === 'meditate' && <MeditateView onBack={() => setActivePage('home')} />}
        {activePage === 'journal' && <Journal />}
        {activePage === 'sounds' && <SoundscapesView />}
      </div>
    </div>
  );
};

export default Dashboard;