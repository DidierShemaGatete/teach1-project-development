import React from 'react';

interface LogoSVGProps {
  className?: string;
  width?: number;
  height?: number;
}

const LogoSVG: React.FC<LogoSVGProps> = ({ 
  className = "", 
  width = 200, 
  height = 120 
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 200 120" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* House roof */}
      <path 
        d="M30 35 L100 15 L170 35 L170 45 L30 45 Z" 
        fill="#2C3E50"
      />
      
      {/* Window on roof */}
      <rect x="90" y="20" width="8" height="4" fill="#C0392B" />
      <rect x="102" y="20" width="8" height="4" fill="#C0392B" />
      <rect x="90" y="26" width="8" height="4" fill="#C0392B" />
      <rect x="102" y="26" width="8" height="4" fill="#C0392B" />
      
      {/* Three figures holding hands */}
      {/* Left figure */}
      <circle cx="60" cy="55" r="6" fill="#C0392B" />
      <path 
        d="M45 65 Q60 60 75 65 L75 75 Q60 70 45 75 Z" 
        fill="#C0392B"
      />
      <line x1="45" y1="70" x2="35" y2="65" stroke="#C0392B" strokeWidth="3" strokeLinecap="round" />
      <line x1="75" y1="70" x2="85" y2="65" stroke="#C0392B" strokeWidth="3" strokeLinecap="round" />
      
      {/* Center figure */}
      <circle cx="100" cy="55" r="6" fill="#C0392B" />
      <path 
        d="M85 65 Q100 60 115 65 L115 75 Q100 70 85 75 Z" 
        fill="#C0392B"
      />
      <line x1="85" y1="70" x2="75" y2="65" stroke="#C0392B" strokeWidth="3" strokeLinecap="round" />
      <line x1="115" y1="70" x2="125" y2="65" stroke="#C0392B" strokeWidth="3" strokeLinecap="round" />
      
      {/* Right figure */}
      <circle cx="140" cy="55" r="6" fill="#C0392B" />
      <path 
        d="M125 65 Q140 60 155 65 L155 75 Q140 70 125 75 Z" 
        fill="#C0392B"
      />
      <line x1="125" y1="70" x2="115" y2="65" stroke="#C0392B" strokeWidth="3" strokeLinecap="round" />
      <line x1="155" y1="70" x2="165" y2="65" stroke="#C0392B" strokeWidth="3" strokeLinecap="round" />
      
      {/* Connecting hands */}
      <line x1="75" y1="65" x2="85" y2="65" stroke="#C0392B" strokeWidth="3" strokeLinecap="round" />
      <line x1="115" y1="65" x2="125" y2="65" stroke="#C0392B" strokeWidth="3" strokeLinecap="round" />
      
      {/* TEACH1 text */}
      <text x="100" y="95" textAnchor="middle" className="fill-current text-gray-900" style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
        TEACH1
      </text>
      
      {/* Subtitle */}
      <text x="100" y="108" textAnchor="middle" className="fill-current text-red-600" style={{ fontSize: '8px', fontWeight: '600', fontFamily: 'Arial, sans-serif' }}>
        HOMECARE+SKILL CONSULTANT, LLC.
      </text>
      
      {/* Bottom text */}
      <text x="100" y="118" textAnchor="middle" className="fill-current text-gray-900" style={{ fontSize: '7px', fontFamily: 'Arial, sans-serif' }}>
        FAMILIES TAKING CARE OF FAMILIES
      </text>
    </svg>
  );
};

export default LogoSVG;