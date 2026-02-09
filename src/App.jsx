import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeartCanvas from './components/HeartCanvas';
import Hero from './components/Hero';
import LoveTimer from './components/LoveTimer';
import Proposal from './components/Proposal';
import MusicPlayer from './components/MusicPlayer';
import MemoryLane from './components/MemoryLane';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);

  // Set a default start date - can be changed by user
  const relationshipStartDate = "2023-02-14";

  return (
    <SmoothScroll>
      <div ref={containerRef} className="relative min-h-screen bg-love-900 overflow-x-hidden text-love-100 font-sans selection:bg-love-500 selection:text-white cursor-none">
        <CustomCursor />
        {/* Dynamic Background */}
        <HeartCanvas />

        {/* Content */}
        <div className="relative z-10 w-full">
          <Hero />

          <MemoryLane />

          <div className="container mx-auto px-4 relative z-20 bg-love-900/50 backdrop-blur-sm rounded-t-3xl mt-[-50px] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <LoveTimer startDate={relationshipStartDate} />
            <Proposal />
          </div>

          <footer className="text-center py-8 text-love-300 text-sm opacity-60 relative z-20">
            <p>© {new Date().getFullYear()} Made with ❤️ for my Valentine</p>
          </footer>
        </div>

        <MusicPlayer />
      </div>
    </SmoothScroll>
  );
}

export default App;
