// src/components/Journal.jsx
import React, { useState } from 'react';
import './Journal.css';

const Journal = () => {
  const [entry, setEntry] = useState('');
  
  // Get formatted date (e.g., "Monday, Oct 24")
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', month: 'short', day: 'numeric' 
  });

  const handleSave = () => {
    // In a real app, save 'entry' to a database here
    alert("Entry saved to your digital notebook! 📔");
    setEntry('');
  };

  return (
    <div className="journal-wrapper">
      
      {/* The Paper Sheet */}
      <div className="paper-sheet">
        
        {/* Visual Decor: Tape & Leaf */}
        <div className="tape-strip"></div>
        <div className="leaf-decor"></div>

        {/* Header with Date */}
        <div className="journal-header">
          <span className="date-stamp">{today}</span>
          <span style={{ fontFamily: 'Patrick Hand', color: '#E65A5A' }}>Dear Diary...</span>
        </div>

        {/* The Writing Area */}
        <textarea
          className="journal-textarea"
          placeholder="What's on your mind today? (Start typing...)"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          spellCheck="false"
        />

        {/* Sticker Button */}
        <button className="sticker-btn" onClick={handleSave}>
          Save Note 📌
        </button>

      </div>
    </div>
  );
};

export default Journal;