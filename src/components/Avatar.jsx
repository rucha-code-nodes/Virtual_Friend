// src/components/Avatar.jsx
import React from 'react';
import './Avatar.css';
import avatarImg from '../assets/lady.jpg'; // <-- your downloaded avatar

const Avatar = ({ isSpeaking, isListening }) => {
  return (
    <div className={`avatar-container ${isSpeaking ? 'speaking' : ''} ${isListening ? 'listening' : ''}`}>
      <div className="avatar-aura"></div>
      <img 
        src={avatarImg}   // ✅ Use local import
        alt="Virtual Friend" 
        className="avatar-image" 
      />
      <div className="avatar-status-badge">
        <span className={`status-dot ${isSpeaking ? 'speak' : isListening ? 'listen' : 'idle'}`}></span>
        {isSpeaking ? "Speaking..." : isListening ? "Listening..." : "I'm here"}
      </div>
    </div>
  );
};

export default Avatar;
