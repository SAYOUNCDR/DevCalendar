import React from 'react';
import { Terminal, Calendar } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
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
            <a href="https://github.com/SAYOUNCDR/DevCalendar" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium">
              GitHub
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
