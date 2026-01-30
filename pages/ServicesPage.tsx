import React from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2, ArrowRight, Cpu, Sparkles } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full min-h-screen bg-transparent text-slate-900 pt-20">
      <section className="py-32 text-center relative overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-advento-600/5 blur-[120px] rounded-full pointer-events-none"></div>
         <div className="relative z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-advento-500/10 text-advento-600 text-xs font-black uppercase tracking-widest mb-8">
               <Sparkles className="w-4 h-4 mr-2" /> Precision Engineering
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-slate-950">Our Solutions.</h1>
            <p className="text-2xl text-slate-600 max-w-3xl mx-auto font-semibold leading-relaxed">
              Bespoke digital architecture designed to scale enterprises through <span className="text-advento-600">AI integration</span> and market performance.
            </p>
         </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        {SERVICES.map((service, index) => (
          <div 
            key={service.id} 
            id={service.id} 
            className="group bg-white/80 border border-slate-100 p-12 md:p-20 rounded-[56px] backdrop-blur-xl hover:bg-white hover:border-advento-500 transition-all duration-700 shadow-xl hover:shadow-4xl hover:-translate-y-4 cursor-pointer"
            onClick={() => onNavigate(service.link)}
          >
            <div className="flex flex-col md:flex-row gap-16 items-start">
               <div className="w-24 h-24 rounded-3xl bg-slate-50 flex items-center justify-center text-advento-500 shrink-0 border border-slate-100 group-hover:bg-advento-500 group-hover:text-black transition-all duration-500 shadow-sm">
                 <service.icon className="w-12 h-12" />
               </div>
               <div className="flex-grow">
                   <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
                       <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">{service.title}</h2>
                       <span className="text-[11px] font-black bg-advento-secondary/20 text-slate-900 px-4 py-1.5 rounded-full uppercase tracking-widest border border-advento-secondary/30">Tier 1 Strategy</span>
                   </div>
                   <p className="text-slate-600 text-2xl mb-12 leading-relaxed font-semibold">{service.description}</p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                       {[
                         "Cognitive AI Integration",
                         "Market Sentiment Data",
                         "Predictive ROI Analytics",
                         "Autonomous Deployment"
                       ].map((feat) => (
                         <div key={feat} className="flex items-center text-slate-900 font-bold text-lg">
                           <div className="w-6 h-6 rounded-full bg-advento-500/10 flex items-center justify-center mr-3 shrink-0">
                             <CheckCircle2 className="w-4 h-4 text-advento-500" />
                           </div>
                           {feat}
                         </div>
                       ))}
                   </div>
                   <button className="flex items-center gap-4 px-10 py-5 bg-slate-950 text-white rounded-full font-black text-lg hover:bg-advento-500 hover:text-black transition-all group shadow-2xl">
                       Explore Module <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
                   </button>
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* Corporate Callout */}
      <section className="py-40 bg-slate-50/50">
        <div className="max-w-5xl mx-auto px-4 text-center">
           <h2 className="text-5xl font-black mb-8 text-slate-950">Custom Enterprise Solutions?</h2>
           <p className="text-2xl text-slate-600 mb-12 font-semibold">Talk to our architects for a custom-built digital roadmap.</p>
           <button onClick={() => onNavigate('/contact')} className="px-14 py-6 bg-white border-2 border-slate-100 text-slate-950 rounded-full font-black text-xl hover:border-advento-500 transition-all shadow-xl hover:-translate-y-2">
             Book a Strategic Discovery
           </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;