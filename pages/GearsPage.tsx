import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Mouse, Headphones, ArrowUpRight, Monitor, Smartphone, ArrowLeft, Coffee, Chrome, Globe, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GEARS_DATA, EXTENSIONS_DATA, SOFTWARE_DATA } from '../constants';

const GearsPage: React.FC = () => {
    const [visitorCount, setVisitorCount] = useState<string>('...');

    useEffect(() => {
        const fetchCount = async () => {
            try {
                const response = await fetch('https://api.countapi.xyz/get/zxhan-portfolio-main/visits');
                if (response.ok) {
                    const data = await response.json();
                    setVisitorCount(data.value.toLocaleString());
                } else {
                    throw new Error('API Error');
                }
            } catch (e) {
                const stored = localStorage.getItem('portfolio_visit_count');
                if (stored) setVisitorCount(parseInt(stored).toLocaleString());
                else setVisitorCount('20,663');
            }
        };
        fetchCount();
    }, []);

    const GearItem = ({ item, index, delay, category }: { item: any, index: number, delay: number, category: string }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + (index * 0.05), duration: 0.5 }}
            className="group relative"
        >
            <div className="p-6 rounded-[28px] border border-zinc-200/60 dark:border-zinc-800/60 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md transition-[background-color,transform,box-shadow] duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:-translate-y-1 group-hover:bg-white dark:group-hover:bg-zinc-900 flex flex-col h-full relative overflow-hidden will-change-transform">
                {/* Recipe Overlay for Chai */}
                {item.recipe && (
                    <div className="absolute inset-0 bg-white/95 dark:bg-zinc-900/95 flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 pointer-events-none group-hover:pointer-events-auto backdrop-blur-xl">
                        <div className="flex items-center gap-2 mb-4">
                            <Coffee className="text-zinc-900 dark:text-white" size={20} />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900/80 dark:text-white/80">Secret Recipe</span>
                        </div>
                        <p className="text-zinc-900 dark:text-white font-bold text-lg leading-snug">
                            {item.recipe}
                        </p>
                    </div>
                )}

                <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-primary dark:group-hover:text-white transition-all group-hover:scale-110 shadow-inner">
                            {item.icon ? <item.icon size={24} /> : <Globe size={24} />}
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-zinc-400 py-1 px-2 rounded-lg bg-zinc-100/50 dark:bg-zinc-800/50">{category}</span>
                            {item.link && (
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-primary dark:hover:text-white transition-colors p-2">
                                    <ArrowUpRight size={16} />
                                </a>
                            )}
                        </div>
                    </div>
                    <h3 className="text-zinc-900 dark:text-white font-bold text-lg tracking-tight mb-2 group-hover:translate-x-1 transition-transform duration-500">{item.name}</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium leading-relaxed mb-4">
                        {item.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/50 flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Stable</span>
                        <div className="flex gap-1">
                            <div className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                            <div className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                            <div className="w-1 h-1 rounded-full bg-primary/40 dark:bg-white/40"></div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    return (
        <div className="min-h-screen pt-20 pb-32 bg-zinc-50 dark:bg-[#030303] text-zinc-900 dark:text-zinc-200 overflow-hidden relative">
            {/* Background Texture & Glows */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-16"
                >
                    <Link
                        to="/"
                        className="group inline-flex items-center gap-3 text-sm font-bold text-zinc-500 hover:text-primary dark:hover:text-white transition-all uppercase tracking-widest"
                    >
                        <div className="w-10 h-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:border-primary dark:group-hover:border-white transition-all bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                        </div>
                        Back to Orbit
                    </Link>
                </motion.div>

                {/* Header */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center md:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8 shadow-sm">
                            <Sparkles size={12} className="text-primary dark:text-white" />
                            Hardware & Software System
                        </div>
                        <h1 className="text-6xl sm:text-7xl md:text-9xl font-black font-heading text-zinc-900 dark:text-white mb-10 tracking-[ -0.05em] leading-[0.85]">
                            The setup<span className="text-primary/20 dark:text-white/20">.</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-zinc-500 dark:text-zinc-400 font-medium max-w-3xl leading-snug">
                            Detailed list of the workspace setup, configurations, and tools I use to build daily.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-40">
                    {/* Hardware Section */}
                    <section>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                            <div>
                                <span className="text-primary dark:text-white font-black text-6xl opacity-10 block mb-2">01</span>
                                <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white font-heading tracking-tighter">Essential Hardware</h2>
                            </div>
                            <p className="text-zinc-500 font-semibold uppercase tracking-widest text-[10px]">Physical Foundation</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {GEARS_DATA.map((item, idx) => (
                                <GearItem key={idx} item={item} index={idx} delay={0.2} category="Hardware" />
                            ))}
                        </div>
                    </section>

                    {/* Extensions Section */}
                    <section>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                            <div>
                                <span className="text-primary dark:text-white font-black text-6xl opacity-10 block mb-2">02</span>
                                <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white font-heading tracking-tighter">Web Architecture</h2>
                            </div>
                            <p className="text-zinc-500 font-semibold uppercase tracking-widest text-[10px]">Browser Toolkit</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {EXTENSIONS_DATA.map((item, idx) => (
                                <GearItem key={idx} item={{ ...item, icon: Chrome }} index={idx} delay={0.3} category="Extension" />
                            ))}
                        </div>
                    </section>

                    {/* Software Section */}
                    <section>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                            <div>
                                <span className="text-primary dark:text-white font-black text-6xl opacity-10 block mb-2">03</span>
                                <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white font-heading tracking-tighter">Software Stack</h2>
                            </div>
                            <p className="text-zinc-500 font-semibold uppercase tracking-widest text-[10px]">Digital OS</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {SOFTWARE_DATA.map((item, idx) => (
                                <GearItem key={idx} item={{ ...item, icon: Monitor }} index={idx} delay={0.4} category="Software" />
                            ))}
                        </div>
                    </section>

                    {/* Visitor Stats Footer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-10 pt-20 border-t border-zinc-200/50 dark:border-zinc-800/50"
                    >
                        <div className="px-6 py-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 flex items-center gap-3 text-xs text-zinc-500 font-bold uppercase tracking-widest shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            System active
                            <span className="w-px h-4 bg-zinc-200 dark:bg-zinc-800 mx-2" />
                            Visitor #{visitorCount}
                        </div>
                        <p className="text-[10px] text-zinc-400 font-bold tracking-[0.3em] uppercase opacity-50">
                            Last optimized: Jan 2026
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default GearsPage;