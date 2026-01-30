import React from 'react';
import { Target, Lightbulb, Rocket } from 'lucide-react';
import { TEAM_MEMBERS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-transparent text-slate-900 dark:text-white pt-20 transition-colors duration-500">
      
      {/* Hero */}
      <section className="relative py-20 lg:py-40 border-b border-slate-100 dark:border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-advento-500/10 border border-advento-500/30 text-advento-600 dark:text-advento-400 text-xs font-black uppercase tracking-widest mb-10">
                 <Rocket className="w-5 h-5 mr-3" /> The Vision Engine
             </div>
             <h1 className="text-6xl md:text-[110px] font-black mb-10 tracking-tighter leading-[0.85] text-slate-950 dark:text-white">Redefining <br/> <span className="text-shimmer">Excellence.</span></h1>
             <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 max-w-4xl mx-auto font-semibold leading-relaxed">
                 Advento is the growth engine powered by <span className="text-advento-600">Artificial Intelligence</span> and high-fidelity human creativity.
             </p>
         </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 <div className="bento-card p-16 rounded-[64px] hover:border-advento-500 transition-all duration-700">
                     <div className="w-20 h-20 bg-red-500/10 rounded-[32px] flex items-center justify-center text-red-600 mb-10">
                         <Target className="w-10 h-10" />
                     </div>
                     <h2 className="text-4xl font-black mb-6 text-slate-950 dark:text-white">The Mission</h2>
                     <p className="text-2xl text-slate-700 dark:text-slate-400 font-bold leading-relaxed">
                         To empower enterprises with autonomous digital frameworks that bridge the gap between legacy operations and the AI revolution.
                     </p>
                 </div>
                 <div className="bento-card p-16 rounded-[64px] hover:border-advento-secondary transition-all duration-700">
                     <div className="w-20 h-20 bg-yellow-500/10 rounded-[32px] flex items-center justify-center text-yellow-600 mb-10">
                         <Lightbulb className="w-10 h-10" />
                     </div>
                     <h2 className="text-4xl font-black mb-6 text-slate-950 dark:text-white">The Vision</h2>
                     <p className="text-2xl text-slate-700 dark:text-slate-400 font-bold leading-relaxed">
                         To set the global standard for "AI-First" digital transformation, fostering a community of world-class, future-ready digital engineers.
                     </p>
                 </div>
             </div>
         </div>
      </section>

      {/* Team Section */}
      <section className="py-40 bg-slate-50/50 dark:bg-white/5 backdrop-blur-3xl border-y border-slate-100 dark:border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-24">
                 <h2 className="text-5xl md:text-7xl font-black mb-6 text-slate-950 dark:text-white">Leadership.</h2>
                 <p className="text-2xl text-slate-500 dark:text-slate-400 font-black uppercase tracking-widest">The Minds Behind The Engine</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                 {TEAM_MEMBERS.map((member) => (
                    <div key={member.id} className="group relative rounded-[56px] overflow-hidden bento-card border-0 hover:scale-[1.02] transition-all duration-700 shadow-2xl">
                        <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                            <img src={member.image} alt={member.name} onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0f172a&color=fff&size=512`; }} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-10">
                            <h3 className="text-3xl font-black text-white mb-1 tracking-tight">{member.name}</h3>
                            <p className="text-advento-500 text-sm font-black uppercase tracking-[0.2em] mb-6">{member.role}</p>
                            <p className="text-slate-300 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-700 line-clamp-3">
                                {member.bio}
                            </p>
                        </div>
                    </div>
                ))}
             </div>
         </div>
      </section>
    </div>
  );
};

export default About;