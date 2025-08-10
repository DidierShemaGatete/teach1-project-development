import React from 'react';

interface LogoSVGProps {
  className?: string;
  width?: number;
  height?: number;
}

const LogoSVG: React.FC<LogoSVGProps> = ({ 
  className = "", 
  width = 240, 
  height = 140 
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 240 140" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* House structure */}
      {/* Roof */}
      <path 
        d="M40 50 L120 25 L200 50 L200 60 L40 60 Z" 
        fill="#2C3E50"
      />
      
      {/* House wall */}
      <rect x="70" y="60" width="100" height="25" fill="#F8F9FA" stroke="#E9ECEF" strokeWidth="1"/>
      
      {/* Window cross pattern on roof */}
      <rect x="108" y="35" width="6" height="6" fill="#C53030" />
      <rect x="116" y="35" width="6" height="6" fill="#C53030" />
      <rect x="126" y="35" width="6" height="6" fill="#C53030" />
      <rect x="108" y="43" width="6" height="6" fill="#C53030" />
      <rect x="116" y="43" width="6" height="6" fill="#C53030" />
      <rect x="126" y="43" width="6" height="6" fill="#C53030" />
      
      {/* Three figures holding hands */}
      {/* Left figure */}
      <circle cx="80" cy="75" r="8" fill="#C53030" />
      <path 
        d="M65 88 Q80 82 95 88 L95 102 Q80 96 65 102 Z" 
        fill="#C53030"
      />
      <line x1="65" y1="95" x2="50" y2="88" stroke="#C53030" strokeWidth="4" strokeLinecap="round" />
      <line x1="95" y1="95" x2="110" y2="88" stroke="#C53030" strokeWidth="4" strokeLinecap="round" />
      
      {/* Center figure */}
      <circle cx="120" cy="75" r="8" fill="#C53030" />
      <path 
        d="M105 88 Q120 82 135 88 L135 102 Q120 96 105 102 Z" 
        fill="#C53030"
      />
      <line x1="105" y1="95" x2="95" y2="88" stroke="#C53030" strokeWidth="4" strokeLinecap="round" />
      <line x1="135" y1="95" x2="150" y2="88" stroke="#C53030" strokeWidth="4" strokeLinecap="round" />
      
      {/* Right figure */}
      <circle cx="160" cy="75" r="8" fill="#C53030" />
      <path 
        d="M145 88 Q160 82 175 88 L175 102 Q160 96 145 102 Z" 
        fill="#C53030"
      />
      <line x1="145" y1="95" x2="135" y2="88" stroke="#C53030" strokeWidth="4" strokeLinecap="round" />
      <line x1="175" y1="95" x2="190" y2="88" stroke="#C53030" strokeWidth="4" strokeLinecap="round" />
      
      {/* Connecting hands/arms */}
      <line x1="95" y1="88" x2="105" y2="88" stroke="#C53030" strokeWidth="4" strokeLinecap="round" />
      <line x1="135" y1="88" x2="145" y2="88" stroke="#C53030" strokeWidth="4" strokeLinecap="round" />
      
      {/* TEACH1 text */}
      <text x="120" y="118" textAnchor="middle" fill="#2D3748" style={{ fontSize: '22px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', letterSpacing: '1px' }}>
        TEACH1
      </text>
      
      {/* Subtitle */}
      <text x="120" y="130" textAnchor="middle" fill="#C53030" style={{ fontSize: '9px', fontWeight: '600', fontFamily: 'Arial, sans-serif', letterSpacing: '0.5px' }}>
        HOMECARE+SKILL CONSULTANT, LLC.
      </text>
      
      {/* Bottom text */}
      <text x="120" y="140" textAnchor="middle" fill="#2D3748" style={{ fontSize: '8px', fontFamily: 'Arial, sans-serif', letterSpacing: '0.3px' }}>
        FAMILIES TAKING CARE OF FAMILIES
      </text>
    </svg>
  );
};

export default LogoSVG;