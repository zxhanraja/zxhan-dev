import React from 'react';
import { motion } from 'framer-motion';
import { AVATAR_URL_LIGHT, AVATAR_URL_DARK, SKILLS } from '../constants';
import { TECH_ICONS } from '../constants';
import { Cpu } from 'lucide-react';

const About: React.FC = () => {
    // Generate fake heatmap data
    const heatmapData = Array.from({ length: 180 }, () => Math.floor(Math.random() * 5));
    const getHeatmapColor = (level: number) => {
        const colors = [
            'bg-zinc-100 dark:bg-zinc-900',
            'bg-green-200 dark:bg-green-900/40',
            'bg-green-400 dark:bg-green-700/60',
            'bg-green-500 dark:bg-green-600',
            'bg-green-600 dark:bg-green-400'
        ];
        return colors[level];
    };

    return (
        <section id="about" className="py-20 border-t border-zinc-200 dark:border-zinc-900">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="text-sm font-mono text-zinc-500 mb-2">About</span>
                    <h2 className="text-3xl font-bold font-heading mb-6 text-zinc-900 dark:text-white">Me</h2>

                    <div className="w-48 h-48 rounded-2xl bg-[#ffd700] mb-6 border-4 border-zinc-200 dark:border-zinc-800 overflow-hidden relative">
                        <img src={AVATAR_URL_LIGHT} alt="Pixel Zxhan" className="w-full h-full object-cover pixelated scale-125 block dark:hidden" />
                        <img src={AVATAR_URL_DARK} alt="Pixel Zxhan" className="w-full h-full object-cover pixelated scale-125 hidden dark:block" />
                    </div>
                </div>

                <div className="md:col-span-8 space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Zxhan</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                            I'm a Full Stack web developer and Open Source Contributor. I love building products to solve real-world problems. I'm specialized in building MVPs with a keen eye for design and user experience.
                        </p>

                        <div className="mb-8">
                            <h4 className="text-sm font-semibold text-zinc-500 mb-3">Skills</h4>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.map(skill => {
                                    const Icon = TECH_ICONS[skill] || Cpu;
                                    return (
                                        <div key={skill} className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors" title={skill}>
                                            <Icon size={18} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-black/40 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm dark:shadow-none">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="font-bold text-zinc-900 dark:text-white">GitHub Activity</h4>
                            <span className="text-xs text-zinc-500">Total: <span className="text-zinc-900 dark:text-white">1,951</span> contributions</span>
                        </div>

                        <motion.div
                            className="flex flex-wrap gap-1"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            {heatmapData.map((level, i) => (
                                <div
                                    key={i}
                                    className={`w-2.5 h-2.5 rounded-sm ${getHeatmapColor(level)}`}
                                />
                            ))}
                        </motion.div>
                        <div className="flex justify-end items-center gap-2 mt-2 text-[10px] text-zinc-500">
                            <span>Less</span>
                            <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-sm bg-zinc-100 dark:bg-zinc-900"></div>
                                <div className="w-2 h-2 rounded-sm bg-green-200 dark:bg-green-900/40"></div>
                                <div className="w-2 h-2 rounded-sm bg-green-500 dark:bg-green-600"></div>
                                <div className="w-2 h-2 rounded-sm bg-green-600 dark:bg-green-400"></div>
                            </div>
                            <span>More</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;