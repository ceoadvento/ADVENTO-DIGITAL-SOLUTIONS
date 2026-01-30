import React, { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';
import { INITIAL_BLOGS } from '../constants';

interface BlogDetailProps {
    slug: string;
    onNavigate: (path: string) => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ slug, onNavigate }) => {
    const [blog, setBlog] = useState<BlogPost | null>(null);
    const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        const savedBlogs = localStorage.getItem('advento_blogs');
        const allBlogs = savedBlogs ? JSON.parse(savedBlogs) : INITIAL_BLOGS;
        
        const found = allBlogs.find((b: BlogPost) => b.slug === slug);
        setBlog(found || null);

        if (found) {
            const related = allBlogs.filter((b: BlogPost) => 
                b.id !== found.id && 
                b.status === 'Published' &&
                (b.category === found.category || b.seo.keywords.split(',').some((k: string) => found.seo.keywords.includes(k.trim())))
            ).slice(0, 3);
            setRelatedPosts(related);
        }
        
        window.scrollTo(0, 0);
    }, [slug]);

    const handleShare = (platform: string) => {
        const url = window.location.href;
        const text = `Check out this article: ${blog?.title}`;
        
        switch(platform) {
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
                break;
            case 'linkedin':
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
                break;
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
                break;
            case 'copy':
                navigator.clipboard.writeText(url);
                alert('Link copied to clipboard!');
                break;
        }
    };

    if (!blog) return <div className="min-h-screen pt-32 text-center text-slate-950 dark:text-white flex items-center justify-center">Loading Article...</div>;

    return (
        <div className="min-h-screen bg-transparent text-slate-900 dark:text-white pt-24 pb-20 transition-colors duration-500">
             <article className="max-w-4xl mx-auto px-4 sm:px-6">
                 <button onClick={() => onNavigate('/blog')} className="flex items-center text-slate-500 hover:text-slate-950 dark:hover:text-white mb-8 transition-colors group">
                     <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Blog
                 </button>
                 
                 <div className="text-center mb-12 animate-fade-in-up">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-advento-500/10 border border-advento-500/20 text-advento-600 dark:text-advento-400 text-xs font-bold uppercase tracking-widest mb-6">
                         {blog.category || 'Insight'}
                     </div>
                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight tracking-tight text-slate-950 dark:text-white">{blog.title}</h1>
                     <div className="flex items-center justify-center gap-6 text-slate-500 dark:text-slate-400 text-sm">
                         <div className="flex items-center gap-2">
                             <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(blog.author)}&background=random`} alt={blog.author} className="w-8 h-8 rounded-full border border-slate-200 dark:border-white/10" />
                             <span className="font-bold text-slate-800 dark:text-slate-200">{blog.author}</span>
                         </div>
                         <span className="w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full"></span>
                         <div className="flex items-center gap-2">
                             <Calendar className="w-4 h-4" /> {blog.date}
                         </div>
                     </div>
                 </div>

                 <div className="w-full aspect-video rounded-[48px] overflow-hidden mb-12 border border-slate-100 dark:border-white/10 shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                     <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                 </div>

                 <div className="prose dark:prose-invert prose-lg max-w-none prose-headings:text-slate-950 dark:pro-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-strong:text-slate-950 dark:prose-strong:text-white prose-a:text-advento-500 mb-16 animate-fade-in-up font-medium" style={{ animationDelay: '0.2s' }}>
                     {blog.content.split('\n').map((paragraph, idx) => (
                         paragraph.trim() && <p key={idx} className="mb-6 leading-relaxed">{paragraph}</p>
                     ))}
                 </div>

                 <div className="border-t border-slate-100 dark:border-white/10 pt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
                     <h3 className="text-xl font-bold flex items-center gap-2 text-slate-950 dark:text-white">
                       <Share2 className="w-5 h-5 text-advento-400" /> Share this insight
                     </h3>
                     <div className="flex gap-4">
                         <button onClick={() => handleShare('twitter')} className="p-3 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-[#1DA1F2] hover:text-white transition-all"><Twitter className="w-5 h-5" /></button>
                         <button onClick={() => handleShare('linkedin')} className="p-3 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-[#0A66C2] hover:text-white transition-all"><Linkedin className="w-5 h-5" /></button>
                         <button onClick={() => handleShare('facebook')} className="p-3 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-[#1877F2] hover:text-white transition-all"><Facebook className="w-5 h-5" /></button>
                         <button onClick={() => handleShare('copy')} className="p-3 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-advento-600 hover:text-white transition-all" title="Copy Link"><LinkIcon className="w-5 h-5" /></button>
                     </div>
                 </div>
             </article>

             {relatedPosts.length > 0 && (
                 <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-20 pt-12 border-t border-slate-100 dark:border-white/5">
                     <h2 className="text-2xl font-extrabold mb-8 text-slate-950 dark:text-white">Related Intelligence</h2>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         {relatedPosts.map(post => (
                             <div key={post.id} className="group cursor-pointer bento-card p-4 rounded-[40px] flex flex-col h-full" onClick={() => onNavigate(`/blog/${post.slug}`)}>
                                 <div className="aspect-video rounded-[32px] overflow-hidden mb-4 border border-slate-100 dark:border-white/10">
                                     <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                 </div>
                                 <div className="px-2 pb-2">
                                     <div className="text-[10px] text-advento-600 dark:text-advento-400 font-black uppercase tracking-[0.2em] mb-2">{post.category}</div>
                                     <h3 className="text-lg font-bold mb-2 group-hover:text-advento-500 transition-colors line-clamp-2 text-slate-900 dark:text-white leading-tight">{post.title}</h3>
                                     <div className="text-xs text-slate-400 flex items-center gap-2 mt-auto">
                                         <Calendar className="w-3 h-3" /> {post.date}
                                     </div>
                                 </div>
                             </div>
                         ))}
                     </div>
                 </section>
             )}
        </div>
    );
};

export default BlogDetail;