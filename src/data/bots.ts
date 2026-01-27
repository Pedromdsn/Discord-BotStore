export const bots = [
  {
    id: 'nexus',
    name: 'Nexus',
    slogan: 'The Professional Support Engine',
    description: 'Advanced ticket system and community engagement hub.',
    longDescription: 'Nexus is a multi-functional Discord bot focused on support automation, community engagement, and simplified management. Built with a focus on performance and scalability using Bun and TypeORM.',
    features: ['Interactive Ticket System', 'XP & Leveling System', 'Zero-Restart Configuration', 'Advanced Logging'],
    tech: ['Bun', 'TypeScript', 'SQLite', 'TypeORM'],
    color: '#5865F2',
    icon: 'Bot',
    gradient: 'from-[#5865F2]/20 to-indigo-500/10'
  },
  {
    id: 'sentinel',
    name: 'Sentinel',
    slogan: 'Military-Grade Infrastructure Guard',
    description: 'Real-time security monitoring with Fail2Ban and SSH alerts.',
    longDescription: 'Sentinel bridges the gap between your Linux servers and Discord. It monitors SSH logins, Fail2Ban actions, and resource thresholds, delivering instant alerts to keep your infrastructure safe.',
    features: ['SSH Login Alerts', 'Fail2Ban Integration', 'Resource Threshold Guard', 'Automatic IP Translation'],
    tech: ['Python', 'Bash', 'Systemd'],
    color: '#ED4245',
    icon: 'ShieldAlert',
    gradient: 'from-[#ED4245]/20 to-orange-500/10'
  },
  {
    id: 'minecraft-link',
    name: 'MineCraftLink',
    slogan: 'The Remote Console Bridge',
    description: 'Execute Minecraft commands and monitor TPS directly from Discord.',
    longDescription: 'Connect your Minecraft server console to Discord. Manage players, view live server health, and execute administrative commands without needing to be in-game or at a terminal.',
    features: ['Remote RCON Console', 'Live TPS & RAM Monitor', 'Player Management (/kick, /ban)', 'Cross-Chat Synchronization'],
    tech: ['Node.js', 'RCON Protocol', 'Socket.io'],
    color: '#57F287',
    icon: 'Gamepad2',
    gradient: 'from-[#57F287]/20 to-emerald-500/10'
  },
  {
    id: 'sokomaster',
    name: 'SokoMaster',
    slogan: 'Puzzle Strategy on Discord',
    description: 'Immersive Sokoban gameplay with interactive button controls.',
    longDescription: 'Bring the classic Sokoban experience to your Discord server. Featuring high-performance canvas rendering and intuitive button-based controls for a smooth puzzle-solving experience.',
    features: ['100+ Unique Levels', 'Button-Based Movement', 'Global Leaderboards', 'Level Creation Suite'],
    tech: ['Kotlin', 'JDA (Java Discord API)', 'Procedural Engine'],
    color: '#FEE75C',
    icon: 'Puzzle',
    gradient: 'from-[#FEE75C]/20 to-yellow-500/10'
  },
  {
    id: 'purchaseflow',
    name: 'PurchaseFlow',
    slogan: 'Web-to-Discord Automation',
    description: 'Sync website purchases to Discord roles and perks instantly.',
    longDescription: 'The bridge between your revenue and your community. PurchaseFlow monitors your website transactions and instantly delivers roles, channel access, and perks to your customers on Discord.',
    features: ['Automated Role Delivery', 'Webhook Integration', 'Purchase Verification', 'Customer Support Sync'],
    tech: ['Next.js', 'Express', 'Redis', 'Stripe'],
    color: '#EB459E',
    icon: 'ShoppingBag',
    gradient: 'from-[#EB459E]/20 to-pink-500/10'
  },
  {
    id: 'shinobi-realm',
    name: 'Shinobi Realm',
    slogan: 'Master the Ninja Path',
    description: 'A deep Naruto-themed RPG experience for Discord servers.',
    longDescription: 'Enter the world of Shinobi. Choose your village, train your jutsu, and participate in epic Chunin Exams. A full-scale RPG engine built entirely inside Discord interactions.',
    features: ['Village & Clan Systems', 'Jutsu Progression Tree', 'Turn-Based Combat Engine', 'Chunin Exam Events'],
    tech: ['Go', 'MongoDB', 'Microservices'],
    color: '#FF8C00',
    icon: 'Sword',
    gradient: 'from-[#FF8C00]/20 to-red-500/10'
  }
];
