import React, { useState } from 'react';
import { Lock, User, AlertCircle, Eye, EyeOff, ArrowLeft } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
  onNavigate: (path: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onNavigate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (username.trim() === 'Advento' && password.trim() === 'Advento@55999') {
        localStorage.setItem('advento_admin', 'true');
        onLogin();
    } else {
        setError('Invalid Username or Password');
    }
  };

  const handleForgotPassword = () => {
      window.location.href = "mailto:ceo.advento@gmail.com?subject=Admin Password Reset Request";
  };

  return (
    <div className="min-h-screen bg-advento-950 flex items-center justify-center px-4 relative overflow-hidden">
       {/* Back to Home Button */}
       <button 
          onClick={() => onNavigate('/')} 
          className="absolute top-8 left-8 flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all group z-20 backdrop-blur-md"
       >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Website
       </button>

       {/* Background Effects */}
       <div className="absolute top-0 right-0 w-96 h-96 bg-advento-600/10 rounded-full blur-[100px] pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px] pointer-events-none"></div>

       <div className="w-full max-w-md bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-2xl relative z-10">
           <div className="text-center mb-8">
               <h1 className="text-3xl font-bold text-white mb-2">Admin Portal</h1>
               <p className="text-slate-400 text-sm">Authorized Personnel Only</p>
           </div>
           
           <form onSubmit={handleLogin} className="space-y-6">
               <div>
                   <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Username</label>
                   <div className="flex bg-black/20 border border-white/10 rounded-xl overflow-hidden focus-within:border-advento-500 transition-colors group">
                       <div className="px-3 py-3 bg-white/5 text-slate-400 group-focus-within:text-advento-400 transition-colors"><User className="w-5 h-5" /></div>
                       <input 
                         type="text" 
                         value={username}
                         onChange={(e) => setUsername(e.target.value)}
                         className="w-full bg-transparent px-4 py-3 text-white focus:outline-none placeholder-slate-600"
                         placeholder="Enter Username"
                       />
                   </div>
               </div>
               <div>
                   <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Password</label>
                   <div className="flex bg-black/20 border border-white/10 rounded-xl overflow-hidden focus-within:border-advento-500 transition-colors group relative">
                       <div className="px-3 py-3 bg-white/5 text-slate-400 group-focus-within:text-advento-400 transition-colors"><Lock className="w-5 h-5" /></div>
                       <input 
                         type={showPassword ? "text" : "password"}
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                         className="w-full bg-transparent px-4 py-3 text-white focus:outline-none placeholder-slate-600 pr-10"
                         placeholder="Enter Password"
                       />
                       <button 
                         type="button" 
                         onClick={() => setShowPassword(!showPassword)}
                         className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                       >
                         {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                       </button>
                   </div>
               </div>
               
               {error && (
                   <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg text-sm flex items-center gap-2 animate-pulse">
                       <AlertCircle className="w-4 h-4" /> {error}
                   </div>
               )}

               <button type="submit" className="w-full py-4 bg-gradient-to-r from-advento-600 to-advento-500 hover:from-advento-500 hover:to-advento-400 rounded-xl font-bold text-white transition-all shadow-lg transform active:scale-95">
                   Secure Login
               </button>
           </form>
           
           <button onClick={handleForgotPassword} className="w-full text-center mt-6 text-sm text-advento-400 hover:text-white transition-colors underline decoration-dotted">
               Forgot Password?
           </button>
       </div>
    </div>
  );
};

export default Login;