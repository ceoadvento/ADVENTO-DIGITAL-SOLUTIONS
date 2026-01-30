
import React, { useState, useEffect } from 'react';
// Added CheckCircle2 to the imports from lucide-react
import { Briefcase, MapPin, Clock, ArrowRight, Upload, DollarSign, Calendar, CheckCircle2 } from 'lucide-react';
import { JobListing } from '../types';
import { INITIAL_JOBS } from '../constants';

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [jobs, setJobs] = useState<JobListing[]>([]);

  useEffect(() => {
    const savedJobs = localStorage.getItem('advento_jobs');
    const allJobs = savedJobs ? JSON.parse(savedJobs) : INITIAL_JOBS;
    setJobs(allJobs.filter((j: JobListing) => j.isActive));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
  };

  const activeJobDetails = jobs.find(j => j.id === selectedJob);

  return (
    <div className="w-full min-h-screen bg-transparent text-slate-900 dark:text-white pt-20 transition-colors duration-500">
      
      {/* Careers Hero */}
      <section className="py-32 text-center relative overflow-hidden border-b border-slate-100 dark:border-white/5">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-advento-500/5 blur-[120px] rounded-full pointer-events-none"></div>
         <div className="relative z-10">
            <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter text-slate-950 dark:text-white">Join The <br/><span className="text-shimmer">Powerhouse.</span></h1>
            <p className="text-2xl text-slate-700 dark:text-slate-400 max-w-2xl mx-auto font-semibold leading-relaxed">We are building the elite tier of digital engineering. Are you ready to scale with us?</p>
         </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              
              {/* Job Engine */}
              <div className="lg:col-span-7 space-y-10">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-4xl font-black flex items-center gap-4 text-slate-950 dark:text-white tracking-tight">
                        <Briefcase className="w-10 h-10 text-advento-500" /> Global Roles
                    </h2>
                    <span className="px-5 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-black uppercase tracking-widest text-slate-500">
                        {jobs.length} Opportunities
                    </span>
                  </div>

                  {jobs.length === 0 ? (
                      <div className="bento-card p-20 rounded-[48px] text-center">
                          <p className="text-2xl font-black text-slate-400 uppercase tracking-[0.2em]">Transmission Quiet.</p>
                          <p className="text-slate-500 mt-4 font-bold">No active mandates currently. Connect later.</p>
                      </div>
                  ) : (
                      jobs.map((job) => (
                          <div 
                            key={job.id} 
                            onClick={() => setSelectedJob(job.id)}
                            className={`bento-card p-10 rounded-[48px] cursor-pointer transition-all group ${selectedJob === job.id ? 'border-advento-500 shadow-3xl scale-[1.02]' : 'hover:-translate-y-2'}`}
                          >
                              <div className="flex justify-between items-start">
                                  <div>
                                      <h3 className="text-3xl font-black text-slate-950 dark:text-white mb-4 group-hover:text-advento-500 transition-colors">{job.title}</h3>
                                      <div className="flex flex-wrap gap-6 text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                                          <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-advento-500" /> {job.location}</span>
                                          <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-advento-600" /> {job.type}</span>
                                          <span className="bg-slate-100 dark:bg-white/10 px-3 py-1 rounded-lg text-[10px] text-slate-950 dark:text-white border border-slate-200 dark:border-white/5">{job.experience} Required</span>
                                      </div>
                                  </div>
                                  <div className={`w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center transition-all ${selectedJob === job.id ? 'bg-advento-500 text-black rotate-90' : 'text-slate-400'}`}>
                                      <ArrowRight className="w-6 h-6" />
                                  </div>
                              </div>
                              {selectedJob === job.id && (
                                  <div className="mt-10 pt-10 border-t border-slate-100 dark:border-white/5 animate-fade-in-up">
                                      <p className="text-slate-700 dark:text-slate-300 text-lg font-bold leading-relaxed mb-8">{job.description}</p>
                                      <div className="flex flex-wrap gap-10">
                                          <div className="flex items-center gap-3 text-advento-600 dark:text-advento-400 font-black">
                                              <DollarSign className="w-5 h-5" /> {job.salaryRange}
                                          </div>
                                          <div className="flex items-center gap-3 text-slate-400 font-black">
                                              <Calendar className="w-5 h-5" /> Posted {job.postedDate}
                                          </div>
                                      </div>
                                  </div>
                              )}
                          </div>
                      ))
                  )}
              </div>

              {/* Application Form */}
              <div className="lg:col-span-5">
                  <div className="bento-card p-12 md:p-16 rounded-[56px] sticky top-32 shadow-4xl border-slate-200 dark:border-white/5">
                      <h3 className="text-3xl font-black mb-12 text-slate-950 dark:text-white tracking-tight">Application Portal</h3>
                      {selectedJob ? (
                          submitted ? (
                              <div className="py-20 text-center animate-fade-in-up">
                                  <div className="w-24 h-24 bg-advento-500/10 rounded-full flex items-center justify-center mx-auto mb-10 text-advento-500">
                                      {/* Correctly imported and used CheckCircle2 */}
                                      <CheckCircle2 className="w-16 h-16" />
                                  </div>
                                  <h4 className="text-3xl font-black text-slate-950 dark:text-white mb-4">Transmission Success.</h4>
                                  <p className="text-slate-600 dark:text-slate-400 text-lg font-semibold leading-relaxed">Our recruitment engine has received your profile for the <span className="text-advento-500 font-black">{activeJobDetails?.title}</span> position.</p>
                              </div>
                          ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="p-8 bg-advento-500/10 rounded-[32px] border border-advento-500/20 mb-10">
                                    <span className="text-[10px] text-advento-600 dark:text-advento-400 font-black uppercase tracking-widest mb-2 block">Mandate Selected</span>
                                    <p className="font-black text-slate-950 dark:text-white text-2xl tracking-tight">{activeJobDetails?.title}</p>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Full Identity</label>
                                    <input required type="text" placeholder="e.g. Paidakula Paramesh" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-950 dark:text-white focus:border-advento-500 outline-none font-bold" />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Contact Email</label>
                                    <input required type="email" placeholder="hello@advento.in" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-950 dark:text-white focus:border-advento-500 outline-none font-bold" />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Portfolio Link</label>
                                    <input required type="url" placeholder="https://linkedin.com/in/..." className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-950 dark:text-white focus:border-advento-500 outline-none font-bold" />
                                </div>
                                <div className="border-2 border-dashed border-slate-200 dark:border-white/10 rounded-3xl p-12 bg-slate-50 dark:bg-white/5 text-center cursor-pointer hover:border-advento-500 transition-all group">
                                    <Upload className="w-10 h-10 mx-auto mb-4 text-slate-300 group-hover:text-advento-500 transition-colors" />
                                    <span className="text-sm font-black text-slate-500 uppercase tracking-widest">Attach PDF Resume</span>
                                </div>
                                <button type="submit" className="w-full py-6 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-3xl font-black text-xl hover:bg-advento-500 hover:text-black transition-all shadow-3xl">
                                    Launch Application
                                </button>
                            </form>
                          )
                      ) : (
                          <div className="py-32 text-center text-slate-400 flex flex-col items-center">
                              <Briefcase className="w-20 h-20 mb-8 opacity-20 text-advento-500" />
                              <p className="text-xl font-bold mb-4 text-slate-600 dark:text-slate-400">Initialize Selection</p>
                              <p className="text-sm font-semibold max-w-[200px] leading-relaxed">Select an active mandate from the grid to open the secure portal.</p>
                          </div>
                      )}
                  </div>
              </div>

          </div>
      </div>
    </div>
  );
};

export default Careers;
