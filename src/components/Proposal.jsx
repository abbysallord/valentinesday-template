import { useState, useRef } from 'react';
import gsap from 'gsap';
import { Heart, Stars } from 'lucide-react';

const Proposal = () => {
    const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
    const [accepted, setAccepted] = useState(false);
    const containerRef = useRef(null);
    const yesBtnRef = useRef(null);

    const handleHoverNo = () => {
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;
        setNoBtnPosition({ x, y });
    };

    const handleAccept = () => {
        setAccepted(true);
        gsap.to(containerRef.current, {
            scale: 1.1,
            duration: 0.5,
            ease: "back.out(1.7)"
        });

        // Confetti effect or animation here could be added
    };

    if (accepted) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center z-10 relative px-4">
                <div className="glass-panel p-10 text-center animate-float">
                    <Stars className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-spin-slow" />
                    <h2 className="text-5xl md:text-7xl font-cursive text-love-500 mb-4">Yay! I knew it!</h2>
                    <p className="text-xl text-white">Best Decision Ever. ❤️</p>
                </div>
            </div>
        )
    }

    return (
        <section className="py-20 flex flex-col items-center justify-center min-h-[60vh] z-10 relative overflow-hidden" ref={containerRef}>
            <div className="glass-panel p-12 md:p-16 border-2 border-love-400/30 shadow-[0_0_80px_rgba(255,50,50,0.2)] max-w-2xl mx-auto text-center transform hover:scale-105 transition-transform duration-500">
                <h2 className="text-4xl md:text-6xl font-cursive text-white mb-12 leading-tight">
                    Will you be my Valentine?
                </h2>

                <div className="flex flex-col md:flex-row gap-8 justify-center items-center h-40">
                    <button
                        ref={yesBtnRef}
                        onClick={handleAccept}
                        className="bg-love-600 hover:bg-love-500 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg hover:shadow-[0_0_30px_rgba(255,50,50,0.6)] transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
                    >
                        <span>YES!</span>
                        <Heart className="w-5 h-5 fill-current group-hover:scale-125 transition-transform" />
                    </button>

                    <button
                        onMouseEnter={handleHoverNo}
                        onClick={handleHoverNo}
                        style={{ transform: `translate(${noBtnPosition.x}px, ${noBtnPosition.y}px)` }}
                        className="bg-gray-800/50 hover:bg-gray-800 text-gray-300 font-semibold py-3 px-8 rounded-full text-lg border border-white/10 transition-all duration-200 absolute md:static"
                    >
                        No
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Proposal;
