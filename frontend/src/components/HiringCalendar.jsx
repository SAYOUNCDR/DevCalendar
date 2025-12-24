import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Search, ChevronDown } from 'lucide-react';

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
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text"
            placeholder="Search companies (e.g. Google, Product)..."
            className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-10 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-400 transition-all shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="relative">
          <select 
            className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-400 shadow-sm transition-all cursor-pointer min-w-[160px]"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="">All Months</option>
            {months.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map((company, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Building2 className="text-blue-600" size={20} />
              </div>
              <span className={`text-xs px-2 py-1 rounded border font-semibold ${
                company.category === 'Product' 
                  ? 'bg-orange-50 border-orange-100 text-orange-600' 
                  : 'bg-indigo-50 border-indigo-100 text-indigo-600'
              }`}>
                {company.category}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 mb-1">{company.name}</h3>
            <p className="text-slate-500 text-sm mb-4 min-h-[40px] line-clamp-2">{company.description}</p>
            
            <div className="space-y-3">
              <div>
                <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Roles</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {company.roles.map((role, i) => (
                    <span key={i} className="text-xs bg-gray-50 border border-gray-100 px-2 py-1 rounded text-slate-600 font-medium">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Active In</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {company.hiring_months.map((m, i) => (
                    <span key={i} className={`text-xs px-2 py-1 rounded font-medium ${
                      selectedMonth === m ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-50 text-slate-600 border border-gray-100'
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
