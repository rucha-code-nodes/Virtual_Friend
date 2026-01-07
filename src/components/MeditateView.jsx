// src/components/MeditateView.jsx
import React, { useState, useEffect, useRef } from 'react';
import './MeditateView.css';

const MeditateView = ({ onBack }) => {
  // State for the UI
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  
  // State for the Timer
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  // --- DATA --- (Same as before, just compacted for brevity)
  const exercises = [
    { id: 'deep', category: 'Breathing', title: 'Deep Calm', desc: 'Simple rhythmic breathing.', color: '#C4F5EE', durationSec: 300, instruction: 'Breathe In... Breathe Out...', animationClass: 'breathe-deep', icon: '🧘‍♀️' },
    { id: 'box', category: 'Breathing', title: 'Box Breathing', desc: '4s In, 4s Hold, 4s Out, 4s Hold.', color: '#FDEE98', durationSec: 180, instruction: 'In... Hold... Out... Hold...', animationClass: 'breathe-box', icon: '🧘‍♀️' },
    { id: 'sleep', category: 'Breathing', title: '4-7-8 Sleep', desc: 'Relaxing breath for sleep.', color: '#E0DEFF', durationSec: 600, instruction: 'Inhale (4s)... Hold (7s)... Exhale (8s)...', animationClass: 'breathe-sleep', icon: '🧘‍♀️' },
    { id: 'stretch', category: 'Movement', title: 'Desk Yoga', desc: 'Simple shoulder & neck stretches.', color: '#FFD8C9', durationSec: 120, instruction: 'Roll shoulders back. Tilt head left, then right.', animationClass: 'pulse-gentle', icon: '🏃‍♂️' },
    { id: 'dance', category: 'Movement', title: 'Dance Break', desc: 'Play your favorite song and move!', color: '#FF9EAA', durationSec: 180, instruction: 'Put on an upbeat song. Dance freely!', animationClass: 'pulse-gentle', icon: '🏃‍♂️' },
    { id: 'walk', category: 'Movement', title: 'Quick Walk', desc: 'Step away for a moment.', color: '#A3E4DB', durationSec: 300, instruction: 'Walk around your room or outside. Look afar.', animationClass: 'pulse-gentle', icon: '🏃‍♂️' },
    { id: 'muscle', category: 'Sensory', title: 'Muscle Relax', desc: 'Progressive muscle relaxation.', color: '#D4A5A5', durationSec: 300, instruction: 'Tense toes... release. Tense legs... release. Move up.', animationClass: 'pulse-gentle', icon: '💧' },
    { id: 'water', category: 'Sensory', title: 'Cold Splash', desc: 'Reset your nervous system.', color: '#89CFF0', durationSec: 60, instruction: 'Splash cold water on your face and wrists.', animationClass: 'pulse-gentle', icon: '💧' },
    { id: 'doodle', category: 'Creative', title: 'Doodling', desc: 'Draw freely to relax.', color: '#FDFCF0', durationSec: 300, instruction: 'Grab a pen. Just draw lines, circles, shapes.', animationClass: 'pulse-gentle', icon: '🎨' },
    { id: 'gratitude', category: 'Creative', title: 'Gratitude 3', desc: 'List 3 things you are grateful for.', color: '#FFF4E0', durationSec: 120, instruction: 'Think of 3 small things that made you smile.', animationClass: 'pulse-gentle', icon: '🎨' }
  ];
  const categories = ['All', 'Breathing', 'Movement', 'Sensory', 'Creative'];

  // --- TIMER LOGIC ---
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
        // Timer finished
        setIsRunning(false);
        clearInterval(timerRef.current);
        // Optional: Play a soft chime sound here
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning, timeLeft]);

  // Format seconds to MM:SS
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleSelectExercise = (ex) => {
    setSelectedExercise(ex);
    setTimeLeft(ex.durationSec);
    setIsRunning(false); // Don't start automatically
  };

  const handleExitPlayer = () => {
    setSelectedExercise(null);
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  // --- RENDER: MENU LIST ---
  if (!selectedExercise) {
    const filtered = activeCategory === 'All' ? exercises : exercises.filter(e => e.category === activeCategory);
    return (
      <div className="meditate-container animate-fade-in">
        <div className="studio-header">
            <div>
                <h2 style={{ fontSize: '2rem', margin: 0 }}>Mindfulness Gym</h2>
                <p style={{ color: '#A0A1C5', margin: '5px 0 0 0' }}>Select an activity to begin.</p>
            </div>
            <button onClick={onBack} className="exit-btn">Exit</button>
        </div>
        <div className="category-tabs">
          {categories.map(cat => (
            <button key={cat} className={`tab-btn ${activeCategory === cat ? 'active' : ''}`} onClick={() => setActiveCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>
        <div className="exercise-grid">
          {filtered.map((ex) => (
            <div key={ex.id} className="exercise-card" onClick={() => handleSelectExercise(ex)} style={{ '--card-accent': ex.color }}>
              <div className="card-icon-wrapper" style={{ background: ex.color }}>{ex.icon}</div>
              <h3 className="card-title">{ex.title}</h3>
              <p className="card-desc">{ex.desc}</p>
              <div className="card-duration" style={{ color: ex.color }}>⏱ {Math.floor(ex.durationSec / 60)} min</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- RENDER: PLAYER & TIMER ---
  return (
    <div className="player-container animate-fade-in">
      <div className="player-header">
         <button onClick={handleExitPlayer} className="back-icon-btn">← Back</button>
      </div>
      
      <h2 style={{ fontSize: '2.2rem', marginBottom: '10px', color: selectedExercise.color }}>{selectedExercise.title}</h2>
      <p className="instruction-text">{selectedExercise.instruction}</p>

      {/* THE CLOCK */}
      <div className="timer-display" style={{ color: selectedExercise.color }}>
        {formatTime(timeLeft)}
      </div>

      {/* Animation */}
      <div className={`breathing-circle ${isRunning ? selectedExercise.animationClass : ''}`} style={{ marginBottom: '40px' }}>
        <div className="inner-core" style={{ background: selectedExercise.color, opacity: isRunning ? 1 : 0.5 }}></div>
      </div>

      {/* CONTROLS */}
      <div className="control-buttons">
        {!isRunning && timeLeft > 0 && (
            <button className="control-btn start-btn" onClick={() => setIsRunning(true)} style={{ background: selectedExercise.color, color: '#1A1B4B' }}>
                ▶ Start
            </button>
        )}
        {isRunning && (
            <button className="control-btn pause-btn" onClick={() => setIsRunning(false)}>
                ❚❚ Pause
            </button>
        )}
        <button className="control-btn stop-btn" onClick={handleExitPlayer}>
            Done
        </button>
        {timeLeft === 0 && (
            <button className="control-btn restart-btn" onClick={() => setTimeLeft(selectedExercise.durationSec)}>
            ↻ Restart
            </button>
        )}
      </div>
    </div>
  );
};

export default MeditateView;
