
import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const Loading: React.FC = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-white dark:bg-[#050505] text-zinc-900 dark:text-zinc-100">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-4"
            >
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                    <Loader2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 animate-pulse">
                    Loading content...
                </p>
            </motion.div>
        </div>
    );
};

export default Loading;
