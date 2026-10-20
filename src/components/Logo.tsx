import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 32 }) => {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          <linearGradient id="logo-grad-primary" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="logo-border-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        
        {/* Rounded Container Box */}
        <rect width="48" height="48" rx="12" fill="#12121B" />
        <rect x="1" y="1" width="46" height="46" rx="11" stroke="url(#logo-border-grad)" strokeWidth="1.5" />
        
        {/* Geometric 'B' block nodes */}
        <path
          d="M15 14H24C27.3137 14 30 16.6863 30 20C30 21.6569 29.3284 23.1569 28.2426 24.2426C29.8995 25.3284 31 27.0294 31 29C31 32.866 27.866 36 24 36H15V14Z"
          stroke="url(#logo-grad-primary)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 25H25"
          stroke="url(#logo-grad-primary)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        
        {/* Interconnected glowing nodes */}
        <circle cx="34" cy="14" r="3" fill="#8B5CF6" />
        <circle cx="34" cy="34" r="3" fill="#3B82F6" />
        <line x1="30" y1="16" x2="33" y2="15" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
        <line x1="30" y1="32" x2="33" y2="33" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
};
