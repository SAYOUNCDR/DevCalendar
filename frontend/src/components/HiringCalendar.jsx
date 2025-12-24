import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Search } from 'lucide-react';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const HiringCalendar = ({ companies }) => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCompanies = companies.filter(company => {
    const matchesMonth = selectedMonth ? company.hiring_months.includes(selectedMonth) : true;
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          company.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesMonth && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text"
            placeholder="Search companies (e.g. Google, Product)..."
            className="w-full bg-[#18181b] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <select 
          className="bg-[#18181b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="">All Months</option>
          {months.map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map((company, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-[#18181b] border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Building2 className="text-blue-400" size={20} />
              </div>
              <span className={`text-xs px-2 py-1 rounded border ${
                company.category === 'Product' 
                  ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' 
                  : 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
              }`}>
                {company.category}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-1">{company.name}</h3>
            <p className="text-gray-400 text-sm mb-4 min-h-[40px]">{company.description}</p>
            
            <div className="space-y-3">
              <div>
                <span className="text-xs text-gray-500 uppercase font-semibold">Roles</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {company.roles.map((role, i) => (
                    <span key={i} className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <span className="text-xs text-gray-500 uppercase font-semibold">Active In</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {company.hiring_months.map((m, i) => (
                    <span key={i} className={`text-xs px-2 py-1 rounded ${
                      selectedMonth === m ? 'bg-purple-500 text-white' : 'bg-white/5 text-gray-300'
                    }`}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HiringCalendar;
