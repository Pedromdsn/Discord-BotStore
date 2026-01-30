'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { DiscordMessage, DiscordEmbed } from '@/components/DiscordEmbed';
import { ArrowLeft, CheckCircle2, Sparkles, Shield, Gamepad2, Puzzle, ShoppingBag, Sword } from 'lucide-react';

export default function PurchaseFlowPage() {
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
               <div className='p-3 rounded-2xl bg-white/5 border border-white/10'><ShoppingBag className='w-6 h-6 text-["#EB459E"]' /></div>
               <span className='text-["#EB459E"] font-black text-sm uppercase tracking-[0.3em]'>PurchaseFlow Engine</span>
            </div>
            <h1 className='text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter'>PurchaseFlow</h1>
            <p className='text-gray-400 text-xl mb-12 leading-relaxed'>Revenue Sync. Automated value delivery.</p>
            <div className='grid sm:grid-cols-2 gap-6 mb-16'>
              {['Auto Role Delivery', 'Webhook Sync', 'Purchase Logs', 'Refund Management', 'Member Perks', 'Stripe Integration'].map((f, i) => (
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
              <DiscordMessage user='PurchaseFlow' avatar='https://api.dicebear.com/7.x/bottts/svg?seed=shop' roleColor='#EB459E'><DiscordEmbed title='💰 New Payment' description={<><strong>Pedromdsn</strong> bought <strong>Ultra VIP</strong>.</>} color='#57F287' fields={[{ name: 'Order ID', value: '#TX-9901', inline: true }, { name: 'Status', value: <strong>✅ Verified</strong>, inline: true }]} footer='PurchaseFlow Sync' /></DiscordMessage>
    <DiscordMessage user='PurchaseFlow' avatar='https://api.dicebear.com/7.x/bottts/svg?seed=shop' roleColor='#EB459E'><DiscordEmbed title='✅ Role Assigned' description={<>User <strong>Pedromdsn</strong> has been given the rank.</>} color='#5865F2' /></DiscordMessage>
    <DiscordMessage user='PurchaseFlow' avatar='https://api.dicebear.com/7.x/bottts/svg?seed=shop' roleColor='#EB459E'><DiscordEmbed title='🔄 Subscription' description='Membership renewed for User#1234.' color='#EB459E' /></DiscordMessage>
            </div>
          </motion.div>
        </div>
        
        <div className='flex flex-col sm:flex-row justify-between items-stretch gap-4 border-t border-white/5 pt-12 mt-20'>
            <Link href='/projects/sokomaster' className='flex-1 glass p-6 rounded-2xl group transition-all hover:border-[#5865f2]/30 active:scale-[0.98]'><div className='flex flex-col gap-1'><span className='text-gray-500 text-[10px] uppercase font-bold tracking-widest'>Previous Project</span><span className='text-white font-bold group-hover:text-[#5865f2] transition-colors flex items-center gap-2'>← SokoMaster</span></div></Link>
            <Link href='/projects/shinobi-realm' className='flex-1 glass p-6 rounded-2xl group transition-all hover:border-[#5865f2]/30 active:scale-[0.98] text-right'><div className='flex flex-col gap-1'><span className='text-gray-500 text-[10px] uppercase font-bold tracking-widest'>Next Project</span><span className='text-white font-bold group-hover:text-[#5865f2] transition-colors flex items-center justify-end gap-2'>Shinobi Realm →</span></div></Link>
        </div>
      </div>
    </div>
  );
}
