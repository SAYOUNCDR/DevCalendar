import React, { useState, useEffect } from 'react';
import { Terminal, Calendar, Github } from 'lucide-react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Hide if scrolling down AND scrolled past 50px
        // Show if scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-24'}`}>
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm rounded-2xl transition-all">
        <div className="px-6 flex items-center justify-between h-14">
          <div className="flex items-center space-x-3">
            <div className="bg-slate-900 p-1.5 rounded-lg shadow-sm">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-slate-900 tracking-tighter">
              DevCalendar
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/SAYOUNCDR/DevCalendar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-lg border border-transparent hover:border-gray-200"
            >
              <Github className="w-4 h-4 mr-2" />
              Star Repo
            </a>
            <div className="w-px h-5 bg-gray-200"></div>
            <span className="text-xs text-slate-400 font-medium">Student Opportunities</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
