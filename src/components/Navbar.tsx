'use client';
import Link from 'next/link';
import { Bot, Github, Menu } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='fixed top-0 w-full z-50 bg-[#0a0a0b]/80 backdrop-blur-md border-b border-white/5'>
      <div className='max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between'>
        <Link href='/' className='flex items-center gap-2 group cursor-pointer select-none'>
          <div className='bg-[#5865f2] p-1.5 md:p-2 rounded-lg group-hover:rotate-12 transition-transform'>
            <Bot className='text-white w-5 h-5 md:w-6 md:h-6' />
          </div>
          <span className='text-white font-bold text-lg md:text-xl tracking-tight'>PA Hub <span className='text-[#5865f2]'>Bots</span></span>
        </Link>
        <div className='hidden md:flex items-center gap-8'>
          <Link href='/' className='text-gray-400 hover:text-white transition-colors font-medium'>Home</Link>
          <Link href='/#projects' className='text-gray-400 hover:text-white transition-colors font-medium'>Projects</Link>
          <a href='https://github.com' target='_blank' className='bg-white/5 hover:bg-white/10 p-2 rounded-lg transition-colors'>
            <Github className='text-white w-5 h-5' />
          </a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className='md:hidden text-white p-2'>
          <Menu className='w-6 h-6' />
        </button>
      </div>
      {isOpen && (
        <div className='md:hidden bg-[#0a0a0b] border-b border-white/5 p-4 flex flex-col gap-4'>
          <Link href='/' onClick={() => setIsOpen(false)} className='text-white font-medium'>Home</Link>
          <Link href='/#projects' onClick={() => setIsOpen(false)} className='text-white font-medium'>Projects</Link>
        </div>
      )}
    </nav>
  );
};
