import React from 'react';

const BottomNav = () => {
  const navStyle = {
    position: 'absolute',
    bottom: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#2A2B5F',
    padding: '15px 30px',
    borderRadius: '50px',
    display: 'flex',
    gap: '40px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    zIndex: 100
  };

  const iconStyle = { fontSize: '1.5rem', cursor: 'pointer', color: '#A0A1C5', transition: '0.3s' };
  const activeStyle = { ...iconStyle, color: '#FDEE98', transform: 'translateY(-5px)' };

  return (
    <div style={navStyle}>
      <span style={activeStyle}>🏠</span> {/* Home */}
      <span style={iconStyle}>🎵</span>   {/* Music */}
      <div style={{
        width: '50px', height: '50px', background: '#FDEE98', borderRadius: '50%',
        marginTop: '-40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.5rem', boxShadow: '0 5px 15px rgba(253, 238, 152, 0.4)', cursor: 'pointer'
      }}>
        🎙️
      </div>
      <span style={iconStyle}>💬</span>   {/* Chat */}
      <span style={iconStyle}>👤</span>   {/* Profile */}
    </div>
  );
};

export default BottomNav;