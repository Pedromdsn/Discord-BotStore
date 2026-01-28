# 📋 Project Context: PA Hub & Discord Bot Showcase

This document provides a full high-fidelity dump of the context, infrastructure, and design decisions for the PA Hub ecosystem and its showcase website.

---

## 👤 Identity & Purpose
- **Operator:** Pedromdsn (Discord ID: `963551533746778222`).
- **Owner:** Pedromdsn (Admin).
- **Mission:** Managing, monitoring, and protecting a Proxmox-based infrastructure while showcasing premium Discord software.

---

## 🖥️ Infrastructure Map
- **Hypervisor:** Proxmox Host (`192.168.68.124`) - **RESTRICTED**.
- **Management Node:** Pedromdsn (`192.168.68.129`) - Project root: `/home/pedromdsn/pa`.
- **Automation Node:** n8n Server (`192.168.68.138`).
- **Security Node:** Pi-hole Server (`192.168.68.132`).
- **Access:** Managed via RSA key `./keys/id_ssh_pa`. Password login disabled.

---

## 🌐 Showcase Website (`../site`)
### Technical Stack
- **Framework:** Next.js 16.1.5 (App Router).
- **Runtime/Manager:** Bun 1.3.6 (NPM completely removed).
- **Styling:** Tailwind CSS 4.0.
- **UI Components:** React 19.2.3.
- **Animations:** Framer Motion 12.29.2.
- **Icons:** Lucide React 0.563.0.
- **Hosting:** Active on port `3333` (exposed to network via `-H 0.0.0.0`).

### Design Principles
- **UI/UX:** Ultra-dark theme, glassmorphism, mobile-first approach.
- **Affordance:** Full-card clickability on project cards, `user-select: none`, and pointer cursors.
- **Discord Fidelity:** Custom `DiscordEmbed` component that renders real bold text (parsing `**`) and respects newlines (`whitespace-pre-wrap`).
- **Navigation:** Static routes per project with inter-project navigation cards at the footer.

---

## 🚀 The Bot Collection
1. **Nexus (Original):**
   - Source: Based on `../bot`.
   - Features: Tickets, XP/Leveling, Dynamic Config.
   - Tech: Bun, TypeScript, TypeORM.
2. **Sentinel:**
   - Security: Real-time SSH/Fail2Ban alerts.
   - Monitoring: Resource guard and backup reports.
3. **MineCraftLink:**
   - Connection: Direct Socket integration (No AI, No RCON).
   - Features: Console access, live TPS, player list embed.
4. **SokoMaster:**
   - Logic: Based on real Kotlin JDA code.
   - Features: Procedural 12x9 boards, reaction-based controls.
   - Tech: Kotlin, JDA (Java Discord API).
5. **PurchaseFlow:**
   - Function: Web-to-Discord automation (Stripe/Webhooks).
   - Features: Instant role delivery and billing logs.
6. **Shinobi Realm:**
   - Experience: Deep Naruto RPG engine.
   - Features: Combat logs, mission systems, village wars.

---

## 🛠️ Key Decisions & Fixes
- **Hydration:** Added `suppressHydrationWarning` to `layout.tsx` to prevent conflicts with browser extensions.
- **Identity:** All interactive examples use `Pedromdsn` as the user with his specific Discord avatar.
- **Portability:** Replaced all NPM commands with Bun equivalents.
- **Stability:** Server runs in a persistent `tmux` session (`site-dev`) to prevent SIGHUP termination.
- **Syntax:** Fixed critical errors where Python booleans (`True/False`) were being leaked into TypeScript files.
- **Cleanup:** Removed legacy `site_data_v27.ts` as it was not used in the Next.js implementation.

---
*Last Updated: Monday, Jan 26, 2026 • Maintained by Pedromdsn*
