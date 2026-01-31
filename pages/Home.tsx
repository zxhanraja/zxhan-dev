import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import ProjectCard from '../components/ProjectCard';
import About from '../components/About';
import BlogCard from '../components/BlogCard';
import Resources from '../components/Resources';
import { PROJECTS_DATA, BLOGS_DATA } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const featuredProjects = PROJECTS_DATA.filter(p => p.featured).slice(0, 4);
  const recentBlogs = isExpanded ? BLOGS_DATA : BLOGS_DATA.slice(0, 3);

  return (
    <>
      <Hero />

      <Experience />

      <section className="py-20">
        <div className="flex items-end justify-between mb-12">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-mono text-primary">Featured</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-zinc-900 dark:text-white">Projects</h2>
          </div>

          <Link
            to="/projects"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group"
          >
            View all projects <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mobile only button */}
        <div className="mt-8 text-center md:hidden">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-600 transition-all"
          >
            Show all projects
          </Link>
        </div>
      </section>

      <About />

      <section id="blogs" className="py-20">
        <div className="flex items-end justify-between mb-12">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-mono text-primary">Thoughts</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-zinc-900 dark:text-white">Blogs</h2>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group"
          >
            {isExpanded ? 'Show less' : 'View all blogs'} <ArrowRight size={14} className={`group-hover:translate-x-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {recentBlogs.map((post, index) => (
            <div key={post.id} className={index === 2 && !isExpanded ? 'hidden lg:block' : ''}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        {/* Mobile only button */}
        <div className="mt-8 text-center md:hidden">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-6 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {isExpanded ? 'Show less' : 'Show all blogs'}
          </button>
        </div>
      </section>

      <Resources />
    </>
  );
};

export default Home;