import React, { useState, useEffect } from 'react';

const MouseHaloEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    
      <div 
        className="pointer-events-none fixed bg-blue-500/60 opacity-10 rounded-full blur-3xl transition-transform duration-200"
        style={{
          width: '300px',
          height: '300px',
          left: `${mousePosition.x - 150}px`,
          top: `${mousePosition.y - 150}px`,
        }}
      />
  );
};

export default MouseHaloEffect;