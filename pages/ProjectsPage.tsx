import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Working' | 'Live'>('All');

  const filteredProjects = PROJECTS_DATA.filter(p => {
    if (filter === 'All') return true;
    if (filter === 'Working') return p.status === 'Building';
    if (filter === 'Live') return p.status === 'Live';
    return true;
  });

  const counts = {
    All: PROJECTS_DATA.length,
    Working: PROJECTS_DATA.filter(p => p.status === 'Building').length,
    Live: PROJECTS_DATA.filter(p => p.status === 'Live').length
  };

  return (
    <div className="min-h-screen pt-12">
      <div className="max-w-7xl mx-auto mb-8">
        <Link to="/">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Home</span>
          </motion.button>
        </Link>
      </div>

      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold font-heading mb-4 text-zinc-900 dark:text-white"
        >
          Projects
        </motion.h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
          My projects and work across different technologies and domains.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-4">Filter by Status</h3>
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {(['All', 'Working', 'Live'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 sm:flex-none px-4 py-2 sm:py-1.5 rounded-xl sm:rounded-full text-xs font-bold sm:font-medium border transition-all ${filter === f
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 shadow-lg shadow-zinc-900/10'
                  : 'bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600'
                }`}
            >
              <span className="whitespace-nowrap">{f} <span className="ml-1 opacity-60">({counts[f]})</span></span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8 flex items-center gap-2">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">All Projects</h2>
        <span className="text-sm text-zinc-500">({filteredProjects.length} projects)</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;