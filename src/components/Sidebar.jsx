



// // src/components/Sidebar.jsx
// import React from 'react';

// const Sidebar = ({ activePage, setActivePage }) => {
//   const menuItems = [
//     { id: 'home', icon: '🏠', label: 'Home' },
//     { id: 'meditate', icon: '🧘‍♀️', label: 'Meditate' },
//     { id: 'sounds', icon: '🎵', label: 'Sounds' },
//     { id: 'journal', icon: '📔', label: 'Journal' },
//   ];

//   return (
//     <div style={{
//       width: '250px',
//       height: '100vh',
//       background: '#1A1B4B',
//       display: 'flex',
//       flexDirection: 'column',
//       padding: '40px 20px',
//       boxSizing: 'border-box',
//       borderRight: '1px solid rgba(255,255,255,0.05)'
//     }}>
//       <div style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '60px', color: 'white' }}>
//         Soul<span style={{ color: '#FDEE98' }}>Sync</span>
//       </div>

//       <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
//         {menuItems.map((item) => (
//           <div 
//             key={item.id} 
//             onClick={() => setActivePage(item.id)} // 👈 This makes it clickable
//             style={{
//               display: 'flex', alignItems: 'center', gap: '15px',
//               padding: '15px 20px',
//               borderRadius: '16px',
//               // Change color if this item is the active one
//               background: activePage === item.id ? 'rgba(253, 238, 152, 0.1)' : 'transparent',
//               color: activePage === item.id ? '#FDEE98' : '#A0A1C5',
//               cursor: 'pointer',
//               transition: '0.3s',
//               fontWeight: activePage === item.id ? 600 : 400
//             }}
//           >
//             <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
//             <span>{item.label}</span>
//           </div>
//         ))}
//       </div>

//       <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '15px', padding: '10px' }}>
//         <div style={{ 
//             width: '40px', height: '40px', borderRadius: '50%', 
//             background: 'url("https://api.dicebear.com/7.x/avataaars/svg?seed=Felix")',
//             backgroundSize: 'cover', border: '2px solid #C4F5EE'
//         }}></div>
//         <div>
//            <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Alia</div>
//            <div style={{ fontSize: '0.7rem', color: '#A0A1C5' }}>Free Plan</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = ({ activePage, setActivePage, onBack }) => { // 👈 Added onBack prop
  const menuItems = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'meditate', icon: '🧘‍♀️', label: 'Meditate' },
    { id: 'sounds', icon: '🎵', label: 'Sounds' },
    { id: 'journal', icon: '📔', label: 'Journal' },
  ];

  return (
    <div style={{
      width: '250px',
      height: '100vh',
      background: '#1A1B4B',
      display: 'flex',
      flexDirection: 'column',
      padding: '30px 20px', // Slightly reduced top padding to accommodate button
      boxSizing: 'border-box',
      borderRight: '1px solid rgba(255,255,255,0.05)',
      position: 'relative' // To ensure positioning context if needed
    }}>
      
      {/* --- NEW BACK BUTTON --- */}
      <button 
        onClick={onBack} 
        style={{
          background: 'transparent',
          border: 'none',
          color: '#A0A1C5',
          fontSize: '0.9rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '20px', // Spacing between button and logo
          padding: 0,
          fontWeight: 500,
          transition: 'color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.color = 'white'}
        onMouseLeave={(e) => e.target.style.color = '#A0A1C5'}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back
      </button>

      {/* --- LOGO --- */}
      <div style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '40px', color: 'white' }}>
        Soul<span style={{ color: '#FDEE98' }}>Sync</span>
      </div>

      {/* --- MENU ITEMS --- */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {menuItems.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setActivePage(item.id)}
            style={{
              display: 'flex', alignItems: 'center', gap: '15px',
              padding: '15px 20px',
              borderRadius: '16px',
              background: activePage === item.id ? 'rgba(253, 238, 152, 0.1)' : 'transparent',
              color: activePage === item.id ? '#FDEE98' : '#A0A1C5',
              cursor: 'pointer',
              transition: '0.3s',
              fontWeight: activePage === item.id ? 600 : 400
            }}
          >
            <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      {/* --- USER PROFILE --- */}
      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '15px', padding: '10px' }}>
        <div style={{ 
            width: '40px', height: '40px', borderRadius: '50%', 
            background: 'url("https://api.dicebear.com/7.x/avataaars/svg?seed=Felix")',
            backgroundSize: 'cover', border: '2px solid #C4F5EE'
        }}></div>
        <div>
           <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Alia</div>
           <div style={{ fontSize: '0.7rem', color: '#A0A1C5' }}>Free Plan</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;