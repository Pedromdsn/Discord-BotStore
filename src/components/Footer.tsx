import { Bot } from 'lucide-react';
export const Footer = () => (
  <footer className='bg-[#0a0a0b] border-t border-white/5 py-12 md:py-20'>
    <div className='max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center gap-6'>
      <div className='flex items-center gap-2'>
        <Bot className='text-[#5865f2] w-8 h-8' />
        <span className='text-white font-bold text-2xl'>PA Hub</span>
      </div>
      <p className='text-gray-500 text-center max-w-md text-sm md:text-base'>
        Advanced Discord infrastructure for modern communities.
      </p>
      <div className='text-gray-600 text-[10px] md:text-xs mt-4'>
        © 2026 Pedromdsn. All rights reserved.
      </div>
    </div>
  </footer>
);
