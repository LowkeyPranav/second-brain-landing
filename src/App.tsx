/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Upload, 
  MessageSquare, 
  Zap, 
  TrendingUp, 
  Target, 
  FileText, 
  ChevronRight, 
  Search, 
  CheckCircle2, 
  BarChart3, 
  Download,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  BookOpen,
  PieChart,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Mock data for the performance chart
const performanceData = [
  { day: 'Mon', score: 65, mastery: 40 },
  { day: 'Tue', score: 72, mastery: 45 },
  { day: 'Wed', score: 68, mastery: 52 },
  { day: 'Thu', score: 85, mastery: 60 },
  { day: 'Fri', score: 78, mastery: 65 },
  { day: 'Sat', score: 92, mastery: 75 },
  { day: 'Sun', score: 88, mastery: 82 },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Features');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Features', id: 'features' },
    { name: 'How it works', id: 'methodology' },
    { name: 'Pricing', id: 'pricing' }
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-8 py-6",
      isScrolled ? "bg-brand-bg/95 backdrop-blur-xl border-b border-brand-border" : "bg-transparent"
    )}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(0,209,178,0.4)] group-hover:scale-105 transition-transform">
            <div className="flex gap-1.5">
              <div className="w-2 h-6 bg-white rounded-full" />
              <div className="w-2 h-6 bg-white rounded-full" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl font-bold tracking-tight leading-none">
              Second Brain
            </span>
            <span className="text-[12px] text-brand-accent font-semibold tracking-widest mt-1.5 uppercase">
              Your Mind's Ultimate Upgrade.
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3 bg-white/5 p-1.5 rounded-2xl border border-white/5">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={`#${item.id}`}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "px-8 py-3 rounded-xl text-base font-bold transition-all duration-200",
                activeTab === item.name 
                  ? "bg-white/10 text-brand-accent border border-white/10 shadow-md" 
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden md:block p-2 text-white/40 hover:text-white transition-colors">
            <Search className="w-6 h-6" />
          </button>
          <a href="https://second-brain-silk-theta.vercel.app/" className="px-10 py-3.5 rounded-xl bg-white text-brand-bg text-base font-black hover:bg-brand-accent transition-all hover:scale-105 active:scale-95 shadow-lg">
            Get Started
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-bg border-b border-brand-border p-6 flex flex-col gap-4 md:hidden"
          >
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={`#${item.id}`} 
                className="text-lg font-medium text-white/60 hover:text-brand-accent" 
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a href="https://second-brain-silk-theta.vercel.app/" className="w-full py-3 rounded-xl bg-white text-brand-bg font-bold text-center block">
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: { icon: any, title: string, description: string, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="glass p-8 rounded-3xl hover:border-brand-accent/30 transition-all group"
  >
    <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-colors">
      <Icon className="text-brand-accent w-6 h-6" />
    </div>
    <h3 className="text-xl font-display font-bold mb-3">{title}</h3>
    <p className="text-white/60 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-brand-bg">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Sparkles className="w-4 h-4 text-brand-accent" />
            <span className="text-xs font-bold tracking-widest uppercase text-brand-accent">Powered by Gemini 3.1 Pro</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-display font-bold tracking-tight mb-8 leading-[1.1]"
          >
            Your Notes, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-400">Precision Engineered.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-12 leading-relaxed"
          >
            Second Brain is an AI study coach that turns raw materials into a production-ready learning system. Analyze, quiz, and master any subject with data-driven insights.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-accent text-brand-bg font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,255,136,0.2)]">
              Start Learning Free <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full glass font-bold text-lg hover:bg-white/10 transition-all">
              Watch Demo
            </button>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 relative max-w-6xl mx-auto"
          >
            <div className="glass rounded-[2rem] p-4 md:p-6 overflow-hidden shadow-2xl bg-brand-bg">
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/30" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                  <div className="w-3 h-3 rounded-full bg-green-500/30" />
                </div>
                <div className="text-[10px] font-mono text-white/20 tracking-widest uppercase">Cortex Neo v1.0</div>
                <div className="w-8" />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Study Materials */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-2xl font-display font-bold">My Study Materials</h4>
                      <p className="text-xs text-white/40 mt-1">Organize your notes and get ready for exams.</p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-brand-accent font-bold">
                      0 NOTES
                    </div>
                  </div>

                  <div className="border-2 border-dashed border-white/10 rounded-2xl p-12 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-brand-accent/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-brand-accent/10 transition-colors">
                      <Upload className="w-6 h-6 text-brand-accent" />
                    </div>
                    <h5 className="font-bold mb-2">Add Your Notes</h5>
                    <p className="text-xs text-white/40 max-w-[200px]">Drag and drop your PDFs or text files here to begin.</p>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-12 flex items-center justify-center text-center border border-white/5">
                    <p className="text-xs text-white/20 italic">Your library is empty. Upload materials to start learning.</p>
                  </div>
                </div>

                {/* Right: Chat Assistant */}
                <div className="lg:col-span-5">
                  <div className="glass rounded-2xl h-full flex flex-col border-brand-accent/10">
                    <div className="p-4 border-b border-white/5 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                      <span className="text-[10px] font-bold tracking-widest uppercase text-white/60">Cortex Neo</span>
                    </div>
                    
                    <div className="flex-grow flex flex-col items-center justify-center p-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-white text-brand-bg flex items-center justify-center mb-6 shadow-xl">
                        <BookOpen className="w-8 h-8" />
                      </div>
                      <p className="text-sm text-white/40">Ask anything about your notes.</p>
                    </div>

                    <div className="p-4 mt-auto">
                      <div className="bg-white/5 rounded-xl p-3 flex items-center justify-between border border-white/5">
                        <span className="text-xs text-white/20">Upload notes to start chatting...</span>
                        <CheckCircle2 className="w-4 h-4 text-white/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 px-6 bg-brand-bg relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Engineered for Mastery.</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Traditional studying is fragmented. Second Brain unifies your materials, analysis, and coaching into a single high-performance loop.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Upload}
              title="Smart Material Repository"
              description="Upload PDFs and text files. Instant AI summarization, high-yield takeaways, and full LaTeX support for complex formulas."
              delay={0.1}
            />
            <FeatureCard 
              icon={MessageSquare}
              title="AI Chat Assistant"
              description="Context-aware Q&A specifically about your notes. Grounded with Google Search to provide broader context when needed."
              delay={0.2}
            />
            <FeatureCard 
              icon={Zap}
              title="Dynamic Quiz Engine"
              description="Generate quizzes from Easy to Expert. Concept tagging and detailed LaTeX explanations for every single answer."
              delay={0.3}
            />
            <FeatureCard 
              icon={TrendingUp}
              title="Progress Analysis"
              description="Real-time mastery tracking. AI classifies errors into 'Silly' vs 'Concept' gaps to target your weaknesses precisely."
              delay={0.4}
            />
            <FeatureCard 
              icon={Target}
              title="Strategic Coaching"
              description="AI-recommended 'Next Best Action'. Custom lesson drills with exam tips and practice questions for your weak spots."
              delay={0.5}
            />
            <FeatureCard 
              icon={FileText}
              title="Professional Report Cards"
              description="Downloadable PDF reports with predictive scoring, 3-day action plans, and prioritized topic rankings."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              The Science of <br />
              <span className="text-brand-accent italic">Effective Learning.</span>
            </h2>
            <div className="space-y-8">
              {[
                { 
                  title: "Active Recall", 
                  desc: "Dynamic quizzes force your brain to retrieve information, strengthening neural pathways.",
                  icon: CheckCircle2
                },
                { 
                  title: "Spaced Repetition", 
                  desc: "Our AI tracks your forgetting curve and schedules reviews at the optimal moment.",
                  icon: TrendingUp
                },
                { 
                  title: "Metacognition", 
                  desc: "Mistake analysis helps you understand *how* you learn, not just *what* you learn.",
                  icon: Brain
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl glass flex items-center justify-center">
                    <item.icon className="text-brand-accent w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-[3rem] p-12 aspect-square flex flex-col items-center justify-center text-center">
              <div className="w-32 h-32 bg-brand-accent/20 rounded-full flex items-center justify-center mb-8 relative">
                <div className="absolute inset-0 bg-brand-accent/20 blur-2xl rounded-full animate-pulse" />
                <Brain className="w-16 h-16 text-brand-accent relative z-10" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">AI Coach Report</h3>
              <p className="text-white/40 mb-8 max-w-xs">Generate a professional PDF breakdown of your learning patterns and predictive scores.</p>
              <div className="w-full space-y-3">
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-accent w-[85%]" />
                </div>
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-white/40">
                  <span>Confidence</span>
                  <span>85%</span>
                </div>
              </div>
              <button className="mt-10 flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-brand-bg font-bold hover:bg-brand-accent transition-colors">
                <Download className="w-4 h-4" /> Download Report
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-accent/10 to-transparent -z-10" />
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to upgrade <br /> your brain?</h2>
          <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">Join thousands of students and professionals using Second Brain to master complex subjects in record time.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 rounded-full bg-brand-accent text-brand-bg font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_40px_rgba(0,255,136,0.3)]">
              Get Started for Free
            </button>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <ShieldCheck className="w-4 h-4" /> No credit card required
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
                <Brain className="text-brand-bg w-5 h-5" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight">
                Second<span className="text-brand-accent">Brain</span>
              </span>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed">
              Precision-engineered AI study coach designed to turn your notes into a production-ready learning system.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Methodology</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-white/20">
          <p>© 2026 Second Brain AI. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
