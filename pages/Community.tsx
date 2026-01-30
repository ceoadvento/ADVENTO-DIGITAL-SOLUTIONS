import React, { useState } from 'react';
import { Users, Lock, ChevronRight, Image as ImageIcon, Send, Heart, MessageCircle, MoreHorizontal, ShieldCheck, LogOut, Settings, Camera, X } from 'lucide-react';
import { CommunityPost, CommunityUser } from '../types';
import { MOCK_COMMUNITY_POSTS } from '../constants';

const Community: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authStep, setAuthStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [generatedOtp, setGeneratedOtp] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [posts, setPosts] = useState<CommunityPost[]>(MOCK_COMMUNITY_POSTS);
  const [newPostContent, setNewPostContent] = useState('');

  // Profile State
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [currentUser, setCurrentUser] = useState<CommunityUser>({
    id: 'me',
    name: 'Paidakula Paramesh',
    avatar: 'https://randomuser.me/api/portraits/lego/1.jpg',
    verified: true,
    role: 'Alumni'
  });
  
  const [tempProfile, setTempProfile] = useState(currentUser);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const phoneRegex = /^[6-9]\d{9}$/;
    
    if (phoneRegex.test(phone)) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
        setGeneratedOtp(newOtp);
        setAuthStep('otp');
        alert(`ADVENTO: Your security code is ${newOtp}`);
      }, 1500);
    } else {
      setError("Please enter a valid 10-digit Indian mobile number");
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const enteredOtp = otp.join('');
    
    if (enteredOtp.length !== 4) {
        setError("Please enter the 4-digit code");
        return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (enteredOtp === generatedOtp) {
        setIsLoggedIn(true);
      } else {
        setError("Incorrect OTP. Please try again.");
      }
    }, 1000);
  };

  const handleLike = (postId: string) => {
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        return { ...p, likes: p.isLiked ? p.likes - 1 : p.likes + 1, isLiked: !p.isLiked };
      }
      return p;
    }));
  };

  const handleCreatePost = () => {
    if (!newPostContent.trim()) return;
    const newPost: CommunityPost = {
      id: Date.now().toString(),
      user: currentUser,
      content: newPostContent,
      likes: 0,
      comments: [],
      timestamp: 'Just now'
    };
    setPosts([newPost, ...posts]);
    setNewPostContent('');
  };

  const saveProfile = () => {
      setCurrentUser(tempProfile);
      setShowProfileModal(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center pt-24 px-4 transition-colors duration-500">
         <div className="w-full max-w-lg bento-card p-12 md:p-16 rounded-[56px] shadow-4xl relative overflow-hidden animate-fade-in-up">
            <div className="text-center mb-12">
               <div className="w-24 h-24 bg-advento-500/10 rounded-[32px] mx-auto mb-8 flex items-center justify-center text-advento-500 border border-advento-500/20">
                 <Users className="w-12 h-12" />
               </div>
               <h1 className="text-4xl font-black text-slate-950 dark:text-white mb-4 tracking-tight">Advento Circle</h1>
               <p className="text-slate-700 dark:text-slate-400 text-lg font-semibold leading-relaxed">
                   Join India's most elite network of <span className="text-advento-500">2,500+</span> digital engineers.
               </p>
            </div>

            {authStep === 'phone' ? (
              <form onSubmit={handlePhoneSubmit} className="space-y-8">
                <div className="space-y-3">
                   <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Mobile Number</label>
                   <div className={`flex bg-slate-50 dark:bg-white/5 border-2 rounded-2xl overflow-hidden transition-all ${error ? 'border-red-500' : 'border-slate-100 dark:border-white/10 focus-within:border-advento-500'}`}>
                      <span className="bg-slate-100 dark:bg-white/5 px-5 py-4 text-slate-500 dark:text-slate-400 font-bold border-r border-slate-100 dark:border-white/10">+91</span>
                      <input 
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        className="w-full bg-transparent px-5 py-4 text-slate-950 dark:text-white font-black focus:outline-none"
                        placeholder="9876543210"
                        autoFocus
                      />
                   </div>
                   {error && <p className="text-red-500 text-xs font-black uppercase tracking-widest mt-2">{error}</p>}
                </div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-6 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-3xl font-black text-xl hover:bg-advento-500 hover:text-black transition-all shadow-2xl disabled:opacity-50"
                >
                  {loading ? 'Transmitting...' : 'Request Access Code'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleOtpSubmit} className="space-y-8">
                 <div className="text-center">
                    <p className="text-slate-700 dark:text-slate-300 font-semibold text-lg mb-8">Enter the 4-digit transmission code sent to <span className="text-advento-500">+{phone}</span></p>
                    <div className="flex justify-center gap-4 mb-4">
                       {otp.map((digit, idx) => (
                         <input
                           key={idx}
                           type="text"
                           maxLength={1}
                           value={digit}
                           onChange={(e) => {
                             const val = e.target.value.replace(/\D/g, '');
                             const newOtp = [...otp];
                             newOtp[idx] = val;
                             setOtp(newOtp);
                             if (val && e.target.nextSibling) (e.target.nextSibling as HTMLInputElement).focus();
                           }}
                           className={`w-16 h-20 bg-slate-50 dark:bg-white/5 border-2 rounded-2xl text-center text-3xl font-black text-slate-950 dark:text-white focus:outline-none transition-all ${error ? 'border-red-500' : 'border-slate-100 dark:border-white/10 focus:border-advento-500'}`}
                         />
                       ))}
                    </div>
                    {error && <p className="text-red-500 text-xs font-black uppercase tracking-widest py-4">{error}</p>}
                 </div>
                 <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-6 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-3xl font-black text-xl hover:bg-advento-500 hover:text-black transition-all shadow-2xl"
                >
                  {loading ? 'Verifying...' : 'Initialize Session'}
                </button>
              </form>
            )}
         </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent pt-24 pb-12 transition-colors duration-500">
       <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="flex items-center justify-between mb-12 sticky top-24 z-20 bento-card p-6 rounded-[32px] shadow-xl">
             <h1 className="text-3xl font-black text-slate-950 dark:text-white tracking-tight">The Circle.</h1>
             <div className="flex items-center gap-4">
                <button 
                    onClick={() => { setTempProfile(currentUser); setShowProfileModal(true); }}
                    className="flex items-center gap-4 bg-slate-50 dark:bg-white/5 hover:border-advento-500 px-5 py-2.5 rounded-2xl border border-slate-100 dark:border-white/10 transition-all"
                >
                   <img src={currentUser.avatar} alt="Me" className="w-10 h-10 rounded-xl border border-white/20" />
                   <div className="text-left hidden sm:block">
                        <span className="text-slate-950 dark:text-white text-sm font-black block leading-none mb-1">{currentUser.name}</span>
                        <span className="text-[10px] text-advento-600 font-black uppercase tracking-widest block leading-none">{currentUser.role}</span>
                   </div>
                   <Settings className="w-4 h-4 text-slate-400" />
                </button>
                <button onClick={() => setIsLoggedIn(false)} className="p-3 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-2xl transition-all">
                    <LogOut className="w-6 h-6" />
                </button>
             </div>
          </div>

          <div className="bento-card rounded-[48px] p-10 mb-12 shadow-2xl">
             <div className="flex gap-6">
                <img src={currentUser.avatar} alt="Me" className="w-16 h-16 rounded-[24px] border-2 border-slate-100 dark:border-white/10" />
                <div className="flex-grow">
                   <textarea
                     value={newPostContent}
                     onChange={(e) => setNewPostContent(e.target.value)}
                     placeholder="Share your latest growth milestone..."
                     className="w-full bg-slate-50 dark:bg-white/5 text-slate-950 dark:text-white placeholder-slate-400 border border-slate-100 dark:border-white/10 rounded-[28px] p-6 focus:border-advento-500 focus:bg-white dark:focus:bg-black/20 resize-none h-32 transition-all font-semibold"
                   ></textarea>
                   <div className="flex justify-between items-center mt-6">
                      <div className="flex gap-4">
                        <button className="text-slate-500 hover:text-advento-500 hover:bg-slate-50 dark:hover:bg-white/5 px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all">
                            <ImageIcon className="w-5 h-5" /> Media
                        </button>
                        <button className="text-slate-500 hover:text-advento-500 hover:bg-slate-50 dark:hover:bg-white/5 px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all">
                            <Camera className="w-5 h-5" /> Video
                        </button>
                      </div>
                      <button 
                        onClick={handleCreatePost}
                        disabled={!newPostContent.trim()}
                        className="px-10 py-4 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-full font-black text-sm flex items-center gap-3 shadow-xl disabled:opacity-40 transition-all hover:scale-105"
                      >
                         Publish Update <Send className="w-4 h-4" />
                      </button>
                   </div>
                </div>
             </div>
          </div>

          <div className="space-y-10">
             {posts.map((post) => (
               <div key={post.id} className="bento-card rounded-[48px] p-10 hover:shadow-3xl transition-all group">
                  <div className="flex justify-between items-start mb-8">
                     <div className="flex items-center gap-5">
                        <div className="relative">
                            <img src={post.user.avatar} alt={post.user.name} className="w-14 h-14 rounded-[20px] border border-slate-100 dark:border-white/10" />
                            {post.user.verified && (
                                <div className="absolute -bottom-1 -right-1 bg-advento-500 rounded-full p-1 border-2 border-white dark:border-advento-900 shadow-md">
                                    <ShieldCheck className="w-4 h-4 text-white" />
                                </div>
                            )}
                        </div>
                        <div>
                           <h3 className="font-black text-slate-950 dark:text-white text-lg">
                             {post.user.name}
                           </h3>
                           <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">{post.user.role} • {post.timestamp}</p>
                        </div>
                     </div>
                     <button className="text-slate-400 hover:text-advento-500"><MoreHorizontal className="w-6 h-6" /></button>
                  </div>
                  
                  <p className="text-slate-800 dark:text-slate-200 mb-8 font-semibold text-xl leading-relaxed">{post.content}</p>
                  
                  {post.image && (
                    <div className="rounded-[36px] overflow-hidden mb-8 border border-slate-100 dark:border-white/5 shadow-lg">
                       <img src={post.image} alt="Post content" className="w-full max-h-[500px] object-cover hover:scale-105 transition-transform duration-1000" />
                    </div>
                  )}

                  <div className="flex items-center gap-10 pt-8 border-t border-slate-100 dark:border-white/5">
                     <button 
                       onClick={() => handleLike(post.id)}
                       className={`flex items-center gap-3 text-sm font-black uppercase tracking-widest ${post.isLiked ? 'text-pink-500' : 'text-slate-400 hover:text-pink-500'} transition-all`}
                     >
                        <Heart className={`w-6 h-6 ${post.isLiked ? 'fill-current' : ''}`} /> {post.likes}
                     </button>
                     <button className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-slate-400 hover:text-advento-500 transition-all">
                        <MessageCircle className="w-6 h-6" /> {post.comments.length}
                     </button>
                  </div>
               </div>
             ))}
          </div>
       </div>

       {/* Profile Modal */}
       {showProfileModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <div className="bento-card rounded-[56px] w-full max-w-lg p-12 shadow-4xl relative animate-fade-in-up">
                <button onClick={() => setShowProfileModal(false)} className="absolute top-8 right-8 text-slate-400 hover:text-advento-500">
                    <X className="w-8 h-8" />
                </button>
                
                <h2 className="text-3xl font-black text-slate-950 dark:text-white mb-10 flex items-center gap-4">
                    <Settings className="w-8 h-8 text-advento-500" /> Member Identity
                </h2>

                <div className="space-y-8">
                    <div className="flex justify-center mb-10">
                        <div className="relative group cursor-pointer">
                            <img src={tempProfile.avatar} alt="Avatar" className="w-32 h-32 rounded-[40px] border-4 border-white dark:border-slate-800 shadow-2xl" />
                            <div className="absolute inset-0 bg-advento-500/80 rounded-[40px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                                <Camera className="w-10 h-10 text-white" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Full Name</label>
                        <input 
                            type="text" 
                            value={tempProfile.name}
                            onChange={(e) => setTempProfile({...tempProfile, name: e.target.value})}
                            className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-950 dark:text-white focus:border-advento-500 outline-none font-bold"
                        />
                    </div>

                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Member Tier</label>
                        <select 
                            value={tempProfile.role}
                            onChange={(e) => setTempProfile({...tempProfile, role: e.target.value as any})}
                            className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-950 dark:text-white focus:border-advento-500 outline-none font-bold appearance-none"
                        >
                            <option value="Student">Student</option>
                            <option value="Alumni">Alumni</option>
                            <option value="Freelancer">Freelancer</option>
                            <option value="Agency Owner">Agency Owner</option>
                        </select>
                    </div>

                    <button 
                        onClick={saveProfile}
                        className="w-full py-6 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-3xl font-black text-xl hover:bg-advento-500 hover:text-black transition-all shadow-3xl"
                    >
                        Save Identity
                    </button>
                </div>
            </div>
        </div>
       )}
    </div>
  );
};

export default Community;