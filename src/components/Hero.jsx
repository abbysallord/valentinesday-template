import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const iconRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(titleRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, delay: 0.5 }
        )
            .fromTo(subtitleRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=1"
            )
            .fromTo(iconRef.current,
                { scale: 0, opacity: 0, rotate: -180 },
                { scale: 1, opacity: 1, rotate: 0, duration: 1.2, ease: "elastic.out(1, 0.5)" },
                "-=0.8"
            );

        // Parallax Effect
        gsap.to(containerRef.current, {
            yPercent: 50,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

    }, []);

    return (
        <section ref={containerRef} className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative z-10">
            <div className="glass-panel p-12 md:p-16 rounded-3xl border border-white/20 shadow-[0_0_50px_rgba(255,100,100,0.3)]">
                <div ref={iconRef} className="mb-6 flex justify-center">
                    <Heart className="w-20 h-20 text-love-500 fill-love-500 animate-pulse-slow drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]" />
                </div>
                <h1 ref={titleRef} className="font-cursive text-6xl md:text-9xl text-love-100 mb-4 drop-shadow-lg leading-tight">
                    Happy Valentine's Day
                </h1>
                <p ref={subtitleRef} className="text-xl md:text-3xl text-love-200 font-light tracking-wide max-w-2xl mx-auto">
                    To the one who makes my heart skip a beat.
                </p>
            </div>

            <div className="absolute bottom-10 animate-bounce">
                <span className="text-love-300 text-sm tracking-widest uppercase">Scroll Down</span>
            </div>
        </section>
    );
};

export default Hero;
