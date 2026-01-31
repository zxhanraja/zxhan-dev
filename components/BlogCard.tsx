
import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '../types';
import { Calendar, ArrowRight, Heart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getOptimizedImage } from '../utils/image';

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
    const [views, setViews] = React.useState(post.views || 0);

    React.useEffect(() => {
        const fetchViews = async () => {
            try {
                const response = await fetch(`https://api.counterapi.dev/v1/zxhan-portfolio-blogs/${post.id}/get`);
                if (response.ok) {
                    const data = await response.json();
                    setViews((post.views || 0) + data.count);
                }
            } catch (error) {
                console.error("Error fetching blog views:", error);
            }
        };
        fetchViews();
    }, [post.id]);

    return (
        <Link to={`/blogs/${post.id}`} className="block h-full">
            <motion.div
                whileHover={{ y: -5 }}
                className="group flex flex-col h-full bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm hover:shadow-xl dark:shadow-none"
            >
                {/* Image Section - Framed & Contained */}
                <div className="aspect-video w-full overflow-hidden relative bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 p-4">
                    <div className="w-full h-full flex items-center justify-center">
                        <img
                            src={getOptimizedImage(post.imageUrl, 600)}
                            alt={post.title}
                            loading="lazy"
                            decoding="async"
                            className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-md rounded-md"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold font-heading text-zinc-900 dark:text-white mb-2 leading-tight group-hover:text-accent transition-colors">
                        {post.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed line-clamp-2 mb-4">
                        {post.description}
                    </p>

                    {/* Tags in Body */}
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                        {post.tags.map(tag => (
                            <span key={tag} className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Footer Row */}
                    <div className="pt-4 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
                            <div className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
                                <Calendar size={12} className="text-zinc-400" />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
                                <Heart size={12} className="text-zinc-400" />
                                {post.likes}
                            </div>
                            <div className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
                                <Eye size={12} className="text-zinc-400" />
                                {views}
                            </div>
                        </div>
                        <div className="text-[11px] font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors flex items-center gap-1">
                            Read <ArrowRight size={12} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default BlogCard;
