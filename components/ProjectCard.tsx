
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowRight, Github } from 'lucide-react';
import { ProjectItem } from '../types';
import { TECH_ICONS } from '../constants';
import { getOptimizedImage } from '../utils/image';

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 h-full will-change-[opacity,transform]"
    >
      {/* Top Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Image Section - Smart Fit with Blurred Backdrop */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-all duration-500">

        {/* Browser Header */}
        <div className="absolute top-0 left-0 right-0 z-20 h-7 bg-zinc-100/90 dark:bg-zinc-900/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-1.5 px-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
          </div>

          {/* Address Bar */}
          <div className="ml-2 flex-1 h-5 rounded bg-white/50 dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-zinc-700/50 flex items-center px-2 transition-colors group-hover:bg-white dark:group-hover:bg-zinc-800">
            <div className="text-[10px] text-zinc-400 font-medium truncate max-w-[200px] mx-auto group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
              {project.link.startsWith('http')
                ? new URL(project.link).hostname
                : `${project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.app`}
            </div>
          </div>
        </div>

        {/* Backdrop Glow (Blurred Image) */}
        <div className="absolute inset-0 z-0">
          <img
            src={getOptimizedImage(project.imageUrl, 800)}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover blur-2xl opacity-40 dark:opacity-30 scale-110"
          />
        </div>

        {/* Main Image (Smart Fit) */}
        <div className="relative w-full h-full pt-7 z-10 flex items-center justify-center p-2">
          <img
            src={getOptimizedImage(project.imageUrl, 800)}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>

        {/* Status Badge */}
        <div className="absolute bottom-3 right-3 z-30">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-900 dark:text-white shadow-sm hover:scale-105 transition-transform cursor-default">
            <span className={`relative flex h-2 w-2 mr-0.5`}>
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${project.status === 'Live' ? 'bg-green-500' : 'bg-amber-500'}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${project.status === 'Live' ? 'bg-green-500' : 'bg-amber-500'}`}></span>
            </span>
            {project.status === 'Live' ? 'Live' : project.status}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-grow flex flex-col p-6 relative z-20">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold font-heading text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <div className="flex gap-2">
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <Github size={16} />
              </a>
            )}
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-primary hover:bg-primary/10 transition-colors">
              <Globe size={16} />
            </a>
          </div>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-2">
          {project.description}
        </p>

        <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((techName) => {
              const Icon = TECH_ICONS[techName as string] || Globe;
              return (
                <div key={techName} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:border-primary/30 hover:text-primary transition-colors" title={techName}>
                  <Icon size={12} />
                  <span>{techName}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
