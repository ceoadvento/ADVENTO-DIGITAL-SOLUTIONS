import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Course from './pages/Course';
import Contact from './pages/Contact';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import Community from './pages/Community';
import Chatbot from './components/Chatbot';
import About from './pages/About';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Legal from './pages/Legal';
import Login from './pages/Login';
import Admin from './pages/Admin';

const App: React.FC = () => {
  const getHashPath = () => {
    const hash = window.location.hash.slice(1);
    return hash.startsWith('/') ? hash : '/' + hash;
  };

  const [currentPath, setCurrentPath] = useState(getHashPath() === '/' ? '/' : getHashPath());
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('advento_admin') === 'true');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('advento_theme') as 'light' | 'dark') || 'light';
  });

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('advento_theme', nextTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const navigate = (path: string) => {
    if (path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('tel:')) {
      window.location.href = path;
      return;
    }
    window.location.hash = path;
  };

  const handleAdminLogin = () => {
      setIsAdmin(true);
      navigate('/admin');
  };

  const handleLogout = () => {
      localStorage.removeItem('advento_admin');
      setIsAdmin(false);
      navigate('/');
  };

  useEffect(() => {
    const handleHashChange = () => {
      let path = window.location.hash.slice(1);
      if (!path) path = '/';
      if (!path.startsWith('/')) path = '/' + path;
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    let path = currentPath.split('?')[0];
    if (path.length > 1 && path.endsWith('/')) {
      path = path.slice(0, -1);
    }

    if (path.startsWith('/services/') && path.length > '/services/'.length) {
      const slug = path.replace('/services/', '');
      return <ServiceDetail serviceId={slug} onNavigate={navigate} />;
    }

    if (path.startsWith('/blog/') && path.length > '/blog/'.length) {
      const slug = path.replace('/blog/', '');
      return <BlogDetail slug={slug} onNavigate={navigate} />;
    }

    if (path.startsWith('/legal/')) {
        const type = path.replace('/legal/', '') as any;
        return <Legal type={type} />;
    }

    if (path === '/admin') {
        if (!isAdmin) {
            return <Login onLogin={handleAdminLogin} onNavigate={navigate} />;
        }
        return <Admin onLogout={handleLogout} onNavigate={navigate} />;
    }

    switch (path) {
      case '/': return <Home onNavigate={navigate} />;
      case '/course': return <Course onNavigate={navigate} />;
      case '/contact': return <Contact />;
      case '/community': return <Community />;
      case '/blog': return <Blog onNavigate={navigate} />;
      case '/services': return <ServicesPage onNavigate={navigate} />;
      case '/about': return <About />;
      case '/careers': return <Careers />;
      case '/login': return isAdmin ? <Admin onLogout={handleLogout} onNavigate={navigate} /> : <Login onLogin={handleAdminLogin} onNavigate={navigate} />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  const isAuthPage = currentPath.startsWith('/login') || currentPath.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 dark:text-slate-100 relative transition-colors duration-500">
      {!isAuthPage && <Navbar onNavigate={navigate} theme={theme} toggleTheme={toggleTheme} />}
      <main className="flex-grow">
        {renderPage()}
      </main>
      {!isAuthPage && <Footer onNavigate={navigate} theme={theme} />}
      {!isAuthPage && <Chatbot />}
    </div>
  );
};

export default App;