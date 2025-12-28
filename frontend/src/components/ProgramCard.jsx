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
      onClick={() => window.open(program.link, '_blank')}
      className="group relative bg-white hover:bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:border-[#F48120]/50 hover:shadow-xl hover:shadow-orange-900/5 cursor-pointer"
    >
      <div className="absolute inset-0 bg-linear-to-br from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-3">
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wide font-bold border ${
            isHackathon 
              ? 'bg-purple-50 border-purple-100 text-purple-600' 
              : 'bg-emerald-50 border-emerald-100 text-emerald-600'
          }`}>
            {program.type}
          </span>
          <div className="text-gray-400 group-hover:text-slate-900 transition-colors">
            <ExternalLink size={16} />
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#F48120] transition-colors leading-tight">
          {program.name}
        </h3>
        
        <p className="text-slate-500 text-xs mb-4 line-clamp-2 leading-relaxed">
          {program.description}
        </p>
        
        <div className="flex items-center text-xs text-slate-600 bg-gray-50 p-2.5 rounded-lg border border-gray-100 group-hover:bg-white group-hover:border-orange-100 transition-colors">
          <CalendarIcon size={14} className="mr-2 text-[#F48120]" />
          <span>{program.months.join(', ')}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgramCard;
