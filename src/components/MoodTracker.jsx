// src/components/MoodTracker.jsx
import React, { useState } from 'react';

const MoodTracker = () => {
  const [selected, setSelected] = useState(null);
  const moods = ['😔', '😐', '🙂', '😁', '😌'];

  const styleContainer = {
    display: 'flex', gap: '15px', padding: '15px 25px',
    borderRadius: '20px', background: 'rgba(255,255,255,0.6)',
    alignItems: 'center'
  };

  return (
    <div style={styleContainer}>
      <span style={{fontWeight: 600, color: '#87879D'}}>How are you feeling?</span>
      <div style={{display: 'flex', gap: '10px'}}>
        {moods.map((mood, i) => (
          <button 
            key={i}
            onClick={() => setSelected(i)}
            style={{
              border: 'none', background: selected === i ? '#A3E4DB' : 'transparent',
              fontSize: '1.5rem', cursor: 'pointer', borderRadius: '50%',
              width: '40px', height: '40px', transition: '0.2s'
            }}
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodTracker;