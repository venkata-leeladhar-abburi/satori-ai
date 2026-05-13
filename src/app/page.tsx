"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Menu, X, CheckCircle2, ChevronDown, ChevronRight,
  BarChart3, Users, Zap, LayoutDashboard, Globe, MessageSquare, Shield,
  ArrowUpRight, Play, Star, Plus, Minus, Check, User, Search, Link, Brain, Rocket
} from "lucide-react";
import Image from "next/image";

function VideoHero() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const fadingOutRef = React.useRef(false);
  const animationFrameRef = React.useRef<number>();

  const animateOpacity = (start: number, end: number, duration: number, onComplete?: () => void) => {
    if (!containerRef.current) return;
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);

    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentOpacity = start + (end - start) * progress;

      if (containerRef.current) {
        containerRef.current.style.opacity = currentOpacity.toString();
      }

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else if (onComplete) {
        onComplete();
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current || !containerRef.current || isNaN(videoRef.current.duration)) return;
    
    const timeRemaining = videoRef.current.duration - videoRef.current.currentTime;
    
    // Start fade out 500ms before end
    if (timeRemaining <= 0.55 && !fadingOutRef.current) {
      fadingOutRef.current = true;
      const currentOpacity = parseFloat(containerRef.current.style.opacity || "1");
      animateOpacity(currentOpacity, 0, 500);
    }
  };

  const handleEnded = () => {
    if (!videoRef.current || !containerRef.current) return;
    
    containerRef.current.style.opacity = "0";
    
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().then(() => {
          fadingOutRef.current = false;
          animateOpacity(0, 1, 500);
        });
      }
    }, 100);
  };

  const handleLoadedData = () => {
    if (containerRef.current) {
      const currentOpacity = parseFloat(containerRef.current.style.opacity || "0");
      animateOpacity(currentOpacity, 1, 500);
    }
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col font-sans">
      <div 
        ref={containerRef}
        className="absolute inset-0 opacity-0"
        style={{ willChange: "opacity" }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          onLoadedData={handleLoadedData}
          className="absolute w-full h-full object-cover translate-y-[17%]"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4"
        />
      </div>

      <nav className="relative z-20 pl-6 pr-6 py-6">
        <div className="rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="Sapiences2p Logo" 
              width={160} 
              height={40} 
              className="h-10 w-auto object-contain"
              priority
            />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white/80 hover:text-white transition-colors text-[15px] font-[500] tracking-[-0.01em]">Products</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-[15px] font-[500] tracking-[-0.01em]">Solutions</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-[15px] font-[500] tracking-[-0.01em]">Services</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-[15px] font-[500] tracking-[-0.01em]">Partners</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-[15px] font-[500] tracking-[-0.01em]">Testimonials</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors">Contact Us</a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[28%] mt-12">
        <div className="text-[15px] font-[500] text-white uppercase tracking-[0.12em] mb-6">
          Next-Gen Agentic AI & Enterprise Procurement Intelligence
        </div>
        <h1 
          className="text-[2.75rem] md:text-[3.75rem] lg:text-[4.5rem] font-serif text-white mb-8 font-[600] leading-[0.95] tracking-[-0.03em] whitespace-nowrap"
        >
          Built for the Enterprise
        </h1>
        <p className="text-[19px] md:text-[21px] text-white/75 max-w-2xl mx-auto leading-[1.6] mb-12 font-[400] tracking-[-0.01em]">
          Satori AI thinks, decides, and executes procurement operations autonomously — helping enterprises move faster with fewer bottlenecks.
        </p>
        
        <div className="max-w-xl w-full space-y-4 mx-auto">
          <div className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3">
            <input 
              type="email" 
              placeholder="Enter your work email" 
              className="bg-transparent border-none flex-1 text-white placeholder:text-white/60 text-base focus:outline-none"
            />
            <button className="bg-white rounded-full px-7 py-3.5 text-[#1A0A00] hover:bg-white/90 transition-colors shrink-0 text-[15px] font-[600] tracking-[-0.01em]">
              Request a Demo
            </button>
          </div>
          <p className="text-white/75 text-[20px] leading-[1.6] px-4 font-[400] tracking-[-0.01em]">
            No complex setup. See Satori AI automate procurement, contracts, approvals, and supplier intelligence in real time.
          </p>
        </div>
      </div>

      <div className="relative z-10 flex justify-center gap-4 pb-12">
        <button aria-label="Instagram" className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </button>
        <button aria-label="Twitter" className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
        </button>
        <button aria-label="Website" className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <Globe className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default function NexCrmClone() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [yearlyPricing, setYearlyPricing] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      <VideoHero />

      <main className="pt-0">

{/* Dashboard Mockup - Coded Version matching the image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="-mt-32 lg:-mt-40 flex flex-col lg:flex-row gap-5 max-w-5xl mx-auto items-stretch relative z-20 px-4"
          >
            {/* Total Sales Card */}
            <div className="flex-1 bg-white rounded-[2rem] p-8 text-left shadow-xl flex flex-col border border-white/50 relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-[#1A0A00] font-bold text-lg">Procurement Overview</h3>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-100 text-[#1A0A00] text-[11px] font-semibold hover:bg-stone-50 transition-colors shadow-sm">
                  Last Quarter <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
                </button>
              </div>

              <div className="flex justify-between items-end mb-3">
                <div className="text-[3rem] leading-none font-[700] text-[#3E1C00] tracking-[-0.04em]">₹2,50,00,000</div>
                <div className="flex items-center gap-1.5 font-bold text-[11px] mb-1">
                  <div className="w-4 h-4 rounded-full bg-[#FF5C00] flex items-center justify-center">
                    <ArrowUpRight className="w-2.5 h-2.5 text-white stroke-[3]" />
                  </div>
                  <span className="text-[#FF5C00]">↑ 38%</span> <span className="text-stone-400 font-medium">vs last quarter</span>
                </div>
              </div>
              
              <div className="text-[9px] font-bold text-stone-300 tracking-[0.15em] mb-6 uppercase">
                TOTAL SPEND MANAGED
              </div>

              <div className="border border-stone-100 rounded-[14px] p-5 pb-4 flex-1 flex items-end justify-around gap-2 min-h-[160px]">
                {[
                  { m: 'Feb', h: 55, c: '#9A7D6C' },
                  { m: 'Mar', h: 30, c: '#9A7D6C' },
                  { m: 'Apr', h: 42, c: '#9A7D6C' },
                  { m: 'May', h: 65, c: '#FF5C00' },
                  { m: 'Jun', h: 25, c: '#9A7D6C' },
                  { m: 'Jul', h: 48, c: '#9A7D6C' },
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-3">
                    <div className="w-full relative h-[100px] flex items-end justify-center">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${bar.h}%` }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        className="w-full max-w-[36px] relative overflow-hidden flex flex-col justify-start"
                      >
                        <div className="w-full h-2.5 rounded-full z-10 shrink-0" style={{ backgroundColor: bar.c }} />
                        <div className="w-full flex-1 mt-[-5px]" style={{ 
                          background: `linear-gradient(to bottom, ${bar.c === '#FF5C00' ? 'rgba(255,92,0,0.15)' : 'rgba(154,125,108,0.15)'}, transparent)`
                        }} />
                      </motion.div>
                    </div>
                    <span className="text-[11px] font-medium text-stone-400">{bar.m}</span>
                  </div>
                ))}
              </div>
            </div>

            
            {/* Key Insights Card */}
            <div className="flex-1 bg-white rounded-[2rem] p-8 pb-6 text-left shadow-xl flex flex-col border border-white/50 relative overflow-hidden">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-[#1A0A00] font-bold text-lg">Key Metrics</h3>
                <div className="flex gap-0.5 bg-stone-50 p-1 rounded-lg border border-stone-100/50">
                  {['1D', '5D', '1M', 'ALL'].map(t => (
                    <button key={t} className={`px-2.5 py-1 text-[9px] font-bold rounded-[4px] transition-all ${t === '1M' ? 'bg-white text-[#3E1C00] shadow-[0_1px_2px_rgba(0,0,0,0.05)]' : 'text-stone-400 hover:text-stone-600'}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-1 flex items-center justify-between gap-4 mb-4">
                {[
                  { label: 'Supplier Leads', val: '5K', stroke: 220, color: '#FF5C00' },
                  { label: 'Contracts Closed', val: '3K', stroke: 150, color: '#3E1C00' },
                  { label: 'POs Executed', val: '2K', stroke: 80, color: '#3E1C00' },
                ].map((dial, i) => (
                  <div key={i} className="flex flex-col items-center gap-4 flex-1">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                       {/* SVG Dial */}
                       <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                         <circle cx="50" cy="50" r="40" fill="none" stroke="#F6F3EC" strokeWidth="8" />
                         <circle cx="50" cy="50" r="40" fill="none" stroke={dial.color} strokeWidth="8" strokeDasharray={`${dial.stroke} 251`} strokeLinecap="round" />
                       </svg>
                       {/* Inner Hexagon */}
                       <div className="relative z-10 w-[3.25rem] h-[3.25rem] bg-[#3E1C00] flex flex-col items-center justify-center shadow-md" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white mb-0.5"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z"/></svg>
                          <span className="text-[12px] font-bold text-white leading-none tracking-tight">{dial.val}</span>
                       </div>
                    </div>
                    <span className="text-[10px] font-bold text-[#3E1C00] tracking-tight text-center leading-tight">{dial.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
          
        {/* Logo Cloud */}
        <section className="py-16 bg-[#FDFBF7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl font-serif text-[#2D1600] mb-12">
              Trusted by leading enterprises across 15+ countries
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80">
              <div className="flex items-center gap-2 font-bold text-xl text-[#2D1600]">SAP</div>
              <div className="flex items-center gap-2 font-bold text-xl text-[#2D1600]">AWS</div>
              <div className="flex items-center gap-2 font-bold text-xl text-[#2D1600]">Microsoft</div>
              <div className="flex items-center gap-2 font-bold text-xl text-[#2D1600]">Oracle Cloud</div>
              <div className="flex items-center gap-2 font-bold text-xl text-[#2D1600]">PeopleSoft</div>
            </div>
          </div>
        </section>

                {/* Features 1: Designed to simplify customer management */}
        <section className="bg-[#FDFBF7] pt-24 pb-12">
          <div className="text-center max-w-4xl mx-auto mb-16 px-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 bg-[#FF5C00] rounded-[1px]" />
              <span className="text-[13px] font-semibold text-[#FF5C00] uppercase tracking-[0.14em]">KEY FEATURES</span>
            </div>
            <h2 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-serif font-semibold text-[#3E1C00] mb-8 tracking-[-0.02em] leading-[1.0]">
              Designed to automate<br/>enterprise operations
            </h2>
            <p className="text-[15px] text-[#A68B7C] max-w-lg mx-auto leading-relaxed">
              Satori AI combines autonomous procurement workflows, supplier intelligence, spend analytics, and enterprise-grade AI orchestration into one unified platform.
            </p>
          </div>

          <div className="w-full">
            <div className="max-w-[1400px] mx-auto border-y border-[#EAE0D5] grid grid-cols-1 md:grid-cols-3">
              
              {/* Row 1: Cards */}
              <div className="p-8 lg:p-10 border-b border-[#EAE0D5] md:border-r bg-[#FDFBF7] flex flex-col items-center">
                {/* Card 1 */}
                <div className="bg-white rounded-2xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] w-full max-w-[480px] p-8 lg:p-10 border border-[#EAE0D5]/50 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-3 bg-[#FF5C00] rounded-full" />
                      <span className="text-[12px] font-bold text-[#3E1C00] uppercase">PROCUREMENT</span>
                    </div>
                    <div className="flex gap-0.5">
                      <div className="w-1 h-1 bg-stone-300 rounded-full" />
                      <div className="w-1 h-1 bg-stone-300 rounded-full" />
                      <div className="w-1 h-1 bg-stone-300 rounded-full" />
                    </div>
                  </div>
                  
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-[2.5rem] font-bold text-[#3E1C00] tracking-tight">335,453</span>
                  </div>
                  
                  <div className="text-[13px] text-stone-500 mb-6 leading-tight font-medium">Supplier transactions processed</div>

                  <ul className="space-y-4 mt-auto text-[12px] text-[#3E1C00] font-bold w-full bg-[#FDFBF7] p-5 rounded-xl border border-[#EAE0D5]/50">
                    <li className="flex gap-3 items-center leading-tight">
                      <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center shrink-0"><CheckCircle2 className="w-3 h-3 text-[#FF5C00]"/></div> 
                      65% reduction in manual tasks
                    </li>
                    <li className="flex gap-3 items-center leading-tight">
                      <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center shrink-0"><CheckCircle2 className="w-3 h-3 text-[#FF5C00]"/></div> 
                      23% faster approvals
                    </li>
                    <li className="flex gap-3 items-center leading-tight">
                      <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center shrink-0"><CheckCircle2 className="w-3 h-3 text-[#FF5C00]"/></div> 
                      12% maverick spend eliminated
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-8 lg:p-10 border-b border-[#EAE0D5] md:border-r bg-[#FDFBF7] flex flex-col items-center">
                {/* Card 2 */}
                <div className="bg-white rounded-2xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] w-full max-w-[480px] p-8 lg:p-10 border border-[#EAE0D5]/50 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-3 bg-[#FF5C00] rounded-full" />
                      <span className="text-[12px] font-bold text-[#3E1C00] uppercase">SPEND INTELLIGENCE</span>
                    </div>
                    <div className="flex gap-0.5">
                      <div className="w-1 h-1 bg-stone-300 rounded-full" />
                      <div className="w-1 h-1 bg-stone-300 rounded-full" />
                      <div className="w-1 h-1 bg-stone-300 rounded-full" />
                    </div>
                  </div>
                  
                  <div className="text-center mb-6 mt-2">
                    <div className="text-[12px] text-stone-400 mb-1">Average savings per transaction</div>
                    <div className="text-[3.75rem] font-[700] flex items-baseline justify-center leading-none tracking-[-0.03em]">
                      <span className="text-[#3E1C00]">₹508.00</span>
                    </div>
                  </div>

                  <p className="text-[13px] text-stone-500 text-center leading-relaxed px-4 mb-8">
                    Predictive AI spend analysis that identifies risks before budgets are exceeded.
                  </p>

                  <div className="flex items-end justify-between gap-2 h-16 mt-auto">
                    {[16, 24, 18, 28, 12, 16, 35, 18, 12, 30, 20, 26].map((h, i) => (
                      <div key={i} className={`flex-1 rounded-sm ${i === 6 ? 'bg-[#A68B7C]' : 'bg-[#EAE0D5]'}`} style={{ height: `${h}px` }} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 lg:p-10 border-b border-[#EAE0D5] bg-[#FDFBF7] flex flex-col items-center">
                {/* Card 3 */}
                <div className="bg-white rounded-2xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] w-full max-w-[480px] p-8 lg:p-10 border border-[#EAE0D5]/50 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-3 bg-[#FF5C00] rounded-full" />
                      <span className="text-[12px] font-bold text-[#3E1C00] uppercase">CONTRACT HEALTH</span>
                    </div>
                    <div className="flex gap-0.5">
                      <div className="w-1 h-1 bg-stone-300 rounded-full" />
                      <div className="w-1 h-1 bg-stone-300 rounded-full" />
                      <div className="w-1 h-1 bg-stone-300 rounded-full" />
                    </div>
                  </div>
                  
                  <div className="relative w-full aspect-[2/1] overflow-hidden mb-6 mt-8 flex justify-center">
                    <svg viewBox="0 0 200 100" className="w-[85%] h-auto overflow-visible">
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
                        const angle = i * 15 + 7.5;
                        const isOrange = i < 6;
                        return (
                          <g key={i} transform={`rotate(${angle} 100 100)`}>
                            <line 
                              x1="15" y1="100" 
                              x2="48" y2="100" 
                              stroke={isOrange ? "#FF5C00" : "#F6F3EC"} 
                              strokeWidth="11" 
                              strokeLinecap="round" 
                            />
                          </g>
                        );
                      })}
                    </svg>
                    <div className="absolute bottom-0 left-0 right-0 text-center flex flex-col items-center">
                      <div className="text-[2rem] font-bold text-[#3E1C00] leading-none mb-1">78.9%</div>
                      <div className="text-[11px] text-stone-400 font-medium">Contract compliance rate</div>
                    </div>
                  </div>

                  <p className="text-[13px] text-stone-500 text-center leading-relaxed px-4 mt-auto">
                    AI continuously monitors supplier contracts, renewals, and negotiation performance.
                  </p>
                </div>
              </div>



            </div>
          </div>
        </section>

        {/* Features 2: Tools designed to speed up your team's workflow */}
        <section className="bg-[#FDFBF7] pt-24 pb-24">
          <div className="text-center max-w-4xl mx-auto mb-16 px-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 bg-[#FF5C00] rounded-[1px]" />
              <span className="text-[13px] font-semibold text-[#FF5C00] uppercase tracking-[0.14em]">FEATURES</span>
            </div>
            <h2 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-serif font-semibold text-[#3E1C00] mb-8 tracking-[-0.02em] leading-[1.0]">
              Seven AI modules built<br/>to run your enterprise
            </h2>
            <p className="text-[15px] text-[#A68B7C] max-w-lg mx-auto leading-relaxed">
              Every module works together in real time — enabling autonomous enterprise operations without disconnected workflows.
            </p>
          </div>

          <div className="w-full">
            <div className="max-w-[1400px] mx-auto border-y border-[#EAE0D5] flex flex-col">
              
              {/* Row 1: Support */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-white p-14 lg:p-20 border-b md:border-b-0 md:border-r border-[#EAE0D5] flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 bg-[#FF5C00] rounded-[1px]" />
                    <span className="text-[12px] font-semibold text-[#FF5C00] uppercase tracking-[0.14em]">PROCUREMENT</span>
                  </div>
                  <h3 className="text-[2.75rem] font-serif font-semibold text-[#3E1C00] mb-8 leading-[1.0] tracking-[-0.02em] max-w-[600px]">
                    Self-Driving<br/>Procurement Engine
                  </h3>
                  <p className="text-[18px] text-stone-500 leading-[1.7] max-w-[640px] font-[400] tracking-[-0.005em]">
                    Satori AI autonomously handles procurement from intake to purchase order execution — eliminating repetitive approvals and reducing cycle time dramatically.
                  </p>
                </div>
                  <div className="bg-[#FAF8F3] p-14 lg:p-20 flex items-center justify-center">
                    <div className="bg-white rounded-2xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] w-full max-w-[520px] p-10 border border-[#EAE0D5]/50 flex flex-col">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-[15px] font-[600] text-[#3E1C00] tracking-[-0.01em]">Active Procurement</span>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between border-b border-[#EAE0D5] pb-3">
                          <span className="text-[12px] text-stone-500 font-medium">Office Supplies Contract</span>
                          <span className="text-[10px] font-bold px-2 py-1 bg-emerald-50 text-emerald-600 rounded">Approved</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-[#EAE0D5] pb-3">
                          <span className="text-[12px] text-stone-500 font-medium">Q2 Hardware Procurement</span>
                          <span className="text-[10px] font-bold px-2 py-1 bg-amber-50 text-amber-600 rounded">In Review</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-[#EAE0D5] pb-3">
                          <span className="text-[12px] text-stone-500 font-medium">Logistics RFQ</span>
                          <span className="text-[10px] font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded">Negotiating</span>
                        </div>
                        <div className="flex items-center justify-between pb-1">
                          <span className="text-[12px] text-stone-500 font-medium">Annual Software Licenses</span>
                          <span className="text-[10px] font-bold px-2 py-1 bg-stone-100 text-stone-600 rounded">Executed</span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

              {/* Row 2: Geography */}
              <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#EAE0D5]">
                <div className="bg-white p-14 lg:p-20 border-b md:border-b-0 md:border-r border-[#EAE0D5] flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 bg-[#FF5C00] rounded-[1px]" />
                    <span className="text-[12px] font-semibold text-[#FF5C00] uppercase tracking-[0.14em]">GEOGRAPHY</span>
                  </div>
                  <h3 className="text-[2.75rem] font-serif font-semibold text-[#3E1C00] mb-8 leading-[1.0] tracking-[-0.02em] max-w-[600px]">
                    Global Supplier<br/>Intelligence
                  </h3>
                  <p className="text-[18px] text-stone-500 leading-[1.7] max-w-[640px] font-[400] tracking-[-0.005em]">
                    Monitor suppliers across regions, categories, and risk levels with AI-powered global visibility.
                  </p>
                </div>
                <div className="bg-[#FAF8F3] p-14 lg:p-20 flex items-center justify-center">
                  <div className="bg-white rounded-2xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] w-full max-w-[520px] p-8 lg:p-10 border border-[#EAE0D5]/50 flex flex-col">
                    <div className="flex justify-between items-center mb-10">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border border-[#FF5C00] flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-[#FF5C00] rounded-full" />
                        </div>
                        <span className="text-[12px] font-bold text-[#3E1C00]">Customer Geography</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-100 text-[#3E1C00] text-[10px] font-bold shadow-sm">
                        Last Quarter <ChevronDown className="w-3 h-3 text-stone-400" />
                      </div>
                    </div>

                    <div className="flex items-end gap-6 h-36">
                      <div className="flex flex-col justify-end h-full w-20">
                        <div className="text-[10px] text-stone-400 mb-1 leading-tight">Suppliers tracked globally</div>
                        <div className="text-[1.75rem] font-bold text-[#3E1C00] leading-none mb-2">75.891</div>
                        <div className="flex items-center gap-1 text-[11px] text-emerald-500 font-bold mb-4">
                          <ArrowUpRight className="w-3 h-3" /> +5%
                        </div>
                      </div>

                      <div className="flex-1 flex justify-between items-end h-full pb-1 gap-2">
                        {[
                          { label: 'Atlanta', h: 55 },
                          { label: 'Shanghai', h: 45 },
                          { label: 'New Tokyo', h: 42 },
                          { label: 'Kerala', h: 80, active: true },
                          { label: 'Bremen', h: 30 },
                        ].map((bar, i) => (
                          <div key={i} className="flex flex-col items-center gap-2 flex-1">
                            <div className="text-[8px] font-bold text-stone-400">{bar.h}%</div>
                            <div className="w-full max-w-[36px] h-24 bg-[#FAF8F3] rounded-sm relative overflow-hidden">
                              <div className={`absolute bottom-0 w-full rounded-sm ${bar.active ? 'bg-[#FF5C00]' : 'bg-[#EAE0D5]'}`} style={{ height: `${bar.h}%` }} />
                            </div>
                            <div className="text-[8px] text-stone-400 mt-1 whitespace-nowrap">{bar.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: Feedback */}
              <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#EAE0D5]">
                <div className="bg-white p-14 lg:p-20 border-b md:border-b-0 md:border-r border-[#EAE0D5] flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 bg-[#FF5C00] rounded-[1px]" />
                    <span className="text-[12px] font-semibold text-[#FF5C00] uppercase tracking-[0.14em]">FEEDBACK</span>
                  </div>
                  <h3 className="text-[2.75rem] font-serif font-semibold text-[#3E1C00] mb-8 leading-[1.0] tracking-[-0.02em] max-w-[600px]">
                    Contract & Supplier<br/>Rating Dashboard
                  </h3>
                  <p className="text-[18px] text-stone-500 leading-[1.7] max-w-[640px] font-[400] tracking-[-0.005em]">
                    Track supplier quality, SLA adherence, delivery timelines, and contract performance automatically using AI sentiment scoring.
                  </p>
                </div>
                <div className="bg-[#FAF8F3] p-14 lg:p-20 flex items-center justify-center">
                  <div className="bg-white rounded-2xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] w-full max-w-[520px] p-8 lg:p-10 border border-[#EAE0D5]/50 flex flex-col">
                    <div className="flex justify-between items-center mb-8">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border border-[#FF5C00] flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-[#FF5C00] rounded-full" />
                        </div>
                        <span className="text-[12px] font-bold text-[#3E1C00]">Supplier Rating</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-100 text-[#3E1C00] text-[10px] font-bold shadow-sm">
                        Last Quarter <ChevronDown className="w-3 h-3 text-stone-400" />
                      </div>
                    </div>

                    <div className="flex items-baseline gap-2 mb-8 mt-4">
                      <span className="text-[2.5rem] font-bold text-[#3E1C00] leading-none">4.9/5</span>
                      <span className="text-[11px] font-bold text-stone-400">(1,289 contracts reviewed)</span>
                    </div>

                    <div className="grid grid-cols-[repeat(15,minmax(0,1fr))] gap-2 w-full mb-2">
                      {[...Array(60)].map((_, i) => (
                        <div key={i} className={`w-full aspect-square rounded-full ${i >= 56 ? 'bg-[#EAE0D5]' : 'bg-[#FF5C00]'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

{/* Metrics Section */}
        <section className="bg-[#FDFBF7] pt-24 pb-24 border-t border-[#EAE0D5]">
          <div className="text-center max-w-4xl mx-auto mb-16 px-4">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-2 h-2 bg-[#FF5C00] rounded-[1px]" />
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">METRICS</span>
            </div>
            <h2 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-serif font-semibold text-[#3E1C00] mb-8 tracking-[-0.02em] leading-[1.0]">
              Numbers that prove the impact
            </h2>
            <p className="text-[15px] text-stone-500 max-w-2xl mx-auto leading-relaxed">
              Satori AI is engineered to reduce operational friction and deliver measurable procurement ROI at enterprise scale.
            </p>
          </div>

          <div className="w-full">
            <div className="max-w-[1000px] mx-auto border-y border-[#EAE0D5] grid grid-cols-1 md:grid-cols-4">
              {/* Row 1 */}
              <div className="col-span-1 md:col-span-2 border-r-0 md:border-r border-b border-[#EAE0D5] p-14 lg:p-20 flex flex-col justify-center items-center text-center md:items-start md:text-left">
                <span className="text-[3.5rem] lg:text-[4rem] font-serif text-[#3E1C00] mb-2 leading-none">300%</span>
                <span className="text-[13px] font-bold text-[#3E1C00] mb-4">Boost in procurement efficiency</span>
                <p className="text-[11px] text-stone-400 leading-relaxed max-w-[200px]">Automation unlocks higher performance across departments</p>
              </div>
              <div className="col-span-1 md:col-span-2 border-b border-[#EAE0D5] p-14 lg:p-20 flex flex-col justify-center items-center text-center md:items-start md:text-left">
                <span className="text-[3.5rem] lg:text-[4rem] font-serif text-[#3E1C00] mb-2 leading-none">100k+</span>
                <span className="text-[13px] font-bold text-[#3E1C00] mb-4">Transactions managed monthly</span>
                <p className="text-[11px] text-stone-400 leading-relaxed max-w-[200px]">A platform built to handle large volumes effortlessly</p>
              </div>
              
              {/* Row 2 */}
              <div className="hidden md:block col-span-1 border-r border-[#EAE0D5]" />
              <div className="col-span-1 md:col-span-2 border-r-0 md:border-r border-b md:border-b-0 border-[#EAE0D5] p-14 lg:p-20 flex flex-col justify-center items-center text-center md:items-start md:text-left">
                <span className="text-[3.5rem] lg:text-[4rem] font-serif text-[#3E1C00] mb-2 leading-none">250%</span>
                <span className="text-[13px] font-bold text-[#3E1C00] mb-4">Increase in contract coverage</span>
                <p className="text-[11px] text-stone-400 leading-relaxed max-w-[200px]">Smarter insights drive better engagement and faster decisions</p>
              </div>
              <div className="col-span-1 md:col-span-1 p-12 lg:p-14 flex flex-col justify-center items-center text-center md:items-start md:text-left overflow-hidden">
                <span className="text-[3rem] lg:text-[3.5rem] font-serif text-[#3E1C00] mb-2 leading-none tracking-tight">99.9%</span>
                <span className="text-[13px] font-bold text-[#3E1C00] mb-4">Platform uptime reliability</span>
                <p className="text-[11px] text-stone-400 leading-relaxed max-w-[200px]">Always available, always consistent, always secure</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-[#FDFBF7] pt-12 pb-24">
          <div className="text-center max-w-4xl mx-auto mb-16 px-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 bg-[#FF5C00] rounded-[1px]" />
              <span className="text-[13px] font-semibold text-[#FF5C00] uppercase tracking-[0.14em]">WHY CHOOSE US</span>
            </div>
            <h2 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-serif font-semibold text-[#3E1C00] mb-8 tracking-[-0.02em] leading-[1.0]">
              Built for enterprise speed and scale
            </h2>
            <p className="text-[19px] text-[#A68B7C] max-w-2xl mx-auto leading-[1.65] font-[400] tracking-[-0.01em]">
              Satori AI is designed from the ground up for intelligent decision-making, autonomous workflows, and enterprise reliability.
            </p>
          </div>

          <div className="w-full">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-[#EAE0D5] bg-[#FDFBF7]">
              
              {/* Left Box (Orange) */}
              <div className="bg-[#FF5C00] text-white p-14 lg:p-20 flex flex-col items-center text-center overflow-hidden relative">
                <h3 className="text-[2.25rem] font-serif font-semibold mb-5 leading-[1.05] tracking-[-0.02em] max-w-[500px]">
                  AI-first architecture for enterprise decisions
                </h3>
                <p className="text-[17px] text-white/90 leading-[1.65] mb-14 max-w-[380px] font-[400]">
                  Satori continuously learns from procurement cycles, supplier negotiations, and enterprise workflows to improve outcomes automatically.
                </p>
                
                {/* Satori AI Chip Illustration */}
                <div className="relative w-full flex items-center justify-center mt-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/satori-chip.jpg"
                    alt="Satori AI Autonomous Procurement Intelligence Engine"
                    className="w-full max-w-[480px] object-contain rounded-xl"
                  />
                </div>
              </div>

              {/* Right Box (White) */}
              <div className="bg-white p-14 lg:p-20 flex flex-col items-center text-center overflow-hidden border-l border-[#EAE0D5]">
                <h3 className="text-[2.25rem] font-serif font-semibold text-[#3E1C00] mb-5 leading-[1.05] tracking-[-0.02em]">
                  Tailored interfaces for every stakeholder
                </h3>
                <p className="text-[17px] text-[#A68B7C] leading-[1.65] mb-14 max-w-[520px] font-[400]">
                  Procurement teams, finance leaders, and executives each get focused dashboards with actionable insights.
                </p>
                
                {/* UI Rows */}
                <div className="relative w-full max-w-[440px] flex flex-col gap-3 mt-4 text-left">
                  <div className="bg-white border border-[#EAE0D5] rounded-xl p-4 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] flex items-center justify-between">
                    <span className="text-[13px] font-bold text-[#3E1C00]">Supplier Contract</span>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">Approved</span>
                  </div>
                  <div className="bg-white border border-[#EAE0D5] rounded-xl p-4 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] flex items-center justify-between">
                    <span className="text-[13px] font-bold text-[#3E1C00]">RFQ Response</span>
                    <span className="text-[11px] font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">Pending Review</span>
                  </div>
                  <div className="bg-white border border-[#EAE0D5] rounded-xl p-4 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] flex items-center justify-between">
                    <span className="text-[13px] font-bold text-[#3E1C00]">Budget Exception</span>
                    <span className="text-[11px] font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-md">Flagged</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-[#FDFBF7] pt-24 pb-24 border-t border-[#EAE0D5]">
          <div className="text-center max-w-4xl mx-auto mb-16 px-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 bg-[#FF5C00] rounded-[1px]" />
              <span className="text-[13px] font-semibold text-[#FF5C00] uppercase tracking-[0.14em]">BENEFITS</span>
            </div>
            <h2 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-serif font-semibold text-[#3E1C00] mb-8 tracking-[-0.02em] leading-[1.0]">
              Advantages that help your team move smarter
            </h2>
            <p className="text-[19px] text-[#A68B7C] max-w-2xl mx-auto leading-[1.65] font-[400] tracking-[-0.01em]">
              Bring intelligence, automation, and predictive insights into every procurement workflow.
            </p>
          </div>

          <div className="w-full">
            <div className="max-w-[1400px] mx-auto border-y border-[#EAE0D5] grid grid-cols-1 md:grid-cols-2">
              {/* Card 1 */}
              <div className="border-b md:border-r border-[#EAE0D5] p-14 lg:p-20 flex flex-col items-start text-left bg-[#FDFBF7]">
                <div className="w-10 h-10 rounded-lg bg-[#FF5C00] flex items-center justify-center mb-6 shadow-md shadow-orange-500/20">
                  <Link className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-[1.75rem] font-serif font-semibold text-[#3E1C00] mb-4 leading-[1.1] tracking-[-0.02em]">Seamless ERP Integration</h3>
                <p className="text-[16px] text-[#A68B7C] leading-[1.65] pr-4 font-[400]">
                  Native integrations with SAP, Oracle, Dynamics 365, AWS, and enterprise ecosystems.
                </p>
              </div>

              {/* Card 2 */}
              <div className="border-b border-[#EAE0D5] p-14 lg:p-20 flex flex-col items-start text-left bg-[#FDFBF7]">
                <div className="w-10 h-10 rounded-lg bg-[#FF5C00] flex items-center justify-center mb-6 shadow-md shadow-orange-500/20">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-[1.75rem] font-serif font-semibold text-[#3E1C00] mb-4 leading-[1.1] tracking-[-0.02em]">Autonomous Decision Intelligence</h3>
                <p className="text-[16px] text-[#A68B7C] leading-[1.65] pr-4 font-[400]">
                  AI agents evaluate suppliers, negotiate contracts, and execute decisions automatically.
                </p>
              </div>

              {/* Card 3 */}
              <div className="border-b md:border-b-0 md:border-r border-[#EAE0D5] p-14 lg:p-20 flex flex-col items-start text-left bg-[#FDFBF7]">
                <div className="w-10 h-10 rounded-lg bg-[#FF5C00] flex items-center justify-center mb-6 shadow-md shadow-orange-500/20">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-[1.75rem] font-serif font-semibold text-[#3E1C00] mb-4 leading-[1.1] tracking-[-0.02em]">Predictive Spend Analytics</h3>
                <p className="text-[16px] text-[#A68B7C] leading-[1.65] pr-4 font-[400]">
                  Surface cost risks, supplier trends, and savings opportunities before they impact operations.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-14 lg:p-20 flex flex-col items-start text-left bg-[#FDFBF7]">
                <div className="w-10 h-10 rounded-lg bg-[#FF5C00] flex items-center justify-center mb-6 shadow-md shadow-orange-500/20">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-[1.75rem] font-serif font-semibold text-[#3E1C00] mb-4 leading-[1.1] tracking-[-0.02em]">Enterprise-Grade Security</h3>
                <p className="text-[16px] text-[#A68B7C] leading-[1.65] pr-4 font-[400]">
                  SOC 2 Type II compliant infrastructure with encrypted workflows and role-based access.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-[#FDFBF7] pt-24 pb-24 border-t border-[#EAE0D5]">
          <div className="text-center max-w-4xl mx-auto mb-16 px-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 bg-[#FF5C00] rounded-[1px]" />
              <span className="text-[13px] font-semibold text-[#FF5C00] uppercase tracking-[0.14em]">HOW IT WORKS</span>
            </div>
            <h2 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-serif font-semibold text-[#3E1C00] mb-8 tracking-[-0.02em] leading-[1.0]">
              Simple deployment. Powerful outcomes.
            </h2>
            <p className="text-[19px] text-[#A68B7C] max-w-2xl mx-auto leading-[1.65] font-[400] tracking-[-0.01em]">
              Deploy Satori AI into existing enterprise systems without disrupting operations.
            </p>
          </div>

          <div className="w-full">
            <div className="max-w-[1400px] mx-auto border-y border-[#EAE0D5] grid grid-cols-1 md:grid-cols-3">
              
              {/* Row 1 (Steps) */}
              <div className="border-b md:border-r border-[#EAE0D5] h-[160px] flex items-center justify-center bg-[#FAF8F3]">
                <div className="bg-white border border-[#EAE0D5]/60 px-6 py-2 shadow-sm text-[11px] font-bold text-[#A68B7C] rounded-sm">Step 01</div>
              </div>
              <div className="border-b md:border-r border-[#EAE0D5] h-[160px] flex items-center justify-center bg-white relative z-10">
                <div className="bg-[#FAF8F3] border border-[#EAE0D5]/60 px-6 py-2 shadow-inner text-[11px] font-bold text-[#A68B7C] rounded-sm">Step 02</div>
              </div>
              <div className="border-b border-[#EAE0D5] h-[160px] flex items-center justify-center bg-[#FAF8F3]">
                <div className="bg-white border border-[#EAE0D5]/60 px-6 py-2 shadow-sm text-[11px] font-bold text-[#A68B7C] rounded-sm">Step 03</div>
              </div>

              {/* Row 2 (Content) */}
              <div className="border-b md:border-b-0 md:border-r border-[#EAE0D5] p-10 lg:p-12 flex flex-col items-start text-left bg-[#FAF8F3]">
                <h3 className="text-[1.625rem] font-serif font-semibold text-[#3E1C00] mb-5 leading-[1.1] tracking-[-0.015em]">Connect your enterprise stack</h3>
                <p className="text-[16px] text-[#A68B7C] leading-[1.65] font-[400]">
                  Integrate SAP, AWS, Microsoft, Oracle, and procurement systems seamlessly.
                </p>
              </div>
              <div className="border-b md:border-b-0 md:border-r border-[#EAE0D5] p-10 lg:p-12 flex flex-col items-start text-left bg-white relative z-10">
                <h3 className="text-[1.625rem] font-serif font-semibold text-[#3E1C00] mb-5 leading-[1.1] tracking-[-0.015em]">Let Satori understand your workflows</h3>
                <p className="text-[16px] text-[#A68B7C] leading-[1.65] font-[400]">
                  AI analyses procurement history, suppliers, contracts, and spend behavior.
                </p>
              </div>
              <div className="p-10 lg:p-12 flex flex-col items-start text-left bg-[#FAF8F3]">
                <h3 className="text-[1.625rem] font-serif font-semibold text-[#3E1C00] mb-5 leading-[1.1] tracking-[-0.015em]">Watch autonomous execution begin</h3>
                <p className="text-[16px] text-[#A68B7C] leading-[1.65] font-[400]">
                  Satori routes approvals, negotiates supplier terms, flags risks, and executes procurement workflows.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="bg-[#FDFBF7] pt-24 pb-24 border-t border-[#EAE0D5]">
          <div className="text-center max-w-4xl mx-auto mb-16 px-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 bg-[#FF5C00] rounded-[1px]" />
              <span className="text-[13px] font-semibold text-[#FF5C00] uppercase tracking-[0.14em]">INTEGRATIONS</span>
            </div>
            <h2 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-serif font-semibold text-[#3E1C00] mb-8 tracking-[-0.02em] leading-[1.0]">
              Connect with your enterprise ecosystem
            </h2>
            <p className="text-[15px] text-stone-500 max-w-2xl mx-auto leading-relaxed">
              Satori plugs into the platforms your teams already use — making them dramatically smarter.
            </p>
          </div>

          <div className="w-full">
            <div className="max-w-[1400px] mx-auto border-y border-[#EAE0D5] grid grid-cols-2 md:grid-cols-4 bg-[#FDFBF7]">
              {[
                "SAP", "AWS", "Oracle Cloud", "Microsoft Azure", 
                "Dynamics 365", "PeopleSoft", "Workday", "Power Platform"
              ].map((logo, i) => (
                <div key={i} className={`aspect-[2] md:aspect-[2.5] flex items-center justify-center border-[#EAE0D5] ${i < 4 ? 'border-b' : ''} ${(i + 1) % 4 !== 0 ? 'border-r' : ''}`}>
                   <span className="text-[15px] font-bold text-[#3E1C00] opacity-80 uppercase tracking-wider">{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Powered Section */}
        <section className="bg-[#FDFBF7] pt-12 pb-24">
          <div className="w-full">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 border-y border-[#EAE0D5] bg-[#FDFBF7]">
              
              {/* Left Side: Text and Metrics */}
              <div className="p-14 lg:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#EAE0D5]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 bg-[#FF5C00] rounded-[1px]" />
                  <span className="text-[13px] font-semibold text-[#FF5C00] uppercase tracking-[0.14em]">AI-POWERED</span>
                </div>
                <h2 className="text-[3rem] lg:text-[3.75rem] font-serif font-semibold text-[#3E1C00] mb-8 tracking-[-0.02em] leading-[1.0] max-w-[520px]">
                  Turn procurement chaos into intelligent orchestration
                </h2>
                <p className="text-[18px] text-[#A68B7C] leading-[1.65] mb-14 max-w-[580px] font-[400]">
                  Satori AI analyses supplier, contract, and spend data to recommend and execute the best next action automatically.
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-[3.5rem] font-serif font-semibold text-[#3E1C00] leading-none mb-3 tracking-[-0.02em]">92%</div>
                    <div className="text-[12px] font-bold text-[#A68B7C]">Faster Deal Progression</div>
                  </div>
                  <div>
                    <div className="text-[3.5rem] font-serif font-semibold text-[#3E1C00] leading-none mb-3 tracking-[-0.02em]">3.4x</div>
                    <div className="text-[12px] font-bold text-[#A68B7C]">Increase in Team Efficiency</div>
                  </div>
                </div>
              </div>

              {/* Right Side: Satori Workflow Image */}
              <div className="bg-[#FFF8F3] flex items-center justify-center p-8 md:p-10 relative overflow-hidden min-h-[400px] border-t md:border-t-0 md:border-l border-[#EAE0D5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/satori-workflow.jpg"
                  alt="Satori AI Procurement Workflow Orchestration"
                  className="w-full max-w-[600px] object-contain rounded-xl"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-[#FDFBF7] pt-24 pb-24 border-t border-[#EAE0D5] overflow-hidden">
          <div className="text-center max-w-4xl mx-auto mb-16 px-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 bg-[#FF5C00] rounded-[1px]" />
              <span className="text-[13px] font-semibold text-[#FF5C00] uppercase tracking-[0.14em]">TESTIMONIALS</span>
            </div>
            <h2 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-serif font-semibold text-[#3E1C00] mb-8 tracking-[-0.02em] leading-[1.0]">
              See what enterprise leaders are saying
            </h2>
            <p className="text-[19px] text-[#A68B7C] max-w-2xl mx-auto leading-[1.65] font-[400] tracking-[-0.01em]">
              Global enterprises rely on Satori AI to automate procurement and transform operations.
            </p>
          </div>

          <div className="w-full">
            <div className="w-full border-y border-[#EAE0D5] bg-[#FDFBF7] flex overflow-x-auto no-scrollbar snap-x snap-mandatory">
              <div className="flex w-max mx-auto px-4 md:px-0">
                {[
                  {
                    author: "Mirana Marci",
                    role: "Finance Director",
                    quote1: "“Finally, an AI platform that truly understands enterprise procurement workflows.”",
                    quote2: "",
                    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
                  },
                  {
                    author: "Bimosaurus",
                    role: "Head of Procurement",
                    quote1: "“Satori reduced our procurement cycle times by over 60% in the first quarter.”",
                    quote2: "",
                    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
                  },
                  {
                    author: "Crystal Maiden",
                    role: "Chief Procurement Officer",
                    quote1: "“The autonomous negotiation agents alone saved us hundreds of thousands.”",
                    quote2: "",
                    avatar: "https://randomuser.me/api/portraits/women/86.jpg"
                  }
                ].map((testimonial, i) => (
                  <div key={i} className="w-[85vw] md:w-[600px] lg:w-[740px] p-14 lg:p-20 border-r border-l md:border-l-0 border-[#EAE0D5] flex flex-col justify-between shrink-0 bg-[#FDFBF7] snap-center">
                    <div>
                      <h3 className="text-[1.35rem] font-serif text-[#3E1C00] mb-6 leading-snug">
                        {testimonial.quote1}
                      </h3>
                      {testimonial.quote2 && (
                        <p className="text-[16px] text-[#A68B7C] leading-[1.65] font-[400] mb-12">
                          {testimonial.quote2}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={testimonial.avatar} alt={testimonial.author} className="w-10 h-10 rounded-full object-cover grayscale" />
                      <div>
                        <div className="text-[13px] font-bold text-[#3E1C00]">{testimonial.author}</div>
                        <div className="text-[11px] text-[#A68B7C]">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-[#FDFBF7] pt-24 pb-24 border-t border-[#EAE0D5]">
          <div className="text-center max-w-4xl mx-auto mb-16 px-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 bg-[#FF5C00] rounded-[1px]" />
              <span className="text-[13px] font-semibold text-[#FF5C00] uppercase tracking-[0.14em]">PARTNERSHIP PLANS</span>
            </div>
            <h2 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-serif font-semibold text-[#3E1C00] mb-8 tracking-[-0.02em] leading-[1.0]">
              Flexible engagement models built for growth
            </h2>
            <div className="h-6"></div>
            
            <div className="flex items-center justify-center mt-12">
              <div className="bg-white border border-[#EAE0D5] p-1.5 rounded-md inline-flex shadow-sm">
                <button 
                  onClick={() => setYearlyPricing(false)}
                  className={`px-6 py-2 rounded-[4px] text-[12px] font-bold transition-all ${!yearlyPricing ? 'bg-[#FF5C00] text-white shadow-sm' : 'text-[#A68B7C] hover:text-[#3E1C00] bg-transparent'}`}
                >
                  Pay Monthly
                </button>
                <button 
                  onClick={() => setYearlyPricing(true)}
                  className={`px-6 py-2 rounded-[4px] text-[12px] font-bold transition-all ${yearlyPricing ? 'bg-[#FF5C00] text-white shadow-sm' : 'text-[#A68B7C] hover:text-[#3E1C00] bg-transparent'}`}
                >
                  Pay Yearly
                </button>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="max-w-[1400px] mx-auto border-y border-[#EAE0D5] grid grid-cols-1 md:grid-cols-3 bg-white">
              {/* Starter Plan */}
              <div className="p-12 lg:p-16 flex flex-col bg-[#FDFBF7] md:bg-white border-b md:border-b-0 md:border-r border-[#EAE0D5]">
                <div className="w-8 h-8 rounded bg-[#FF5C00] flex items-center justify-center mb-6 shadow-sm">
                  <div className="w-3 h-3 bg-white rounded-[2px]" />
                </div>
                <h3 className="text-[1.625rem] font-serif font-semibold text-[#3E1C00] mb-3 leading-[1.1] tracking-[-0.015em]">Essentials</h3>
                <p className="text-[12px] text-[#A68B7C] mb-8">&nbsp;</p>
                
                <div className="mb-8 border-b border-[#EAE0D5] pb-8 flex items-baseline gap-1">
                  <span className="text-[3.75rem] font-serif font-semibold leading-none text-[#3E1C00] tracking-[-0.03em]">${yearlyPricing ? 19 : 19}</span>
                  <span className="text-[16px] font-sans font-[500] text-[#3E1C00] tracking-[-0.01em]">/month</span>
                </div>
                
                <div className="space-y-4 flex-1 mb-10">
                  {["AI Chatbot", "Spend Dashboard", "5,000 Transactions", "Email Support"].map((feat, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#A68B7C] shrink-0" />
                      <span className="text-[15px] text-[#3E1C00] font-[500] tracking-[-0.01em]">{feat}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3.5 rounded-[4px] text-[15px] font-[600] tracking-[-0.01em] transition-all bg-[#3E1C00] text-white hover:bg-[#2A1100] flex items-center justify-between px-6">
                  Select plan
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              </div>

              {/* Professional Plan */}
              <div className="p-12 lg:p-16 flex flex-col bg-[#FF5C00] text-white border-b md:border-b-0 md:border-r border-[#EAE0D5] shadow-[0_0_40px_rgba(255,92,0,0.15)] relative z-10">
                <div className="w-8 h-8 rounded bg-white flex items-center justify-center mb-6 shadow-sm">
                  <div className="w-3 h-3 bg-[#3E1C00] rounded-[2px]" />
                </div>
                <h3 className="text-[1.625rem] font-serif font-semibold text-white mb-3 leading-[1.1] tracking-[-0.015em]">Professional</h3>
                <p className="text-[14px] text-white/80 font-[500] mb-8">&nbsp;</p>
                
                <div className="mb-8 border-b border-white/20 pb-8 flex items-baseline gap-1">
                  <span className="text-[3.75rem] font-serif font-semibold leading-none text-white tracking-[-0.03em]">${yearlyPricing ? 25 : 25}</span>
                  <span className="text-[16px] font-sans font-[500] text-white tracking-[-0.01em]">/month</span>
                </div>
                
                <div className="space-y-4 flex-1 mb-10">
                  {["Autonomous Procurement", "AI Workflow Automation", "Unlimited Supplier Connections", "Contract Intelligence"].map((feat, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                      <span className="text-[15px] text-white font-[500] tracking-[-0.01em]">{feat}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3.5 rounded-[4px] text-[15px] font-[600] tracking-[-0.01em] transition-all bg-white text-[#3E1C00] hover:bg-stone-50 flex items-center justify-between px-6">
                  Select plan
                  <ChevronRight className="w-4 h-4 text-[#A68B7C]" />
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="p-12 lg:p-16 flex flex-col bg-[#FDFBF7] md:bg-white">
                <div className="w-8 h-8 rounded bg-[#FF5C00] flex items-center justify-center mb-6 shadow-sm">
                  <div className="w-3 h-3 bg-white rounded-[2px]" />
                </div>
                <h3 className="text-[1.625rem] font-serif font-semibold text-[#3E1C00] mb-3 leading-[1.1] tracking-[-0.015em]">Enterprise</h3>
                <p className="text-[12px] text-[#A68B7C] mb-8">&nbsp;</p>
                
                <div className="mb-8 border-b border-[#EAE0D5] pb-8 flex items-baseline gap-1">
                  <span className="text-[3.75rem] font-serif font-semibold leading-none text-[#3E1C00] tracking-[-0.03em]">${yearlyPricing ? 49 : 49}</span>
                  <span className="text-[16px] font-sans font-[500] text-[#3E1C00] tracking-[-0.01em]">/month</span>
                </div>
                
                <div className="space-y-4 flex-1 mb-10">
                  {["Multi-Entity Management", "AI Negotiation Pipelines", "Advanced Analytics", "Workflow Customisation"].map((feat, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#A68B7C] shrink-0" />
                      <span className="text-[15px] text-[#3E1C00] font-[500] tracking-[-0.01em]">{feat}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3.5 rounded-[4px] text-[15px] font-[600] tracking-[-0.01em] transition-all bg-[#3E1C00] text-white hover:bg-[#2A1100] flex items-center justify-between px-6">
                  Select plan
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-[#FDFBF7] pt-24 pb-24 border-t border-[#EAE0D5]">
          <div className="max-w-[1400px] mx-auto px-4">
            <div className="grid md:grid-cols-[520px_1fr] lg:grid-cols-[580px_1fr] gap-12 lg:gap-20 items-start">
              
              {/* Left Column */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 bg-[#FF5C00] rounded-[1px]" />
                  <span className="text-[13px] font-semibold text-[#FF5C00] uppercase tracking-[0.14em]">FAQ</span>
                </div>
                <h2 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-serif font-semibold text-[#3E1C00] mb-8 tracking-[-0.02em] leading-[1.0]">
                  Your questions, answered
                </h2>
                <p className="text-[18px] text-[#A68B7C] leading-[1.65] font-[400] mb-10 max-w-sm">
                  Answers to the most common questions about Satori AI. If you still have questions, let us know.
                </p>
                <button className="px-8 py-3.5 rounded-full text-[15px] font-[600] tracking-[-0.01em] transition-all bg-[#3E1C00] text-white hover:bg-[#2A1100] flex items-center gap-2">
                  Contact us
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              </div>

              {/* Right Column (Accordion) */}
              <div className="border border-[#EAE0D5] bg-white">
                {[
                  {
                    q: "What is Satori AI?",
                    a: "Enterprise AI platform for procurement and operations automation."
                  },
                  {
                    q: "How fast can deployment happen?",
                    a: "Typically within 4–8 weeks."
                  },
                  {
                    q: "Does Satori replace ERP systems?",
                    a: "No, it enhances existing systems."
                  },
                  {
                    q: "Is enterprise data secure?",
                    a: "Yes — SOC 2 compliant and encrypted."
                  },
                  {
                    q: "Is mobile access available?",
                    a: "Yes, fully responsive web and mobile access."
                  }
                ].map((faq, idx) => (
                  <div key={idx} className="border-b border-[#EAE0D5] last:border-b-0">
                    <button 
                      onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                      className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-stone-50/50 transition-colors"
                    >
                      <span className={`text-[18px] pr-8 ${faqOpen === idx ? 'font-[600] text-[#3E1C00] tracking-[-0.01em]' : 'font-[500] text-[#3E1C00] tracking-[-0.01em]'}`}>
                        {faq.q}
                      </span>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${faqOpen === idx ? 'bg-[#3E1C00] text-white' : 'bg-transparent text-[#A68B7C]'}`}>
                        {faqOpen === idx ? (
                          <Minus className="w-3 h-3 stroke-[3]" />
                        ) : (
                          <Plus className="w-3 h-3 stroke-[3]" />
                        )}
                      </div>
                    </button>
                    <AnimatePresence>
                      {faqOpen === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 pb-8 pt-0 text-[16px] text-[#A68B7C] leading-[1.65] font-[400] pr-20">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blogs and Insights Section */}
        <section className="bg-[#FDFBF7] pt-24 pb-24 border-t border-[#EAE0D5]">
          <div className="text-center max-w-4xl mx-auto mb-16 px-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 bg-[#FF5C00] rounded-[1px]" />
              <span className="text-[13px] font-semibold text-[#FF5C00] uppercase tracking-[0.14em]">BLOGS AND INSIGHTS</span>
            </div>
            <h2 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-serif font-semibold text-[#3E1C00] mb-8 tracking-[-0.02em] leading-[1.0]">
              Latest insights from enterprise AI
            </h2>
            <p className="text-[19px] text-[#A68B7C] max-w-2xl mx-auto leading-[1.65] font-[400] tracking-[-0.01em]">
              &nbsp;
            </p>
          </div>

          <div className="w-full">
            <div className="max-w-[1400px] mx-auto border-y border-[#EAE0D5] grid md:grid-cols-3 bg-white">
              {[
                { 
                  tag: "TECHNOLOGY", 
                  title: "How Agentic AI is redefining enterprise procurement", 
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
                },
                { 
                  tag: "OPERATIONS", 
                  title: "Building autonomous supplier management systems", 
                  image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=600&auto=format&fit=crop"
                },
                { 
                  tag: "FINANCE", 
                  title: "Why predictive spend intelligence changes enterprise finance", 
                  image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop"
                }
              ].map((blog, i) => (
                <div key={i} className={`flex flex-col border-b md:border-b-0 ${i < 2 ? 'md:border-r' : ''} border-[#EAE0D5] bg-white group cursor-pointer`}>
                  <div className="w-full aspect-square bg-stone-200 overflow-hidden border-b border-[#EAE0D5]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8 lg:p-10 flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2.5 h-2.5 bg-[#FF5C00] rounded-[1px]" />
                      <span className="text-[13px] font-semibold text-[#FF5C00] uppercase tracking-[0.14em]">{blog.tag}</span>
                    </div>
                    <h3 className="text-[1.25rem] font-serif text-[#3E1C00] leading-snug">{blog.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#FF6B1A] to-[#FF4500] text-white pt-24 relative overflow-hidden">
        
        {/* Background Rocket Graphic (Simulated) */}
        <div className="absolute -bottom-10 right-0 md:right-32 opacity-[0.07] pointer-events-none rotate-12 scale-150">
          <Rocket className="w-[400px] h-[400px] stroke-[0.5]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          {/* Top Subscription Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-16">
            <h2 className="text-[2rem] md:text-[2.25rem] font-serif leading-[1.1] mb-8 md:mb-0 text-white">
              Stay ahead with enterprise AI insights
            </h2>
            <div className="flex w-full md:w-auto bg-white rounded-[4px] p-1 shadow-sm">
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="bg-transparent border-none px-5 py-3 text-[14px] text-[#3E1C00] placeholder-stone-400 focus:outline-none w-full md:w-[420px]" 
              />
              <button className="px-6 py-3 bg-[#3E1C00] text-white rounded-[2px] text-[12px] font-bold flex items-center gap-4 hover:bg-[#2A1100] transition-colors shrink-0">
                Subscribe
                <div className="w-8 h-8 rounded-[3px] bg-[#2A1100] flex items-center justify-center border border-white/5">
                  <div className="w-[12px] h-[12px] grid grid-cols-3 gap-[1.5px]">
                    {[...Array(9)].map((_, i) => <div key={i} className="bg-white/40 rounded-[0.5px] w-full h-full" />)}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Links Area */}
        <div className="w-full border-y border-white/20 relative z-10">
          <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row">
            
            {/* Logo and About */}
            <div className="md:w-[40%] py-16 pr-12">
              <div className="flex items-center mb-8 cursor-pointer">
                <Image 
                  src="/images/logo.png" 
                  alt="Sapiences2p Logo" 
                  width={200} 
                  height={50} 
                  className="h-12 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-[16px] text-white/80 leading-[1.65] mb-12 font-[400] max-w-[380px]">
                AI-powered procurement and enterprise transformation — built for scale.
              </p>
              <div className="mb-4">
                <span className="text-[14px] text-white font-[500]">Follow us on:</span>
              </div>
              <div className="flex items-center gap-5">
                {/* Social Icons */}
                <a href="#" className="text-white hover:text-white/80 transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
                <a href="#" className="text-white hover:text-white/80 transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg></a>
                <a href="#" className="text-white hover:text-white/80 transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
                <a href="#" className="text-white hover:text-white/80 transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
              </div>
            </div>

            {/* Main Pages */}
            <div className="md:w-[20%] py-16 px-4 md:px-8 md:border-l border-white/20">
              <h4 className="font-serif font-semibold text-[1.5rem] mb-6 text-white tracking-[-0.01em]">Main Pages</h4>
              <ul className="space-y-3.5">
                {['Home', 'About', 'Features', 'Pricing', 'Blogs', 'Contact'].map(link => (
                  <li key={link}><a href="#" className="text-[15px] font-[500] text-white hover:text-white/80 transition-colors tracking-[-0.01em]">{link}</a></li>
                ))}
              </ul>
            </div>

            {/* Inner Pages */}
            <div className="md:w-[20%] py-16 px-4 md:px-8 md:border-l border-white/20">
              <h4 className="font-serif font-semibold text-[1.5rem] mb-6 text-white tracking-[-0.01em]">Inner Pages</h4>
              <ul className="space-y-3.5">
                {['Careers', 'Case Studies', 'Blog Details'].map(link => (
                  <li key={link}><a href="#" className="text-[15px] font-[500] text-white hover:text-white/80 transition-colors tracking-[-0.01em]">{link}</a></li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="md:w-[20%] py-16 px-4 md:px-8 md:border-l border-white/20">
              <h4 className="font-serif font-semibold text-[1.5rem] mb-6 text-white tracking-[-0.01em]">Legal</h4>
              <ul className="space-y-3.5">
                {['Privacy Policy', 'Terms & Conditions'].map(link => (
                  <li key={link}><a href="#" className="text-[15px] font-[500] text-white hover:text-white/80 transition-colors tracking-[-0.01em]">{link}</a></li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6 text-white/80 text-[12px] relative z-10">
          <div>© 2025 Sapiences2p. All Rights Reserved.</div>
          <div className="mt-4 md:mt-0">
            &nbsp;
          </div>
        </div>


      </footer>
    </div>
  );
}
