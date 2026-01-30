import React from 'react';
import { Users, MessageCircle, Heart, ShieldCheck } from 'lucide-react';
import { MOCK_COMMUNITY_POSTS } from '../constants';

interface CommunityGlimpseProps {
  onNavigate: (path: string) => void;
}

const CommunityGlimpse: React.FC<CommunityGlimpseProps> = ({ onNavigate }) => {
  return (
    <div className="w-full border-y border-slate-100 dark:border-slate-800 py-32 relative overflow-hidden transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-advento-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-advento-500/30 bg-advento-500/10 text-advento-600 dark:text-advento-400 text-[10px] font-black uppercase tracking-widest mb-8">
               <Users className="w-4 h-4 mr-2" /> Advento Circle
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-950 dark:text-white mb-8 tracking-tight">Join India's Fastest Growing Community</h2>
            <p className="text-slate-700 dark:text-slate-400 text-2xl mb-12 font-semibold leading-relaxed">
              Connect with 2,500+ alumni, get mentored by experts, and share your growth milestones in a high-performance network.
            </p>
            <ul className="space-y-6 mb-12">
              {[
                { label: 'Verified Alumni & Mentor Profiles', icon: ShieldCheck, color: 'text-green-500', bg: 'bg-green-500/10' },
                { label: 'Fortune 500 Hiring Network', icon: Users, color: 'text-advento-500', bg: 'bg-advento-500/10' },
                { label: 'Collaborative Growth Labs', icon: Heart, color: 'text-pink-500', bg: 'bg-pink-500/10' }
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-900 dark:text-white font-bold text-xl">
                  <div className={`w-8 h-8 rounded-full ${item.bg} flex items-center justify-center mr-4`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  {item.label}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => onNavigate('/community')}
              className="px-12 py-5 bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black text-xl rounded-full hover:scale-105 active:scale-95 transition-all shadow-2xl"
            >
              Enter The Circle
            </button>
          </div>

          {/* Cards Preview */}
          <div className="lg:w-1/2 relative">
             <div className="absolute -inset-10 bg-gradient-to-tr from-advento-600/10 to-advento-secondary/10 rounded-full blur-[80px] opacity-60"></div>
             <div className="relative space-y-8 scale-110">
                {/* Mock Card */}
                <div className="bento-card p-10 rounded-[48px] shadow-3xl transform rotate-2 hover:rotate-0 transition-all duration-700 cursor-pointer">
                   <div className="flex items-center gap-5 mb-8">
                     <img src={MOCK_COMMUNITY_POSTS[0].user.avatar} alt="User" className="w-16 h-16 rounded-2xl border-2 border-slate-50 dark:border-slate-800 shadow-md" />
                     <div>
                       <h4 className="font-black text-slate-950 dark:text-white text-xl flex items-center gap-2">
                         {MOCK_COMMUNITY_POSTS[0].user.name} 
                         <ShieldCheck className="w-5 h-5 text-advento-500" />
                       </h4>
                       <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{MOCK_COMMUNITY_POSTS[0].user.role}</p>
                     </div>
                   </div>
                   <p className="text-slate-800 dark:text-slate-200 text-xl font-bold mb-8 leading-relaxed line-clamp-2 italic">
                     "{MOCK_COMMUNITY_POSTS[0].content}"
                   </p>
                   <div className="flex items-center gap-10 text-slate-400 font-black text-xs uppercase tracking-widest">
                     <span className="flex items-center gap-2 text-pink-500"><Heart className="w-5 h-5 fill-current" /> {MOCK_COMMUNITY_POSTS[0].likes}</span>
                     <span className="flex items-center gap-2"><MessageCircle className="w-5 h-5" /> {MOCK_COMMUNITY_POSTS[0].comments.length} Comments</span>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CommunityGlimpse;