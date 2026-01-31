import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getOptimizedImage } from '../utils/image';

const BOOKS = [
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    cover: "https://ik.imagekit.io/ioktbcewp/download%20(26).jpg",
    rating: 5,
    thought: "The best biography I've ever read. It shows the brutal reality of perfectionism."
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg",
    rating: 5,
    thought: "Practical, actionable, and life-changing. 1% better every day."
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    cover: "https://img.drz.lazcdn.com/g/kf/S650826591e0d4af6af4f323a839ac67ar.jpg_720x720q80.jpg",
    rating: 5,
    thought: "Essential reading for any software engineer who cares about their craft."
  },
  {
    title: "Show Your Work!",
    author: "Austin Kleon",
    cover: "https://rukminim2.flixcart.com/image/480/640/xif0q/regionalbooks/5/h/r/show-your-work-best-quality-papaerback-austin-kleon-original-imaggx2xgk64hwgt.jpeg?q=90",
    rating: 4,
    thought: "Helped me get over the fear of sharing my imperfect projects."
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    cover: "https://bookmarkandworld.com/cdn/shop/files/WhatsAppImage2024-10-06at3.11.46PM.jpg?v=1728207868",
    rating: 4,
    thought: "In a distracted world, focus is the new superpower."
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    cover: "https://m.media-amazon.com/images/I/71uAI28kJuL.jpg",
    rating: 4,
    thought: "Contrarian thinking on startups and how to build the future."
  }
];

const BooksPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-12 pb-20 bg-white dark:bg-[#050505] text-zinc-900 dark:text-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
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

      <div className="text-center mb-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4 text-zinc-900 dark:text-white"
        >
          Library
        </motion.h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto text-lg">
          Books that have shaped my thinking, career, and perspective on life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        {BOOKS.map((book, idx) => (
          <motion.div
            key={book.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative flex flex-col bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-black/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 h-full"
          >
            {/* Book Cover Section with Ambient Blur */}
            <div className="relative h-64 overflow-hidden bg-zinc-100 dark:bg-zinc-950 p-6 flex items-center justify-center group-hover:bg-zinc-50 dark:group-hover:bg-zinc-900 transition-colors">
              {/* Ambient Background Blur */}
              <div
                className="absolute inset-0 opacity-20 dark:opacity-20 blur-2xl scale-125 transition-opacity duration-700 group-hover:opacity-30"
                style={{ backgroundImage: `url(${getOptimizedImage(book.cover, 100)})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
              />

              {/* Main Book Cover */}
              <div className="relative z-10 w-32 md:w-36 shadow-lg shadow-black/20 group-hover:shadow-2xl group-hover:shadow-black/40 group-hover:-translate-y-2 transition-all duration-500 ease-out rounded-sm md:rounded-[4px] bg-zinc-200 overflow-hidden">
                <img
                  src={getOptimizedImage(book.cover, 400)}
                  alt={book.title}
                  loading="lazy"
                  className="w-full h-auto object-cover aspect-[2/3]"
                />
                {/* Spine highlight effect */}
                <div className="absolute inset-y-0 left-0 w-[1px] bg-white/20 z-20"></div>
                <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-4">
                <h3 className="text-xl font-bold font-heading text-zinc-900 dark:text-white leading-tight mb-1 group-hover:text-primary transition-colors">
                  {book.title}
                </h3>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  by <span className="text-zinc-700 dark:text-zinc-300">{book.author}</span>
                </p>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={`${i < book.rating ? "fill-amber-400 text-amber-400" : "fill-zinc-200 dark:fill-zinc-800 text-zinc-200 dark:text-zinc-800"}`}
                  />
                ))}
              </div>

              <div className="relative pl-4 mt-auto">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800 rounded-full group-hover:bg-primary/50 transition-colors"></div>
                <p className="text-sm italic text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  "{book.thought}"
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;