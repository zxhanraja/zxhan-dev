
import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Code, Book, Film, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ResourceItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
  path: string;
}

const ResourceItem: React.FC<ResourceItemProps> = ({ icon: Icon, title, description, delay, path }) => (
  <Link to={path} className="block w-full">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group flex items-center gap-5 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-pointer shadow-sm dark:shadow-none min-h-[110px] h-full"
    >
      <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:bg-zinc-100 dark:group-hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-zinc-700/50 flex-shrink-0">
        <Icon size={22} />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-accent transition-colors font-heading">{title}</h3>
          <ArrowRight size={16} className="text-zinc-300 dark:text-zinc-700 group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transform duration-300" />
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-snug">{description}</p>
      </div>
    </motion.div>
  </Link>
);

const Resources: React.FC = () => {
  return (
    <section className="py-20 border-t border-zinc-200 dark:border-zinc-900">
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
        {/* Development Setup */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2 mb-8"
          >
            <span className="text-sm font-mono text-zinc-500">Development</span>
            <h2 className="text-3xl font-bold font-heading text-zinc-900 dark:text-white">Setup</h2>
          </motion.div>

          <div className="space-y-4">
            <ResourceItem
              icon={Settings}
              title="Gears Used"
              description="Productivity Tools, Gears i use daily."
              path="/gear"
              delay={0.1}
            />
            <ResourceItem
              icon={Code}
              title="VSCode / Antigravity Setup"
              description="VSCode / Antigravity setup i use daily."
              path="/setup"
              delay={0.2}
            />
          </div>
        </div>

        {/* Personal Life */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-2 mb-8"
          >
            <span className="text-sm font-mono text-zinc-500">Personal</span>
            <h2 className="text-3xl font-bold font-heading text-zinc-900 dark:text-white">Life</h2>
          </motion.div>

          <div className="space-y-4">
            <ResourceItem
              icon={Book}
              title="Books"
              description="Books that have influenced my thinking and growth."
              path="/books"
              delay={0.3}
            />
            <ResourceItem
              icon={Film}
              title="Movies"
              description="Movies and shows that have inspired and entertained me."
              path="/movies"
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
