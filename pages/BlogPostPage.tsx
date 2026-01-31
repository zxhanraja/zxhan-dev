import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Eye, Share2, Heart, MessageSquare } from 'lucide-react';
import { BLOGS_DATA, AVATAR_URL_LIGHT, AVATAR_URL_DARK } from '../constants';
import BlogCard from '../components/BlogCard';

const BlogPostPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const post = BLOGS_DATA.find(p => p.id === id);

    const [likes, setLikes] = React.useState(post?.likes || 0);
    const [views, setViews] = React.useState(post?.views || 0);
    const [comments, setComments] = React.useState(post?.comments || []);
    const [isLiked, setIsLiked] = React.useState(false);
    const [newComment, setNewComment] = React.useState("");
    const [authorName, setAuthorName] = React.useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
        if (post) {
            // Load from localStorage
            const savedLikes = localStorage.getItem(`blog_likes_${post.id}`);
            const savedComments = localStorage.getItem(`blog_comments_${post.id}`);
            const hasLiked = localStorage.getItem(`blog_is_liked_${post.id}`);

            if (savedLikes) setLikes(parseInt(savedLikes));
            if (savedComments) setComments(JSON.parse(savedComments));
            if (hasLiked) setIsLiked(true);

            // Live View Counting Logic
            const fetchAndIncrementViews = async () => {
                const sessionViewKey = `blog_viewed_${post.id}`;
                const isViewedInSession = sessionStorage.getItem(sessionViewKey);

                try {
                    // If not viewed in this session, increment (up), else just get the current count (get)
                    const action = isViewedInSession ? 'get' : 'up';
                    const response = await fetch(`https://api.counterapi.dev/v1/zxhan-portfolio-blogs/${post.id}/${action}`);

                    if (response.ok) {
                        const data = await response.json();
                        setViews((post.views || 0) + data.count);
                        if (!isViewedInSession) {
                            sessionStorage.setItem(sessionViewKey, "true");
                        }
                    } else {
                        // Fallback to static count
                        setViews(post.views || 0);
                    }
                } catch (error) {
                    console.error("CounterAPI Error:", error);
                    setViews(post.views || 0);
                }
            };

            fetchAndIncrementViews();
        }
    }, [id, post]);

    if (!post) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Blog Post Not Found</h2>
                <Link to="/blogs" className="text-zinc-600 dark:text-zinc-400 hover:underline">Return to Blogs</Link>
            </div>
        );
    }

    const handleLike = () => {
        const newLikedState = !isLiked;
        setIsLiked(newLikedState);
        const newLikes = newLikedState ? likes + 1 : likes - 1;
        setLikes(newLikes);
        localStorage.setItem(`blog_likes_${post.id}`, newLikes.toString());
        localStorage.setItem(`blog_is_liked_${post.id}`, newLikedState.toString());
    };

    const handleComment = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newComment.trim() || !authorName.trim()) return;

        const comment = {
            id: Date.now().toString(),
            author: authorName,
            text: newComment,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        };

        const updatedComments = [comment, ...comments];
        setComments(updatedComments);
        setNewComment("");
        localStorage.setItem(`blog_comments_${post.id}`, JSON.stringify(updatedComments));
    };

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: post.title,
                    text: post.description,
                    url: window.location.href,
                });
            } else {
                await navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard!");
            }
        } catch (error) {
            console.error("Error sharing:", error);
        }
    };

    const relatedPosts = BLOGS_DATA.filter(p => p.id !== post.id).slice(0, 3);

    return (
        <article className="min-h-screen pt-12 pb-20 px-4 md:px-0">
            {/* Navigation and Title */}
            <div className="max-w-4xl mx-auto mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        to="/blogs"
                        className="group inline-flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all uppercase tracking-wider mb-8"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Archive
                    </Link>
                </motion.div>

                {/* Header Info */}
                <header className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-wrap gap-2 mb-8"
                    >
                        {post.tags.map(tag => (
                            <span key={tag} className="px-4 py-1.5 rounded-full text-[10px] font-bold bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 uppercase tracking-widest shadow-lg shadow-zinc-500/10">
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-7xl font-extrabold font-heading text-zinc-900 dark:text-white mb-8 tracking-tighter leading-[0.95]"
                    >
                        {post.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 font-medium"
                    >
                        {post.description}
                    </motion.p>

                    {/* Metadata Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-10 border-y border-zinc-200 dark:border-zinc-800 mb-16"
                    >
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-3 text-sm text-zinc-500 font-bold uppercase tracking-wide">
                                <Calendar size={18} className="text-zinc-400 dark:text-zinc-600" />
                                {post.date}
                            </div>
                            <button
                                onClick={handleLike}
                                className={`flex items-center gap-3 text-sm font-bold transition-all hover:scale-110 active:scale-90 ${isLiked ? 'text-red-500' : 'text-zinc-500 hover:text-red-500'}`}
                            >
                                <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
                                <span>{likes}</span>
                            </button>
                            <div className="flex items-center gap-3 text-sm text-zinc-500 font-bold uppercase tracking-wide">
                                <Eye size={18} className="text-zinc-400 dark:text-zinc-600" />
                                <span>{views}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => document.getElementById('comments-section')?.scrollIntoView({ behavior: 'smooth' })}
                                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800/50 text-zinc-900 dark:text-white text-xs font-bold hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-zinc-900 transition-all shadow-sm active:scale-95"
                            >
                                <MessageSquare size={16} /> Discussion ({comments.length})
                            </button>
                            <button
                                onClick={handleShare}
                                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800/50 text-zinc-900 dark:text-white text-xs font-bold hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-zinc-900 transition-all shadow-sm active:scale-95"
                            >
                                <Share2 size={16} /> Share
                            </button>
                        </div>
                    </motion.div>
                </header>
            </div>

            {/* Main Image Container - No cropping, no side bars */}
            <div className="max-w-6xl mx-auto mb-20 px-4 md:px-0">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] group bg-zinc-50 dark:bg-zinc-900/40"
                >
                    <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-auto block transition-transform duration-1000 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                </motion.div>
            </div>

            <div className="max-w-4xl mx-auto relative px-4 md:px-0">
                {/* Decorative Side Elements */}
                <div className="absolute -left-32 top-0 h-full w-px bg-gradient-to-b from-zinc-200 via-transparent to-transparent dark:from-zinc-800 hidden lg:block" />
                <div className="absolute -right-32 top-0 h-full w-px bg-gradient-to-b from-zinc-200 via-transparent to-transparent dark:from-zinc-800 hidden lg:block" />

                {/* Body Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="prose prose-zinc dark:prose-invert max-w-none prose-lg md:prose-xl prose-headings:font-heading prose-headings:font-extrabold prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-img:rounded-3xl prose-img:shadow-2xl prose-a:text-primary hover:prose-a:underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 prose-strong:text-zinc-900 dark:prose-strong:text-white prose-blockquote:border-l-4 prose-blockquote:border-zinc-900 dark:prose-blockquote:border-white prose-blockquote:italic prose-blockquote:bg-zinc-50 dark:prose-blockquote:bg-zinc-900/50 prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl"
                >
                    {post.content}
                </motion.div>

                {/* Comments Section */}
                <motion.section
                    id="comments-section"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-40 border-t border-zinc-200 dark:border-zinc-800 pt-24"
                >
                    <div className="flex items-center gap-4 mb-16">
                        <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white font-heading tracking-tighter">Discussion</h2>
                        <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-bold text-zinc-500">{comments.length}</span>
                    </div>

                    <form onSubmit={handleComment} className="mb-20 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-4">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g. John Doe"
                                    value={authorName}
                                    onChange={(e) => setAuthorName(e.target.value)}
                                    className="w-full px-6 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-zinc-900/5 dark:focus:ring-white/5 transition-all font-semibold"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-4">Your message</label>
                            <textarea
                                placeholder="Share your technical perspective..."
                                rows={4}
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                className="w-full px-6 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-zinc-900/5 dark:focus:ring-white/5 transition-all font-semibold resize-none"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="group flex items-center gap-2 px-10 py-5 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
                        >
                            Publish Comment
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="space-y-8">
                        {comments.length > 0 ? (
                            comments.map((comment: any, idx: number) => (
                                <motion.div
                                    key={comment.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-8 rounded-[32px] bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 shadow-sm group hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
                                >
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-bold text-zinc-400">
                                                {comment.author[0].toUpperCase()}
                                            </div>
                                            <h4 className="font-extrabold text-lg text-zinc-900 dark:text-white">{comment.author}</h4>
                                        </div>
                                        <span className="text-[10px] text-zinc-400 font-bold tracking-widest uppercase">{comment.date}</span>
                                    </div>
                                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-semibold">
                                        {comment.text}
                                    </p>
                                </motion.div>
                            ))
                        ) : (
                            <div className="text-center py-24 bg-zinc-50 dark:bg-zinc-900/10 rounded-[40px] border-2 border-dashed border-zinc-200 dark:border-zinc-800">
                                <MessageSquare className="mx-auto mb-4 text-zinc-300 dark:text-zinc-700" size={40} />
                                <p className="text-zinc-500 font-bold tracking-tight">Be the first to share your thoughts.</p>
                            </div>
                        )}
                    </div>
                </motion.section>

                {/* Author Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-40 p-12 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-[48px] flex flex-col md:flex-row items-center gap-10 text-center md:text-left shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px] pointer-events-none" />

                    <div className="w-32 h-32 rounded-3xl bg-zinc-800 dark:bg-zinc-100 overflow-hidden border-2 border-zinc-700 dark:border-zinc-200 shadow-2xl shrink-0 group-hover:scale-110 transition-transform duration-700 rotate-3 group-hover:rotate-0">
                        <img src={AVATAR_URL_LIGHT} alt="Zxhan" className="w-full h-full object-cover pixelated scale-125 block dark:hidden" />
                        <img src={AVATAR_URL_DARK} alt="Zxhan" className="w-full h-full object-cover pixelated scale-125 hidden dark:block" />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-extrabold mb-3 tracking-tighter">Zxhan</h3>
                        <p className="text-zinc-400 dark:text-zinc-500 text-xl mb-6 font-medium leading-relaxed max-w-lg">Design Engineer & Backend Enthusiast. Building tools for developers and crafting digital experiences with character.</p>
                        <div className="flex justify-center md:justify-start gap-8">
                            <a href="https://x.com/zxhanraja" target="_blank" rel="noopener noreferrer" className="text-sm font-extrabold hover:text-primary transition-all tracking-widest uppercase pb-1 border-b-2 border-transparent hover:border-primary">Twitter</a>
                            <a href="https://github.com/zxhanraja" target="_blank" rel="noopener noreferrer" className="text-sm font-extrabold hover:text-primary transition-all tracking-widest uppercase pb-1 border-b-2 border-transparent hover:border-primary">GitHub</a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Related Posts */}
            <div className="max-w-7xl mx-auto mt-40 border-t border-zinc-200 dark:border-zinc-800 pt-24">
                <div className="flex items-center justify-between mb-16 px-4 md:px-0">
                    <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white font-heading tracking-tighter">Continue exploring</h2>
                    <Link to="/blogs" className="text-sm font-bold text-zinc-500 hover:text-primary transition-colors flex items-center gap-2 uppercase tracking-widest">
                        View Archive <ArrowRight size={16} />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
                    {relatedPosts.map((p, i) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <BlogCard post={p} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default BlogPostPage;