import React, { useState, useEffect } from 'react';
import { INITIAL_BLOGS } from '../constants';
import { BlogPost } from '../types';
import { Calendar, User, ArrowRight, Clock, Search } from 'lucide-react';

interface BlogProps {
    onNavigate: (path: string) => void;
}

const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [categories, setCategories] = useState<string[]>(['All']);

  useEffect(() => {
    const savedBlogs = localStorage.getItem('advento_blogs');
    const allBlogs = savedBlogs ? JSON.parse(savedBlogs) : INITIAL_BLOGS;
    const publishedBlogs = allBlogs
        .filter((b: BlogPost) => b.status === 'Published')
        .sort((a: BlogPost, b: BlogPost) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
    setBlogs(publishedBlogs);
    setFilteredBlogs(publishedBlogs);
    const cats = Array.from(new Set(publishedBlogs.map((b: BlogPost) => b.category || 'Uncategorized')));
    setCategories(['All', ...cats] as string[]);
  }, []);

  useEffect(() => {
      let result = blogs;
      if (selectedCategory !== 'All') result = result.filter(b => (b.category || 'Uncategorized') === selectedCategory);
      if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase();
          result = result.filter(b => b.title.toLowerCase().includes(query) || b.content.toLowerCase().includes(query));
      }
      setFilteredBlogs(result);
  }, [searchQuery, selectedCategory, blogs]);

  return (
    <div className="w-full min-h-screen bg-transparent text-slate-900 dark:text-white pt-20 transition-colors duration-500">
      
      {/* Header */}
      <section className="py-24 md:py-40 text-center relative">
        <div className="relative z-10 px-4">
            <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter text-slate-950 dark:text-white">Insights.</h1>
            <p className="text-2xl text-slate-700 dark:text-slate-400 max-w-2xl mx-auto mb-16 font-semibold">Latest trends in AI, SEO, and Digital Engineering.</p>
            
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6 p-4">
                <div className="relative flex-grow">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
                    <input type="text" placeholder="Search insights..." className="w-full bg-white dark:bg-white/5 border-2 border-slate-100 dark:border-white/10 rounded-full py-5 pl-16 pr-8 text-slate-900 dark:text-white focus:border-advento-500 outline-none transition-all shadow-xl backdrop-blur-md" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {categories.map(cat => (
                        <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-8 py-5 rounded-full text-sm font-black uppercase tracking-widest whitespace-nowrap transition-all border-2 shadow-xl ${selectedCategory === cat ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 border-slate-950 dark:border-white' : 'bg-white/80 dark:bg-white/5 border-slate-100 dark:border-white/10 text-slate-500 hover:border-advento-500'}`}>
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {filteredBlogs.map((blog) => (
                  <div key={blog.id} className="bento-card rounded-[56px] overflow-hidden group cursor-pointer flex flex-col h-full hover:scale-[1.02] transition-all duration-700 shadow-3xl" onClick={() => onNavigate(`/blog/${blog.slug}`)}>
                      <div className="aspect-video overflow-hidden relative">
                          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                          <div className="absolute top-6 left-6">
                              <span className="bg-advento-500 text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl">
                                  {blog.category || 'General'}
                              </span>
                          </div>
                      </div>

                      <div className="p-10 flex-grow flex flex-col">
                          <div className="flex items-center gap-6 text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-6">
                              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {blog.date}</span>
                              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 5 min read</span>
                          </div>
                          
                          <h2 className="text-3xl font-black mb-6 text-slate-950 dark:text-white leading-tight line-clamp-2">{blog.title}</h2>
                          <p className="text-slate-600 dark:text-slate-400 text-lg font-bold leading-relaxed mb-10 line-clamp-3">{blog.excerpt}</p>
                          
                          <div className="flex justify-between items-center mt-auto pt-8 border-t border-slate-100 dark:border-white/5">
                              <button className="text-sm font-black flex items-center gap-3 text-slate-950 dark:text-white hover:text-advento-500 transition-all uppercase tracking-widest">
                                  Access <ArrowRight className="w-5 h-5" />
                              </button>
                              <div className="text-xs font-black text-slate-400 uppercase tracking-widest">{blog.author}</div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>

          {filteredBlogs.length === 0 && (
              <div className="text-center py-40 bento-card rounded-[56px]">
                  <p className="text-2xl font-black text-slate-400 mb-8 uppercase tracking-widest">No matching insights.</p>
                  <button onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} className="text-advento-600 font-black underline underline-offset-8">Clear Intelligence Matrix</button>
              </div>
          )}
      </section>
    </div>
  );
};

export default Blog;