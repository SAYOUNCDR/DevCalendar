import React from 'react';
import { Terminal, Calendar, Github } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm rounded-2xl transition-all">
        <div className="px-6 flex items-center justify-between h-14">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-1.5 rounded-lg shadow-sm border border-orange-100">
              <Terminal className="w-4 h-4 text-[#F48120]" />
            </div>
            <span className="text-lg font-bold text-slate-900 tracking-tighter">
              DevCalendar
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <a 
              href="https://github.com/SAYOUNCDR/DevCalendar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-lg border border-transparent hover:border-gray-200"
            >
              <Github className="w-4 h-4 mr-2" />
              Star Repo
            </a>
            <a 
              href="https://x.com/DriftNBlde" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Follow on X (Twitter)"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-slate-500 group-hover:text-slate-900 fill-current" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
