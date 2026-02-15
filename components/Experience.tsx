import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../constants';
import { TECH_ICONS } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="flex flex-col gap-2 mb-12">
        <span className="text-sm font-mono text-primary">Featured</span>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-zinc-900 dark:text-white">Experience</h2>
      </div>

      <div className="relative space-y-8">
        {/* Vertical connector line */}
        <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-zinc-200 dark:bg-zinc-800 hidden md:block" />

        {EXPERIENCE_DATA.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-0 md:pl-12 group"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 top-1.5 w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 items-center justify-center hidden md:flex z-10 group-hover:border-primary transition-colors">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-500 group-hover:bg-primary transition-colors" />
            </div>

            {/* Content Card */}
            <div className="bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:bg-zinc-50 dark:hover:bg-zinc-900/80 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm dark:shadow-none">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{item.company}</h3>
                    {item.status === 'Working' && (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-wider">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Working
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 font-medium">{item.role}</p>
                </div>
                <div className="md:text-right">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.period}</p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">{item.location}</p>
                </div>
              </div>

              {/* Technologies Row */}
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                <span className="text-xs text-zinc-500 font-mono mr-2">Technologies & Tools</span>
                {item.tech.map((t) => {
                  const Icon = TECH_ICONS[t] || Briefcase;
                  return (
                    <div key={t} className="flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/50 text-xs text-zinc-600 dark:text-zinc-300">
                      <Icon size={12} />
                      {t}
                    </div>
                  );
                })}
              </div>

              {/* Description Bullets */}
              <ul className="space-y-2">
                {item.description.map((desc, i) => (
                  <li key={i} className="text-sm text-zinc-600 dark:text-zinc-400 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-zinc-400 dark:before:text-zinc-600">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}


      </div>
    </section>
  );
};

export default Experience;