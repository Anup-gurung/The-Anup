'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'motion/react'
import CustomCursor from '@/components/cursor'

// --- Helpers ---

const TextReveal = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "110%" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  )
}

const Marquee = ({ text }: { text: string }) => {
  return (
    <div className="relative flex overflow-x-hidden border-y border-current py-4">
      <div className="animate-marquee whitespace-nowrap py-2">
        <span className="text-4xl md:text-6xl font-display uppercase mx-4">{text}</span>
        <span className="text-4xl md:text-6xl font-display uppercase mx-4">{text}</span>
        <span className="text-4xl md:text-6xl font-display uppercase mx-4">{text}</span>
        <span className="text-4xl md:text-6xl font-display uppercase mx-4">{text}</span>
      </div>
      <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap py-6">
        <span className="text-4xl md:text-6xl font-display uppercase mx-4">{text}</span>
        <span className="text-4xl md:text-6xl font-display uppercase mx-4">{text}</span>
        <span className="text-4xl md:text-6xl font-display uppercase mx-4">{text}</span>
        <span className="text-4xl md:text-6xl font-display uppercase mx-4">{text}</span>
      </div>
    </div>
  )
}

// --- Sections ---

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -500])
  const xRight = useTransform(scrollYProgress, [0, 1], [0, 500])

  return (
    <section ref={containerRef} className="h-screen flex flex-col justify-center items-center overflow-hidden px-4 relative">
      <div className="absolute top-1/4 left-10 md:left-20 font-mono text-xs md:text-sm uppercase tracking-widest opacity-40 hidden md:block">
        <p>Thimphu, Bhutan</p>
        <p>+975 77263425</p>
      </div>
      <div className="absolute bottom-1/4 right-10 md:right-20 font-mono text-xs md:text-sm uppercase tracking-widest opacity-40 hidden md:block text-right">
        <p>dragonthunder0127@gmail.com</p>
        <p>Building scalable digital products</p>
      </div>

      <div className="w-full flex flex-col items-center">
        <motion.h1 
          style={{ x: xLeft }}
          className="text-[15vw] leading-[0.8] font-display font-black uppercase text-center whitespace-nowrap"
        >
          Anup
        </motion.h1>
        <motion.h1 
          style={{ x: xRight }}
          className="text-[15vw] leading-[0.8] font-display font-black uppercase text-center whitespace-nowrap"
        >
          Gurung
        </motion.h1>
      </div>
      <div className="mt-12 flex flex-col items-center gap-6 max-w-2xl px-6">
        <TextReveal className="text-lg md:text-2xl font-mono text-center tracking-tighter">
          FULL-STACK DEVELOPER | TECHNOPRENEUR | CREATIVE TECHNOLOGIST
        </TextReveal>
        <p className="text-center font-sans opacity-60 text-sm md:text-base leading-relaxed">
          Building scalable digital products, blending technology, design, and real-world impact.
        </p>
      </div>
    </section>
  )
}

const About = () => {
  return (
    <section className="py-40 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="text-5xl md:text-8xl font-display font-white leading-none uppercase">
            THE VISION
          </div>
          <div className="space-y-6">
            <p className="text-xl md:text-2xl font-sans leading-relaxed">
              Innovative and forward-thinking Full-Stack Developer with a strong foundation in technopreneurship and digital product development. I specialize in building scalable platforms and transforming complex business ideas into intuitive, user-focused solutions.
            </p>
            <p className="text-lg font-sans opacity-70 leading-relaxed">
              I have worked on high-impact systems including Bhutan&apos;s first multi-service super app and enterprise-level financial platforms. My approach combines technical precision with creative problem-solving to deliver efficient and meaningful digital experiences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-current pt-20">
          <div className="space-y-4">
            <TextReveal className="text-3xl font-display font-black">PRECISION</TextReveal>
            <p className="font-mono text-sm opacity-60 uppercase">Technical Excellence</p>
            <p>Led cross-functional teams to design and deploy scalable platforms, improving operational efficiency by up to 50%.</p>
          </div>
          <div className="space-y-4">
            <TextReveal className="text-3xl font-display font-black">STRATEGY</TextReveal>
            <p className="font-mono text-sm opacity-60 uppercase">Creative Problem Solving</p>
            <p>Designed optimized databases and scalable APIs, improving query performance by 25% in high-traffic environments.</p>
          </div>
          <div className="space-y-4">
            <TextReveal className="text-3xl font-display font-black">IMPACT</TextReveal>
            <p className="font-mono text-sm opacity-60 uppercase">Real-World Results</p>
            <p>Developed responsive applications focused on accessibility, improving user engagement by 30–40%.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const Experience = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const experiences = [
    {
      title: "TECHNICAL LEADERSHIP",
      role: "Project Lead — Multiple Projects",
      items: ["Led cross-functional teams", "Managed full project lifecycle", "NamZoed, BIL, Timeless Bhutan Travel"]
    },
    {
      title: "FULL-STACK & BACKEND",
      role: "Backend Developer",
      items: ["Built scalable APIs (Node.js/Express)", "Optimized Database (MySQL/MongoDB)", "O2Cs Web, NamZoed, BIL"]
    },
    {
      title: "FRONTEND & MOBILE",
      role: "Lead Developer",
      items: ["Responsive Apps (Next.js/React Native)", "Accessibility & Performance Focus", "Marpa's Montessori, RTA Studio, FITCO"]
    },
    {
       title: "CREATIVE WORK",
       role: "Creative Technologist — MMD",
       items: ["High-quality visual content production", "Media optimization for Web/Mobile", "Storytelling & Technical Production"]
    }
  ]

  return (
    <section className="py-40 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <TextReveal className="text-2xl font-mono mb-20 uppercase tracking-widest italic">EXPERIENCE</TextReveal>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-px ${isDarkMode ? 'bg-white/20' : 'bg-black/20'}`}>
          {experiences.map((exp, i) => (
            <div key={i} className={`${isDarkMode ? 'bg-transparent text-white border-white' : 'bg-gray-100 text-black border-black'} border p-12 transition-colors group`}>
              <span className={`block font-mono text-xs ${isDarkMode ? 'text-white opacity-60' : 'text-black opacity-60'} mb-4 tracking-widest`}>{exp.role}</span>
              <h3 className={`text-4xl md:text-5xl font-display font-black leading-none mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>{exp.title}</h3>
              <ul className={`space-y-2 ${isDarkMode ? 'text-white opacity-70' : 'text-black opacity-80'} group-hover:opacity-100`}>
                {exp.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 ${isDarkMode ? 'bg-white' : 'bg-black'} rounded-full`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Projects = () => {
  const projects = [
    { id: "01", title: "NAMZOED", tags: "Full-Stack • Super App", desc: "Bhutan&apos;s first multi-service ecosystem. Led 5+ devs, built with Next.js & Node.js." },
    { id: "02", title: "MARPA&apos;S", tags: "Mobile • Education", desc: "App for kids & differently-abled users. Improved usability by 40%." },
    { id: "03", title: "TIMELESS", tags: "Web • Tourism", desc: "Tourism platform connecting travelers/agents. Integrated booking APIs." },
    { id: "04", title: "O2Cs WEB", tags: "Backend • API", desc: "Robust Express.js APIs for optimized real-time data flow." },
    { id: "05", title: "RTA STUDIO", tags: "Mobile • Design", desc: "Delivered 5+ responsive applications from Figma designs." },
    { id: "06", title: "BIL LOS", tags: "Lead • Fintech", desc: "Loan Origination System. Reduced processing time by 50%." },
    { id: "07", title: "FITCO", tags: "Mobile • Fitness", desc: "Tracking system with real-time analytics and mobile-first UI." },
  ]

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="py-40 px-6 md:px-20 relative"
    >
      <div className="max-w-7xl mx-auto">
        <TextReveal className="text-2xl font-mono mb-20 uppercase tracking-widest italic">SELECTED WORKS</TextReveal>
        
        <div className="space-y-0 border-t border-current">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-current py-12 flex flex-col md:flex-row md:items-center justify-between transition-colors hover:bg-black hover:text-white px-4 cursor-pointer"
            >
              <div className="flex items-start gap-8 z-10">
                <span className="text-2xl font-mono opacity-50 group-hover:opacity-100 transition-opacity">{project.id}</span>
                <h3 className="text-5xl md:text-8xl font-display font-black uppercase leading-none tracking-tighter">
                  {project.title}
                </h3>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col items-end gap-2 z-10">
                <span className="font-mono text-sm uppercase opacity-50 group-hover:opacity-100 tracking-tighter">{project.tags}</span>
                <p className="max-w-sm text-right opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {hoveredIndex !== null && (
          <motion.div
            className="fixed w-64 h-80 bg-black pointer-events-none z-50 overflow-hidden border border-white"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              x: mousePos.x + 20,
              y: mousePos.y - 150,
            }}
            transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.5 }}
          >
            <motion.div 
              className="w-full h-full bg-white flex flex-col items-center justify-center p-8 text-center"
            >
               <span className="text-8xl font-display text-black opacity-10">{projects[hoveredIndex].id}</span>
               <p className="text-black font-mono mt-4 text-[10px] tracking-widest uppercase">{projects[hoveredIndex].tags}</p>
               <div className="mt-8 flex flex-wrap gap-1 justify-center">
                  {["NEXT.JS", "NODE.JS", "API", "CLOUD"].map(t => (
                    <span key={t} className="px-1.5 py-0.5 bg-black text-white text-[9px] font-mono">{t}</span>
                  ))}
               </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

const SkillsAndEducation = () => {
  return (
    <section className="py-40 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
           <TextReveal className="text-2xl font-mono mb-12 uppercase tracking-widest italic italic">SKILLS</TextReveal>
           <div className="space-y-12">
             <div>
               <h4 className="font-display font-black text-2xl uppercase mb-4">Frontend</h4>
               <p className="text-lg font-sans opacity-70">Next.js, React, Tailwind, framer-motion, HTML5, CSS3</p>
             </div>
             <div>
               <h4 className="font-display font-black text-2xl uppercase mb-4">Backend & Languages</h4>
               <p className="text-lg font-sans opacity-70">Node.js, Express, Go, Python, JavaScript, Java, REST APIs, WebSockets</p>
             </div>
             <div>
               <h4 className="font-display font-black text-2xl uppercase mb-4">Database & DevOps</h4>
               <p className="text-lg font-sans opacity-70">MySQL, MongoDB, Git, GitHub, Docker, CI/CD</p>
             </div>
             <div>
               <h4 className="font-display font-black text-2xl uppercase mb-4">Technopreneurship</h4>
               <p className="text-lg font-sans opacity-70">Problem-Solving, Leadership, Team Collaboration, Creative Strategy</p>
             </div>
           </div>
        </div>
        
        <div className="space-y-24">
          <div>
            <TextReveal className="text-2xl font-mono mb-12 uppercase tracking-widest italic italic">EDUCATION</TextReveal>
            <div className="space-y-8">
              <div>
                <h4 className="font-display font-black text-3xl uppercase leading-tight">Bachelor of Computer Science</h4>
                <p className="font-mono text-sm uppercase opacity-60">GCIT (2022–2026)</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono">
                  {["DSA", "UI/UX", "AI/ML", "Design Patterns", "Competitive Programming"].map(c => (
                    <span key={c} className="border border-current px-2 py-1">{c}</span>
                  ))}
                </div>
              </div>
              <div className="pt-8 border-t border-current/20">
                <h4 className="font-display font-black text-2xl uppercase">Higher Secondary</h4>
                <p className="font-mono text-sm uppercase opacity-60">Babesa Higher Secondary (2021–2022)</p>
              </div>
            </div>
          </div>

          <div>
            <TextReveal className="text-2xl font-mono mb-12 uppercase tracking-widest italic italic">AWARDS & LANGUAGES</TextReveal>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2 font-sans">
                <p className="font-mono text-xs opacity-50 uppercase">Certificates</p>
                <p>AWS Cloud Foundations</p>
                <p>Google UX Design</p>
              </div>
              <div className="space-y-2 font-sans">
                <p className="font-mono text-xs opacity-50 uppercase">Languages</p>
                <p>Dzongkha (Native)</p>
                <p>English (Bilingual)</p>
                <p>Nepali (Mother Tongue)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const NamZoedSection = () => {
  return (
    <section className="py-40 overflow-hidden">
      <Marquee text="NAMZOED • BHUTAN&apos;S FIRST SUPER APP • LIVE NOW • JOIN THE ECOSYSTEM • " />
      <div className="mt-20 px-6 md:px-20 max-w-7xl mx-auto text-center">
        <TextReveal className="text-7xl md:text-[10vw] font-display font-black leading-none mb-10">
          NAMZOED
        </TextReveal>
        <div className="max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl font-sans text-white leading-relaxed">
            Reimagining accessibility in the Himalayas. One app to rule all services, connecting Bhutan like never before.
          </p>
        </div>
      </div>
    </section>
  )
}

const BrandBookCTA = () => {
  return (
    <section className="py-40 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="border border-current p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 group hover:bg-white hover:text-black transition-all duration-500"
        >
          <div className="flex-1">
            <TextReveal className="text-5xl md:text-7xl font-display font-black leading-none mb-6 uppercase">
              Brand Book
            </TextReveal>
            <TextReveal className="text-lg md:text-xl font-sans text-white/60 group-hover:text-black/60 leading-relaxed">
              Explore my complete visual identity system—logo design, color palette, typography, design principles, and brand applications. A comprehensive guide to the ANUP aesthetic.
            </TextReveal>
          </div>
          <motion.a
            href="/brand-book"
            whileHover={{ x: 10 }}
            className="group/btn flex-shrink-0 w-16 h-16 border border-current flex items-center justify-center font-display font-black text-3xl"
          >
            →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="py-20 px-6 md:px-20 font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 border-b border-current pb-20">
          <div>
            <span className="block opacity-50 mb-8 items-center gap-2 flex">
              <span className="w-2 h-2 bg-current rounded-full"></span>
              CONTACT
            </span>
            <div className="space-y-2 text-xl">
              <p className="hover:line-through cursor-pointer">dragonthunder0127@gmail.com</p>
              <p className="hover:line-through cursor-pointer">+975-77263425</p>
              <p>Thimphu, Bhutan</p>
            </div>
          </div>
          <div>
            <span className="block opacity-50 mb-8 items-center gap-2 flex">
               <span className="w-2 h-2 bg-current rounded-full"></span>
               REFERENCES
            </span>
            <div className="space-y-6 text-sm">
              <div>
                <p className="font-black uppercase">Mr. Yonten Jamtsho</p>
                <p className="opacity-60">Assistant Director, GCIT</p>
                <p className="mt-1">+975-17762073</p>
              </div>
              <div>
                <p className="font-black uppercase">Ms. Sonam Wangmo</p>
                <p className="opacity-60">Lecturer, GCIT</p>
                <p className="mt-1">+975-17391134</p>
              </div>
            </div>
          </div>
          <div>
             <span className="block opacity-50 mb-8 items-center gap-2 flex">
               <span className="w-2 h-2 bg-current rounded-full"></span>
               SOCIALS
            </span>
            <div className="flex flex-col gap-2 text-xl uppercase">
              <a href="https://linkedin.com/in/anup-gurung" target="_blank" className="hover:line-through transition-all">LINKEDIN</a>
              <a href="https://github.com" className="hover:line-through transition-all">GITHUB</a>
              <a href="#" className="hover:line-through transition-all">INSTAGRAM</a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center opacity-30 text-[10px] tracking-[0.2em] uppercase">
          <p>© 2026 ANUP GURUNG. ALL RIGHTS RESERVED.</p>
          <p>BUILT ON THE EDGE • GCIT MEDIA LAB</p>
        </div>
      </div>
    </footer>
  )
}

export default function PortfolioPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <motion.main 
      className={`min-h-screen transition-colors duration-700 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      <CustomCursor />
      
      <nav className="fixed top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center z-[100] font-mono text-xs md:text-sm pointer-events-none">
        <div className={`${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'} px-2 py-1 pointer-events-auto cursor-pointer font-black uppercase tracking-tighter`}>AG [2026]</div>
        <div className={`pointer-events-auto hidden md:block`}>
          <ul className={`flex gap-12 uppercase cursor-pointer tracking-widest italic ${isDarkMode ? 'text-white' : 'text-black'}`}>
            <li className="hover:line-through transition-all">INFO</li>
            <li className="hover:line-through transition-all">WORK</li>
            <li className="hover:line-through transition-all">SKILLS</li>
            <li className="hover:line-through transition-all">CONTACT</li>
            <li><a href="/brand-book" className="hover:line-through transition-all text-cyan-400">BRAND BOOK</a></li>
            <li>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="hover:line-through transition-all"
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <Hero />
      <About />
      <Experience isDarkMode={isDarkMode} />
      <Projects />
      <SkillsAndEducation />
      <NamZoedSection />
      <Footer />
    </motion.main>
  )
}
