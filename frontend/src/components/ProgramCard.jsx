import React from 'react';
import { ExternalLink, Calendar as CalendarIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const ProgramCard = ({ program, index }) => {
  const isHackathon = program.type === 'Hackathon';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white hover:bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-900/5"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
            isHackathon 
              ? 'bg-purple-50 border-purple-100 text-purple-600' 
              : 'bg-emerald-50 border-emerald-100 text-emerald-600'
          }`}>
            {program.type}
          </span>
          <a 
            href={program.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-slate-900 transition-colors"
          >
            <ExternalLink size={18} />
          </a>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {program.name}
        </h3>
        
        <p className="text-slate-500 text-sm mb-4 line-clamp-2">
          {program.description}
        </p>
        
        <div className="flex items-center text-sm text-slate-600 bg-gray-50 p-3 rounded-lg border border-gray-100 group-hover:bg-white group-hover:border-blue-100 transition-colors">
          <CalendarIcon size={16} className="mr-2 text-blue-500" />
          <span>{program.months.join(', ')}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgramCard;
