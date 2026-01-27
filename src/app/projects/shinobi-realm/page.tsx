'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { DiscordMessage, DiscordEmbed } from '@/components/DiscordEmbed';
import { ArrowLeft, CheckCircle2, Sparkles, Shield, Gamepad2, Puzzle, ShoppingBag, Sword } from 'lucide-react';

export default function ShinobiRealmPage() {
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
               <div className='p-3 rounded-2xl bg-white/5 border border-white/10'><Sword className='w-6 h-6 text-["#FF8C00"]' /></div>
               <span className='text-["#FF8C00"] font-black text-sm uppercase tracking-[0.3em]'>Shinobi Realm Engine</span>
            </div>
            <h1 className='text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter'>Shinobi Realm</h1>
            <p className='text-gray-400 text-xl mb-12 leading-relaxed'>Epic RPG. Naruto-themed engine.</p>
            <div className='grid sm:grid-cols-2 gap-6 mb-16'>
              {['Village Systems', 'Jutsu Mastery', 'Combat Engine', 'Chunin Exams', 'Clan Wars', 'Mission Board'].map((f, i) => (
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
              <DiscordMessage user='Pedromdsn' avatar='https://api.dicebear.com/7.x/avataaars/png?seed=pedro'>/attack rasengan @target</DiscordMessage>
    <DiscordMessage user='Shinobi Realm' avatar='https://api.dicebear.com/7.x/bottts/svg?seed=naruto' roleColor='#FF8C00'><DiscordEmbed title='🍥 Combat Log' description={<><strong>Pedromdsn</strong> used <strong>Rasengan</strong>!<br />Dealing <strong>450 DMG</strong> to target.</>} color='#FF8C00' fields={[{ name: 'HP', value: '1200/1500', inline: true }, { name: 'Target HP', value: '850/2000', inline: true }]} footer='Shinobi Engine' /></DiscordMessage>
    <DiscordMessage user='Pedromdsn' avatar='https://api.dicebear.com/7.x/avataaars/png?seed=pedro'>/mission</DiscordMessage>
    <DiscordMessage user='Shinobi Realm' avatar='https://api.dicebear.com/7.x/bottts/svg?seed=naruto' roleColor='#FF8C00'><DiscordEmbed title='📜 Mission Ready' description='An A-Rank mission is available.' color='#FEE75C' /></DiscordMessage>
    <DiscordMessage user='Shinobi Realm' avatar='https://api.dicebear.com/7.x/bottts/svg?seed=naruto' roleColor='#FF8C00'><DiscordEmbed title='✨ Skill Mastered' description='You learned the Shadow Clone jutsu.' color='#5865F2' /></DiscordMessage>
            </div>
          </motion.div>
        </div>
        
        <div className='flex flex-col sm:flex-row justify-between items-stretch gap-4 border-t border-white/5 pt-12 mt-20'>
            <Link href='/projects/purchaseflow' className='flex-1 glass p-6 rounded-2xl group transition-all hover:border-[#5865f2]/30 active:scale-[0.98]'><div className='flex flex-col gap-1'><span className='text-gray-500 text-[10px] uppercase font-bold tracking-widest'>Previous Project</span><span className='text-white font-bold group-hover:text-[#5865f2] transition-colors flex items-center gap-2'>← PurchaseFlow</span></div></Link>
            <div></div>
        </div>
      </div>
    </div>
  );
}
