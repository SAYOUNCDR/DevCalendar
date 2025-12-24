import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProgramCard from './components/ProgramCard';
import HiringCalendar from './components/HiringCalendar';
import { Code2, Briefcase } from 'lucide-react';
import { programs, companies } from './data';

function App() {
  const [activeTab, setActiveTab] = useState('hackathons');
  // Removed loading state and data fetching since we use static data now
  const loading = false;

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 selection:bg-blue-500/30">
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tighter">
            Crack Your Dream Career
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            One-stop tracking for top Open Source Programs, Hackathons, and Premium Company Hiring Cycles in India.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1 rounded-xl border border-gray-200 shadow-sm flex space-x-1">
            <button
              onClick={() => setActiveTab('hackathons')}
              className={`cursor-pointer flex items-center px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'hackathons'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-gray-50'
              }`}
            >
              <Code2 className="mr-2 w-4 h-4" />
              OSS & Hackathons
            </button>
            <button
              onClick={() => setActiveTab('hiring')}
              className={`cursor-pointer flex items-center px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'hiring'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-gray-50'
              }`}
            >
              <Briefcase className="mr-2 w-4 h-4" />
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {programs.map((program, index) => (
                  <ProgramCard key={program._id || index} program={program} index={index} />
                ))}
              </div>
            ) : (
              <HiringCalendar companies={companies} />
            )}
          </div>
        )}
      </main>

      <footer className="border-t border-gray-200 py-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} DevCalendar. Made with ❤️ by Sayoun Parui.</p>
      </footer>
    </div>
  );
}

export default App;
