import React, { useEffect, useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<string>('18,429');
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Visitor Counter Logic
    const updateVisitorCount = async () => {
      try {
        const response = await fetch('https://api.counterapi.dev/v1/zxhan-portfolio/visits/up');
        if (response.ok) {
          const data = await response.json();
          const offsetCount = data.count + 18429;
          setVisitorCount(offsetCount.toLocaleString());
          localStorage.setItem('portfolio_visit_count', offsetCount.toString());
        } else {
          throw new Error('API Error');
        }
      } catch (e) {
        const BASE_VISITS = 18429;
        const STORAGE_KEY = 'portfolio_visit_count';
        try {
          const storedCount = localStorage.getItem(STORAGE_KEY);
          let count = (storedCount ? parseInt(storedCount) : BASE_VISITS) + 1;
          localStorage.setItem(STORAGE_KEY, count.toString());
          setVisitorCount(count.toLocaleString());
        } catch (localError) {
          setVisitorCount((BASE_VISITS + 1).toLocaleString());
        }
      } finally {
        setIsLoaded(true);
      }
    };
    updateVisitorCount();
  }, [location.pathname]);

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-900 mt-20 bg-zinc-50 dark:bg-black py-16">
      <div className="max-w-4xl mx-auto px-6 flex flex-col gap-12">

        {/* Social Media Icons Row */}
        <div>
          <div className="flex flex-wrap gap-4 items-center">
            {SOCIAL_LINKS.map((link) => {
              const isEmail = link.label === 'Email';
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all duration-300 group ${isEmail ? 'hover:bg-zinc-100 dark:hover:bg-zinc-800 px-3 py-2 rounded-full -ml-3' : ''}`}
                  title={link.label}
                >
                  <link.icon size={22} strokeWidth={1.5} />
                  {isEmail && (
                    <span className="email-span text-sm font-medium text-zinc-900 dark:text-white">
                      zeeshan89819@gmail.com
                    </span>
                  )}
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer Metadata (Counter & Copyright) */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full bg-green-500 ${!isLoaded ? 'animate-pulse' : ''}`}></span>
            <span>
              <span className="font-mono font-bold text-zinc-900 dark:text-zinc-300">{visitorCount}</span> visits
            </span>
          </div>

          <p>© 2025 Zxhan. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;