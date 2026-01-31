import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Palette, Terminal, Zap, ArrowLeft, Copy, Check, Monitor, Cpu, Code2,
    Files, Search, GitBranch, Play, Boxes, Info, Settings, ChevronRight,
    ChevronDown, Folder, FileJson, Globe, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SetupPage: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const [activeTab, setActiveTab] = useState('explorer');
    const [activeFile, setActiveFile] = useState('settings.json');

    const handleCopy = () => {
        const code = `{
  "editor.fontFamily": "JetBrains Mono, monospace",
  "editor.fontSize": 14,
  "editor.lineHeight": 1.6,
  "editor.fontLigatures": true,
  "workbench.colorTheme": "Antigravity",
  "workbench.iconTheme": "material-icon-theme",
  "editor.cursorBlinking": "smooth",
  "terminal.fontFamily": "MesloLGS NF",
  "apc.electron": {
    "titleBarStyle": "hiddenInset"
  }
}`;
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative min-h-screen pt-12 pb-32 bg-white dark:bg-[#030303] text-zinc-900 dark:text-zinc-200 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] opacity-50" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16">
                <Link to="/">
                    <motion.button
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ x: -5 }}
                        className="group flex items-center gap-3 text-zinc-500 hover:text-primary dark:hover:text-white transition-all uppercase tracking-widest text-[10px] font-black"
                    >
                        <div className="w-8 h-8 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:border-primary dark:group-hover:border-white transition-all bg-white/50 dark:bg-black/50 backdrop-blur-sm">
                            <ArrowLeft size={14} />
                        </div>
                        Back to Orbit
                    </motion.button>
                </Link>
            </div>

            <div className="relative z-10 text-center mb-24 max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[10px] uppercase tracking-[0.3em] font-black text-zinc-500 mb-8 backdrop-blur-md"
                >
                    <Sparkles size={12} className="text-primary dark:text-white" />
                    Workspace Definition
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-4xl sm:text-7xl md:text-8xl font-black font-heading mb-8 text-zinc-900 dark:text-white tracking-[-0.04em] leading-[0.9]"
                >
                    The engine room<span className="text-primary/20 dark:text-white/20">.</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-zinc-500 dark:text-zinc-400 text-xl md:text-2xl font-medium leading-relaxed"
                >
                    Fully optimized VS Code profile and terminal architecture designed for maximum velocity and focus.
                </motion.p>
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                {/* Left Column: VS Code Window */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-8 group"
                >
                    <div className="relative rounded-[32px] overflow-hidden bg-[#0a0a0c] border border-zinc-200 dark:border-zinc-800/50 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] flex h-[650px]">

                        {/* Glow for Window */}
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                        {/* Activity Bar */}
                        <div className="w-14 bg-[#0d0d0f] border-r border-white/[0.03] flex flex-col items-center py-4 gap-4 shrink-0">
                            {[
                                { id: 'explorer', icon: Files },
                                { id: 'search', icon: Search },
                                { id: 'git', icon: GitBranch },
                                { id: 'debug', icon: Play },
                                { id: 'extensions', icon: Boxes },
                            ].map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`p-3 transition-colors relative group/icon ${activeTab === item.id ? 'text-white' : 'text-zinc-600 hover:text-zinc-400'}`}
                                >
                                    <item.icon size={22} strokeWidth={activeTab === item.id ? 2.5 : 2} />
                                    {activeTab === item.id && (
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-6 bg-white" />
                                    )}
                                </button>
                            ))}
                            <div className="mt-auto flex flex-col gap-4 mb-2">
                                <button className="text-zinc-600 hover:text-zinc-400 p-3"><Info size={22} /></button>
                                <button className="text-zinc-600 hover:text-zinc-400 p-3"><Settings size={22} /></button>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="w-64 bg-[#0a0a0c] border-r border-white/[0.03] flex flex-col shrink-0 hidden md:flex overflow-hidden">
                            <div className="px-5 py-4 flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                                    {activeTab === 'explorer' ? 'Explorer' : activeTab.toUpperCase()}
                                </span>
                                <ChevronDown size={14} className="text-zinc-600" />
                            </div>
                            <div className="flex-grow overflow-y-auto px-2 custom-scrollbar-minimal">
                                <AnimatePresence mode="wait">
                                    {activeTab === 'explorer' && (
                                        <motion.div
                                            key="explorer"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                        >
                                            <div className="flex items-center gap-2 px-3 py-1.5 text-zinc-400 hover:bg-white/5 rounded-md cursor-pointer group/item transition-colors">
                                                <ChevronDown size={14} className="text-zinc-600" />
                                                <span className="text-xs font-bold tracking-tight uppercase">PORTFOLIO-MAIN</span>
                                            </div>
                                            <div className="ml-4 space-y-1 mt-1">
                                                <div className="flex items-center gap-2 px-3 py-1.5 text-zinc-500 hover:bg-white/5 rounded-md cursor-pointer group/file">
                                                    <ChevronRight size={14} className="opacity-40" />
                                                    <Folder size={14} className="text-sky-400 fill-sky-400/20" />
                                                    <span className="text-[11px] font-medium">components</span>
                                                </div>
                                                <div className="flex items-center gap-2 px-3 py-1.5 text-zinc-500 hover:bg-white/5 rounded-md cursor-pointer group/file">
                                                    <ChevronRight size={14} className="opacity-40" />
                                                    <Folder size={14} className="text-sky-400 fill-sky-400/20" />
                                                    <span className="text-[11px] font-medium">pages</span>
                                                </div>
                                                <div
                                                    onClick={() => setActiveFile('settings.json')}
                                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md cursor-pointer group/file transition-colors ${activeFile === 'settings.json' ? 'text-white bg-white/5 border-l border-white/20' : 'text-zinc-500 hover:bg-white/5'}`}
                                                >
                                                    <FileJson size={14} className="text-emerald-400 fill-emerald-400/20 ml-3 shrink-0" />
                                                    <span className={`text-[11px] truncate ${activeFile === 'settings.json' ? 'font-bold' : 'font-medium'}`}>settings.json</span>
                                                </div>
                                                <div
                                                    onClick={() => setActiveFile('App.tsx')}
                                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md cursor-pointer group/file transition-colors ${activeFile === 'App.tsx' ? 'text-white bg-white/5 border-l border-white/20' : 'text-zinc-500 hover:bg-white/5'}`}
                                                >
                                                    <Globe size={14} className="text-orange-400 fill-orange-400/20 ml-3 shrink-0" />
                                                    <span className={`text-[11px] truncate ${activeFile === 'App.tsx' ? 'font-bold' : 'font-medium'}`}>App.tsx</span>
                                                </div>
                                                <div
                                                    onClick={() => setActiveFile('index.tsx')}
                                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md cursor-pointer group/file transition-colors ${activeFile === 'index.tsx' ? 'text-white bg-white/5 border-l border-white/20' : 'text-zinc-500 hover:bg-white/5'}`}
                                                >
                                                    <Globe size={14} className="text-sky-400 fill-sky-400/20 ml-3 shrink-0" />
                                                    <span className={`text-[11px] truncate ${activeFile === 'index.tsx' ? 'font-bold' : 'font-medium'}`}>index.tsx</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                    {activeTab === 'search' && (
                                        <motion.div
                                            key="search"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            className="space-y-4"
                                        >
                                            <div className="bg-white/5 border border-white/10 rounded-md px-3 py-2 text-zinc-500 text-[11px]">Search</div>
                                            <div className="text-[10px] text-zinc-600 italic">3 results found in 2 files</div>
                                        </motion.div>
                                    )}
                                    {activeTab !== 'explorer' && activeTab !== 'search' && (
                                        <motion.div
                                            key="other"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            className="text-[11px] text-zinc-600 italic px-2"
                                        >
                                            No pending {activeTab} actions.
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex-grow flex flex-col min-w-0">
                            {/* Tabs / Header */}
                            <div className="h-10 bg-[#0d0d0f] flex items-center overflow-x-auto border-b border-white/[0.03] shrink-0 scrollbar-hide whitespace-nowrap">
                                <div
                                    onClick={() => setActiveFile('settings.json')}
                                    className={`flex items-center gap-2 px-4 h-full text-[11px] cursor-pointer shrink-0 transition-colors ${activeFile === 'settings.json' ? 'bg-[#0a0a0c] border-t-2 border-primary text-white font-bold shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]' : 'text-zinc-500 font-medium hover:bg-white/5'}`}
                                >
                                    <FileJson size={12} className="text-emerald-400" />
                                    settings.json
                                </div>
                                <div
                                    onClick={() => setActiveFile('App.tsx')}
                                    className={`flex items-center gap-2 px-4 h-full text-[11px] cursor-pointer shrink-0 transition-colors ${activeFile === 'App.tsx' ? 'bg-[#0a0a0c] border-t-2 border-primary text-white font-bold shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]' : 'text-zinc-500 font-medium border-x border-white/[0.03] hover:bg-white/5'}`}
                                >
                                    <Globe size={12} className="text-orange-400" />
                                    App.tsx
                                </div>
                                <div
                                    onClick={() => setActiveFile('index.tsx')}
                                    className={`flex items-center gap-2 px-4 h-full text-[11px] cursor-pointer shrink-0 transition-colors ${activeFile === 'index.tsx' ? 'bg-[#0a0a0c] border-t-2 border-primary text-white font-bold shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]' : 'text-zinc-500 font-medium border-r border-white/[0.03] hover:bg-white/5'}`}
                                >
                                    <Globe size={12} className="text-sky-400" />
                                    index.tsx
                                </div>
                            </div>

                            {/* Editor Content */}
                            <div className="flex-grow relative overflow-hidden flex flex-col">
                                {/* Copy Button */}
                                {activeFile === 'settings.json' && (
                                    <button
                                        onClick={handleCopy}
                                        className="absolute top-4 right-6 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all border border-white/10 z-30 shadow-2xl backdrop-blur-md"
                                        title="Copy settings"
                                    >
                                        {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
                                    </button>
                                )}

                                <div className="flex-grow p-4 md:p-8 overflow-auto custom-scrollbar-minimal font-mono selection:bg-primary/30">
                                    <AnimatePresence mode="wait">
                                        {activeFile === 'settings.json' && (
                                            <motion.div
                                                key="settings"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="text-xs md:text-sm leading-8 min-w-fit"
                                            >
                                                <div className="flex group/line">
                                                    <span className="w-8 md:w-10 text-zinc-700 select-none text-right mr-4 md:mr-6 text-[10px] md:text-xs tabular-nums group-hover/line:text-zinc-500">1</span>
                                                    <span className="text-yellow-400/90">{`{`}</span>
                                                </div>
                                                <div className="flex group/line">
                                                    <span className="w-8 md:w-10 text-zinc-700 select-none text-right mr-4 md:mr-6 text-[10px] md:text-xs tabular-nums group-hover/line:text-zinc-500">2</span>
                                                    <span className="pl-4">
                                                        <span className="text-sky-400/90 whitespace-nowrap">"editor.fontFamily"</span>
                                                        <span className="text-zinc-500">: </span>
                                                        <span className="text-emerald-400/90 truncate">"JetBrains Mono"</span>
                                                        <span className="text-zinc-600">,</span>
                                                    </span>
                                                </div>
                                                <div className="flex group/line highlight-line bg-primary/10 -mx-4 md:-mx-8 px-4 md:px-8 border-l-2 border-primary">
                                                    <span className="w-8 md:w-10 text-white select-none text-right mr-4 md:mr-6 text-[10px] md:text-xs tabular-nums">6</span>
                                                    <span className="pl-4">
                                                        <span className="text-sky-400/90 whitespace-nowrap">"workbench.colorTheme"</span>
                                                        <span className="text-zinc-500">: </span>
                                                        <span className="text-white font-black">"Antigravity"</span>
                                                        <span className="text-zinc-600">,</span>
                                                    </span>
                                                </div>
                                                <div className="flex group/line">
                                                    <span className="w-8 md:w-10 text-zinc-700 select-none text-right mr-4 md:mr-6 text-[10px] md:text-xs tabular-nums group-hover/line:text-zinc-500">13</span>
                                                    <span className="text-yellow-400/90">{`}`}</span>
                                                </div>
                                            </motion.div>
                                        )}

                                        {activeFile === 'App.tsx' && (
                                            <motion.div
                                                key="app"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="text-xs md:text-sm leading-8 min-w-fit"
                                            >
                                                <div className="flex group/line">
                                                    <span className="w-8 md:w-10 text-zinc-700 select-none text-right mr-4 md:mr-6 text-[10px] md:text-xs tabular-nums">1</span>
                                                    <span className="text-pink-400 italic">import</span>
                                                    <span className="text-zinc-200 ml-2">React</span>
                                                    <span className="text-zinc-500 mx-2">from</span>
                                                    <span className="text-emerald-400">'react'</span>
                                                </div>
                                                <div className="flex group/line highlight-line bg-primary/10 -mx-4 md:-mx-8 px-4 md:px-8 border-l-2 border-primary">
                                                    <span className="w-8 md:w-10 text-white select-none text-right mr-4 md:mr-6 text-[10px] md:text-xs tabular-nums">7</span>
                                                    <span className="pl-8 text-white font-black">{"<AntigravityEngine />"}</span>
                                                </div>
                                            </motion.div>
                                        )}

                                        {activeFile === 'index.tsx' && (
                                            <motion.div
                                                key="index"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="text-xs md:text-sm leading-8 min-w-fit"
                                            >
                                                <div className="flex group/line">
                                                    <span className="w-8 md:w-10 text-zinc-700 select-none text-right mr-4 md:mr-6 text-[10px] md:text-xs tabular-nums">1</span>
                                                    <span className="text-zinc-500 italic">/** System Initialization */</span>
                                                </div>
                                                <div className="flex group/line highlight-line bg-primary/10 -mx-4 md:-mx-8 px-4 md:px-8 border-l-2 border-primary">
                                                    <span className="w-8 md:w-10 text-white select-none text-right mr-4 md:mr-6 text-[10px] md:text-xs tabular-nums">4</span>
                                                    <span className="text-white font-black uppercase">System.Initialize();</span>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Status Bar */}
                                <div className="h-6 bg-primary dark:bg-white flex items-center justify-between px-3 shrink-0 text-white dark:text-zinc-900 font-bold text-[10px] uppercase tracking-wider">
                                    <div className="flex items-center gap-4 h-full">
                                        <div className="flex items-center gap-1.5 px-1 hover:bg-black/10 cursor-pointer h-full transition-colors">
                                            <GitBranch size={12} />
                                            <span>main*</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 h-full">
                                        <div className="px-2 hover:bg-black/10 cursor-pointer h-full flex items-center transition-colors">
                                            {activeFile === 'settings.json' ? 'JSON' : 'TSX'}
                                        </div>
                                        <div className="px-2 hover:bg-black/10 cursor-pointer h-full flex items-center transition-colors">UTF-8</div>
                                        <div className="px-2 hover:bg-black/10 cursor-pointer h-full flex items-center transition-colors text-zinc-900/50">Ln 6, Col 42</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between px-4 mb-20">
                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Live Environment Sync
                        </div>
                        <div className="text-[10px] font-mono text-zinc-500 font-bold">
                            v1.8.4 - Antigravity Build
                        </div>
                    </div>

                    {/* New Content to Fill Left Space */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 rounded-[32px]"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Code2 size={18} className="text-primary" />
                                <h4 className="text-sm font-black uppercase tracking-widest text-zinc-900 dark:text-white">Workflow Pipeline</h4>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { label: 'Source Control', status: 'Syncing', icon: GitBranch },
                                    { label: 'Build Process', status: 'Optimized', icon: Zap },
                                    { label: 'Cloud Deployment', status: 'Ready', icon: Globe }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group/step">
                                        <div className="w-10 h-10 rounded-xl bg-white dark:bg-black border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-500 group-hover/step:text-primary transition-colors shadow-sm">
                                            <item.icon size={16} />
                                        </div>
                                        <div>
                                            <div className="text-[11px] font-black text-zinc-900 dark:text-white uppercase tracking-wider">{item.label}</div>
                                            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{item.status}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-8 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 rounded-[32px]"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Terminal size={18} className="text-primary" />
                                <h4 className="text-sm font-black uppercase tracking-widest text-zinc-900 dark:text-white">Command Hub</h4>
                            </div>
                            <div className="space-y-3">
                                {[
                                    'git commit -m "feat: orbit jump"',
                                    'npm run dev:antigravity',
                                    'ssh zxhan@production'
                                ].map((cmd, i) => (
                                    <div key={i} className="px-4 py-3 bg-white dark:bg-black/50 border border-zinc-200 dark:border-white/5 rounded-xl font-mono text-[10px] text-zinc-600 dark:text-zinc-400 flex items-center gap-3 hover:border-primary/30 transition-all cursor-default group/cmd">
                                        <span className="text-primary opacity-50">$</span>
                                        <span className="group-hover/cmd:text-zinc-900 dark:group-hover/cmd:text-white transition-colors">{cmd}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column: Details Grid */}
                <div className="lg:col-span-4 space-y-8 h-full">

                    {/* Visuals Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 bg-white dark:bg-zinc-900/30 backdrop-blur-md border border-zinc-200 dark:border-white/5 rounded-[32px] hover:shadow-2xl transition-all duration-500"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-inner">
                                <Palette size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-zinc-900 dark:text-white tracking-tight leading-none mb-1">Visuals</h3>
                                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Aesthetic layer</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none">Color Engine</span>
                                    <span className="px-2 py-0.5 rounded-md text-[9px] font-black bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 uppercase tracking-widest">Active</span>
                                </div>
                                <div className="p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 transition-all hover:bg-white dark:hover:bg-zinc-900">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex flex-col">
                                            <span className="text-zinc-900 dark:text-white font-black tracking-tight text-lg mb-0.5">Antigravity</span>
                                            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Signature Theme</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-2">
                                        {[
                                            { color: '#5b21b6', label: 'bg' },
                                            { color: '#d946ef', label: 'acc' },
                                            { color: '#0ea5e9', label: 'pri' },
                                            { color: '#10b981', label: 'suc' }
                                        ].map((c, i) => (
                                            <div key={i} className="flex flex-col gap-1.5">
                                                <div className="aspect-square rounded-lg shadow-sm" style={{ backgroundColor: c.color }} />
                                                <span className="text-[8px] font-black uppercase text-zinc-400 text-center">{c.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="h-px bg-zinc-100 dark:bg-zinc-800" />

                            <div>
                                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest block mb-4">Typography</span>
                                <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-900 transition-all">
                                    <div className="flex flex-col">
                                        <span className="text-zinc-900 dark:text-white font-bold font-mono text-sm mb-0.5">JetBrains Mono</span>
                                        <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Size 14 / 1.6lh</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                        <Check size={12} strokeWidth={3} />
                                        <span className="text-[9px] font-black uppercase tracking-widest">Ligatures</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Performance Card - NEW to fill space */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 }}
                        className="p-8 bg-zinc-900 dark:bg-white/5 border border-white/10 rounded-[32px] overflow-hidden group shadow-2xl relative"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                            <Monitor size={120} className="text-white" />
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white shadow-inner">
                                    <Cpu size={24} />
                                </div>
                                <div >
                                    <h3 className="text-xl font-black text-white tracking-tight leading-none mb-1">Performance</h3>
                                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">System Optimization</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <span className="block text-[8px] font-black text-white/40 uppercase tracking-widest mb-1">FPS Target</span>
                                    <span className="text-2xl font-black text-white tracking-tighter">144<span className="text-xs text-primary ml-1">hz</span></span>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <span className="block text-[8px] font-black text-white/40 uppercase tracking-widest mb-1">Latency</span>
                                    <span className="text-2xl font-black text-white tracking-tighter">0.1<span className="text-xs text-primary ml-1">ms</span></span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Terminal Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="p-8 bg-white dark:bg-zinc-900/30 backdrop-blur-md border border-zinc-200 dark:border-white/5 rounded-[32px] hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
                    >
                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-inner">
                                <Terminal size={24} />
                            </div>
                            <div >
                                <h3 className="text-xl font-black text-zinc-900 dark:text-white tracking-tight leading-none mb-1">Terminal</h3>
                                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">CLI Architecture</p>
                            </div>
                        </div>

                        <div className="space-y-4 relative z-10">
                            <div className="p-4 bg-zinc-900 rounded-2xl border border-white/5 font-mono">
                                <div className="flex gap-2 text-xs mb-3">
                                    <span className="text-emerald-400">➜</span>
                                    <span className="text-sky-400">~</span>
                                    <span className="text-zinc-400">neofetch</span>
                                </div>
                                <div className="space-y-1.5">
                                    {[
                                        { k: 'OS', v: 'Windows 11' },
                                        { k: 'Shell', v: 'zsh 5.9' },
                                        { k: 'Theme', v: 'Starship' },
                                        { k: 'Font', v: 'MesloLGS NF' }
                                    ].map(item => (
                                        <div key={item.k} className="flex justify-between text-[10px]">
                                            <span className="text-zinc-500">{item.k}</span>
                                            <span className="text-zinc-300 font-bold">{item.v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Extensions Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="p-8 bg-white dark:bg-zinc-900/30 backdrop-blur-md border border-zinc-200 dark:border-white/5 rounded-[32px] hover:shadow-2xl transition-all duration-500"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-600 dark:text-orange-400 shadow-inner">
                                <Zap size={24} />
                            </div>
                            <div >
                                <h3 className="text-xl font-black text-zinc-900 dark:text-white tracking-tight leading-none mb-1">Power Tools</h3>
                                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Enhanced Logic</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {["ESLint", "Prettier", "GitLens", "Tailwind CSS", "Error Lens", "Symbols", "Prisma", "Vim", "Apc", "Github Copilot"].map(ext => (
                                <span key={ext} className="px-3 py-1.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-[10px] font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-white hover:border-primary/50 transition-all cursor-default select-none shadow-sm dark:shadow-none bg-white/50 dark:bg-white/5 backdrop-blur-sm">
                                    {ext}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default SetupPage;