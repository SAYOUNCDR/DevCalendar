import React from 'react';
import { Sparkles, Calendar } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 p-2 rounded-lg shadow-md shadow-blue-500/20">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              DevCalendar
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/SAYOUNCDR/DevCalendar" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors font-medium">
              GitHub
            </a>
            <div className="w-px h-6 bg-gray-200"></div>
            <span className="text-sm text-slate-500 font-medium">Student Opportunities</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
