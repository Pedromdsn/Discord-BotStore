'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export const ProjectCard = ({ bot }: { bot: any }) => {
  const Icon = (Icons as any)[bot.icon] || Icons.Bot;
  const router = useRouter();
  
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={() => router.push(`/projects/${bot.id}`)}
      className='glass rounded-2xl overflow-hidden hover:border-[#5865f2]/40 transition-all group active:scale-[0.98] md:active:scale-100 h-full flex flex-col cursor-pointer select-none'
    >
      <div className='p-6 md:p-8 flex flex-col h-full'>
        <div className='mb-6 flex items-start justify-between'>
          <div className='p-3 md:p-4 rounded-xl bg-white/5 group-hover:bg-[#5865f2]/20 transition-colors'>
            <Icon className='w-6 h-6 md:w-8 md:h-8' style={{ color: bot.color }} />
          </div>
          <div className='px-3 py-1 bg-white/5 rounded-full text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest'>
            SOFTWARE
          </div>
        </div>
        <h3 className='text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#5865f2] transition-colors'>{bot.name}</h3>
        <p className='text-gray-400 text-sm leading-relaxed mb-6 md:mb-8 flex-grow'>
          {bot.description}
        </p>
        <div className='w-full inline-flex items-center justify-center bg-white/5 group-hover:bg-[#5865f2] text-white font-bold py-3 md:py-3.5 rounded-xl transition-all'>
          View Project
        </div>
      </div>
    </motion.div>
  );
};
