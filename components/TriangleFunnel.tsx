import React, { useState } from 'react';

const TriangleFunnel: React.FC = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const getOpacity = (section: string) => {
    if (!hoveredSection) return 0.9;
    return hoveredSection === section ? 1 : 0.4;
  };

  const getScale = (section: string) => {
    return hoveredSection === section ? 'scale(1.02)' : 'scale(1)';
  };

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-[4/3] flex items-center justify-center">
      <svg viewBox="0 0 400 350" className="w-full h-full drop-shadow-2xl">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#1e3a8a', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#0f766e', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#14b8a6', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#a78bfa', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Top Section: Strategy */}
        <path
          d="M200 20 L300 120 L100 120 Z"
          fill="url(#grad1)"
          opacity={getOpacity('strategy')}
          transform={getScale('strategy')}
          className="transition-all duration-300 cursor-pointer origin-center"
          onMouseEnter={() => setHoveredSection('strategy')}
          onMouseLeave={() => setHoveredSection(null)}
        />
        <text x="200" y="85" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Strategic</text>
        <text x="200" y="100" textAnchor="middle" fill="white" fontSize="12">Consulting</text>

        {/* Middle Section: Solutions */}
        <path
          d="M100 130 L300 130 L350 220 L50 220 Z"
          fill="url(#grad2)"
          opacity={getOpacity('solutions')}
          transform={getScale('solutions')}
          className="transition-all duration-300 cursor-pointer origin-center"
          onMouseEnter={() => setHoveredSection('solutions')}
          onMouseLeave={() => setHoveredSection(null)}
        />
        <text x="200" y="175" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">AI-Powered</text>
        <text x="200" y="190" textAnchor="middle" fill="white" fontSize="12">Solutions</text>

        {/* Bottom Section: Training */}
        <path
          d="M50 230 L350 230 L400 330 L0 330 Z"
          fill="url(#grad3)"
          opacity={getOpacity('training')}
          transform={getScale('training')}
          className="transition-all duration-300 cursor-pointer origin-center"
          onMouseEnter={() => setHoveredSection('training')}
          onMouseLeave={() => setHoveredSection(null)}
        />
        <text x="200" y="275" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Hands-on</text>
        <text x="200" y="290" textAnchor="middle" fill="white" fontSize="12">Training & Development</text>
      </svg>
      
      {/* Interactive Label Tooltip (Optional, visualized by state) */}
      <div className={`absolute top-0 right-0 bg-white p-4 rounded-lg shadow-xl border border-gray-100 transition-opacity duration-300 pointer-events-none ${hoveredSection ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="font-bold text-slate-800 capitalize">{hoveredSection}</h3>
        <p className="text-xs text-slate-500 mt-1 max-w-[150px]">
          {hoveredSection === 'strategy' && "High-level guidance for enterprise growth."}
          {hoveredSection === 'solutions' && "Implementing AI tools to automate workflows."}
          {hoveredSection === 'training' && "Empowering teams with digital skills."}
        </p>
      </div>
    </div>
  );
};

export default TriangleFunnel;