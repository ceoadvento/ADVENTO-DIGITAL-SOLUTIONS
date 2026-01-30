import React from 'react';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp, AlertCircle, Zap, Search, Cpu, MessageSquare, TrendingUp, Code2, PenTool, BarChart4, Network, Globe2, Layers, Radar } from 'lucide-react';
import { SERVICE_DETAILS } from '../constants';

interface ServiceDetailProps {
  serviceId: string;
  onNavigate: (path: string) => void;
}

const ServiceVisual: React.FC<{ serviceId: string }> = ({ serviceId }) => {
  const renderGraphics = () => {
    switch (serviceId) {
      case 'seo':
        return (
          <div className="relative w-72 h-72 flex items-center justify-center">
             <div className="absolute inset-0 border-[1.5px] border-advento-500/20 rounded-full"></div>
             <div className="absolute inset-8 border-[1.5px] border-advento-500/10 rounded-full"></div>
             <div className="absolute inset-0 bg-advento-500/20 w-full h-1 origin-center animate-scan-beam blur-[2px]"></div>
             <div className="relative z-10 w-24 h-24 bg-white dark:bg-slate-900 border border-advento-500/30 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(1,217,255,0.2)]">
                <Search className="w-10 h-10 text-advento-500" />
             </div>
             {[...Array(5)].map((_, i) => (
                <div key={i} className="absolute w-2 h-2 bg-advento-secondary rounded-full animate-pulse" 
                     style={{ top: `${20 + i*15}%`, left: `${30 + (i%3)*20}%`, animationDelay: `${i*0.4}s` }}></div>
             ))}
          </div>
        );
      case 'consulting':
        return (
          <div className="relative w-72 h-72 flex items-center justify-center">
             <div className="absolute inset-0 border border-dashed border-advento-500/30 rounded-full animate-rotate-slow"></div>
             <div className="relative z-10 w-28 h-28 bg-advento-500/5 backdrop-blur-md rounded-[40px] border border-advento-500/40 flex items-center justify-center shadow-glow">
                <Network className="w-14 h-14 text-advento-500 animate-pulse-slow" />
             </div>
             {[0, 90, 180, 270].map((angle, i) => (
               <div key={i} className="absolute w-12 h-12 bg-white/5 border border-advento-500/20 rounded-xl flex items-center justify-center animate-float"
                    style={{ transform: `rotate(${angle}deg) translateY(-140px) rotate(-${angle}deg)`, animationDelay: `${i*0.5}s` }}>
                  <Cpu className="w-6 h-6 text-advento-400" />
               </div>
             ))}
          </div>
        );
      case 'social-media':
        return (
          <div className="relative w-72 h-72 flex items-center justify-center">
             <div className="absolute inset-0 border border-advento-500/20 rounded-full animate-ripple"></div>
             <div className="absolute inset-0 border border-advento-500/10 rounded-full animate-ripple [animation-delay:1.5s]"></div>
             <div className="absolute inset-0 border border-advento-500/5 rounded-full animate-ripple [animation-delay:3s]"></div>
             <div className="relative z-10 w-24 h-24 bg-white dark:bg-slate-900 border-2 border-advento-500/30 rounded-full flex items-center justify-center shadow-xl">
                <MessageSquare className="w-10 h-10 text-advento-500" />
             </div>
             <Globe2 className="absolute -top-4 -right-4 w-12 h-12 text-advento-secondary animate-float" />
          </div>
        );
      case 'ppc':
        return (
          <div className="relative w-72 h-72 flex items-end justify-center gap-3 pb-12 px-10">
             <div className="w-10 bg-advento-500/10 rounded-t-xl animate-grow-bar" style={{ animationDelay: '0s' }}></div>
             <div className="w-10 bg-advento-500/30 rounded-t-xl animate-grow-bar" style={{ animationDelay: '0.4s' }}></div>
             <div className="w-10 bg-advento-500/60 rounded-t-xl animate-grow-bar" style={{ animationDelay: '0.8s' }}></div>
             <div className="w-10 bg-advento-500 rounded-t-xl animate-grow-bar relative" style={{ animationDelay: '1.2s' }}>
                <TrendingUp className="absolute -top-12 left-1/2 -translate-x-1/2 w-8 h-8 text-advento-secondary" />
             </div>
             <div className="absolute top-10 left-10 w-20 h-20 border-2 border-advento-500/20 rounded-full animate-ping"></div>
          </div>
        );
      case 'web-dev':
        return (
          <div className="relative w-72 h-72 flex items-center justify-center">
             <div className="absolute w-48 h-48 border border-white/10 dark:border-white/5 rounded-[40px] -rotate-6"></div>
             <div className="absolute w-48 h-48 border border-white/20 dark:border-white/10 rounded-[40px] rotate-3 bg-white/5 backdrop-blur-sm"></div>
             <div className="relative z-10 w-48 h-48 bg-advento-950/20 border border-advento-500/40 rounded-[40px] flex items-center justify-center shadow-2xl animate-float">
                <Code2 className="w-16 h-16 text-advento-500" />
             </div>
             <div className="absolute -bottom-6 flex gap-2">
                <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
             </div>
          </div>
        );
      default:
        return (
          <div className="relative w-64 h-64 flex items-center justify-center">
            <div className="absolute inset-0 bg-advento-500/10 rounded-full animate-pulse-slow"></div>
            <Zap className="w-24 h-24 text-advento-500 animate-bounce" />
          </div>
        );
    }
  };

  return (
    <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
      {renderGraphics()}
      <div className="absolute w-[180%] h-[180%] bg-advento-500/[0.03] blur-[150px] rounded-full pointer-events-none"></div>
    </div>
  );
};

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId, onNavigate }) => {
  const service = SERVICE_DETAILS[serviceId];
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  if (!service) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center text-slate-900 dark:text-white">
        <h1 className="text-3xl font-black mb-6">Service Instance Not Found.</h1>
        <button onClick={() => onNavigate('/services')} className="px-10 py-4 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-full font-bold">Return to Stack</button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-transparent text-slate-900 dark:text-white pt-16 transition-colors duration-500">
      
      {/* Refined Hero Section */}
      <section className="relative py-20 lg:py-32 border-b border-slate-100 dark:border-white/5 overflow-hidden">
        <div className="corp-container relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             
             {/* Left Text Column */}
             <div className="space-y-10 order-2 lg:order-1">
               <div className="animate-fade-in-up">
                 <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/40 dark:bg-advento-500/10 text-advento-600 dark:text-advento-400 text-[11px] font-extrabold uppercase tracking-[0.25em] border border-advento-500/20 shadow-sm">
                   {service.title} Excellence
                 </div>
               </div>

               <h1 className="text-5xl md:text-7xl lg:text-[85px] font-extrabold mb-6 tracking-[-0.03em] text-slate-950 dark:text-white leading-[0.9] animate-reveal">
                 {service.subtitle.split('with').map((part, i) => (
                   <React.Fragment key={i}>
                     {i > 0 && <br className="hidden lg:block" />}
                     {i > 0 ? <span className="text-shimmer">with {part}</span> : part}
                   </React.Fragment>
                 ))}
               </h1>

               <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-12 font-medium leading-relaxed animate-fade-in-up [animation-delay:150ms]">
                 {service.description}
               </p>

               <div className="flex flex-wrap gap-6 animate-fade-in-up [animation-delay:300ms]">
                 <button 
                  onClick={() => onNavigate('/contact')} 
                  className="px-10 py-4 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-full font-bold text-lg shadow-xl flex items-center gap-4 hover:-translate-y-1 hover:bg-advento-500 hover:text-black transition-all group"
                 >
                   Initialize Pipeline <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                 </button>
                 <button className="px-8 py-4 bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-full font-bold text-base hover:border-advento-500 backdrop-blur-md transition-all">
                   Architecture View
                 </button>
               </div>
             </div>

             {/* Right Visual Column */}
             <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-up [animation-delay:200ms]">
                <ServiceVisual serviceId={serviceId} />
             </div>

           </div>
        </div>
      </section>

      {/* Problem / Solution Grid */}
      <section className="py-24 relative">
         <div className="corp-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="bento-card p-12 rounded-[48px] border-red-500/10 dark:border-red-900/10">
                  <div className="flex items-center gap-5 mb-8 text-red-600 dark:text-red-400 font-extrabold uppercase tracking-[0.3em] text-[10px]">
                     <AlertCircle className="w-5 h-5" /> Operational Friction
                  </div>
                  <p className="text-2xl text-slate-700 dark:text-slate-300 leading-relaxed font-bold">"{service.challenge}"</p>
               </div>
               <div className="bento-card p-12 rounded-[48px] border-advento-500/30">
                  <div className="flex items-center gap-5 mb-8 text-advento-600 dark:text-advento-400 font-extrabold uppercase tracking-[0.3em] text-[10px]">
                     <Zap className="w-5 h-5" /> Advento Resolution
                  </div>
                  <p className="text-2xl text-slate-950 dark:text-white leading-relaxed font-extrabold">"{service.solution}"</p>
               </div>
            </div>
         </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-32">
        <div className="corp-container">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
             
             {/* Left Column */}
             <div className="lg:col-span-8 space-y-32">
               
               {/* Deliverables */}
               <div>
                 <h2 className="text-4xl font-extrabold mb-12 flex items-center gap-8 text-slate-950 dark:text-white tracking-tight">
                   <div className="w-16 h-16 rounded-2xl bg-advento-500/10 flex items-center justify-center text-advento-500">
                     <service.icon className="w-8 h-8" />
                   </div>
                   Core Engine Modules
                 </h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {service.features.map((feature, idx) => (
                     <div key={idx} className="bento-card p-10 rounded-[40px] border-transparent hover:border-advento-500 transition-all">
                       <h3 className="font-extrabold text-xl text-slate-950 dark:text-white mb-4 tracking-tight">{feature.title}</h3>
                       <p className="text-slate-500 dark:text-slate-400 font-medium text-[15px] leading-relaxed">{feature.desc}</p>
                     </div>
                   ))}
                 </div>
               </div>

               {/* Process */}
               <div>
                  <h2 className="text-4xl font-extrabold mb-12 text-slate-950 dark:text-white tracking-tight">Deployment Cycle</h2>
                  <div className="space-y-12">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="flex gap-12 group">
                        <div className="w-16 h-16 rounded-[24px] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center shrink-0 text-advento-500 font-extrabold text-xl group-hover:bg-advento-500 group-hover:text-black transition-all">
                          {step.step}
                        </div>
                        <div className="pt-4 border-b border-slate-100 dark:border-white/5 pb-10 w-full">
                          <h3 className="text-2xl font-extrabold mb-3 text-slate-950 dark:text-white tracking-tight">{step.title}</h3>
                          <p className="text-slate-500 dark:text-slate-400 font-medium text-[16px] leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>

               {/* FAQs */}
               {service.faqs && (
                   <div>
                       <h2 className="text-4xl font-extrabold mb-12 text-slate-950 dark:text-white tracking-tight">Technical FAQs</h2>
                       <div className="space-y-6">
                           {service.faqs.map((faq, idx) => (
                               <div key={idx} className={`bento-card rounded-[32px] overflow-hidden ${openFaq === idx ? 'border-advento-500' : ''}`}>
                                   <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between p-8 text-left">
                                       <span className="font-extrabold text-lg text-slate-950 dark:text-white tracking-tight">{faq.question}</span>
                                       {openFaq === idx ? <ChevronUp className="w-5 h-5 text-advento-500" /> : <ChevronDown className="w-5 h-5 opacity-30" />}
                                   </button>
                                   {openFaq === idx && (
                                       <div className="p-8 pt-0 text-slate-600 dark:text-slate-300 text-base font-medium leading-relaxed border-t border-slate-100 dark:border-white/5 animate-fade-in-up">
                                           {faq.answer}
                                       </div>
                                   )}
                               </div>
                           ))}
                       </div>
                   </div>
               )}
             </div>

             {/* Right Column: Sticky Context */}
             <div className="lg:col-span-4">
                <div className="sticky top-24 space-y-10">
                   <div className="bento-card p-12 rounded-[56px] shadow-2xl border-transparent hover:border-advento-500 transition-colors">
                      <h3 className="text-2xl font-extrabold mb-10 text-slate-950 dark:text-white tracking-tight">Enterprise Perks</h3>
                      <ul className="space-y-6 mb-12">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-slate-800 dark:text-slate-200 font-bold text-base">
                            <CheckCircle2 className="w-6 h-6 text-advento-500 mr-5 shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <div className="p-8 bg-advento-500/10 rounded-[40px] border border-advento-500/20 mb-10">
                        <p className="text-base text-slate-800 dark:text-slate-200 italic font-bold leading-relaxed">"Advento refined our global digital genome. The ROI shift was immediate."</p>
                      </div>
                      <button onClick={() => onNavigate('/contact')} className="w-full py-6 bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-extrabold rounded-2xl text-xl hover:bg-advento-500 hover:text-black transition-all shadow-xl active:scale-95">
                        Initialize Pipeline
                      </button>
                      <p className="text-[10px] text-center text-slate-400 font-extrabold uppercase tracking-[0.4em] mt-6">Secure Portal Access Available</p>
                   </div>

                   <div className="bento-card p-10 rounded-[40px]">
                      <h4 className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-slate-500 mb-6">Stack Specs</h4>
                      <div className="flex flex-wrap gap-3">
                          {service.tools.map((tool, idx) => (
                              <span key={idx} className="px-4 py-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-[10px] font-extrabold text-slate-900 dark:text-slate-300 uppercase tracking-widest">
                                  {tool}
                              </span>
                          ))}
                      </div>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-48 bg-slate-950 dark:bg-white/5 backdrop-blur-3xl border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-6xl md:text-8xl font-extrabold mb-12 text-white leading-[0.85] tracking-tighter animate-reveal">Scale <span className="text-shimmer">Today.</span></h2>
          <button onClick={() => onNavigate('/contact')} className="px-16 py-8 bg-white dark:bg-slate-950 text-slate-950 dark:text-white rounded-full font-extrabold text-2xl hover:bg-advento-500 hover:text-black transition-all shadow-[0_0_50px_rgba(1,217,255,0.3)]">
            Connect with Architect
          </button>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetail;