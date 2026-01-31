import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search as SearchIcon, 
  FileText, 
  Layout, 
  PenTool, 
  Settings, 
  Book, 
  Film, 
  ArrowRight, 
  Command, 
  X, 
  Search,
  Code2,
  Globe,
  Chrome,
  Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { 
  PROJECTS_DATA, 
  BLOGS_DATA, 
  BOOKS_DATA, 
  MOVIES_DATA, 
  GEARS_DATA, 
  EXPERIENCE_DATA,
  EXTENSIONS_DATA,
  SOFTWARE_DATA 
} from '../constants';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchableItem {
  title: string;
  description: string;
  path: string;
  icon: any;
  category: string;
  keywords: string;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // Indexing everything across the app with enhanced plural/singular keywords
  const allItems: SearchableItem[] = [
    // Main Pages
    { title: 'Work Experience', description: 'Career path and roles', path: '/#experience', icon: FileText, category: 'Page', keywords: 'career job work experience resume history cv' },
    { title: 'Projects Gallery', description: 'Applications I have built', path: '/projects', icon: Layout, category: 'Page', keywords: 'portfolio work apps dev projects build coding' },
    { title: 'Blog Archive', description: 'Articles and tutorials', path: '/blogs', icon: PenTool, category: 'Page', keywords: 'writing read tech blog blogs articles posts thoughts' },
    { title: 'Workspace Gear', description: 'Physical setup and hardware', path: '/gear', icon: Settings, category: 'Page', keywords: 'hardware tool desk gear workspace' },
    { title: 'Dev Environment', description: 'VSCode and Shell settings', path: '/setup', icon: Code2, category: 'Page', keywords: 'vscode config terminal setup dev shell' },
    { title: 'Movie List', description: 'Cinema recommendations', path: '/movies', icon: Film, category: 'Page', keywords: 'film tv inspiration movies cinema show' },
    { title: 'Library', description: 'Book recommendations', path: '/books', icon: Book, category: 'Page', keywords: 'reading library books book literature' },
    
    // Experience Deep Search
    ...EXPERIENCE_DATA.map(e => ({
      title: e.company,
      description: `${e.role} • ${e.tech.join(', ')}`,
      path: '/#experience',
      icon: FileText,
      category: 'Experience',
      keywords: `${e.role} ${e.tech.join(' ')} ${e.period} job work career`
    })),

    // Projects Deep Search (Tech & Status)
    ...PROJECTS_DATA.map(p => ({
      title: p.title,
      description: p.description,
      path: '/projects',
      icon: Layout,
      category: 'Project',
      keywords: `${p.tech.join(' ')} ${p.status} projects apps build dev code`
    })),

    // Blogs Deep Search (Tags)
    ...BLOGS_DATA.map(b => ({
      title: b.title,
      description: b.description,
      path: `/blogs/${b.id}`,
      icon: PenTool,
      category: 'Blog',
      keywords: `blog blogs ${b.tags.join(' ')} ${b.date} article post writing`
    })),

    // Movies (Category Search)
    ...MOVIES_DATA.map(m => ({
      title: m.title,
      description: `${m.year} • ${m.category}`,
      path: '/movies',
      icon: Film,
      category: 'Movie',
      keywords: `${m.category} ${m.year} rating ${m.rating} films movies cinema show`
    })),

    // Books (Author Search)
    ...BOOKS_DATA.map(b => ({
      title: b.title,
      description: `by ${b.author}`,
      path: '/books',
      icon: Book,
      category: 'Book',
      keywords: `${b.author} thought biography reading books library`
    })),

    // Hardware
    ...GEARS_DATA.map(g => ({
      title: g.name,
      description: 'Part of daily workflow',
      path: '/gear',
      icon: Settings,
      category: 'Gear',
      keywords: 'tool hardware device setup gears'
    })),

    // Tools & Software
    ...SOFTWARE_DATA.map(s => ({
      title: s.name,
      description: 'System software used',
      path: '/gear',
      icon: Globe,
      category: 'Software',
      keywords: 'app tool program software utility'
    })),

    // Browser Extensions
    ...EXTENSIONS_DATA.map(e => ({
      title: e.name,
      description: 'Chrome Extension',
      path: '/gear',
      icon: Chrome,
      category: 'Extension',
      keywords: 'browser chrome web extension tool plugins'
    }))
  ];

  const isQueryActive = query.trim().length > 0;
  const filteredItems = isQueryActive 
    ? allItems.filter(item => {
        const searchPool = `${item.title} ${item.description} ${item.keywords} ${item.category}`.toLowerCase();
        return searchPool.includes(query.toLowerCase());
      }).slice(0, 12)
    : [];

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isQueryActive) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === 'Enter' && filteredItems[selectedIndex]) {
        handleNavigate(filteredItems[selectedIndex].path);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, isQueryActive]);

  const handleNavigate = (path: string) => {
    if (path.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const id = path.substring(2);
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(path);
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-950/60 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col"
          >
            <div className="relative flex items-center p-4 shrink-0 border-b border-zinc-100 dark:border-zinc-800">
              <SearchIcon className="absolute left-7 text-zinc-400 pointer-events-none" size={18} />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search projects, books, movies, tech..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                className="w-full pl-12 pr-12 py-3 bg-transparent text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none text-lg"
              />
              <button 
                onClick={onClose}
                className="absolute right-6 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className={`max-h-[60vh] overflow-y-auto no-scrollbar transition-all duration-300 ${isQueryActive ? 'py-2' : 'h-0'}`}>
              <AnimatePresence mode="wait">
                {isQueryActive ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-2">
                    {filteredItems.length > 0 ? (
                      <div className="space-y-1">
                        {filteredItems.map((item, idx) => (
                          <button
                            key={`${item.path}-${idx}`}
                            onClick={() => handleNavigate(item.path)}
                            onMouseEnter={() => setSelectedIndex(idx)}
                            className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all text-left group ${
                              idx === selectedIndex 
                              ? 'bg-zinc-100 dark:bg-zinc-800' 
                              : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                            }`}
                          >
                            <div className={`p-2.5 rounded-lg border transition-colors ${
                              idx === selectedIndex
                              ? 'bg-white dark:bg-zinc-700 border-zinc-200 dark:border-zinc-600 text-zinc-900 dark:text-white'
                              : 'bg-zinc-50 dark:bg-zinc-800 border-zinc-100 dark:border-zinc-700 text-zinc-400 dark:text-zinc-500'
                            }`}>
                              <item.icon size={18} />
                            </div>
                            <div className="flex-1 truncate">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-zinc-900 dark:text-white text-sm truncate">{item.title}</span>
                                <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 dark:text-zinc-600 px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 shrink-0">{item.category}</span>
                              </div>
                              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 truncate">{item.description}</p>
                            </div>
                            <ArrowRight size={14} className={`text-zinc-300 dark:text-zinc-700 transition-all ${idx === selectedIndex ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="py-12 text-center flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-zinc-50 dark:bg-zinc-800/50 flex items-center justify-center text-zinc-400">
                          <Search size={24} strokeWidth={1.5} />
                        </div>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm">No results found for <span className="font-bold text-zinc-900 dark:text-white">"{query}"</span></p>
                      </div>
                    )}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <div className="p-3 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 flex items-center justify-between text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">
              <div className="flex gap-4">
                <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-sans">↑↓</kbd> navigate</span>
                <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-sans">Enter</kbd> open</span>
              </div>
              {isQueryActive && <span>{filteredItems.length} results found</span>}
              {!isQueryActive && <span>Universal Search</span>}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;