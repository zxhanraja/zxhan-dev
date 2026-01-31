import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Play, Info, Star, ChevronLeft, ChevronRight, Film } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MOVIES_DATA } from '../constants';
import { getOptimizedImage } from '../utils/image';

const MovieCard: React.FC<{ item: any }> = ({ item }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative flex-none cursor-pointer"
        >
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 shadow-sm group-hover:shadow-2xl group-hover:shadow-red-500/10 transition-all duration-500 ease-out group-hover:scale-[1.05] group-hover:border-red-500/30 z-10">
                {!imageError ? (
                    <img
                        src={getOptimizedImage(item.image, 400)}
                        alt={item.title}
                        loading="lazy"
                        onError={() => setImageError(true)}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 blur-0"
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-600 gap-3">
                        <Film size={32} />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-center px-4">Image Not Found</span>
                    </div>
                )}

                {/* Hover Overlay - Always dark for cinematic feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col p-4 justify-between backdrop-blur-[2px]">
                    <div className="space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex justify-between items-start">
                            <span className="text-white text-[9px] font-black bg-red-600 px-1.5 py-0.5 rounded uppercase tracking-wider shadow-lg shadow-red-600/20">{item.rating}</span>
                            <span className="text-zinc-400 text-[9px] font-bold uppercase">{item.year}</span>
                        </div>

                        <div>
                            <p className="text-red-500 text-[8px] font-black uppercase tracking-[0.2em] mb-1">Observation</p>
                            <p className="text-zinc-100 text-[10px] leading-relaxed font-medium line-clamp-4">
                                {item.whyWatch}
                            </p>
                        </div>

                        <div className="hidden lg:block">
                            <p className="text-red-500 text-[8px] font-black uppercase tracking-[0.2em] mb-1">The Lesson</p>
                            <p className="text-zinc-400 text-[9px] leading-relaxed italic line-clamp-3">
                                "{item.lessons}"
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 pt-3 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                        <div className="w-1 h-1 rounded-full bg-red-600 animate-pulse" />
                        <p className="text-zinc-500 text-[8px] font-black uppercase tracking-widest">{item.category}</p>
                    </div>
                </div>
            </div>

            <div className="mt-4 px-1">
                <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors truncate">{item.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{item.year}</span>
                    <span className="w-0.5 h-0.5 rounded-full bg-zinc-300 dark:bg-zinc-800" />
                    <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium italic">{item.category}</span>
                </div>
            </div>
        </motion.div>
    );
};

const MoviesPage: React.FC = () => {
    const categories = Array.from(new Set(MOVIES_DATA.map(m => m.category)));

    return (
        <div className="min-h-screen bg-[#fafafa] dark:bg-[#08080a] text-zinc-900 dark:text-white pb-20 selection:bg-red-500/30 overflow-x-hidden transition-colors duration-500">
            {/* Ambient Background Elements - Dynamic for Themes */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-red-500/5 dark:bg-red-600/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-600/10 blur-[150px] rounded-full" />
            </div>

            {/* In-page Navigation - Positioned below the global Navbar */}
            <div className="max-w-[1500px] mx-auto px-6 pt-4 relative z-50">
                <Link to="/">
                    <button className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-red-600 dark:hover:text-white transition-all hover:gap-3 bg-white/80 dark:bg-white/5 backdrop-blur-xl px-4 py-2 md:px-5 md:py-2.5 rounded-2xl border border-zinc-200 dark:border-white/5 group shadow-xl shadow-black/5 dark:shadow-black/40">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-bold text-[10px] md:text-[11px] uppercase tracking-[0.3em]">Back to Hub</span>
                    </button>
                </Link>
            </div>

            <div className="max-w-[1500px] mx-auto px-6 pt-16 md:pt-24 space-y-32 relative z-20">
                {/* Hero Section */}
                <div className="flex flex-col items-center text-center space-y-8 mb-32">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-600/10 border border-red-200 dark:border-red-500/20 mb-2">
                        <Play size={10} className="text-red-600 dark:text-red-500 fill-red-600 dark:fill-red-500" />
                        <p className="text-red-600 dark:text-red-500 text-[10px] font-black uppercase tracking-[0.4em]">The Living Room</p>
                    </div>
                    <h1 className="text-5xl sm:text-7xl md:text-9xl font-black font-heading tracking-tighter text-zinc-900 dark:text-white leading-[0.85]">
                        Cinema as <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-400">Philosophy.</span>
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-lg max-w-2xl leading-relaxed font-medium">
                        A definitive collection of films and series that rewired my thinking,
                        pushed my limits, and redefined what's possible in craft and life.
                    </p>
                </div>

                {categories.map((category) => (
                    <div key={category} className="space-y-12 group/row">
                        <div className="flex items-center gap-8 px-1">
                            <h2 className="text-2xl md:text-4xl font-black font-heading text-zinc-800 dark:text-zinc-100 tracking-tighter uppercase">{category}</h2>
                            <div className="h-[2px] flex-1 bg-gradient-to-r from-zinc-200 dark:from-white/20 via-transparent to-transparent" />
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-6 md:gap-8">
                            {MOVIES_DATA.filter(m => m.category === category).map((movie) => (
                                <MovieCard key={movie.title} item={movie} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer space */}
            <div className="flex flex-col items-center gap-8 py-20 md:py-32">
                <div className="w-16 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
                <p className="text-[12px] text-zinc-400 dark:text-zinc-700 font-bold uppercase tracking-[0.6em] opacity-60 italic">Crafted with Obsession</p>
            </div>
        </div>
    );
};

export default MoviesPage;