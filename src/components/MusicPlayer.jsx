import { useState, useRef, useEffect } from 'react';
import { Music, Pause, Play } from 'lucide-react';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // Using a reliable public domain or creative commons Valentine's-appropriate track
    // Ideally user replaces this.
    const audioSrc = "https://cdn.pixabay.com/download/audio/2022/10/25/audio_494af45281.mp3?filename=romantic-piano-125026.mp3";

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Audio play failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        // Optional: Auto-play with user interaction fallback if needed, 
        // but explicit click is better UX for web.
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
        }
    }, []);

    return (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
            <audio ref={audioRef} src={audioSrc} loop />
            <button
                onClick={togglePlay}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg group relative overflow-hidden"
            >
                {/* Ripple effect background */}
                <div className={`absolute inset-0 bg-love-500/20 rounded-full ${isPlaying ? 'animate-ping' : ''} opacity-50`}></div>

                {isPlaying ? (
                    <Pause className="w-4 h-4 md:w-5 md:h-5 relative z-10" />
                ) : (
                    <Play className="w-4 h-4 md:w-5 md:h-5 relative z-10 ml-1" />
                )}
            </button>
        </div>
    );
};

export default MusicPlayer;
