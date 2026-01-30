import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: 'Digital Marketing Course',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
        setSubmitted(false);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', interest: 'Digital Marketing Course', message: '' });
    }, 5000);
  };

  return (
    <div className="w-full min-h-screen bg-transparent text-slate-900 dark:text-white pt-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        <div className="text-center mb-24 animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-slate-950 dark:text-white">Get in Touch.</h1>
            <p className="text-2xl text-slate-700 dark:text-slate-400 max-w-2xl mx-auto font-semibold leading-relaxed">Whether you're looking for enterprise consulting or career-changing training, our architects are ready.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
            {/* Form Section */}
            <div className="bento-card p-12 md:p-16 rounded-[56px] shadow-3xl">
                <h3 className="text-3xl font-black mb-12 text-slate-950 dark:text-white">Project Inquiry</h3>
                {submitted ? (
                    <div className="h-[500px] flex flex-col items-center justify-center text-center animate-fade-in-up">
                        <CheckCircle2 className="w-20 h-20 text-green-500 mb-8" />
                        <h4 className="text-4xl font-black text-slate-950 dark:text-white mb-4">Transmission Sent.</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-xl font-semibold">Thank you, {formData.firstName}. An analyst will contact you shortly.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">First Name</label>
                                <input name="firstName" value={formData.firstName} onChange={handleChange} required type="text" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-950 dark:text-white focus:border-advento-500 outline-none transition-all font-bold" placeholder="Paidakula" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Last Name</label>
                                <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-950 dark:text-white focus:border-advento-500 outline-none transition-all font-bold" placeholder="Paramesh" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Corporate Email</label>
                                <input name="email" value={formData.email} onChange={handleChange} required type="email" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-950 dark:text-white focus:border-advento-500 outline-none transition-all font-bold" placeholder="hello@advento.in" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Mobile</label>
                                <input name="phone" value={formData.phone} onChange={handleChange} required type="tel" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-950 dark:text-white focus:border-advento-500 outline-none transition-all font-bold" placeholder="+91 6366312856" />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Solution Interest</label>
                            <select name="interest" value={formData.interest} onChange={handleChange} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-950 dark:text-white focus:border-advento-500 outline-none transition-all font-bold appearance-none">
                                <option>Digital Marketing Course</option>
                                <option>AI Strategic Consulting</option>
                                <option>SEO Engine Optimization</option>
                                <option>Web Architecture</option>
                            </select>
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Requirements</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[32px] px-6 py-4 text-slate-950 dark:text-white focus:border-advento-500 outline-none transition-all font-bold resize-none" placeholder="Describe your growth targets..."></textarea>
                        </div>
                        <button type="submit" className="w-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black py-6 rounded-3xl text-xl hover:bg-advento-500 hover:text-black transition-all shadow-3xl flex items-center justify-center gap-4">
                            Send Transmission <Send className="w-6 h-6" />
                        </button>
                    </form>
                )}
            </div>

            {/* Info Section */}
            <div className="space-y-12">
                <div className="space-y-10">
                    <h3 className="text-3xl font-black text-slate-950 dark:text-white">Direct Connect</h3>
                    {[
                      { label: 'Hotline', value: CONTACT_INFO.phone, icon: Phone, prefix: '+91' },
                      { label: 'Corporate Mail', value: CONTACT_INFO.email, icon: Mail }
                    ].map((item, i) => (
                      <div key={i} className="bento-card p-10 rounded-[40px] flex items-start gap-8 group cursor-pointer hover:border-advento-500 transition-all">
                        <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-advento-500 border border-slate-200 dark:border-white/10 shrink-0 group-hover:scale-110 transition-transform">
                          <item.icon className="w-8 h-8" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{item.label}</p>
                            <p className="text-2xl font-black text-slate-950 dark:text-white">{item.prefix && <span className="text-advento-500 mr-2">{item.prefix}</span>}{item.value}</p>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="bento-card p-12 rounded-[48px]">
                    <h3 className="text-2xl font-black mb-8 text-slate-950 dark:text-white">Execution Steps</h3>
                    <div className="space-y-10">
                        {[
                          { step: '01', title: 'Data Discovery', desc: 'Analysis of your current digital metrics.' },
                          { step: '02', title: 'Architecture Planning', desc: 'Custom growth roadmap design.' },
                          { step: '03', title: 'Global Launch', desc: 'Campaign activation and scaling.' }
                        ].map((s, i) => (
                          <div key={i} className="flex gap-8 group">
                             <span className="text-3xl font-black text-slate-200 dark:text-white/10 group-hover:text-advento-500 transition-colors">{s.step}</span>
                             <div>
                               <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2">{s.title}</h4>
                               <p className="text-slate-600 dark:text-slate-400 font-bold">{s.desc}</p>
                             </div>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Global Hubs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {Object.values(CONTACT_INFO.locations).map((loc, i) => (
              <div key={i} className="bento-card rounded-[48px] overflow-hidden p-4 group">
                <div className="aspect-video w-full rounded-[36px] overflow-hidden mb-8 border border-slate-100 dark:border-white/5">
                    <iframe src={loc.mapUrl} width="100%" height="100%" style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.1)' }} allowFullScreen loading="lazy"></iframe>
                </div>
                <div className="px-6 pb-6">
                    <div className="flex items-center gap-4 mb-4">
                        <MapPin className="w-6 h-6 text-advento-500" />
                        <h4 className="text-2xl font-black text-slate-950 dark:text-white">{loc.title}</h4>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 font-bold leading-relaxed">{loc.address}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;