import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import ProgramCard from './components/ProgramCard';
import HiringCalendar from './components/HiringCalendar';
import { Code2, Briefcase } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('hackathons');
  const [programs, setPrograms] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [programsRes, companiesRes] = await Promise.all([
          axios.get('http://localhost:5000/api/programs'),
          axios.get('http://localhost:5000/api/companies'),
        ]);
        setPrograms(programsRes.data);
        setCompanies(companiesRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
            Crack Your Dream Career
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            One-stop tracking for top Open Source Programs, Hackathons, and Premium Company Hiring Cycles in India.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white/5 p-1 rounded-xl border border-white/10 flex space-x-1">
            <button
              onClick={() => setActiveTab('hackathons')}
              className={`flex items-center px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'hackathons'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Code2 className="mr-2 w-4 h-4" />
              OSS & Hackathons
            </button>
            <button
              onClick={() => setActiveTab('hiring')}
              className={`flex items-center px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'hiring'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
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
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
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

      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} DevPath. Built with MERN.</p>
      </footer>
    </div>
  );
}

export default App;
