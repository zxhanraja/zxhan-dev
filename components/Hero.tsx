import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { FileText, Mail, Terminal } from 'lucide-react';
import { AVATAR_URL_LIGHT, AVATAR_URL_DARK, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    setIsDark(document.documentElement.classList.contains('dark'));
                }
            });
        });
        observer.observe(document.documentElement, { attributes: true });
        setIsDark(document.documentElement.classList.contains('dark'));
        return () => observer.disconnect();
    }, []);

    const mailtoLink = `mailto:zeeshan89819@gmail.com?subject=${encodeURIComponent("Getting in Touch")}&body=${encodeURIComponent("Hi Zxhan,\n\nI was browsing your portfolio and would love to connect and discuss potential opportunities or collaborations!")}`;

    return (
        <section className="relative pt-8 pb-16 md:pt-12 md:pb-32">
            <div className="flex flex-col items-center text-center">

                {/* Pixel Avatar Highlight */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-8"
                >
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl border-4 border-zinc-100 dark:border-zinc-900 bg-[#FFD700] overflow-hidden shadow-2xl relative">
                        <img
                            src={isDark ? AVATAR_URL_DARK : AVATAR_URL_LIGHT}
                            alt="Zxhan"
                            className="w-full h-full object-cover pixelated scale-125"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-pixel mb-6"
                >
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">Available for hire</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading tracking-tight text-zinc-900 dark:text-white mb-6 max-w-4xl leading-[1.1]"
                >
                    Building digital experiences with <span className="text-zinc-400 dark:text-zinc-600">code & pixels.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-12 leading-relaxed"
                >
                    I'm Zxhan, a full-stack engineer focused on building clean, high-performance interfaces that bridge the gap between retro charm and modern utility.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mb-16"
                >
                    {/* Native Mailto Link styled as Primary Button */}
                    <motion.a
                        href={mailtoLink}
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto px-8 h-14 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center gap-2 font-semibold shadow-sm hover:opacity-90 transition-all text-base"
                    >
                        <Mail size={20} />
                        Get in touch
                    </motion.a>

                    <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 rounded-2xl gap-2 h-14">
                        <FileText size={20} />
                        Resume
                    </Button>
                </motion.div>

                {/* Social Link Row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap justify-center items-center gap-6 text-zinc-400 dark:text-zinc-600"
                >
                    {SOCIAL_LINKS.map((link) => {
                        const isEmail = link.label === 'Email';
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener"
                                className={`flex items-center gap-2 hover:text-zinc-900 dark:hover:text-white transition-all duration-300 group relative ${isEmail ? 'hover:bg-zinc-100 dark:hover:bg-zinc-800 active:bg-zinc-100 dark:active:bg-zinc-800 focus:bg-zinc-100 dark:focus:bg-zinc-800 px-3 py-2 rounded-full -ml-3' : ''}`}
                            >
                                <link.icon size={22} strokeWidth={1.5} />
                                {isEmail && (
                                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-active:max-w-xs group-focus:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-medium text-zinc-900 dark:text-white">
                                        zeeshan89819@gmail.com
                                    </span>
                                )}
                            </a>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;