import React from 'react';
import { Shield, FileText, Lock, AlertTriangle } from 'lucide-react';

interface LegalProps {
  type: 'terms' | 'privacy' | 'refund' | 'contract';
}

const Legal: React.FC<LegalProps> = ({ type }) => {
  const getContent = () => {
    switch (type) {
      case 'terms':
        return {
          title: 'Terms of Service',
          icon: FileText,
          content: (
            <div className="space-y-12">
              <p className="text-2xl font-bold leading-relaxed">Welcome to Advento. By accessing our website and services, you agree to be bound by these enterprise protocols.</p>
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-slate-950 dark:text-white">1. Core Services</h3>
                <p>Advento provides digital marketing training and consulting services. All course materials and proprietary frameworks are intellectual property of Advento Digital Engineering.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-slate-950 dark:text-white">2. Intelligence Conduct</h3>
                <p>Users agree not to utilize the platform for unlawful data harvesting or infringing upon the creative integrity of the community.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-slate-950 dark:text-white">3. Certification Protocols</h3>
                <p>Certificates are issued only upon verified successful completion of course requirements and high-fidelity assessments.</p>
              </div>
            </div>
          )
        };
      case 'privacy':
        return {
          title: 'Privacy Protocol',
          icon: Lock,
          content: (
            <div className="space-y-12">
              <p className="text-2xl font-bold leading-relaxed">Your data privacy is absolute. This protocol outlines how we collect and protect your digital footprint.</p>
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-slate-950 dark:text-white">1. Data Capture</h3>
                <p>We collect essential personal information (Name, Email, Phone) solely for high-fidelity communication and account security.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-slate-950 dark:text-white">2. Usage Rights</h3>
                <p>We use your data to provide enterprise services, send intelligence updates, and refine user experience. We do not sell data to third-party entities.</p>
              </div>
            </div>
          )
        };
      case 'refund':
        return {
          title: 'Refund Matrix',
          icon: AlertTriangle,
          content: (
            <div className="space-y-12">
              <p className="text-2xl font-black text-red-600 dark:text-red-400 leading-relaxed">Please read carefully before initializing enrollment.</p>
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-slate-950 dark:text-white">1. General Zero-Refund Policy</h3>
                <p>Advento maintains a strict <strong>No Refund Policy</strong> for all our training programs and consulting services once payment processing is completed.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-slate-950 dark:text-white">2. Course Authorization</h3>
                <p>Once a student has received access to the Learning Management System (LMS) or attended a live session, no refunds will be issued under any circumstances.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-slate-950 dark:text-white">3. Consulting Retainers</h3>
                <p>Fees paid for strategic consulting are non-refundable as they represent the dedicated allocation of expert resources.</p>
              </div>
            </div>
          )
        };
      case 'contract':
        return {
          title: 'Contract / MOU',
          icon: Shield,
          content: (
            <div className="space-y-12">
              <p className="text-2xl font-bold leading-relaxed">Memorandum of Understanding (MOU) between Advento and its Strategic Partners.</p>
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-slate-950 dark:text-white">1. Confidentiality Agreement</h3>
                <p>Partners and Students agree to maintain total confidentiality regarding proprietary teaching methods and internal growth frameworks.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-slate-950 dark:text-white">2. Placement Assistance</h3>
                <p>While we provide 100% career assistance, final placement outcomes are subject to individual performance and market dynamics.</p>
              </div>
            </div>
          )
        };
      default:
        return { title: '', icon: FileText, content: null };
    }
  };

  const data = getContent();

  return (
    <div className="w-full min-h-screen bg-transparent text-slate-900 dark:text-white pt-20 transition-colors duration-500">
       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="bento-card p-16 md:p-24 rounded-[64px] shadow-4xl">
              <div className="flex items-center gap-8 mb-16 border-b border-slate-100 dark:border-white/5 pb-16">
                  <div className="w-20 h-20 bg-slate-100 dark:bg-white/5 rounded-[32px] flex items-center justify-center text-advento-500 border border-slate-200 dark:border-white/10 shrink-0">
                      <data.icon className="w-10 h-10" />
                  </div>
                  <h1 className="text-5xl md:text-7xl font-black text-slate-950 dark:text-white tracking-tighter">{data.title}</h1>
              </div>
              <div className="text-slate-700 dark:text-slate-300">
                  {data.content}
              </div>
              <div className="mt-20 pt-10 border-t border-slate-100 dark:border-white/5 text-xs font-black text-slate-400 uppercase tracking-[0.4em]">
                  Last Updated: {new Date().toLocaleDateString()} | © Advento Digital Group
              </div>
          </div>
       </div>
    </div>
  );
};

export default Legal;