import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BLOGS_DATA } from '../constants';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BlogsPage: React.FC = () => {
  const [activeTag, setActiveTag] = useState('All');

  // Calculate generic tags with counts
  const allTags = BLOGS_DATA.flatMap(post => post.tags);
  const tagCounts: Record<string, number> = {};
  allTags.forEach(tag => {
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
  });

  // Sort by count descending, then alphabetically, and limit to top 5
  const sortedTags = Object.keys(tagCounts).sort((a, b) => {
    const diff = tagCounts[b] - tagCounts[a];
    if (diff !== 0) return diff;
    return a.localeCompare(b);
  }).slice(0, 5);

  const uniqueTags = ['All', ...sortedTags];

  const filteredBlogs = activeTag === 'All'
    ? BLOGS_DATA
    : BLOGS_DATA.filter(post => post.tags.includes(activeTag));

  return (
    <div className="min-h-screen pt-12 pb-20 px-4 md:px-0">
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

      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold font-heading text-zinc-900 dark:text-white tracking-tight"
        >
          Blogs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
        >
          Thoughts, tutorials, and insights on engineering, and programming.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Popular Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-4">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            {uniqueTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${activeTag === tag
                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-black border-zinc-900 dark:border-white shadow-md'
                  : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800'
                  }`}
              >
                {tag} {tag !== 'All' && <span className="opacity-60 ml-1">({tagCounts[tag]})</span>}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Latest Posts Header */}
        <div className="flex items-center gap-2 mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white font-heading">Latest Posts</h2>
          <span className="text-sm text-zinc-500 font-medium">({filteredBlogs.length} posts)</span>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;