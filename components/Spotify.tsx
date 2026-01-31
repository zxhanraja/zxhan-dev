import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Music, ExternalLink, Play } from 'lucide-react';
import { SPOTIFY_CONFIG } from '../constants';

const Spotify: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [song, setSong] = useState({
    title: '',
    artist: '',
    albumArt: '',
    url: ''
  });

  useEffect(() => {
    const fetchNowPlaying = async () => {
      // ---------------------------------------------------------
      // DEMO MODE: If no API keys are present, show a static song
      // ---------------------------------------------------------
      if (!SPOTIFY_CONFIG.CLIENT_ID || !SPOTIFY_CONFIG.CLIENT_SECRET || !SPOTIFY_CONFIG.REFRESH_TOKEN) {
        setSong({
            title: "Jo Tere Sang",
            artist: "Jeet Gannguli, Mustafa Zahid, Sayeed Quadri",
            albumArt: "https://i.scdn.co/image/ab67616d0000b273b1349d943894df39c55b119a", // Example art
            url: "https://open.spotify.com/track/4z8qL9s0K0n4X4X4X4X4X4" // Example URL
        });
        setIsPlaying(false); // Set to true if you want bars to animate in demo mode
        setLoading(false);
        return;
      }

      // ---------------------------------------------------------
      // REAL API LOGIC
      // ---------------------------------------------------------
      try {
        // 1. Get Access Token using Refresh Token
        const basic = btoa(`${SPOTIFY_CONFIG.CLIENT_ID}:${SPOTIFY_CONFIG.CLIENT_SECRET}`);
        const responseToken = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: SPOTIFY_CONFIG.REFRESH_TOKEN,
            }),
        });

        const tokenData = await responseToken.json();
        const access_token = tokenData.access_token;

        // 2. Fetch Currently Playing
        const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        if (response.status === 204 || response.status > 400) {
            // Not playing or error
            setIsPlaying(false);
            setLoading(false);
            return;
        }

        const songData = await response.json();
        
        if (songData.item) {
            setSong({
                title: songData.item.name,
                artist: songData.item.artists.map((_artist: any) => _artist.name).join(', '),
                albumArt: songData.item.album.images[0].url,
                url: songData.item.external_urls.spotify
            });
            setIsPlaying(songData.is_playing);
        } else {
            setIsPlaying(false);
        }

        setLoading(false);

      } catch (error) {
        console.error("Spotify API Error:", error);
        // Fallback to "Not Playing" state
        setIsPlaying(false);
        setLoading(false);
      }
    };

    fetchNowPlaying();
    // Poll every 30 seconds if live
    const interval = setInterval(fetchNowPlaying, 30000); 
    return () => clearInterval(interval);
  }, []);

  if (loading) return null;

  // Use the demo song data even if not playing for the UI visualization
  // If API returns nothing, we won't show the component or show a "Not Playing" state.
  // For this design, we'll assume we always show the "Last Played" or "Current"
  const displaySong = song.title ? song : {
     title: "Not Playing",
     artist: "Spotify",
     albumArt: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png",
     url: "https://spotify.com"
  };

  return (
    <div className="w-full max-w-sm mx-auto md:mx-0">
        <a 
            href={displaySong.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group relative overflow-hidden bg-[#0a0a0a] rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors"
        >
            <div className="p-4 flex items-center gap-4">
                {/* Album Art */}
                <div className="relative w-12 h-12 rounded bg-zinc-800 shrink-0 overflow-hidden">
                     <img 
                        src={displaySong.albumArt} 
                        alt={displaySong.title} 
                        className={`w-full h-full object-cover transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`} 
                    />
                    {/* Overlay Play Icon on Hover */}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <ExternalLink size={16} className="text-white" />
                    </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                        <span className="w-4 h-4 rounded-full bg-[#1DB954] flex items-center justify-center shrink-0">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png" alt="Spotify" className="w-2.5 h-2.5 brightness-0 invert" />
                        </span>
                        <span className="text-[10px] font-bold text-[#1DB954] uppercase tracking-wider">
                            {isPlaying ? 'Now Playing' : 'Last played'}
                        </span>
                    </div>
                    <h4 className="text-sm font-bold text-white truncate">{displaySong.title}</h4>
                    <p className="text-xs text-zinc-400 truncate">{displaySong.artist}</p>
                </div>

                {/* Audio Visualizer (Animated Bars) */}
                {isPlaying ? (
                    <div className="flex gap-0.5 items-end h-4 w-6">
                        <motion.div 
                            animate={{ height: ['20%', '100%', '50%', '80%', '20%'] }} 
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            className="w-1.5 bg-[#1DB954] rounded-sm" 
                        />
                        <motion.div 
                            animate={{ height: ['80%', '20%', '90%', '40%', '80%'] }} 
                            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                            className="w-1.5 bg-[#1DB954] rounded-sm" 
                        />
                        <motion.div 
                            animate={{ height: ['50%', '100%', '30%', '100%', '50%'] }} 
                            transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                            className="w-1.5 bg-[#1DB954] rounded-sm" 
                        />
                    </div>
                ) : (
                   <Play size={20} className="text-zinc-700" fill="currentColor" />
                )}
            </div>
        </a>
    </div>
  );
};

export default Spotify;