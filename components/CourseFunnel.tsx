import React, { useState } from 'react';

const CourseFunnel: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<number | null>(null);

  const levels = [
    { 
      id: 4, 
      label: "Expert", 
      desc: "AI Strategy & Leadership", 
      detail: "Master complex AI integrations, lead marketing teams, and drive enterprise growth strategies.",
      color: "#a855f7" // Purple
    },
    { 
      id: 3, 
      label: "Advanced", 
      desc: "Data & Optimization", 
      detail: "Deep dive into programmatic ads, advanced analytics, CRO, and automation workflows.",
      color: "#3b82f6" // Blue
    },
    { 
      id: 2, 
      label: "Intermediate", 
      desc: "Execution & Management", 
      detail: "Running live campaigns, managing social communities, content creation, and SEO implementation.",
      color: "#06b6d4" // Cyan
    },
    { 
      id: 1, 
      label: "Beginner", 
      desc: "Foundations", 
      detail: "Understanding digital ecosystems, consumer psychology, market research, and basic tool proficiency.",
      color: "#0f766e" // Teal
    }
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl mx-auto p-4">
      {/* Visual Pyramid */}
      <div className="relative w-full max-w-md aspect-[1/0.9]">
        <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl overflow-visible">
           <defs>
             {levels.map((l) => (
               <linearGradient key={l.id} id={`grad-${l.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor={l.color} stopOpacity="0.8" />
                 <stop offset="100%" stopColor={l.color} stopOpacity="1" />
               </linearGradient>
             ))}
             <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
               <feGaussianBlur stdDeviation="5" result="blur" />
               <feComposite in="SourceGraphic" in2="blur" operator="over" />
             </filter>
           </defs>

           {/* Level 4 (Top) - Expert */}
           <g 
             transform={activeLevel === 4 ? "scale(1.05) translate(-10, -10)" : "scale(1)"} 
             className="transition-all duration-300 ease-out origin-center"
             onMouseEnter={() => setActiveLevel(4)}
             onMouseLeave={() => setActiveLevel(null)}
           >
             <path 
               d="M200 20 L245 110 L155 110 Z" 
               fill={`url(#grad-4)`}
               className={`cursor-pointer transition-opacity duration-300 ${activeLevel && activeLevel !== 4 ? 'opacity-40' : 'opacity-100'}`}
               filter={activeLevel === 4 ? "url(#glow)" : ""}
             />
             <text x="200" y="85" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14" className="pointer-events-none drop-shadow-md">Expert</text>
           </g>

           {/* Level 3 - Advanced */}
           <g 
             transform={activeLevel === 3 ? "scale(1.05) translate(-10, 0)" : "scale(1)"} 
             className="transition-all duration-300 ease-out origin-center"
             onMouseEnter={() => setActiveLevel(3)}
             onMouseLeave={() => setActiveLevel(null)}
           >
             <path 
               d="M155 115 L245 115 L290 205 L110 205 Z" 
               fill={`url(#grad-3)`}
               className={`cursor-pointer transition-opacity duration-300 ${activeLevel && activeLevel !== 3 ? 'opacity-40' : 'opacity-100'}`}
               filter={activeLevel === 3 ? "url(#glow)" : ""}
             />
             <text x="200" y="175" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14" className="pointer-events-none drop-shadow-md">Advanced</text>
           </g>

           {/* Level 2 - Intermediate */}
           <g 
             transform={activeLevel === 2 ? "scale(1.05) translate(-10, 0)" : "scale(1)"} 
             className="transition-all duration-300 ease-out origin-center"
             onMouseEnter={() => setActiveLevel(2)}
             onMouseLeave={() => setActiveLevel(null)}
           >
             <path 
               d="M110 210 L290 210 L335 300 L65 300 Z" 
               fill={`url(#grad-2)`}
               className={`cursor-pointer transition-opacity duration-300 ${activeLevel && activeLevel !== 2 ? 'opacity-40' : 'opacity-100'}`}
               filter={activeLevel === 2 ? "url(#glow)" : ""}
             />
             <text x="200" y="270" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14" className="pointer-events-none drop-shadow-md">Intermediate</text>
           </g>

           {/* Level 1 (Bottom) - Beginner */}
           <g 
             transform={activeLevel === 1 ? "scale(1.05) translate(-10, 10)" : "scale(1)"} 
             className="transition-all duration-300 ease-out origin-center"
             onMouseEnter={() => setActiveLevel(1)}
             onMouseLeave={() => setActiveLevel(null)}
           >
             <path 
               d="M65 305 L335 305 L380 395 L20 395 Z" 
               fill={`url(#grad-1)`}
               className={`cursor-pointer transition-opacity duration-300 ${activeLevel && activeLevel !== 1 ? 'opacity-40' : 'opacity-100'}`}
               filter={activeLevel === 1 ? "url(#glow)" : ""}
             />
             <text x="200" y="365" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14" className="pointer-events-none drop-shadow-md">Beginner</text>
           </g>
        </svg>
      </div>

      {/* Info Card */}
      <div className="w-full max-w-md min-h-[250px] flex items-center">
        {activeLevel ? (
           <div className="bg-white/5 border border-white/10 p-8 rounded-2xl w-full animate-fade-in-up shadow-2xl backdrop-blur-sm">
              <div className="text-sm font-bold tracking-widest uppercase mb-3 flex items-center gap-2" style={{ color: levels.find(l => l.id === activeLevel)?.color }}>
                <span className="w-2 h-2 rounded-full bg-current"></span>
                Level {activeLevel}
              </div>
              <h3 className="text-3xl font-bold mb-2 text-white">{levels.find(l => l.id === activeLevel)?.label}</h3>
              <h4 className="text-lg text-slate-300 mb-4">{levels.find(l => l.id === activeLevel)?.desc}</h4>
              <p className="text-slate-400 leading-relaxed">{levels.find(l => l.id === activeLevel)?.detail}</p>
           </div>
        ) : (
           <div className="text-center w-full text-slate-500 border-2 border-dashed border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center h-full">
              <div className="mb-4 text-4xl opacity-50">👆</div>
              <p className="text-lg font-medium">Hover over the pyramid to explore your learning path.</p>
           </div>
        )}
      </div>
    </div>
  );
};

export default CourseFunnel;