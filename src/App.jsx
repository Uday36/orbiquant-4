import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Link2, 
  Play, 
  BarChart3, 
  Settings2,
  Lock,
  ArrowRight
} from 'lucide-react';

// --- STYLING CONSTANTS ---
const BRAND = {
  bg: "#050505",
  surface: "#0D0D0D",
  accent: "#F97316", // OrbiQuant Orange
  border: "rgba(255,255,255,0.06)"
};

// --- SUB-COMPONENTS ---

const ZerodhaBadge = () => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Official Kite API Integration</span>
  </div>
);

const AutomationTerminal = () => (
  <div className="relative w-full max-w-lg aspect-square lg:aspect-video bg-[#0D0D0D] border border-white/10 rounded-2xl shadow-2xl overflow-hidden group">
    {/* Terminal Top Bar */}
    <div className="flex justify-between items-center px-6 py-4 bg-[#141414] border-b border-white/5">
      <div className="flex gap-2">
        <div className="w-2 h-2 rounded-full bg-neutral-800" />
        <div className="w-2 h-2 rounded-full bg-neutral-800" />
      </div>
      <span className="text-[10px] font-mono text-neutral-500 tracking-[0.2em]">ORB_AUTO_V2.0</span>
    </div>

    {/* Live Terminal Content */}
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Status</h4>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-white font-mono text-sm uppercase">Executing: Mean_Reversion_01</span>
          </div>
        </div>
        <div className="text-right">
          <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Zerodha Link</h4>
          <span className="text-green-500 font-mono text-sm uppercase">Securely Connected</span>
        </div>
      </div>

      {/* Visual Execution Log */}
      <div className="space-y-3 font-mono text-[10px] text-neutral-500">
        <div className="flex justify-between border-b border-white/5 pb-2">
          <span className="text-neutral-600">[12:40:01]</span>
          <span>SCANNING NIFTY50_FUT...</span>
          <span className="text-orange-500">READY</span>
        </div>
        <div className="flex justify-between border-b border-white/5 pb-2">
          <span className="text-neutral-600">[12:42:15]</span>
          <span className="text-white">SIGNAL DETECTED: RSI_OVERBOUGHT</span>
          <span className="text-blue-500">ANALYZING</span>
        </div>
        <div className="flex justify-between border-b border-white/5 pb-2">
          <span className="text-neutral-600">[12:42:16]</span>
          <span className="text-green-500">ORDER PLACED VIA KITE API</span>
          <span className="text-white">ID: #82910</span>
        </div>
      </div>

      {/* Minimal Graph Overlay */}
      <div className="mt-8 h-24 w-full relative">
        <svg className="w-full h-full" viewBox="0 0 100 40">
          <motion.path
            d="M0,35 Q10,30 20,38 T40,25 T60,30 T80,10 T100,20"
            fill="none"
            stroke="#F97316"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </svg>
      </div>
    </div>
  </div>
);

// --- MAIN PAGE SECTIONS ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 py-8 px-10 flex justify-between items-center bg-[#050505]/50 backdrop-blur-md border-b border-white/5">
    <div className="flex items-center gap-2">
      <span className="text-xl font-bold tracking-tighter text-white uppercase italic">Orbi<span className="text-orange-500 not-italic">Quant</span></span>
    </div>
    <div className="hidden lg:flex gap-10">
      {['Automation', 'Security', 'Pricing', 'Docs'].map(item => (
        <a key={item} href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500 hover:text-white transition-colors">
          {item}
        </a>
      ))}
    </div>
    <button className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all">
      Login with Kite <Link2 size={14} />
    </button>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050505]">
    {/* Subtle Visual Texture */}
    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#F97316 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
    
    <div className="max-w-7xl mx-auto px-10 w-full grid lg:grid-cols-2 gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <ZerodhaBadge />
        <h1 className="text-6xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-10">
          Set Your <br /> Trading to <span className="text-orange-500">Autopilot.</span>
        </h1>
        <p className="text-lg text-neutral-400 font-light max-w-lg mb-12 leading-relaxed">
          The ultimate quantitative bridge for Zerodha Kite. Connect your strategy, link your API, and let OrbiQuant handle the execution with sub-millisecond precision.
        </p>
        <div className="flex gap-6">
          <button className="px-10 py-5 bg-orange-500 text-white font-bold uppercase tracking-widest text-[11px] rounded-full hover:bg-orange-600 shadow-2xl shadow-orange-500/30 transition-all flex items-center gap-3">
            Setup Auto-Trade <Play size={14} fill="currentColor" />
          </button>
          <button className="px-10 py-5 border border-white/10 text-white font-bold uppercase tracking-widest text-[11px] rounded-full hover:bg-white/5 transition-all">
            View Strategies
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="relative"
      >
        <AutomationTerminal />
        {/* Floating Stat Card */}
        <div className="absolute -bottom-10 -left-10 hidden lg:block bg-white p-6 rounded-2xl shadow-2xl">
          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">Execution Speed</p>
          <p className="text-2xl font-bold text-neutral-900 tracking-tighter">0.02 <span className="text-xs font-normal">ms</span></p>
        </div>
      </motion.div>
    </div>
  </section>
);

const FeatureGrid = () => (
  <section className="py-40 bg-[#050505] border-t border-white/5">
    <div className="max-w-7xl mx-auto px-10">
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="max-w-2xl">
          <span className="text-orange-500 text-[10px] font-bold uppercase tracking-[0.5em] block mb-6">Automation Core</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight">Professional execution <br /> for Zerodha traders.</h2>
        </div>
        <p className="text-neutral-500 font-light max-w-sm mb-2">
          Designed for scalpers, positional traders, and systematic firms who need zero-delay execution.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {[
          { icon: <Zap />, title: 'Sub-MS Latency', desc: 'Direct Kite API handshake ensures your orders are filled at the exact price point required.' },
          { icon: <ShieldCheck />, title: 'Strategy Backtest', desc: 'Run your logic through 5 years of historical Nifty/BankNifty data before going live.' },
          { icon: <Lock />, title: 'API Key Isolation', desc: 'Your Zerodha credentials never touch our database. We only interact via secure API tokens.' }
        ].map((feat, i) => (
          <div key={i} className="group p-10 bg-[#0D0D0D] border border-white/5 rounded-[2rem] hover:border-orange-500/30 transition-all duration-500">
            <div className="text-orange-500 mb-8 p-4 bg-orange-500/5 rounded-2xl inline-block group-hover:scale-110 transition-transform">
              {React.cloneElement(feat.icon, { size: 28, strokeWidth: 1.5 })}
            </div>
            <h3 className="text-xl font-bold text-white mb-6">{feat.title}</h3>
            <p className="text-neutral-500 text-sm leading-relaxed font-light">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Process = () => (
  <section className="py-32 px-10 border-y border-white/5 bg-[#080808]">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-20">
      {[
        { n: "01", t: "Connect Kite", d: "Login via your Zerodha account to generate a secure 24h session token." },
        { n: "02", t: "Deploy Logic", d: "Select from our library or upload your custom Python/Pine strategy." },
        { n: "03", t: "Auto Execute", d: "OrbiQuant monitors the charts and hits the Zerodha order book instantly." }
      ].map((step, i) => (
        <div key={i} className="flex gap-8">
          <span className="text-4xl font-bold text-orange-500/20">{step.n}</span>
          <div>
            <h4 className="text-xl font-bold text-white mb-4 tracking-tight">{step.t}</h4>
            <p className="text-neutral-500 text-sm leading-relaxed font-light">{step.d}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 bg-[#050505] px-10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
      <div>
        <span className="text-2xl font-bold tracking-tighter text-white uppercase italic">Orbi<span className="text-orange-500 not-italic">Quant</span></span>
        <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.4em] mt-2">The Algotrading Standard</p>
      </div>
      <div className="flex gap-12">
        {['API Terms', 'Safety Protocol', 'Contact'].map(link => (
          <a key={link} href="#" className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">{link}</a>
        ))}
      </div>
      <div className="text-[10px] font-bold text-neutral-700 tracking-[0.2em] uppercase text-right">
        Not affiliated with Zerodha Broking Ltd. <br /> Powered by Kite Connect API.
      </div>
    </div>
  </footer>
);

export default function OrbiQuantZerodha() {
  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-orange-500 selection:text-white font-['Inter',sans-serif]">
      <Navbar />
      <main>
        <Hero />
        <Process />
        <FeatureGrid />
        
        {/* Simple Editorial Break */}
        <section className="py-40 text-center px-10 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter">Your strategies. <br /> Our <span className="text-orange-500 italic">engines.</span></h2>
            <button className="px-14 py-6 bg-white text-black font-bold uppercase tracking-[0.2em] text-[11px] rounded-full hover:bg-orange-500 hover:text-white transition-all shadow-2xl">
              Get API Key Access
            </button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}