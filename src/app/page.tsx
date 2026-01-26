'use client';
import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';
import { bots } from '@/data/bots';
import { Zap, Shield, Rocket, ArrowRight, CheckCircle, MessageSquare, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-4'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#5865f2]/10 blur-[120px] rounded-full' />
        <div className='max-w-7xl mx-auto relative z-10'>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='text-center max-w-4xl mx-auto'>
            <div className='inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-md'>
              <Zap className='w-4 h-4 text-[#5865f2] animate-pulse' />
              <span className='text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-300'>Premium Discord Software • High Performance</span>
            </div>
            <h1 className='text-4xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[1] md:leading-[0.9]'>
              Elevate Your <span className='text-[#5865f2]'>Discord</span> Experience.
            </h1>
            <p className='text-gray-400 text-base md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed'>
              Deploy custom-built Discord infrastructure in minutes. Engineered for scale, security, and performance.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <a href='#projects' className='w-full sm:w-auto px-10 py-4 bg-[#5865f2] hover:bg-[#5865f2]/90 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-2 group cursor-pointer'>
                Explore Projects <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className='py-20 bg-[#0a0a0b]'>
        <div className='max-w-7xl mx-auto px-4 md:px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-5xl font-black text-white mb-4 tracking-tight'>How it Works</h2>
            <p className='text-gray-400'>From acquisition to deployment in three simple steps.</p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {[
              { step: '01', title: 'Choose Your Bot', desc: 'Browse our specialized collection and find the perfect match for your community.' },
              { step: '02', title: 'Get Documentation', desc: 'Access detailed setup guides and technical specifications for seamless integration.' },
              { step: '03', title: 'Instant Deployment', desc: 'Run your new bot on your infrastructure with our optimized startup sequences.' }
            ].map((s, i) => (
              <div key={i} className='relative p-8 glass rounded-3xl'>
                <span className='text-5xl font-black text-[#5865f2]/20 absolute top-6 right-8'>{s.step}</span>
                <h3 className='text-xl font-bold text-white mb-4'>{s.title}</h3>
                <p className='text-gray-400 text-sm leading-relaxed'>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Grid */}
      <section id='projects' className='py-20 md:py-32'>
        <div className='max-w-7xl mx-auto px-4 md:px-6'>
          <h2 className='text-3xl md:text-5xl font-black text-white mb-16 tracking-tight text-center md:text-left'>The Collection.</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {bots.map((bot) => (
              <ProjectCard key={bot.id} bot={bot} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-20 bg-white/[0.01]'>
        <div className='max-w-7xl mx-auto px-4 md:px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-5xl font-black text-white mb-4 tracking-tight'>Trusted by Leaders</h2>
            <p className='text-gray-400'>Real feedback from server owners using our specialized software.</p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              { name: 'Alex Rivers', role: 'Community Manager', text: 'The Sentinel bot changed how we handle security. Instant alerts saved us from several intrusion attempts.' },
              { name: 'Sarah Chen', role: 'Server Owner', text: 'Nexus tickets are incredibly fast. Our staff response time improved by 40% since deployment.' },
              { name: 'Marco Silva', role: 'MC Network Admin', text: 'MineCraftLink is the most stable bridge we have ever used. Direct console access is a game changer.' }
            ].map((t, i) => (
              <div key={i} className='p-8 glass rounded-3xl flex flex-col gap-4'>
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, i) => <Star key={i} className='w-4 h-4 fill-[#5865f2] text-[#5865f2]' />)}
                </div>
                <p className='text-gray-300 italic text-sm leading-relaxed'>"{t.text}"</p>
                <div className='mt-4'>
                  <p className='text-white font-bold'>{t.name}</p>
                  <p className='text-gray-500 text-xs'>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className='py-20 md:py-40 px-4'>
        <div className='max-w-7xl mx-auto px-4 md:px-6'>
          <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {[ 
              { icon: Shield, title: 'Elite Protection', desc: 'Advanced sentinel monitoring and cryptographically secure token management.' },
              { icon: Rocket, title: 'High Velocity', desc: 'Built with Bun and Next.js for zero latency.' },
              { icon: Zap, title: 'Easy Deploy', desc: 'One-command deployment for all software.' }
            ].map((f, i) => (
              <div key={i} className='p-8 md:p-10 rounded-3xl glass hover:bg-white/[0.05] transition-colors'>
                <div className='w-12 h-12 md:w-14 md:h-14 bg-[#5865f2]/20 rounded-2xl flex items-center justify-center text-[#5865f2] mb-6 md:mb-8'>
                  <f.icon className='w-6 h-6 md:w-7 md:h-7' />
                </div>
                <h3 className='text-xl md:text-2xl font-bold text-white mb-4'>{f.title}</h3>
                <p className='text-gray-400 text-sm md:text-base leading-relaxed'>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
