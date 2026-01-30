import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, ChevronDown, Sun, Moon, Sparkles } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  onNavigate: (path: string) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
    setActiveDropdown(null);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
  };

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    // Increased timeout to 350ms for a much more stable user experience
    timeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 350); 
  };

  const Logo = () => (
    <div className="flex items-center min-w-[160px] h-10">
      <img 
        src={theme === 'light' ? './logo-black.png' : './logo-white.png'} 
        alt="Advento" 
        className="h-full w-auto object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(1,217,255,0.4)]"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
          (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">ADVENTO<span class="text-advento-500 neon-text">.</span></span>`;
        }}
      />
    </div>
  );

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 flex justify-center ${scrolled ? 'pt-4' : 'pt-6'}`}>
      <nav className={`transition-all duration-500 flex items-center justify-between px-8 py-3 rounded-full ${scrolled ? 'glass-nav neon-border max-w-[95%] w-[1400px]' : 'bg-transparent w-full corp-container'}`}>
        
        <div className="flex items-center cursor-pointer group" onClick={() => handleNavClick('/')}>
          <Logo />
        </div>

        <div className="hidden md:flex items-center space-x-12">
          {NAV_ITEMS.map((item) => (
            <div 
              key={item.label} 
              className="relative group h-full flex items-center"
              onMouseEnter={() => item.subItems && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleNavClick(item.path)}
                className="flex items-center text-[11px] font-black text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-advento-400 transition-all py-2 uppercase tracking-[0.2em]"
              >
                {item.label}
                {item.subItems && <ChevronDown className={`w-3 h-3 ml-2 opacity-50 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
              </button>

              {item.subItems && activeDropdown === item.label && (
                <div 
                  className="absolute top-[calc(100%-10px)] -left-16 pt-[25px]" 
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-[600px] glass-nav neon-border rounded-[32px] p-8 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-3 duration-300 shadow-4xl">
                    {item.subItems.map((sub) => (
                      <div 
                        key={sub.label}
                        onClick={() => handleNavClick(sub.path)}
                        className="flex items-start p-4 rounded-[20px] hover:bg-advento-500/10 dark:hover:bg-advento-500/10 cursor-pointer transition-all group/item border border-transparent hover:border-advento-500/20"
                      >
                         <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mr-4 group-hover/item:bg-advento-500 group-hover/item:text-black transition-all">
                           {sub.icon ? <sub.icon className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                         </div>
                         <div>
                           <div className="text-[14px] font-black text-slate-900 dark:text-white group-hover/item:text-advento-500">{sub.label}</div>
                           <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-widest font-bold">{sub.desc}</div>
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="flex items-center space-x-6 pl-6 border-l border-slate-200 dark:border-white/10">
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-slate-500 dark:text-slate-400 hover:bg-advento-500/10 hover:text-advento-500 transition-all"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            
            <button 
              onClick={() => handleNavClick('/course')}
              className="group relative px-8 py-3 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-[11px] font-bold tracking-tight transition-all hover:bg-advento-500 hover:text-black hover:shadow-[0_0_20px_rgba(1,217,255,0.4)] btn-neon flex items-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-advento-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              <span className="relative z-10">Start Learning</span>
              <Sparkles className="relative z-10 w-3 h-3 group-hover:rotate-12" />
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <button onClick={() => setIsOpen(!isOpen)} className="p-3 text-slate-950 dark:text-white glass-nav rounded-full neon-border">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-3xl p-8 z-[60] animate-in fade-in slide-in-from-right duration-300">
          <div className="flex justify-between items-center mb-12">
            <Logo />
            <button onClick={() => setIsOpen(false)} className="p-3 bg-slate-100 dark:bg-white/5 rounded-full"><X className="w-6 h-6" /></button>
          </div>
          <div className="flex flex-col space-y-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <button onClick={() => handleNavClick(item.path)} className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                  {item.label}
                </button>
                {item.subItems && (
                  <div className="mt-4 pl-4 space-y-4 border-l border-slate-200 dark:border-white/10">
                    {item.subItems.map(sub => (
                      <button key={sub.label} onClick={() => handleNavClick(sub.path)} className="block text-slate-500 dark:text-slate-400 font-bold hover:text-advento-500">
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button onClick={() => handleNavClick('/course')} className="w-full py-5 bg-advento-500 text-black rounded-3xl font-bold text-xl tracking-tight shadow-2xl mt-12">
               Start Learning
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;