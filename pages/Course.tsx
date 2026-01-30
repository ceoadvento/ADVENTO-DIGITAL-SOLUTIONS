import React, { useState } from 'react';
import { COURSE_MODULES } from '../constants';
import { ChevronDown, ChevronUp, Check, Clock, Star, Users, Briefcase, Zap, ShieldCheck, Sparkles } from 'lucide-react';
import CourseFunnel from '../components/CourseFunnel';

interface CourseProps {
  onNavigate: (path: string) => void;
}

const Course: React.FC<CourseProps> = ({ onNavigate }) => {
  const [activeModule, setActiveModule] = useState<number | null>(1);

  const toggleModule = (id: number) => {
    setActiveModule(activeModule === id ? null : id);
  };

  const PRICING_PLANS = [
    { 
      title: "Cohort Training", 
      price: "18,000", 
      tag: "Batch Entry",
      perks: ["Group Sessions", "Course Materials", "100% Placement Support", "Project Reviews"],
      support: "6 Months Support",
      icon: Users,
      color: "border-advento-500/20"
    },
    { 
      title: "One-to-One Training", 
      price: "24,000", 
      tag: "Personalized",
      perks: ["Private Mentorship", "Custom Schedule", "Advanced AI Projects", "LMS Full Access"],
      support: "6 Months Support",
      featured: true,
      icon: Zap,
      color: "border-advento-500"
    },
    { 
      title: "Corporate Training", 
      price: "30,000", 
      tag: "Business Tier",
      perks: ["Team Onboarding", "Custom Strategy", "ROI Tracking", "On-site / Virtual"],
      support: "6 Months Support",
      icon: Briefcase,
      color: "border-advento-secondary/30"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-transparent text-slate-900 dark:text-white pt-24 transition-colors duration-500">
      
      {/* Course Hero */}
      <section className="relative py-32 border-b border-slate-100 dark:border-white/5 overflow-hidden">
        <div className="corp-container relative z-10">
            <div className="flex flex-col lg:flex-row gap-24 items-center">
                <div className="lg:w-3/5 animate-fade-in-up">
                    <span className="inline-flex items-center px-6 py-2 rounded-full bg-advento-500/10 border border-advento-500/30 text-advento-500 font-black tracking-[0.3em] uppercase text-[10px] mb-10 shadow-[0_0_15px_rgba(1,217,255,0.1)]">
                        The Masterclass 2024
                    </span>
                    <h1 className="text-6xl lg:text-[100px] font-extrabold mb-10 leading-[0.85] tracking-tighter text-slate-950 dark:text-white animate-reveal">
                        Become an <br/> <span className="text-shimmer drop-shadow-[0_0_20px_rgba(1,217,255,0.2)]">AI Marketer.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-14 max-w-2xl leading-relaxed font-medium">
                        Don't just learn marketing; learn how to automate it. Master SEO, PPC, and Strategy powered by <span className="text-advento-500 font-black neon-text">Generative AI.</span>
                    </p>
                    
                    <div className="flex flex-wrap gap-6 mb-16">
                        {[
                          { label: '12 Weeks', icon: Clock },
                          { label: 'Job Assist', icon: Briefcase },
                          { label: '6 Months Support', icon: ShieldCheck }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-4 px-8 py-4 glass-nav neon-border rounded-2xl text-xs font-black text-slate-900 dark:text-slate-200 uppercase tracking-widest">
                             <item.icon className="w-5 h-5 text-advento-500" /> {item.label}
                          </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <button onClick={() => onNavigate('/contact')} className="px-12 py-6 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-full font-bold text-lg hover:bg-advento-500 hover:text-black transition-all shadow-2xl btn-neon">
                            Download Syllabus
                        </button>
                        <button onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})} className="px-12 py-6 glass-nav neon-border text-slate-950 dark:text-white rounded-full font-bold text-lg hover:border-advento-500 transition-all backdrop-blur-3xl">
                            <Sparkles className="w-5 h-5 mr-2 text-advento-500" /> Start Learning
                        </button>
                    </div>
                </div>
                <div className="lg:w-2/5 w-full">
                    <div className="aspect-[4/5] rounded-[64px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 relative overflow-hidden group shadow-4xl neon-border">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop" alt="Course" className="w-full h-full object-cover opacity-90 dark:opacity-60 group-hover:scale-105 transition-transform duration-[2s]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-transparent to-transparent"></div>
                        <div className="absolute bottom-10 left-10 right-10 p-8 bento-card rounded-[32px] neon-border">
                             <div className="flex items-center gap-1 mb-4">
                                 {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-advento-500 fill-advento-500" />)}
                             </div>
                             <p className="text-xl font-extrabold text-slate-950 dark:text-white leading-tight">"The AI modules are a total game changer."</p>
                             <p className="text-[11px] text-slate-500 mt-3 font-black uppercase tracking-[0.2em]">- Priya S, Alumni</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-40">
          <div className="corp-container">
              <h2 className="text-5xl md:text-7xl font-extrabold text-center mb-6 text-slate-950 dark:text-white tracking-tight">Invest in Your <span className="text-shimmer">Future.</span></h2>
              <p className="text-center text-slate-500 dark:text-slate-400 text-2xl font-medium mb-24">Precision training models designed for maximum impact.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
                  {PRICING_PLANS.map((plan, i) => (
                      <div 
                        key={i} 
                        className={`group bento-card p-14 rounded-[64px] relative flex flex-col transition-all duration-500 animate-fade-in-up hover:shadow-[0_0_50px_rgba(1,217,255,0.2)] hover:-translate-y-4 ${plan.featured ? 'scale-105 border-advento-500 shadow-4xl z-10' : 'border-white/10'}`}
                        style={{ animationDelay: `${i * 150}ms` }}
                      >
                          {plan.featured && (
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-advento-500 text-black text-[10px] font-black px-8 py-2.5 rounded-full uppercase tracking-[0.4em] shadow-xl whitespace-nowrap">
                              Recommended Architecture
                            </div>
                          )}
                          
                          <div className="mb-12 flex justify-between items-start">
                            <div className="w-20 h-20 rounded-[32px] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center text-advento-500 group-hover:bg-advento-500 group-hover:text-black transition-all">
                                <plan.icon className="w-10 h-10" />
                            </div>
                            <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{plan.tag}</span>
                          </div>

                          <h3 className="text-4xl font-extrabold text-slate-950 dark:text-white mb-3 tracking-tight">{plan.title}</h3>
                          <div className="flex items-end gap-2 mb-12">
                            <span className="text-6xl font-extrabold text-slate-950 dark:text-white tracking-tighter">₹{plan.price}</span>
                            <span className="text-slate-500 text-sm font-black pb-3 uppercase">/ Package</span>
                          </div>

                          <div className="p-5 bg-advento-500/5 rounded-2xl border border-advento-500/20 mb-12 flex items-center gap-4">
                             <ShieldCheck className="w-6 h-6 text-advento-500" />
                             <span className="text-sm font-black uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">{plan.support}</span>
                          </div>

                          <ul className="space-y-6 mb-20 flex-grow">
                              {plan.perks.map(p => (
                                <li key={p} className="flex items-center gap-5 text-slate-600 dark:text-slate-300 font-bold text-xl">
                                  <Check className="w-6 h-6 text-advento-500 shrink-0" /> {p}
                                </li>
                              ))}
                          </ul>

                          <button onClick={() => onNavigate('/contact')} className={`w-full py-7 rounded-[32px] font-bold text-2xl transition-all shadow-xl active:scale-95 btn-neon ${plan.featured ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:bg-advento-500 hover:text-black' : 'bg-slate-50 dark:bg-white/5 text-slate-950 dark:text-white border-2 border-transparent hover:border-advento-500'}`}>
                              Start Learning
                          </button>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Funnel Section */}
      <section className="py-40 border-t border-slate-100 dark:border-white/5">
        <div className="corp-container">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-24 text-center text-slate-950 dark:text-white tracking-tight">Career Path.</h2>
            <CourseFunnel />
        </div>
      </section>

    </div>
  );
};

export default Course;