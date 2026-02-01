'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { DiscordMessage, DiscordEmbed } from '@/components/DiscordEmbed';
import { ArrowLeft, CheckCircle2, Sparkles, Shield, Gamepad2, Puzzle, ShoppingBag, Sword } from 'lucide-react';

export default function MineCraftLinkPage() {
  return (
    <div className='pt-32 pb-24 px-4 min-h-screen'>
      <div className='max-w-7xl mx-auto'>
        <Link href='/' className='inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-16 group select-none cursor-pointer'>
          <ArrowLeft className='w-4 h-4 group-hover:-translate-x-1 transition-transform' />
          Back to Collection
        </Link>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24'>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className='flex items-center gap-4 mb-8'>
               <div className='p-3 rounded-2xl bg-white/5 border border-white/10'><Gamepad2 className='w-6 h-6 text-["#57F287"]' /></div>
               <span className='text-["#57F287"] font-black text-sm uppercase tracking-[0.3em]'>MineCraftLink Engine</span>
            </div>
            <h1 className='text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter'>MineCraftLink</h1>
            <p className='text-gray-400 text-xl mb-12 leading-relaxed'>Server Bridge. Direct Minecraft console management.</p>
            <div className='grid sm:grid-cols-2 gap-6 mb-16'>
              {['Direct Console Access', 'Live TPS Feed', 'Player Management', 'Status Webhooks', 'Cross-Chat Sync', 'Whitelist Control'].map((f, i) => (
                <div key={i} className='flex items-start gap-3 text-gray-300'>
                  <CheckCircle2 className='w-5 h-5 text-emerald-500 mt-1 flex-shrink-0' />
                  <span className='font-medium'>{f}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className='glass rounded-[2.5rem] p-6 md:p-10 shadow-3xl h-fit'>
            <div className='flex items-center justify-between mb-10'>
                <h4 className='text-gray-500 font-bold text-[10px] uppercase tracking-[0.3em] font-mono'>Active Instance</h4>
                <div className='flex gap-2 items-center'>
                  <span className='text-emerald-500 text-[10px] font-bold uppercase tracking-wider'>Online</span>
                  <div className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
                </div>
            </div>
            <div className='space-y-6 text-left'>
              <DiscordMessage user='MineCraftLink' avatar='https://api.dicebear.com/7.x/bottts/svg?seed=mc' roleColor='#57F287'><DiscordEmbed title='🎮 Server Health' description={<>Survival is <span className="font-bold">Online</span>.</>} fields={[{ name: 'TPS', value: <strong>20.0</strong>, inline: true }, { name: 'Players', value: '12/50', inline: true }]} color='#57F287' /></DiscordMessage>
    <DiscordMessage user='Pedromdsn' avatar='https://api.dicebear.com/7.x/avataaars/png?seed=pedro'>/list</DiscordMessage>
    <DiscordMessage user='MineCraftLink' avatar='https://api.dicebear.com/7.x/bottts/svg?seed=mc' roleColor='#57F287'><DiscordEmbed title='👥 Online Players' description={<>Steve, Alex, <strong>Pedromdsn</strong>, Notch...</>} color='#57F287' /></DiscordMessage>
    <DiscordMessage user='Pedromdsn' avatar='https://api.dicebear.com/7.x/avataaars/png?seed=pedro'>/tps</DiscordMessage>
    <DiscordMessage user='MineCraftLink' avatar='https://api.dicebear.com/7.x/bottts/svg?seed=mc' roleColor='#57F287'>Current TPS: <strong>20.0</strong> (100% stable)</DiscordMessage>
    <DiscordMessage user='MineCraftLink' avatar='https://api.dicebear.com/7.x/bottts/svg?seed=mc' roleColor='#57F287'><DiscordEmbed title='🛠️ Whitelist' description='User added successfully.' color='#5865F2' /></DiscordMessage>
            </div>
          </motion.div>
        </div>
        
        <div className='flex flex-col sm:flex-row justify-between items-stretch gap-4 border-t border-white/5 pt-12 mt-20'>
            <Link href='/projects/sentinel' className='flex-1 glass p-6 rounded-2xl group transition-all hover:border-[#5865f2]/30 active:scale-[0.98]'><div className='flex flex-col gap-1'><span className='text-gray-500 text-[10px] uppercase font-bold tracking-widest'>Previous Project</span><span className='text-white font-bold group-hover:text-[#5865f2] transition-colors flex items-center gap-2'>← Sentinel</span></div></Link>
            <Link href='/projects/sokomaster' className='flex-1 glass p-6 rounded-2xl group transition-all hover:border-[#5865f2]/30 active:scale-[0.98] text-right'><div className='flex flex-col gap-1'><span className='text-gray-500 text-[10px] uppercase font-bold tracking-widest'>Next Project</span><span className='text-white font-bold group-hover:text-[#5865f2] transition-colors flex items-center justify-end gap-2'>SokoMaster →</span></div></Link>
        </div>
      </div>
    </div>
  );
}
