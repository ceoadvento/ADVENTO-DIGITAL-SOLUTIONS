import React from 'react';
import { ArrowRight, Cpu, Search, TrendingUp, Globe, Star, Zap, GraduationCap, Sparkles } from 'lucide-react';
import { STATS } from '../constants';
import TriangleFunnel from '../components/TriangleFunnel';
import CommunityGlimpse from '../components/CommunityGlimpse';

interface HomeProps {
  onNavigate: (path: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-transparent text-slate-900 dark:text-white transition-colors duration-500">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-advento-500/10 rounded-full blur-[140px] animate-float pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-advento-secondary/5 rounded-full blur-[120px] animate-float pointer-events-none" style={{animationDelay: '3s'}}></div>

        <div className="relative z-10 corp-container text-center">
            <div className="inline-flex items-center px-6 py-2 rounded-full border border-advento-500/30 bg-advento-500/10 text-advento-500 text-[11px] font-black uppercase tracking-[0.3em] mb-12 animate-fade-in-up shadow-[0_0_20px_rgba(1,217,255,0.1)]">
                <span className="relative flex h-2 w-2 mr-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-advento-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-advento-500"></span>
                </span>
                Intelligence-Led Digital Engineering
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[115px] font-extrabold tracking-[-0.04em] mb-10 leading-[0.85] text-slate-950 dark:text-white animate-reveal">
                Scale Beyond <br />
                <span className="text-shimmer drop-shadow-[0_0_20px_rgba(1,217,255,0.2)]">Human Limits.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-16 font-medium leading-[1.6] animate-fade-in-up [animation-delay:200ms]">
                Advento is the premium digital architect for global enterprises seeking <span className="text-advento-500 font-black neon-text">AI-driven dominance</span> and precision engineering.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up [animation-delay:400ms]">
                <button 
                  onClick={() => onNavigate('/contact')} 
                  className="group relative px-12 py-6 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-full font-bold text-xl hover:bg-advento-500 hover:text-black transition-all flex items-center gap-4 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_15px_40px_-10px_rgba(255,255,255,0.1)] hover:-translate-y-2 btn-neon"
                >
                    Initialize Discovery <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
                <button 
                  onClick={() => onNavigate('/course')} 
                  className="group px-12 py-6 glass-nav neon-border text-slate-950 dark:text-white rounded-full font-bold text-xl hover:border-advento-500 transition-all flex items-center gap-4 shadow-xl backdrop-blur-3xl hover:-translate-y-2"
                >
                    <Sparkles className="w-6 h-6 text-advento-500" /> Start Learning
                </button>
            </div>
        </div>
      </section>

      {/* Integration Tier */}
      <section className="py-32 relative overflow-hidden border-t border-slate-100 dark:border-white/5">
        <div className="corp-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="order-2 lg:order-1 relative">
                    <div className="bento-card p-12 rounded-[64px] shadow-4xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-advento-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        <TriangleFunnel />
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-slate-950 dark:text-white leading-tight">Unified <br/><span className="text-advento-500 neon-text">Intelligence.</span></h2>
                    <p className="text-slate-600 dark:text-slate-400 text-xl mb-14 font-medium leading-relaxed max-w-xl">
                        Precision-engineered frameworks that convert digital interactions into high-yield enterprise assets.
                    </p>
                    <div className="space-y-12">
                        {[
                          { title: "Market Sovereignty", desc: "Data-led frameworks that position your brand as the industry authority.", icon: Globe, color: "text-advento-500", bg: "bg-advento-500/10" },
                          { title: "Autonomous Ops", desc: "Custom AI agents that handle engagement 24/7 with zero downtime.", icon: Cpu, color: "text-advento-600", bg: "bg-advento-secondary/15" },
                          { title: "Precision Training", desc: "Upskilling your workforce into a specialized digital powerhouse.", icon: TrendingUp, color: "text-slate-950 dark:text-white", bg: "bg-slate-200 dark:bg-slate-800" }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-8 group cursor-default">
                            <div className={`w-20 h-20 rounded-[28px] ${item.bg} flex items-center justify-center shrink-0 ${item.color} group-hover:scale-110 transition-all border border-transparent group-hover:border-advento-500/30 shadow-inner`}>
                                <item.icon className="w-10 h-10" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-black text-slate-950 dark:text-white mb-2">{item.title}</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-[16px] leading-relaxed font-medium">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Bento Grid Solutions */}
      <section className="py-40 bg-slate-50/40 dark:bg-slate-950/20 backdrop-blur-3xl border-y border-slate-100 dark:border-white/5">
        <div className="corp-container">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div className="max-w-2xl">
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-950 dark:text-white tracking-tight leading-tight">The SaaS Engine.</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-xl font-medium">Modular digital architecture for the modern economy.</p>
                </div>
                <button onClick={() => onNavigate('/services')} className="group flex items-center gap-4 text-xs font-black text-slate-950 dark:text-white hover:text-advento-500 transition-all uppercase tracking-[0.3em]">
                  Full Stack Modules <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[450px]">
                {/* AI Consulting */}
                <div className="md:col-span-8 bento-card rounded-[64px] p-16 relative overflow-hidden group cursor-pointer" onClick={() => onNavigate('/services/consulting')}>
                    <div className="absolute -top-10 -right-10 opacity-[0.05] dark:opacity-[0.1] group-hover:scale-105 transition-transform duration-[2s] pointer-events-none">
                        <Cpu className="w-[500px] h-[500px] text-advento-500" strokeWidth={1} />
                    </div>
                    <div className="h-full flex flex-col justify-end relative z-10">
                        <div className="inline-flex px-5 py-2 rounded-full bg-advento-500/10 dark:bg-advento-500/20 border border-advento-500/30 text-advento-500 text-[10px] font-black uppercase tracking-[0.4em] mb-10 w-fit neon-border">
                            Premium Module
                        </div>
                        <h3 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-950 dark:text-white leading-tight tracking-tight">AI Strategy <br/> & Migration</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-xl max-w-xl font-medium leading-relaxed">Generative agents that automate high-complexity marketing workflows with precision.</p>
                    </div>
                </div>

                {/* SEO Labs */}
                <div className="md:col-span-4 bento-card rounded-[64px] p-12 relative overflow-hidden group cursor-pointer" onClick={() => onNavigate('/services/seo')}>
                    <div className="absolute -right-20 -top-10 opacity-[0.05] dark:opacity-[0.1] group-hover:-rotate-6 transition-transform duration-[2s] pointer-events-none">
                        <Search className="w-80 h-80 text-advento-500" strokeWidth={1} />
                    </div>
                    <div className="h-full flex flex-col justify-end relative z-10">
                        <h3 className="text-4xl font-extrabold mb-6 text-slate-950 dark:text-white tracking-tight leading-tight">Semantic <br/> SEO Labs</h3>
                        <p className="text-slate-500 dark:text-slate-400 font-medium text-[16px] leading-relaxed">Dominating search graphs through deep latent indexing.</p>
                    </div>
                </div>

                {/* Academy */}
                <div className="md:col-span-5 bento-card rounded-[64px] p-16 relative overflow-hidden group cursor-pointer border-advento-500/20 shadow-[0_0_50px_rgba(1,217,255,0.08)]" onClick={() => onNavigate('/course')}>
                    <div className="absolute -bottom-20 -right-20 opacity-[0.05] dark:opacity-[0.1] group-hover:-translate-y-6 transition-transform duration-[2s] pointer-events-none">
                        <GraduationCap className="w-[450px] h-[450px] text-advento-500" strokeWidth={0.5} />
                    </div>
                    <div className="h-full flex flex-col justify-end relative z-10">
                        <h3 className="text-4xl font-extrabold mb-4 text-slate-950 dark:text-white tracking-tight">The Academy</h3>
                        <p className="text-slate-500 dark:text-slate-400 font-medium text-lg leading-relaxed">Professional certification for high-impact careers.</p>
                        <div className="mt-8 flex items-center gap-3 text-advento-500 font-black text-xs uppercase tracking-widest">
                           Enter Module <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>
                </div>

                {/* Performance Ads */}
                <div className="md:col-span-7 bento-card rounded-[64px] p-16 relative overflow-hidden group cursor-pointer" onClick={() => onNavigate('/services/ppc')}>
                    <div className="absolute -top-10 -left-10 opacity-[0.05] dark:opacity-[0.1] group-hover:scale-105 transition-transform duration-[2s] pointer-events-none">
                        <TrendingUp className="w-[500px] h-[500px] text-advento-500" strokeWidth={0.5} />
                    </div>
                    <div className="h-full flex flex-col justify-end relative z-10">
                        <div className="inline-flex px-6 py-2.5 rounded-full bg-advento-secondary text-black text-[10px] font-black uppercase tracking-[0.4em] mb-10 w-fit shadow-[0_10px_30px_rgba(193,255,114,0.3)]">
                            High-Yield ROI
                        </div>
                        <h3 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-950 dark:text-white tracking-tight leading-tight">Performance Marketing</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-xl max-w-xl font-medium leading-relaxed">Autonomous ad bidding powered by multi-variate predictive scoring.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 relative overflow-hidden">
         <div className="corp-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
                {STATS.map((stat, idx) => (
                    <div key={idx} className="text-center group">
                        <div className="text-7xl md:text-8xl font-extrabold text-slate-950 dark:text-white mb-6 tracking-tighter group-hover:neon-text transition-all duration-500">
                          {stat.value}<span className="text-advento-500">{stat.suffix}</span>
                        </div>
                        <div className="text-[12px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.5em]">{stat.label}</div>
                    </div>
                ))}
            </div>
         </div>
      </section>

      <CommunityGlimpse onNavigate={onNavigate} />

      {/* Call to Action */}
      <section className="py-64 relative text-center overflow-hidden">
        <div className="absolute inset-0 bg-advento-500/[0.02] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
            <h2 className="text-6xl md:text-[110px] font-extrabold mb-16 tracking-tighter text-slate-950 dark:text-white leading-[0.8] animate-reveal">Ready to <br/><span className="text-shimmer drop-shadow-[0_0_20px_rgba(1,217,255,0.2)]">Elevate?</span></h2>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <button onClick={() => onNavigate('/contact')} className="group px-16 py-8 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-full font-bold text-2xl hover:scale-105 transition-all shadow-4xl btn-neon">
                    Consult Architect
                </button>
                <button onClick={() => onNavigate('/course')} className="group px-16 py-8 glass-nav neon-border text-slate-950 dark:text-white rounded-full font-bold text-2xl hover:border-advento-500 transition-all backdrop-blur-3xl shadow-xl">
                    Start Learning
                </button>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Home;