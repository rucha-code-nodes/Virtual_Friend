// src/components/AvatarOrb.jsx
import './AvatarOrb.css';

const AvatarOrb = ({ isSpeaking, isListening }) => {
  // Determine the class based on state
  let orbClass = "orb";
  if (isSpeaking) orbClass += " speaking";
  if (isListening) orbClass += " listening";

  return (
    <div className="orb-container">
      <div className={orbClass}></div>
      <div className={`glow ${isSpeaking ? 'active' : ''}`}></div>
    </div>
  );
};

export default AvatarOrb;