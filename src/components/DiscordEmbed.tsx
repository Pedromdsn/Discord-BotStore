import React from 'react';

interface DiscordEmbedProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  color?: string;
  fields?: { name: React.ReactNode; value: React.ReactNode; inline?: boolean }[];
  footer?: React.ReactNode;
  timestamp?: string;
}

export const DiscordEmbed = ({ title, description, color, fields, footer, timestamp }: DiscordEmbedProps) => (
  <div className='bg-[#2b2d31] rounded-md p-3 md:p-4 border-l-4 my-2 flex flex-col gap-2 w-full max-w-lg shadow-lg select-none text-left' style={{ borderLeftColor: color || '#5865F2' }}>
    {title && <h3 className='text-white font-bold text-sm md:text-base hover:underline cursor-pointer' suppressHydrationWarning>{title}</h3>}
    {description && <p className='text-gray-300 text-xs md:text-sm whitespace-pre-wrap leading-relaxed' suppressHydrationWarning>{description}</p>}
    {fields && fields.length > 0 && (
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-2'>
        {fields.map((f, i) => (
          <div key={i} className={f.inline ? 'sm:col-span-1' : 'col-span-1 sm:col-span-2'}>
            <h4 className='text-white font-bold text-[10px] md:text-xs uppercase mb-1' suppressHydrationWarning>{f.name}</h4>
            <p className='text-gray-300 text-xs md:text-sm whitespace-pre-wrap' suppressHydrationWarning>{f.value}</p>
          </div>
        ))}
      </div>
    )}
    {footer && <div className='mt-2 flex items-center gap-1 text-[10px] md:text-xs text-gray-400 font-medium' suppressHydrationWarning>{footer} {timestamp && <span>• {timestamp}</span>}</div>}
  </div>
);

export const DiscordMessage = ({ user, avatar, roleColor, time = 'Today at 12:00 PM', children }: { user: string, avatar: string, roleColor?: string, time?: string, children: React.ReactNode }) => (
  <div className='flex gap-3 md:gap-4 p-3 md:p-4 hover:bg-[#2e3035] transition-colors group select-none rounded-2xl'>
    <img src={avatar} alt='' className='w-8 h-8 md:w-10 md:h-10 rounded-full flex-shrink-0 cursor-pointer' />
    <div className='flex flex-col min-w-0 text-left'>
      <div className='flex items-center gap-2'>
        <span className='font-medium cursor-pointer hover:underline text-sm md:text-base truncate' style={{ color: roleColor || '#fff' }}>{user}</span>
        <span className='text-[10px] md:text-xs text-gray-400 whitespace-nowrap' suppressHydrationWarning>{time}</span>
      </div>
      <div className='text-gray-200 mt-1 text-sm md:text-base whitespace-pre-wrap' suppressHydrationWarning>{children}</div>
    </div>
  </div>
);
