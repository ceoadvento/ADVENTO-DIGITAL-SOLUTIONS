import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ChevronRight, Bot, RefreshCcw, CheckCircle2, Sparkles, AudioWaveform } from 'lucide-react';

type Message = {
  type: 'bot' | 'user';
  text: string;
  options?: string[];
  isFinal?: boolean;
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0); 
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', text: 'Welcome to the Advento Engineering Hub. I am the Lead Architect. To begin your migration, what is your full name?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '', location: '', intentType: '', specificInterest: '' });
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, isOpen]);

  // High-Tech Sound Synthesis
  const playSound = (type: 'open' | 'send' | 'receive' | 'typing') => {
    if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') ctx.resume();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    switch (type) {
        case 'open':
            osc.type = 'sine';
            osc.frequency.setValueAtTime(440, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.2);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
            break;
        case 'send':
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(600, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.05, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
            break;
        case 'receive':
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.08, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
            break;
        case 'typing':
            osc.type = 'square';
            osc.frequency.setValueAtTime(150, ctx.currentTime);
            gain.gain.setValueAtTime(0.02, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
            break;
    }

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.3);
  };

  const handleToggle = () => {
    if (!isOpen) playSound('open');
    setIsOpen(!isOpen);
  };

  const validatePhone = (phone: string) => /^[6-9]\d{9}$/.test(phone.replace(/\D/g, ''));

  const handleSend = (text: string = inputValue) => {
    if (!text.trim()) return;
    playSound('send');
    const userMsg: Message = { type: 'user', text: text };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      playSound('receive');
      processStep(text, step);
    }, 1200);
  };

  const processStep = (input: string, currentStep: number) => {
    let nextMsg: Message = { type: 'bot', text: '' };
    let nextStep = currentStep;

    switch (currentStep) {
      case 0:
        if (input.trim().length < 3) {
            nextMsg = { type: 'bot', text: "Please provide your full legal name for our records." };
        } else {
            setFormData(prev => ({ ...prev, name: input }));
            nextMsg = { type: 'bot', text: `Acknowledged, ${input.split(' ')[0]}. What is your 10-digit secure mobile number?` };
            nextStep = 1;
        }
        break;
      case 1:
        const cleanedPhone = input.replace(/\D/g, '');
        if (!validatePhone(cleanedPhone)) {
            nextMsg = { type: 'bot', text: "Invalid format. Please enter a valid 10-digit Indian mobile number." };
        } else {
            setFormData(prev => ({ ...prev, phone: cleanedPhone }));
            nextMsg = { type: 'bot', text: "Select your preferred center for this engagement:", options: ["Mancherial", "Karimnagar", "Online"] };
            nextStep = 2;
        }
        break;
      case 2:
        setFormData(prev => ({ ...prev, location: input }));
        nextMsg = { type: 'bot', text: "Are you seeking Professional Training or Enterprise Services?", options: ["Professional Training", "Enterprise Services"] };
        nextStep = 3;
        break;
      case 3:
        setFormData(prev => ({ ...prev, intentType: input }));
        nextMsg = input === "Professional Training" 
            ? { type: 'bot', text: "Choose your specialization module:", options: ["AI Marketing", "SEO Labs", "Performance Ads", "Web Architecture"] }
            : { type: 'bot', text: "Choose your corporate solution:", options: ["AI Strategy", "SEO Growth", "Lead Engine", "Web Dev"] };
        nextStep = 4;
        break;
      case 4:
        nextMsg = { type: 'bot', text: `Protocol Complete. Your interest in ${input} has been registered. An architect will contact you within 24 hours.`, isFinal: true };
        nextStep = 5;
        break;
      default:
        nextMsg = { type: 'bot', text: "Systems idle. Restart protocol?", options: ["Restart Protocol"] };
        if (input === "Restart Protocol") { setStep(0); setMessages([{ type: 'bot', text: "Re-initializing. Name please?" }]); return; }
    }
    setMessages(prev => [...prev, nextMsg]);
    setStep(nextStep);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      
      {isOpen && (
        <div className="mb-6 w-[380px] md:w-[420px] h-[650px] bg-slate-950 border border-advento-500/30 rounded-[48px] shadow-[0_0_50px_rgba(1,217,255,0.15)] flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-12 duration-500 backdrop-blur-3xl relative">
          {/* Matrix Decor */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden text-[10px] font-mono leading-none break-all text-advento-500 select-none">
             {Array(50).fill("ADVENTO_CORE_PROTOCOL_0101").join(" ")}
          </div>
          
          <div className="bg-gradient-to-br from-advento-600 to-advento-400 p-8 flex justify-between items-center relative z-10">
             <div className="flex items-center gap-4">
               <div className="w-14 h-14 bg-white/10 backdrop-blur-2xl rounded-2xl flex items-center justify-center border border-white/20 shadow-xl">
                 <Bot className="w-8 h-8 text-white animate-pulse" />
               </div>
               <div>
                 <h3 className="font-black text-white text-lg tracking-tight">Advento Architect</h3>
                 <div className="flex items-center gap-2 mt-1">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
                    </span>
                    <span className="text-[10px] text-white/90 font-black uppercase tracking-[0.2em]">Live System</span>
                 </div>
               </div>
             </div>
             <button onClick={() => setIsOpen(false)} className="p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-2xl transition-all">
                <X className="w-6 h-6" />
             </button>
          </div>

          <div className="flex-grow p-8 overflow-y-auto space-y-8 bg-slate-950/40 relative z-10" ref={scrollRef}>
             {messages.map((msg, idx) => (
               <div key={idx} className={`flex flex-col space-y-4 ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[85%] p-5 rounded-[28px] text-[15px] leading-relaxed shadow-lg transition-all animate-in slide-in-from-bottom-2 duration-500 ${
                      msg.type === 'user' 
                      ? 'bg-advento-500 text-black font-black rounded-tr-none' 
                      : 'bg-white/5 text-slate-100 rounded-tl-none border border-white/10'
                    }`}>
                    {msg.text}
                  </div>
                  
                  {msg.options && (
                      <div className="flex flex-col gap-3 w-full max-w-[90%]">
                          {msg.options.map((opt, i) => (
                              <button 
                                key={i}
                                onClick={() => { playSound('typing'); handleSend(opt); }}
                                disabled={idx !== messages.length - 1} 
                                className="w-full text-left px-6 py-4 bg-white/5 border border-advento-500/20 text-white text-sm font-black rounded-2xl hover:bg-advento-500 hover:text-black hover:border-advento-500 transition-all active:scale-95 group flex items-center justify-between"
                                style={{ animationDelay: `${i * 100}ms` }}
                              >
                                {opt} <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </button>
                          ))}
                      </div>
                  )}
               </div>
             ))}
             
             {isTyping && (
               <div className="flex justify-start">
                 <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-[24px] rounded-tl-none flex gap-2 items-center h-12">
                   <div className="w-2 h-2 bg-advento-500 rounded-full animate-bounce"></div>
                   <div className="w-2 h-2 bg-advento-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                   <div className="w-2 h-2 bg-advento-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                 </div>
               </div>
             )}
          </div>

          <div className="p-8 border-t border-white/10 bg-slate-900/60 backdrop-blur-2xl relative z-10">
             {step < 5 ? (
               <div className="relative">
                 <input 
                   type="text" 
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
                   onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                   placeholder="System Response..."
                   className="w-full bg-white/5 border border-white/10 rounded-2xl pl-8 pr-16 py-5 text-white text-[15px] focus:outline-none focus:border-advento-500 focus:bg-white/10 transition-all placeholder:text-slate-700 font-bold"
                   autoFocus
                 />
                 <button 
                    onClick={() => handleSend()} 
                    className="absolute right-2 top-2 w-12 h-12 bg-advento-500 rounded-xl flex items-center justify-center hover:bg-white text-black transition-all shadow-xl active:scale-90"
                 >
                   <Send className="w-5 h-5" />
                 </button>
               </div>
             ) : (
               <div className="space-y-4">
                 <div className="flex items-center justify-center gap-4 text-green-400 text-sm font-black uppercase tracking-[0.3em] bg-green-400/10 py-5 rounded-2xl border border-green-400/20 neon-text">
                    <CheckCircle2 className="w-6 h-6" /> Transmission Success
                 </div>
                 <button 
                  onClick={() => { setStep(0); setMessages([{ type: 'bot', text: 'Re-initializing. What is your full name?' }]); }}
                  className="w-full py-5 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-white transition-all text-xs font-black uppercase tracking-widest flex items-center justify-center gap-3"
                 >
                   <RefreshCcw className="w-4 h-4" /> Reset Portal
                 </button>
               </div>
             )}
          </div>
        </div>
      )}

      <div className="relative group">
        {!isOpen && (
            <div className="absolute -top-1 -right-1 z-[110]">
                <span className="relative flex h-6 w-6">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-6 w-6 bg-green-600 border-4 border-slate-950 shadow-[0_0_15px_#16a34a]"></span>
                </span>
            </div>
        )}

        <button 
            onClick={handleToggle}
            className={`w-24 h-24 rounded-[36px] bg-slate-950 border-2 border-white/10 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.6)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-500 group relative overflow-hidden neon-border ${isOpen ? 'rotate-90' : ''}`}
        >
            <div className={`absolute inset-0 bg-gradient-to-tr from-advento-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            {isOpen ? <X className="w-10 h-10 text-white relative z-10" /> : <AudioWaveform className="w-12 h-12 text-white group-hover:text-advento-500 transition-all relative z-10" />}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;