// // src/components/SoundscapesView.jsx
// import React, { useState, useRef, useEffect } from 'react';
// import './SoundscapesView.css';
// // --- IMPORT YOUR LOCAL AUDIO FILES HERE ---
// import rainAudio from '../assets/rain.mp3';
// import forestAudio from '../assets/forest.mp3';

// import oceanAudio from '../assets/ocean.mp3';
// import thunderAudio from '../assets/thunder.mp3';
// import cafeImg from '../assets/cafe.png';
// import forestImg from '../assets/forest.png'; // rename to something meaningful

// const SoundscapesView = () => {
//   const [activeSound, setActiveSound] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef(new Audio());

  

//   // --- DATA: Sounds & Images ---
//  const sounds = [
//     { 
//       id: 'rain', 
//       title: 'Gentle Rain', 
//       icon: '🌧️', 
//       audioSrc: rainAudio, // <--- Use the variable name here, no quotes
//       bgImage: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&q=80'
//     },
//    { 
//     id: 'forest', 
//     title: 'Forest Stream', 
//     icon: '🌲', 
//     audioSrc: forestAudio, 
//     bgImage: forestImg // ✅ use the imported variable
//   },
//     { 
//       id: 'ocean', 
//       title: 'Ocean Waves', 
//       icon: '🌊', 
//       audioSrc: oceanAudio, // <--- Local Import
//       bgImage: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80'
//     },
//     { 
//       id: 'thunder', 
//       title: 'Thunder', 
//       icon: '⛈️', 
//       audioSrc: thunderAudio, // <--- Local Import
//       bgImage: 'https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?auto=format&fit=crop&q=80'
//     },


//    { 
//     id: 'lofi', 
//     title: 'Cozy Lo-Fi', 
//     icon: '☕', 
//     audioSrc: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3', // ✅ Real MP3 URL
//     bgImage: cafeImg // ✅ Local image import
//   }
//   ];

//   // Handle Play/Pause Logic
//   const toggleSound = (sound) => {
//     if (activeSound?.id === sound.id) {
//       // Toggle Play/Pause for same sound
//       if (isPlaying) {
//         audioRef.current.pause();
//         setIsPlaying(false);
//       } else {
//         audioRef.current.play();
//         setIsPlaying(true);
//       }
//     } else {
//       // New Sound selected
//       setActiveSound(sound);
//       audioRef.current.src = sound.audioSrc;
//       audioRef.current.loop = true; // Loop nature sounds
//       audioRef.current.play();
//       setIsPlaying(true);
//     }
//   };

//   // Cleanup when component closes (stop music)
//   useEffect(() => {
//     return () => {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     };
//   }, []);

//   return (
//     <div 
//       className={`soundscapes-container ${isPlaying ? 'playing' : ''}`}
//       style={{ 
//         backgroundImage: activeSound 
//           ? `url(${activeSound.bgImage})` 
//           : 'linear-gradient(135deg, #1A1B4B 0%, #2A2B5F 100%)' 
//       }}
//     >
//       <div className="overlay-bg"></div>

//       <div className="sound-content">
//         <h2 style={{ fontSize: '2rem', marginBottom: '10px', zIndex: 10 }}>Soundscapes</h2>
//         <p style={{ color: '#E0DEFF', opacity: 0.8 }}>Immerse yourself in calming natural environments.</p>

//         {/* Sound Selection Grid */}
//         <div className="sound-grid">
//           {sounds.map((sound) => (
//             <div 
//               key={sound.id} 
//               className={`sound-card ${activeSound?.id === sound.id && isPlaying ? 'active' : ''}`}
//               onClick={() => toggleSound(sound)}
//             >
//               <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{sound.icon}</div>
//               <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{sound.title}</h3>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Player Bar (Only shows when a sound is selected) */}
//         {activeSound && (
//           <div className="player-controls">
//             <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
//                <button 
//                  onClick={() => toggleSound(activeSound)}
//                  style={{ 
//                    width: '50px', height: '50px', borderRadius: '50%', border: 'none', 
//                    background: '#FDEE98', fontSize: '1.2rem', cursor: 'pointer', color: '#1A1B4B'
//                  }}
//                >
//                  {isPlaying ? '⏸' : '▶'}
//                </button>
//                <div>
//                  <div style={{ fontSize: '1rem', fontWeight: 600 }}>{activeSound.title}</div>
//                  <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>{isPlaying ? 'Playing Now' : 'Paused'}</div>
//                </div>
//             </div>

//             {/* Visualizer Animation */}
//             {isPlaying && (
//               <div className="visualizer">
//                 <div className="bar"></div>
//                 <div className="bar"></div>
//                 <div className="bar"></div>
//                 <div className="bar"></div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SoundscapesView;




// src/components/SoundscapesView.jsx
import React, { useState, useRef, useEffect } from 'react';
import './SoundscapesView.css';

// --- IMPORT LOCAL ASSETS ---
import rainAudio from '../assets/rain.mp3';
import forestAudio from '../assets/forest.mp3';
import oceanAudio from '../assets/ocean.mp3';
import thunderAudio from '../assets/thunder.mp3';
// Make sure these match your actual file names
import cafeImg from '../assets/cafe.png'; 
import forestImg from '../assets/forest.png'; 

const SoundscapesView = () => {
  const [activeSound, setActiveSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  // --- DEFINING THE WORLDS ---
  const worlds = [
    { 
      id: 'rain', 
      title: 'Rain Room', 
      desc: 'Dim lights & heavy rain',
      icon: '🌧️', 
      audioSrc: rainAudio, 
      bgImage: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&q=80',
      // World Specifics
      quote: "Let the rain wash away the worry.",
      opacity: 0.7 // Darker overlay for "Dim lights"
    },
    { 
      id: 'silent', 
      title: 'Silent Mode', 
      desc: 'Nature sounds, no demands',
      icon: '🌲', 
      audioSrc: forestAudio, 
      bgImage: forestImg,
      quote: "Silence is not empty. It's full of answers.",
      opacity: 0.3 // Brighter/Clearer
    },
    { 
      id: 'overwhelm', 
      title: 'Safe Haven', 
      desc: 'For when it feels too much',
      icon: '🌊', 
      audioSrc: oceanAudio, 
      bgImage: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80',
      quote: "Just breathe. One small step at a time.",
      opacity: 0.5
    },
    { 
      id: 'focus', 
      title: 'Focus Café', 
      desc: 'Cozy vibes to get things done',
      icon: '☕', 
      audioSrc: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3', 
      bgImage: cafeImg,
      quote: "You are doing enough.",
      opacity: 0.4
    },
    { 
      id: 'thunder', 
      title: 'Storm Shelter', 
      desc: 'Comfort in the chaos',
      icon: '⛈️', 
      audioSrc: thunderAudio, 
      bgImage: 'https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?auto=format&fit=crop&q=80',
      quote: "The storm outside cannot touch you here.",
      opacity: 0.6
    }
  ];

  // Logic to enter a world
  const enterWorld = (world) => {
    setActiveSound(world);
    
    // Smooth audio transition
    audioRef.current.src = world.audioSrc;
    audioRef.current.loop = true;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const leaveWorld = () => {
    audioRef.current.pause();
    setIsPlaying(false);
    setActiveSound(null);
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, []);

  return (
    <div 
      className={`soundscapes-container ${activeSound ? 'world-active' : ''}`}
      style={{ 
        backgroundImage: activeSound 
          ? `url(${activeSound.bgImage})` 
          : 'linear-gradient(135deg, #1A1B4B 0%, #2A2B5F 100%)' 
      }}
    >
      {/* Dynamic Overlay based on World Setting */}
      <div 
        className="overlay-bg" 
        style={{ 
           backgroundColor: activeSound 
             ? `rgba(18, 19, 54, ${activeSound.opacity})` // Custom dimness
             : 'rgba(18, 19, 54, 0.7)' 
        }}
      ></div>

      <div className="sound-content">
        
        {/* --- STATE 1: MENU (Grid) --- */}
        {!activeSound && (
          <div className="menu-view animate-fade-in">
             <h2 style={{ fontSize: '2rem', marginBottom: '10px', zIndex: 10 }}>Sanctuaries</h2>
             <p style={{ color: '#E0DEFF', opacity: 0.8, marginBottom: '30px' }}>Where do you want to escape to?</p>

             <div className="sound-grid">
              {worlds.map((world) => (
                <div 
                  key={world.id} 
                  className="sound-card"
                  onClick={() => enterWorld(world)}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{world.icon}</div>
                  <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{world.title}</h3>
                  <p style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '5px' }}>{world.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- STATE 2: INSIDE THE WORLD (Immersive) --- */}
        {activeSound && (
          <div className="immersive-view animate-fade-in">
             
             {/* 1. Header (Exit Button) */}
             <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="world-tag">
                   <span>{activeSound.icon}</span> {activeSound.title}
                </div>
                <button className="leave-btn" onClick={leaveWorld}>Leave Space ✕</button>
             </div>

             {/* 2. The Center Focus (Supportive Text) */}
             <div className="center-quote">
                "{activeSound.quote}"
             </div>

             {/* 3. Minimal Player Controls */}
             <div className="player-controls minimal">
                <button onClick={togglePlay} className="play-btn-large">
                   {isPlaying ? '⏸' : '▶'}
                </button>
                {isPlaying && (
                  <div className="visualizer">
                    <div className="bar"></div><div className="bar"></div><div className="bar"></div>
                  </div>
                )}
             </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default SoundscapesView;