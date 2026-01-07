import React from 'react';

const FeatureCard = ({ title, subtitle, color, icon, onClick }) => {
  return (
    <div 
      onClick={onClick}
      style={{
        backgroundColor: color,
        borderRadius: '24px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '140px',
        cursor: 'pointer',
        color: '#2D3142', // Dark text on pastel background
        transition: 'transform 0.2s',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      {/* Decorative Circle behind icon */}
      <div style={{
        position: 'absolute', right: '-10px', bottom: '-10px',
        width: '80px', height: '80px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.4)'
      }}></div>

      <div style={{ fontSize: '2.5rem', zIndex: 1 }}>{icon}</div>
      
      <div style={{ zIndex: 1 }}>
        <h3 style={{ margin: '0 0 5px 0', fontSize: '1rem', fontWeight: 700 }}>{title}</h3>
        <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.8 }}>{subtitle}</p>
      </div>
    </div>
  );
};

export default FeatureCard;