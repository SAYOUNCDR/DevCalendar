import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProgramCard from './components/ProgramCard';
import HiringCalendar from './components/HiringCalendar';
import { Code2, Briefcase, Search, ChevronDown } from 'lucide-react';
import { programs, companies } from './data';

function App() {
  const [activeTab, setActiveTab] = useState('hackathons');
  // Removed loading state and data fetching since we use static data now
  const loading = false;

  const [ossSearch, setOssSearch] = useState('');
  const [ossType, setOssType] = useState('All');

  const filteredPrograms = programs.filter(program => {
    const searchLower = ossSearch.toLowerCase();
    const matchesSearch = program.name.toLowerCase().includes(searchLower) || 
                          program.description.toLowerCase().includes(searchLower) ||
                          program.type.toLowerCase().includes(searchLower);
    const matchesType = ossType === 'All' || program.type === ossType;
    return matchesSearch && matchesType;
  });

  const programTypes = ['All', ...new Set(programs.map(p => p.type))];

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 selection:bg-blue-500/30">
      <Navbar />

      <main className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tighter">
            Crack Your Dream Career
          </h1>
          <p className="text-slate-500 text-base max-w-2xl mx-auto font-medium">
            One-stop tracking for top Open Source Programs, Hackathons, and Premium Company Hiring Cycles in India.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-xl border border-gray-200 shadow-sm flex space-x-1">
            <button
              onClick={() => setActiveTab('hackathons')}
              className={`cursor-pointer flex items-center px-5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                activeTab === 'hackathons'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-gray-50'
              }`}
            >
              <Code2 className="mr-2 w-3.5 h-3.5" />
              OSS & Hackathons
            </button>
            <button
              onClick={() => setActiveTab('hiring')}
              className={`cursor-pointer flex items-center px-5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                activeTab === 'hiring'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-gray-50'
              }`}
            >
              <Briefcase className="mr-2 w-3.5 h-3.5" />
              Hiring Calendar
            </button>
          </div>
        </div>

        {/* Content Area */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="animate-fade-in-up">
            {activeTab === 'hackathons' ? (
              <>
                {/* Search and Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="text"
                      placeholder="Search programs..."
                      className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-400 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-all"
                      value={ossSearch}
                      onChange={(e) => setOssSearch(e.target.value)}
                    />
                  </div>
                  <div className="relative w-full md:w-56">
                    <select
                      className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2.5 pr-10 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-400 shadow-sm transition-all cursor-pointer"
                      value={ossType}
                      onChange={(e) => setOssType(e.target.value)}
                    >
                      {programTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPrograms.map((program, index) => (
                    <ProgramCard key={program._id || index} program={program} index={index} />
                  ))}
                  {filteredPrograms.length === 0 && (
                    <div className="col-span-full text-center py-12 text-slate-500">
                      No programs found matching your criteria.
                    </div>
                  )}
                </div>
              </>
            ) : (
              <HiringCalendar companies={companies} />
            )}
          </div>
        )}
      </main>

      <footer className="border-t border-gray-200 py-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} DevCalendar. Made with ❤️ by <a href="https://x.com/DriftNBlde" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors underline decoration-slate-300 underline-offset-4">Sayoun Parui</a>.</p>
      </footer>
    </div>
  );
}

export default App;
