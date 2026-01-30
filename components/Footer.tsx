import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Rocket, Mail, Phone, Globe, ChevronRight, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface FooterProps {
  onNavigate: (path: string) => void;
  theme: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ onNavigate, theme }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 pt-28 pb-12 relative overflow-hidden transition-colors duration-500">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-advento-500/5 blur-[150px] rounded-full pointer-events-none -mb-64 -mr-64"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Vision */}
          <div className="lg:col-span-4 space-y-10">
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => onNavigate('/')}>
              <div className="flex items-center min-w-[180px] h-12">
                <img 
                  src={theme === 'light' ? './logo-black.png' : './logo-white.png'} 
                  alt="Advento" 
                  className="h-full w-auto object-contain transition-all duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">ADVENTO<span class="text-advento-500">.</span></span>`;
                  }}
                />
              </div>
            </div>
            <p className="text-slate-700 dark:text-slate-400 text-xl font-semibold leading-relaxed max-w-sm">
              Building the future of digital commerce through high-fidelity AI and precision marketing.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <button key={idx} className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-advento-500 hover:border-advento-500 transition-all">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-[0.3em] mb-10">Solutions</h4>
            <ul className="space-y-5">
              {[
                { label: 'AI Strategy', path: '/services/consulting' },
                { label: 'SEO Labs', path: '/services/seo' },
                { label: 'Growth Ads', path: '/services/ppc' },
                { label: 'Web Systems', path: '/services/web-dev' },
                { label: 'Content Hub', path: '/services/content' }
              ].map((link) => (
                <li key={link.label}>
                  <button onClick={() => onNavigate(link.path)} className="text-slate-600 dark:text-slate-400 hover:text-advento-500 font-bold transition-all flex items-center group text-lg">
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all mr-1" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-[0.3em] mb-10">Corporate</h4>
            <ul className="space-y-5">
              {[
                { label: 'Our Story', path: '/about' },
                { label: 'HQ Blog', path: '/blog' },
                { label: 'Careers', path: '/careers' },
                { label: 'Legal Center', path: '/legal/terms' },
                { label: 'MOU Docs', path: '/legal/contract' }
              ].map((link) => (
                <li key={link.label}>
                  <button onClick={() => onNavigate(link.path)} className="text-slate-600 dark:text-slate-400 hover:text-advento-500 font-bold transition-all flex items-center group text-lg">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-4 bg-slate-50 dark:bg-slate-900 p-10 rounded-[40px] border border-slate-100 dark:border-slate-800">
            <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-[0.3em] mb-10">Global Access</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-advento-500 border border-slate-100 dark:border-slate-700 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-1">Phone Inquiry</p>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-slate-950 dark:text-white font-black text-xl hover:text-advento-500 transition-colors">+91 {CONTACT_INFO.phone}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-advento-500 border border-slate-100 dark:border-slate-700 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-1">Corporate Email</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-950 dark:text-white font-black text-xl hover:text-advento-500 transition-colors">{CONTACT_INFO.email}</a>
                </div>
              </div>
              <button onClick={() => onNavigate('/contact')} className="w-full py-5 bg-slate-950 dark:bg-advento-500 text-white dark:text-slate-950 font-black rounded-2xl flex items-center justify-center gap-3 group">
                Strategic Discovery <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6 text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.4em]">
            <span>&copy; {currentYear} Advento Digital Group</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-2">Security Verified <Globe className="w-3 h-3" /></span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-[10px] font-black text-slate-500 dark:text-slate-500 uppercase tracking-widest">
            <button onClick={() => onNavigate('/legal/terms')} className="hover:text-advento-500 transition-colors">Terms</button>
            <button onClick={() => onNavigate('/legal/privacy')} className="hover:text-advento-500 transition-colors">Privacy</button>
            <button onClick={() => onNavigate('/legal/refund')} className="hover:text-advento-500 transition-colors">Refunds</button>
            <button onClick={() => onNavigate('/login')} className="hover:text-advento-500 transition-colors">Portal Login</button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;