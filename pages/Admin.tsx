import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Users, MessageSquare, Trash2, Check, X, LogOut, FileText, Plus, Eye, Edit2, Briefcase, ToggleLeft, ToggleRight, Save, Image as ImageIcon, Globe, Send, AlertTriangle, Tag, BarChart3, TrendingUp, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { MOCK_COMMUNITY_POSTS, INITIAL_BLOGS, INITIAL_JOBS } from '../constants';
import { BlogPost, JobListing } from '../types';

interface AdminProps {
    onLogout: () => void;
    onNavigate: (path: string) => void;
}

const Admin: React.FC<AdminProps> = ({ onLogout, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'hiring' | 'community' | 'blog' | 'dashboard'>('dashboard');
  
  // --- Data Management ---
  const [applications, setApplications] = useState([
      { id: 1, name: "Rahul Verma", role: "Senior SEO Specialist", email: "rahul@gmail.com", date: "2024-03-10", status: 'Pending' },
      { id: 2, name: "Sneha Gupta", role: "Content Writer", email: "sneha@yahoo.com", date: "2024-03-11", status: 'Pending' },
      { id: 3, name: "Vikram Kumar", role: "Web Dev", email: "vik@dev.com", date: "2024-03-12", status: 'Approved' },
  ]);

  const [posts, setPosts] = useState(MOCK_COMMUNITY_POSTS);

  const [jobs, setJobs] = useState<JobListing[]>(() => {
    const saved = localStorage.getItem('advento_jobs');
    return saved ? JSON.parse(saved) : INITIAL_JOBS;
  });

  const [blogs, setBlogs] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('advento_blogs');
    const loaded = saved ? JSON.parse(saved) : INITIAL_BLOGS;
    return loaded.sort((a: BlogPost, b: BlogPost) => new Date(b.date).getTime() - new Date(a.date).getTime());
  });

  useEffect(() => { localStorage.setItem('advento_jobs', JSON.stringify(jobs)); }, [jobs]);
  useEffect(() => { localStorage.setItem('advento_blogs', JSON.stringify(blogs)); }, [blogs]);

  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [newJob, setNewJob] = useState<Partial<JobListing>>({ isActive: true });
  
  const [isBlogEditorOpen, setIsBlogEditorOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Partial<BlogPost> | null>(null);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  // --- Handlers ---
  const handleDeletePost = (id: string) => {
      if(confirm('Delete community post?')) setPosts(posts.filter(p => p.id !== id));
  };

  const handleApproveApp = (id: number) => {
      setApplications(applications.map(app => app.id === id ? { ...app, status: 'Approved' } : app));
  };
  const handleRejectApp = (id: number) => {
      setApplications(applications.map(app => app.id === id ? { ...app, status: 'Rejected' } : app));
  };
  const handleDeleteApp = (id: number) => {
      if(confirm('Delete application?')) setApplications(applications.filter(app => app.id !== id));
  };

  const handleToggleJob = (id: number) => {
      setJobs(jobs.map(j => j.id === id ? { ...j, isActive: !j.isActive } : j));
  };
  const handleDeleteJob = (id: number) => {
      if(confirm('Delete job post?')) setJobs(jobs.filter(j => j.id !== id));
  };
  const saveJob = () => {
      if(!newJob.title) return alert("Title is required");
      const job: JobListing = {
          id: Date.now(),
          title: newJob.title!,
          description: newJob.description || '',
          location: newJob.location || 'Remote',
          type: newJob.type || 'Full-time',
          salaryRange: newJob.salaryRange || 'Not Disclosed',
          openings: newJob.openings || 1,
          isActive: true,
          postedDate: new Date().toISOString().split('T')[0],
          experience: newJob.experience || 'Fresher'
      };
      setJobs([job, ...jobs]);
      setIsJobModalOpen(false);
  };

  const handleEditBlog = (blog?: BlogPost) => {
      setSaveStatus(null);
      setEditingBlog(blog ? { ...blog } : { status: 'Draft', date: new Date().toISOString().split('T')[0], category: 'General', seo: { metaTitle: '', metaDescription: '', keywords: '' } });
      setIsBlogEditorOpen(true);
  };
  
  const saveBlog = (status: 'Published' | 'Draft') => {
      if(!editingBlog?.title) return setSaveStatus("Error: Title required");
      const slug = editingBlog.slug || editingBlog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const newPost: BlogPost = {
          ...editingBlog as BlogPost,
          id: editingBlog.id || Date.now(),
          slug: slug,
          status: status
      };
      setBlogs(editingBlog.id ? blogs.map(b => b.id === editingBlog.id ? newPost : b) : [newPost, ...blogs]);
      setSaveStatus("Success!");
      setTimeout(() => setIsBlogEditorOpen(false), 800);
  };

  return (
    <div className="min-h-screen bg-advento-950 text-white flex">
       {/* Sidebar */}
       <div className="w-72 bg-advento-900 border-r border-white/5 p-8 flex flex-col fixed h-full z-20">
           <div className="flex items-center gap-3 mb-8 px-2">
               <div className="w-10 h-10 bg-advento-600 rounded-xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  <LayoutDashboard className="w-6 h-6" />
               </div>
               <h2 className="text-xl font-black tracking-tight">ADVENTO <span className="text-advento-400">HQ</span></h2>
           </div>

           {/* Back to Website Button */}
           <button 
                onClick={() => onNavigate('/')} 
                className="w-full mb-6 p-4 rounded-2xl flex items-center gap-4 text-advento-400 bg-advento-400/5 border border-advento-400/20 hover:bg-advento-400 hover:text-white transition-all group font-bold"
           >
               <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Exit to Website
           </button>
           
           <nav className="space-y-2 flex-grow">
               <button onClick={() => setActiveTab('dashboard')} className={`w-full text-left p-4 rounded-2xl flex items-center gap-4 transition-all ${activeTab === 'dashboard' ? 'bg-advento-600 text-white shadow-lg' : 'text-slate-400 hover:bg-white/5'}`}>
                   <BarChart3 className="w-5 h-5" /> Overview
               </button>
               <button onClick={() => setActiveTab('hiring')} className={`w-full text-left p-4 rounded-2xl flex items-center gap-4 transition-all ${activeTab === 'hiring' ? 'bg-advento-600 text-white shadow-lg' : 'text-slate-400 hover:bg-white/5'}`}>
                   <Briefcase className="w-5 h-5" /> Talent Engine
               </button>
               <button onClick={() => setActiveTab('blog')} className={`w-full text-left p-4 rounded-2xl flex items-center gap-4 transition-all ${activeTab === 'blog' ? 'bg-advento-600 text-white shadow-lg' : 'text-slate-400 hover:bg-white/5'}`}>
                   <FileText className="w-5 h-5" /> CMS / Blog
               </button>
               <button onClick={() => setActiveTab('community')} className={`w-full text-left p-4 rounded-2xl flex items-center gap-4 transition-all ${activeTab === 'community' ? 'bg-advento-600 text-white shadow-lg' : 'text-slate-400 hover:bg-white/5'}`}>
                   <MessageSquare className="w-5 h-5" /> Community
               </button>
           </nav>

           <div className="mt-auto space-y-4">
                <a href="/" target="_blank" className="w-full p-4 rounded-2xl flex items-center gap-4 text-slate-400 hover:bg-white/5 transition-all group">
                    <Globe className="w-5 h-5 group-hover:text-advento-400" /> View Live Site
                </a>
                <button onClick={onLogout} className="w-full flex items-center gap-4 text-red-400 hover:text-red-300 p-4 border-t border-white/5 pt-6">
                    <LogOut className="w-5 h-5" /> Sign Out
                </button>
           </div>
       </div>

       {/* Main Content Area */}
       <div className="flex-grow p-12 ml-72 overflow-y-auto">
           
           {/* Tab Rendering */}
           {activeTab === 'dashboard' && (
               <div className="animate-fade-in-up">
                   <header className="mb-12">
                       <h1 className="text-4xl font-black mb-2">Systems Overview</h1>
                       <p className="text-slate-400">Tracking performance across all Advento platforms.</p>
                   </header>

                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                       {[
                           { label: "Total Leads", value: "1,248", change: "+12.5%", icon: TrendingUp, color: "text-green-400" },
                           { label: "Active Jobs", value: jobs.filter(j => j.isActive).length.toString(), change: "Stable", icon: Briefcase, color: "text-advento-400" },
                           { label: "Community Posts", value: posts.length.toString(), change: "+4", icon: MessageSquare, color: "text-purple-400" },
                           { label: "Blog Reach", value: "12.4K", change: "+24%", icon: Eye, color: "text-cyan-400" }
                       ].map((stat, i) => (
                           <div key={i} className="bg-white/5 border border-white/5 p-8 rounded-[32px] hover:bg-white/[0.08] transition-all group relative overflow-hidden">
                               <div className="absolute top-0 right-0 w-24 h-24 bg-advento-500/5 blur-[40px] rounded-full"></div>
                               <div className="flex justify-between items-start mb-6">
                                   <div className={`p-3 rounded-2xl bg-white/5 ${stat.color}`}>
                                       <stat.icon className="w-6 h-6" />
                                   </div>
                                   <span className="text-[10px] font-black bg-white/10 px-2 py-1 rounded text-white">{stat.change}</span>
                               </div>
                               <div className="text-3xl font-black mb-1">{stat.value}</div>
                               <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">{stat.label}</div>
                           </div>
                       ))}
                   </div>

                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                       <div className="bg-white/5 border border-white/5 p-8 rounded-[32px]">
                           <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Plus className="w-5 h-5 text-advento-400" /> Recent Activity</h3>
                           <div className="space-y-4">
                               {applications.slice(0, 5).map(app => (
                                   <div key={app.id} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                                       <div className="flex items-center gap-4">
                                           <div className="w-10 h-10 rounded-full bg-advento-900 border border-white/10 flex items-center justify-center font-bold text-advento-400">{app.name.charAt(0)}</div>
                                           <div>
                                               <div className="font-bold text-sm">{app.name} applied</div>
                                               <div className="text-xs text-slate-500">{app.role}</div>
                                           </div>
                                       </div>
                                       <button onClick={() => setActiveTab('hiring')} className="p-2 text-slate-500 hover:text-white"><ArrowUpRight className="w-4 h-4" /></button>
                                   </div>
                               ))}
                           </div>
                       </div>
                       <div className="bg-white/5 border border-white/10 p-8 rounded-[32px]">
                           <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Edit2 className="w-5 h-5 text-purple-400" /> Draft Content</h3>
                           <div className="space-y-4">
                               {blogs.filter(b => b.status === 'Draft').map(blog => (
                                   <div key={blog.id} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                                       <div className="flex items-center gap-4">
                                           <div className="w-10 h-10 rounded-xl bg-purple-900/30 flex items-center justify-center font-bold text-purple-400"><FileText className="w-5 h-5" /></div>
                                           <div>
                                               <div className="font-bold text-sm truncate max-w-[150px]">{blog.title}</div>
                                               <div className="text-xs text-slate-500">Drafted on {blog.date}</div>
                                           </div>
                                       </div>
                                       <button onClick={() => { setEditingBlog(blog); setIsBlogEditorOpen(true); }} className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-bold rounded-lg hover:bg-purple-500 hover:text-white transition-all">Resume</button>
                                   </div>
                               ))}
                               {blogs.filter(b => b.status === 'Draft').length === 0 && <p className="text-slate-600 text-sm text-center py-10">No active drafts.</p>}
                           </div>
                       </div>
                   </div>
               </div>
           )}

           {activeTab === 'hiring' && (
               <div className="animate-fade-in-up">
                   <div className="flex justify-between items-center mb-10">
                       <h2 className="text-3xl font-black">Talent Acquisition</h2>
                       <button onClick={() => setIsJobModalOpen(true)} className="px-6 py-3 bg-advento-600 rounded-2xl flex items-center gap-3 font-bold hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all">
                           <Plus className="w-5 h-5" /> New Job Opening
                       </button>
                   </div>
                   
                   <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden mb-12">
                       <table className="w-full text-left">
                           <thead className="bg-white/5 text-slate-500 uppercase text-[10px] font-black tracking-widest">
                               <tr>
                                   <th className="p-6">Applicant Info</th>
                                   <th className="p-6">Target Role</th>
                                   <th className="p-6">Submission</th>
                                   <th className="p-6">Status</th>
                                   <th className="p-6">Operations</th>
                               </tr>
                           </thead>
                           <tbody className="divide-y divide-white/5">
                               {applications.map(app => (
                                   <tr key={app.id} className="hover:bg-white/5 transition-colors">
                                       <td className="p-6">
                                           <div className="font-black text-white">{app.name}</div>
                                           <div className="text-xs text-slate-500">{app.email}</div>
                                       </td>
                                       <td className="p-6 text-sm text-slate-300 font-medium">{app.role}</td>
                                       <td className="p-6 text-xs text-slate-500">{app.date}</td>
                                       <td className="p-6">
                                           <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                                               app.status === 'Approved' ? 'bg-green-500/20 text-green-400' : 
                                               app.status === 'Rejected' ? 'bg-red-500/20 text-red-400' : 
                                               'bg-yellow-500/20 text-yellow-400'
                                           }`}>
                                               {app.status}
                                           </span>
                                       </td>
                                       <td className="p-6 flex gap-3">
                                           <button onClick={() => handleApproveApp(app.id)} className="p-2.5 bg-green-500/10 text-green-400 rounded-xl hover:bg-green-500 hover:text-white transition-all"><Check className="w-4 h-4" /></button>
                                           <button onClick={() => handleRejectApp(app.id)} className="p-2.5 bg-red-500/10 text-red-400 rounded-xl hover:bg-red-500 hover:text-white transition-all"><X className="w-4 h-4" /></button>
                                           <button onClick={() => handleDeleteApp(app.id)} className="p-2.5 bg-slate-500/10 text-slate-400 rounded-xl hover:bg-slate-700 hover:text-white transition-all"><Trash2 className="w-4 h-4" /></button>
                                       </td>
                                   </tr>
                               ))}
                           </tbody>
                       </table>
                   </div>

                   <h3 className="text-2xl font-black mb-6">Open Postings</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       {jobs.map(job => (
                           <div key={job.id} className={`p-8 rounded-[32px] border transition-all flex justify-between items-start ${job.isActive ? 'bg-white/5 border-white/10' : 'bg-red-500/5 border-red-500/20 opacity-60'}`}>
                               <div>
                                   <h4 className="text-xl font-black mb-2">{job.title}</h4>
                                   <div className="text-sm text-slate-500 flex gap-4 mb-4">
                                       <span>{job.location}</span>
                                       <span>•</span>
                                       <span>{job.type}</span>
                                   </div>
                                   <div className="text-advento-400 font-black text-sm">{job.salaryRange}</div>
                               </div>
                               <div className="flex flex-col items-end gap-4">
                                    <button onClick={() => handleToggleJob(job.id)}>
                                        {job.isActive ? <ToggleRight className="w-10 h-10 text-green-400" /> : <ToggleLeft className="w-10 h-10 text-slate-600" />}
                                    </button>
                                    <button onClick={() => handleDeleteJob(job.id)} className="text-slate-600 hover:text-red-400"><Trash2 className="w-5 h-5" /></button>
                               </div>
                           </div>
                       ))}
                   </div>
               </div>
           )}

           {activeTab === 'blog' && (
               <div className="animate-fade-in-up">
                   <div className="flex justify-between items-center mb-10">
                       <h2 className="text-3xl font-black">Content Management</h2>
                       <button onClick={() => handleEditBlog()} className="px-6 py-3 bg-advento-600 rounded-2xl flex items-center gap-3 font-bold">
                           <Plus className="w-5 h-5" /> New Article
                       </button>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {blogs.map(blog => (
                           <div key={blog.id} className="bg-white/5 border border-white/5 rounded-[40px] p-2 group overflow-hidden cursor-pointer flex flex-col h-full" onClick={() => handleEditBlog(blog)}>
                               <div className="aspect-video rounded-[36px] overflow-hidden relative mb-6">
                                   <img src={blog.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                                   <div className="absolute top-4 left-4 flex gap-2">
                                       <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md ${blog.status === 'Published' ? 'bg-green-500/50 text-white' : 'bg-yellow-500/50 text-white'}`}>{blog.status}</span>
                                       <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-black/40 text-white backdrop-blur-md">{blog.category}</span>
                                   </div>
                               </div>
                               <div className="px-6 pb-8 flex-grow flex flex-col">
                                   <h3 className="text-xl font-bold mb-4 line-clamp-2">{blog.title}</h3>
                                   <p className="text-sm text-slate-500 line-clamp-2 mb-6">{blog.excerpt}</p>
                                   <div className="flex justify-between items-center mt-auto pt-6 border-t border-white/5">
                                       <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{blog.date}</div>
                                       <div className="flex gap-2">
                                           <button className="p-2 text-slate-400 hover:text-white"><Edit2 className="w-4 h-4" /></button>
                                           <button onClick={(e) => { e.stopPropagation(); if(confirm('Delete article?')) setBlogs(blogs.filter(b => b.id !== blog.id)); }} className="p-2 text-slate-600 hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       ))}
                   </div>
               </div>
           )}

           {activeTab === 'community' && (
               <div className="animate-fade-in-up max-w-4xl mx-auto">
                   <h2 className="text-3xl font-black mb-10">Moderation Hub</h2>
                   <div className="space-y-6">
                       {posts.map(post => (
                           <div key={post.id} className="bg-white/5 border border-white/5 p-8 rounded-[32px] flex justify-between items-start group">
                               <div className="flex gap-6">
                                   <img src={post.user.avatar} className="w-14 h-14 rounded-2xl border border-white/10" alt="" />
                                   <div>
                                       <div className="flex items-center gap-3 mb-2">
                                           <h3 className="font-bold text-lg">{post.user.name}</h3>
                                           <span className="text-[10px] bg-advento-500/10 text-advento-400 px-2 py-0.5 rounded-full font-black uppercase tracking-widest border border-advento-500/20">{post.user.role}</span>
                                       </div>
                                       <p className="text-slate-400 text-sm mb-4">{post.timestamp}</p>
                                       <p className="text-slate-200 leading-relaxed max-w-2xl">{post.content}</p>
                                   </div>
                               </div>
                               <button onClick={() => handleDeletePost(post.id)} className="p-3 bg-red-500/10 text-red-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500 hover:text-white">
                                   <Trash2 className="w-5 h-5" />
                               </button>
                           </div>
                       ))}
                   </div>
               </div>
           )}
       </div>

       {/* Modals */}
       {isJobModalOpen && (
           <div className="fixed inset-0 z-[100] flex items-center justify-center bg-advento-950/90 backdrop-blur-xl p-8">
               <div className="bg-advento-900 border border-white/10 p-10 rounded-[40px] w-full max-w-2xl shadow-2xl animate-fade-in-up">
                   <h2 className="text-3xl font-black mb-8">System: Create New Job</h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                       <input type="text" placeholder="Title" className="bg-black/20 border border-white/5 p-4 rounded-2xl text-white outline-none focus:border-advento-500 transition-all" value={newJob.title || ''} onChange={e => setNewJob({...newJob, title: e.target.value})} />
                       <input type="text" placeholder="Location" className="bg-black/20 border border-white/5 p-4 rounded-2xl text-white outline-none focus:border-advento-500" value={newJob.location || ''} onChange={e => setNewJob({...newJob, location: e.target.value})} />
                       <input type="text" placeholder="Budget/Salary" className="bg-black/20 border border-white/5 p-4 rounded-2xl text-white outline-none" value={newJob.salaryRange || ''} onChange={e => setNewJob({...newJob, salaryRange: e.target.value})} />
                       <select className="bg-black/20 border border-white/5 p-4 rounded-2xl text-white outline-none" value={newJob.type || ''} onChange={e => setNewJob({...newJob, type: e.target.value})}>
                           <option value="Full-time">Full-time</option>
                           <option value="Contract">Contract</option>
                           <option value="Remote">Remote Only</option>
                       </select>
                   </div>
                   <textarea placeholder="Description..." className="w-full bg-black/20 border border-white/5 p-4 rounded-2xl text-white h-40 outline-none focus:border-advento-500 mb-8" value={newJob.description || ''} onChange={e => setNewJob({...newJob, description: e.target.value})}></textarea>
                   <div className="flex gap-4">
                       <button onClick={saveJob} className="flex-grow py-5 bg-advento-600 rounded-2xl font-black text-white hover:bg-advento-500 transition-all">DEPOY LISTING</button>
                       <button onClick={() => setIsJobModalOpen(false)} className="px-10 py-5 bg-white/5 rounded-2xl font-black text-slate-400">ABORT</button>
                   </div>
               </div>
           </div>
       )}

       {/* Blog Editor */}
       {isBlogEditorOpen && (
           <div className="fixed inset-0 z-[100] flex items-center justify-center bg-advento-950/90 backdrop-blur-3xl p-8">
               <div className="bg-advento-900 border border-white/10 p-12 rounded-[48px] w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-[0_0_100px_rgba(0,0,0,0.5)] animate-fade-in-up">
                   <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/5">
                        <h2 className="text-3xl font-black">Advento Workspace: <span className="text-advento-400">Article Editor</span></h2>
                        <button onClick={() => setIsBlogEditorOpen(false)} className="p-3 bg-white/5 rounded-full hover:bg-red-500 hover:text-white transition-all"><X className="w-6 h-6" /></button>
                   </div>
                   
                   <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                       <div className="lg:col-span-3 space-y-8">
                           <div>
                               <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Headline</label>
                               <input type="text" className="w-full bg-transparent border-b-2 border-white/5 text-4xl font-black p-2 outline-none focus:border-advento-500 transition-all" placeholder="The Future of AI..." value={editingBlog?.title || ''} onChange={e => setEditingBlog({...editingBlog!, title: e.target.value})} />
                           </div>
                           <div>
                               <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Body Content (Rich Text)</label>
                               <textarea className="w-full bg-black/20 border border-white/5 p-8 rounded-[32px] h-[500px] outline-none focus:border-advento-500 transition-all leading-relaxed" placeholder="Write your masterpiece..." value={editingBlog?.content || ''} onChange={e => setEditingBlog({...editingBlog!, content: e.target.value})}></textarea>
                           </div>
                       </div>
                       <div className="space-y-10">
                           <div className="p-8 bg-white/5 rounded-[32px] border border-white/5">
                               <h4 className="font-black text-xs uppercase tracking-widest text-slate-500 mb-6">Article Config</h4>
                               <div className="space-y-6">
                                    <input type="text" placeholder="Category" className="w-full bg-black/20 border border-white/5 p-4 rounded-2xl text-xs outline-none" value={editingBlog?.category || ''} onChange={e => setEditingBlog({...editingBlog!, category: e.target.value})} />
                                    <input type="text" placeholder="Author" className="w-full bg-black/20 border border-white/5 p-4 rounded-2xl text-xs outline-none" value={editingBlog?.author || ''} onChange={e => setEditingBlog({...editingBlog!, author: e.target.value})} />
                                    <input type="text" placeholder="Image URL" className="w-full bg-black/20 border border-white/5 p-4 rounded-2xl text-xs outline-none" value={editingBlog?.image || ''} onChange={e => setEditingBlog({...editingBlog!, image: e.target.value})} />
                               </div>
                           </div>
                           <div className="p-8 bg-advento-500/10 rounded-[32px] border border-advento-500/20">
                               <h4 className="font-black text-xs uppercase tracking-widest text-advento-400 mb-6">Publish Controls</h4>
                               <div className="space-y-4">
                                   <button onClick={() => saveBlog('Published')} className="w-full py-5 bg-advento-600 rounded-2xl font-black text-white hover:bg-advento-500 transition-all flex items-center justify-center gap-2 shadow-lg"><Send className="w-4 h-4" /> GO LIVE</button>
                                   <button onClick={() => saveBlog('Draft')} className="w-full py-5 bg-white/10 rounded-2xl font-black text-white hover:bg-white/20 transition-all">SAVE DRAFT</button>
                               </div>
                               {saveStatus && <p className="mt-4 text-center text-xs font-black text-green-400 uppercase tracking-widest">{saveStatus}</p>}
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       )}
    </div>
  );
};

export default Admin;