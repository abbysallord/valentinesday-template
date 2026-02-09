import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeartCanvas from './components/HeartCanvas';
import Hero from './components/Hero';
import LoveTimer from './components/LoveTimer';
import Proposal from './components/Proposal';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Smooth scroll setup could go here if using Lenis, but for now standard scroll is okay given simplicity.
  }, []);

  // Set a default start date - can be changed by user
  const relationshipStartDate = "2023-02-14";

  return (
    <div ref={containerRef} className="relative min-h-screen bg-love-900 overflow-hidden text-love-100 font-sans selection:bg-love-500 selection:text-white">
      {/* Dynamic Background */}
      <HeartCanvas />

      {/* Content */}
      <div className="relative z-10 w-full">
        <Hero />

        <div className="container mx-auto px-4">
          <LoveTimer startDate={relationshipStartDate} />
          <Proposal />
        </div>

        <footer className="text-center py-8 text-love-300 text-sm opacity-60">
          <p>© {new Date().getFullYear()} Made with ❤️ for my Valentine</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
