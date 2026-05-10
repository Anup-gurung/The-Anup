'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { 
  ChevronRight, 
  Menu, 
  X, 
  Layers, 
  Palette, 
  Type, 
  Layout, 
  Zap, 
  Camera, 
  Grid, 
  Share2, 
  ShieldCheck, 
  Info,
  Compass,
  Smile,
  Target,
  ExternalLink,
  ArrowRight,
  Monitor,
  Smartphone,
  CreditCard,
  Briefcase
} from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Components ---

const SectionHeader = ({ title, subtitle, number }: { title: string, subtitle?: string, number: string }) => (
  <div className="mb-20 space-y-4">
    <div className="flex items-center gap-4 text-cyan-400 font-mono text-sm tracking-widest uppercase">
      <span className="w-8 h-[1px] bg-cyan-400" />
      {number}
    </div>
    <h2 className="text-5xl md:text-7xl font-light lg:max-w-4xl leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-zinc-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

const BrandCard = ({ title, description, icon: Icon }: { title: string, description: string, icon: any }) => (
  <div className="p-8 rounded-xl bg-zinc-900 border border-white/10 hover:border-cyan-400/40 transition-all group">
    <div className="w-12 h-12 rounded bg-cyan-400/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-cyan-400 w-6 h-6" />
    </div>
    <h3 className="text-xl font-light mb-3">{title}</h3>
    <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
  </div>
);

// --- Sections ---

const Cover = () => (
  <section id="cover" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 pt-20">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="z-10 text-center space-y-8"
    >
      <div className="flex justify-center mb-8">
        <div className="w-20 h-20 bg-white flex items-center justify-center rounded-xl shadow-2xl shadow-cyan-400/20">
           <span className="text-black font-bold text-5xl tracking-tighter">A<span className="text-cyan-400">.</span></span>
        </div>
      </div>
      
      <div className="space-y-4">
        <h1 className="text-8xl md:text-[12rem] font-bold tracking-tighter leading-none">
          ANUP<span className="text-cyan-400">.</span>
        </h1>
        <p className="text-white/40 font-mono tracking-[0.4em] uppercase text-[10px] md:text-xs">
          Creative Technologist • Full Stack Developer
        </p>
      </div>

      <div className="pt-20">
        <p className="text-zinc-400 uppercase tracking-widest text-[10px] font-medium opacity-50">
          Visual Identity System v1.0
        </p>
      </div>
    </motion.div>

    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-40">
      <div className="w-[1px] h-12 bg-white/30" />
    </div>
  </section>
);

const BrandOverview = () => (
  <section id="overview" className="section-padding py-32 px-6 max-w-7xl mx-auto">
    <SectionHeader 
      number="01" 
      title="Brand Overview" 
      subtitle="The foundational philosophy that drives every creative and technical endeavor under the ANUP brand."
    />
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 text-balance">
      <BrandCard 
        icon={Target}
        title="Vision"
        description="To redefine the boundaries between human creativity and digital innovation, crafting experiences that resonate emotionally and function perfectly."
      />
      <BrandCard 
        icon={Zap}
        title="Mission"
        description="Building high-end, future-proof digital solutions that empower storytellers and innovators through cutting-edge technology and refined design."
      />
      <BrandCard 
        icon={Info}
        title="Philosophy"
        description="Digital Craftsmanship. We believe in the meticulous attention to detail that transforms code into cinema and interfaces into intuition."
      />
    </div>

    <div className="bg-zinc-900 border border-white/10 rounded-2xl p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/5 blur-3xl -mr-32 -mt-32" />
      <h3 className="text-2xl font-light mb-8">Core Values</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "Innovation", value: "Pushing boundaries" },
          { label: "Precision", value: "Pixel-perfect quality" },
          { label: "Creativity", value: "Boundless expression" },
          { label: "Leadership", value: "Global influence" }
        ].map((item, i) => (
          <div key={i} className="space-y-1">
            <p className="text-cyan-400 font-mono text-[9px] uppercase tracking-[0.1em]">{item.label}</p>
            <p className="text-white text-lg font-light">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const LogoSystem = () => (
  <section id="logo" className="py-32 px-6 max-w-7xl mx-auto">
    <SectionHeader 
      number="05" 
      title="Logo Identity System" 
      subtitle="The visual cornerstone of the brand, designed for maximum impact across all digital and physical mediums."
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
      <div className="bg-white text-black p-12 rounded-2xl flex flex-col items-center justify-center min-h-[400px]">
        <p className="mb-12 font-mono text-[9px] opacity-40 uppercase tracking-[0.3em] self-start border-l border-black pl-4">Primary Logo (Light / Print)</p>
        <span className="text-9xl font-bold tracking-tighter">ANUP<span className="text-cyan-400">.</span></span>
      </div>
      <div className="bg-zinc-900 p-12 rounded-2xl flex flex-col items-center justify-center min-h-[400px] border border-white/10">
        <p className="mb-12 font-mono text-[9px] text-white/40 uppercase tracking-[0.3em] self-start border-l border-cyan-400 pl-4">Primary Logo (Dark / Digital)</p>
        <span className="text-9xl font-bold tracking-tighter text-white">ANUP<span className="text-cyan-400">.</span></span>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white/5 border border-white/10 p-8 rounded-xl flex flex-col items-center justify-center">
        <div className="w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center text-black font-bold text-5xl mb-4">A</div>
        <p className="text-white/40 text-[9px] font-mono tracking-widest uppercase">Monogram Icon</p>
      </div>
      <div className="bg-white/5 border border-white/10 p-8 rounded-xl flex flex-col items-center justify-center">
         <span className="text-4xl font-bold tracking-tighter mb-4">ANUP.</span>
         <p className="text-white/40 text-[9px] font-mono tracking-widest uppercase">Stacked Var</p>
      </div>
      <div className="bg-cyan-400 p-8 rounded-xl flex flex-col items-center justify-center shadow-lg shadow-cyan-400/20">
         <span className="text-4xl rounded bg-white text-black px-2 mb-4 font-bold tracking-tighter">A</span>
         <p className="text-white/80 text-[9px] font-mono tracking-widest uppercase">Brand Accent Icon</p>
      </div>
    </div>
  </section>
);

const ColorSystem = () => (
  <section id="colors" className="py-32 px-6 max-w-7xl mx-auto">
    <SectionHeader 
      number="06" 
      title="Color System" 
      subtitle="A palette calibrated for sophisticated digital environments, balancing deep luxury blacks with electric accents."
    />

    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { name: "Pure Ice", hex: "#FFFFFF", text: "text-black" },
          { name: "Deep Abyss", hex: "#0A0A0A", text: "text-white" },
          { name: "Electric Cyan", hex: "#06B6D4", text: "text-black" }
        ].map((color) => (
          <div key={color.name} className="flex flex-col gap-4">
            <div className={cn("h-64 rounded-2xl p-8 flex items-end shadow-xl", color.text)} style={{ backgroundColor: color.hex }}>
              <div className="space-y-1">
                <p className="font-bold tracking-tight">{color.name}</p>
                <p className="font-mono text-xs opacity-70">{color.hex}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { name: "Electric Blue", hex: "#007AFF", text: "text-white" },
          { name: "Neon Violet", hex: "#8B5CF6", text: "text-white" },
          { name: "Cyan Accent", hex: "#06B6D4", text: "text-black" }
        ].map((color) => (
          <div key={color.name} className={cn("h-48 rounded-3xl p-8 flex items-end", color.text)} style={{ backgroundColor: color.hex }}>
            <div className="space-y-1">
              <p className="font-bold">{color.name}</p>
              <p className="font-mono text-sm opacity-70">{color.hex}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TypographySection = () => (
  <section id="typography" className="py-32 px-6 max-w-7xl mx-auto">
    <SectionHeader 
      number="07" 
      title="Typography System" 
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div className="space-y-12">
        <div className="space-y-4">
          <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest">Primary Display</p>
          <h3 className="text-6xl font-light">Inter Regular</h3>
          <p className="text-zinc-500 max-w-md">Inter provides the structural foundation for the UI, offering geometric clarity and high functionality.</p>
        </div>
        <div className="space-y-4">
          <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest">High Art Serif</p>
          <h3 className="text-5xl font-serif italic">Playfair Light</h3>
          <p className="text-zinc-500 max-w-md">Playfair is used sparingly to bridge the gap between technical precision and human-led creative vision.</p>
        </div>
        <div className="space-y-4">
          <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest">Technical Accent</p>
          <h3 className="text-xl font-mono text-cyan-400">Fira Code</h3>
          <p className="text-zinc-500 max-w-md">Monospace elements highlight the underlying engineering and algorithmic nature of the brand.</p>
        </div>
      </div>

      <div className="bg-zinc-900 border border-white/10 rounded-2xl p-12 space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
           <span className="text-[200px] font-bold leading-none select-none">Aa</span>
        </div>
        <div className="space-y-2 relative z-10">
           <p className="text-cyan-400 font-mono text-[9px] uppercase tracking-widest">H1 Display - 120px</p>
           <h1 className="text-7xl lg:text-9xl leading-none">ANUP<span className="text-cyan-400">.</span></h1>
        </div>
        <div className="space-y-2 relative z-10">
           <p className="text-cyan-400 font-mono text-[9px] uppercase tracking-widest">H2 Section - 64px</p>
           <h2 className="text-5xl leading-tight">Bridging <span className="font-serif italic text-white/60">the gap.</span></h2>
        </div>
        <div className="space-y-2 relative z-10">
           <p className="text-cyan-400 font-mono text-[9px] uppercase tracking-widest">Body Copy - 16px</p>
           <p className="text-lg leading-relaxed text-zinc-500 font-light">
             Building modern product experiences with a <span className="font-serif italic text-white">cinematic perspective</span> and technical precision.
             Every pixel is a decision, and every line of code is a narrative.
           </p>
        </div>
      </div>
    </div>
  </section>
);

const DesignSystem = () => (
  <section id="design-system" className="py-32 px-6 max-w-7xl mx-auto">
    <SectionHeader 
      number="08" 
      title="Design System" 
      subtitle="A component-driven UI language built with a focus on glassmorphism, depth, and accessibility."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* Buttons */}
      <div className="space-y-6">
        <p className="text-white/40 font-mono text-[9px] uppercase tracking-widest">Interactive Prototypes</p>
        <div className="space-y-4">
          <button className="w-full bg-white text-black px-6 py-4 rounded font-bold tracking-tighter hover:bg-zinc-200 transition-colors flex items-center justify-between group">
            Primary Action <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full bg-transparent border border-white/20 text-white px-6 py-4 rounded font-medium hover:bg-white/5 transition-colors">
            Secondary Action
          </button>
          <button className="w-full bg-cyan-400 text-black px-6 py-4 rounded font-bold tracking-tighter shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40 transition-all uppercase text-xs">
            Accent Action
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-6">
        <p className="text-white/40 font-mono text-[9px] uppercase tracking-widest">Grid Architecture</p>
        <div className="p-8 bg-zinc-900 border border-white/10 rounded-xl space-y-4 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <Zap className="text-cyan-400 w-5 h-5" />
          </div>
          <div className="w-10 h-10 bg-cyan-400/10 rounded flex items-center justify-center">
            <Layers className="text-cyan-400 w-5 h-5" />
          </div>
          <h4 className="font-light text-lg">Systematic UI</h4>
          <p className="text-sm text-zinc-500 leading-relaxed font-light">Modular components with strict alignment rules.</p>
        </div>
        <div className="bg-zinc-800 p-8 rounded-xl border border-white/5 shadow-2xl relative">
           <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-cyan-400"></div>
           <h4 className="font-light tracking-tight">Blur & Glass</h4>
           <div className="mt-4 h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
             <div className="h-full bg-cyan-400 w-2/3" />
           </div>
        </div>
      </div>

      {/* Inputs */}
      <div className="space-y-6">
        <p className="text-zinc-500 font-mono text-xs uppercase">Inputs & Details</p>
        <div className="space-y-4 text-zinc-400 text-sm">
          <div className="flex items-center gap-3">
             <div className="w-4 h-4 rounded-sm border border-white/20 bg-zinc-800 flex items-center justify-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-xs" />
             </div>
             <span className="text-white/60">Active State</span>
          </div>
          <div className="space-y-2">
            <label className="text-[9px] uppercase tracking-widest text-white/40">Access Key Identifier</label>
            <div className="w-full bg-zinc-800 border border-white/10 rounded-lg p-4 font-mono text-zinc-500 text-xs">
              CONFIDENTIAL_SYSTEM_ACCESS_2024
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BrandApplications = () => (
  <section id="applications" className="py-32 px-6 max-w-7xl mx-auto">
    <SectionHeader 
      number="12" 
      title="Brand Applications" 
      subtitle="Visualizing the identity across various digital and physical touchpoints."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-zinc-900 rounded-2xl border border-white/10 p-10 min-h-[500px] flex flex-col relative overflow-hidden group">
        <div className="flex items-center justify-between mb-16 relative z-10">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-black font-bold text-lg">A</div>
              <span className="font-bold tracking-tight text-white/80">Project Workspace v1</span>
           </div>
           <div className="flex gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" />
              <div className="w-2 h-2 bg-white/20 rounded-full" />
           </div>
        </div>
        <div className="flex-1 flex flex-col justify-center space-y-8 relative z-10">
           <p className="text-cyan-400 font-mono text-[9px] tracking-[0.3em] uppercase">Architecture // Deployment</p>
           <h3 className="text-6xl font-light leading-[1.1] text-white">Engineering <span className="font-serif italic text-white/50">Mastery.</span></h3>
           <div className="h-48 w-full bg-white/5 rounded-xl border border-white/10 flex items-center justify-center shadow-inner">
              <Monitor className="text-white/20 w-16 h-16 transition-transform group-hover:scale-110" />
           </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-cyan-400 rounded-2xl p-8 flex flex-col justify-between aspect-square shadow-xl shadow-cyan-400/10">
           <span className="text-black font-bold text-4xl">A<span className="text-white">.</span></span>
           <div className="space-y-1">
             <p className="text-black font-bold text-2xl uppercase tracking-tighter">ANUP G.</p>
             <p className="text-black/60 font-mono text-[9px] uppercase tracking-widest">Global Creative</p>
           </div>
        </div>
        <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col justify-between aspect-square text-white border border-white/10 shadow-xl">
           <Briefcase className="w-12 h-12 text-cyan-400 opacity-40" />
           <div className="space-y-2">
             <div className="h-[2px] w-12 bg-cyan-400" />
             <p className="font-light text-xl">Resume 2024</p>
           </div>
        </div>
        <div className="bg-zinc-900 rounded-2xl p-10 col-span-2 border border-white/10 flex items-center gap-8 relative overflow-hidden">
           <div className="w-16 h-16 rounded-full border border-white/20 p-[2px] relative z-10">
              <div className="w-full h-full rounded-full bg-zinc-800 flex items-center justify-center text-xs font-mono font-bold text-cyan-400">UID</div>
           </div>
           <div className="flex-1 relative z-10">
              <div className="h-3 w-32 bg-white/10 rounded-full mb-3" />
              <div className="h-2 w-full bg-white/5 rounded-full" />
           </div>
           <Share2 className="text-white/20 hover:text-cyan-400 transition-colors cursor-pointer relative z-10" />
        </div>
      </div>
    </div>
  </section>
);

const FinalStatement = () => (
  <section id="statement" className="py-32 px-6 flex flex-col items-center justify-center text-center min-h-[80vh] relative">
    <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/10 to-transparent pointer-events-none" />
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl space-y-12 z-10"
    >
      <div className="w-12 h-[1px] bg-cyan-400 mx-auto" />
      <h2 className="text-4xl md:text-6xl font-light text-balance leading-[1.2] italic font-serif text-white/80">
        "ANUP represents the intersection of technology, creativity, and modern digital craftsmanship — building experiences that combine innovation, storytelling, and design."
      </h2>
      <div className="pt-8 space-y-4">
        <div className="w-16 h-16 bg-white rounded-xl mx-auto flex items-center justify-center text-black font-bold text-3xl shadow-2xl">A<span className="text-cyan-400">.</span></div>
        <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">Established 2024 Worldwide</p>
      </div>
    </motion.div>
  </section>
);

// --- Navigation ---

const Navigation = ({ sections }: { sections: any[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('cover');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 300;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto mix-blend-difference">
          <button onClick={() => scrollTo('cover')} className="text-xl font-bold tracking-tighter">ANUP<span className="text-cyan-400">.</span></button>
        </div>
        <div className="pointer-events-auto flex gap-4">
          <a href="/" className="px-4 py-2 text-sm hover:text-cyan-400 transition-colors">← Back to Portfolio</a>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-full md:w-[450px] h-full bg-zinc-900 border-l border-white/10 z-40 p-12 overflow-y-auto"
          >
            <div className="pt-20 space-y-12">
               <div className="space-y-4">
                 <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Brand System Index</p>
                 <div className="space-y-2">
                   {sections.map((section, idx) => (
                     <button
                       key={section.id}
                       onClick={() => scrollTo(section.id)}
                       className={cn(
                         "group flex items-center gap-4 w-full text-left py-2 transition-all",
                         activeSection === section.id ? "text-white" : "text-zinc-600 hover:text-zinc-400"
                       )}
                     >
                       <span className={cn(
                         "font-mono text-[10px] w-6",
                         activeSection === section.id ? "text-cyan-400" : "text-white/10"
                       )}>
                         {String(idx + 1).padStart(2, '0')}
                       </span>
                       <span className="text-2xl font-light tracking-tight flex-1">{section.label}</span>
                       {activeSection === section.id && (
                         <motion.div layoutId="nav-indicator" className="w-2 h-2 rounded-full bg-cyan-400" />
                       )}
                     </button>
                   ))}
                 </div>
               </div>

               <div className="pt-12 border-t border-white/5">
                  <a href="/" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight className="w-4 h-4" /> Back to Portfolio
                  </a>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- Main Page ---

export default function BrandBookPage() {
  const sections = [
    { id: 'cover', label: 'Cover' },
    { id: 'overview', label: 'Overview' },
    { id: 'logo', label: 'Logo System' },
    { id: 'colors', label: 'Color System' },
    { id: 'typography', label: 'Typography' },
    { id: 'design-system', label: 'Design Language' },
    { id: 'applications', label: 'Applications' },
    { id: 'statement', label: 'Statement' },
  ];

  return (
    <main className="bg-[#050505] text-white">
      <Navigation sections={sections} />
      
      <div className="relative">
        <Cover />
        <BrandOverview />
        
        {/* Positioning & Personality */}
        <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
               <SectionHeader number="03" title="Positioning" />
               <div className="space-y-6">
                 <div className="space-y-2">
                   <p className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest">Purpose</p>
                   <p className="text-xl font-light">To build the digital infrastructure of human creativity.</p>
                 </div>
                 <div className="space-y-2">
                   <p className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest">Audience</p>
                   <p className="text-xl font-light">Founders, agencies, and brands who demand excellence over expedience.</p>
                 </div>
               </div>
            </div>
            <div className="space-y-12">
               <SectionHeader number="04" title="Personality" />
               <div className="grid grid-cols-2 gap-4">
                 {['Visionary', 'Minimal', 'Technical', 'Cinematic', 'Refined', 'Confident'].map(trait => (
                   <div key={trait} className="p-4 rounded-xl border border-white/10 text-center font-mono text-[10px] tracking-widest uppercase bg-zinc-900">
                     {trait}
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </section>

        <LogoSystem />
        <ColorSystem />
        <TypographySection />
        <DesignSystem />
        <BrandApplications />
        <FinalStatement />
      </div>

      <footer className="py-12 border-t border-white/10 text-center text-zinc-600 font-mono text-[9px] uppercase tracking-widest">
         © 2024 ANUP Global Studio • Digital Preservation
      </footer>
    </main>
  );
}
