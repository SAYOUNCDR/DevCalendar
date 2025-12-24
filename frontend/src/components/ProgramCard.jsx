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
      className="group relative bg-[#18181b] hover:bg-[#202025] border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
            isHackathon 
              ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' 
              : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
          }`}>
            {program.type}
          </span>
          <a 
            href={program.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <ExternalLink size={18} />
          </a>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
          {program.name}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {program.description}
        </p>
        
        <div className="flex items-center text-sm text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5">
          <CalendarIcon size={16} className="mr-2 text-pink-400" />
          <span>{program.months.join(', ')}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgramCard;
