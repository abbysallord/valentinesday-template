import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MemoryLane = () => {
    const containerRef = useRef(null);
    const scrollContainerRef = useRef(null);

    const memories = [
        {
            id: 1,
            title: "First Date",
            desc: "Where it all began",
            // Replaced with a reliable coffee date image
            url: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Our Trip",
            desc: "Adventures together",
            url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Laughs",
            desc: "Moments of joy",
            url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Your Smile",
            desc: "My favorite view",
            // Replaced with a bright, happy portrait
            url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 5,
            title: "Together",
            desc: "Forever to go",
            url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1000&auto=format&fit=crop"
        },
    ];

    useEffect(() => {
        const container = containerRef.current;
        const scrollContainer = scrollContainerRef.current;

        // Horizontal Scroll Animation
        const ctx = gsap.context(() => {
            // Recalculate widths on resize
            const getScrollAmount = () => {
                const totalWidth = scrollContainer.scrollWidth;
                const viewportWidth = container.offsetWidth;
                return -(totalWidth - viewportWidth);
            };

            const tween = gsap.to(scrollContainer, {
                x: getScrollAmount,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: () => `+=${scrollContainer.scrollWidth}`, // Match scroll distance exactly
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="h-screen relative overflow-hidden bg-love-900 flex flex-col justify-center">
            <div className="absolute top-10 left-6 md:left-20 z-10 w-full pr-10">
                <h2 className="text-4xl md:text-7xl font-cursive text-white drop-shadow-md">
                    Our Memories
                </h2>
                <p className="text-love-200 text-base md:text-lg mt-2 font-light tracking-wide">Swipe through our journey</p>
            </div>

            <div ref={scrollContainerRef} className="flex gap-6 md:gap-32 px-6 md:px-20 h-[55vh] md:h-[60vh] items-center w-fit mt-10 md:mt-0">
                {memories.map((memory) => (
                    <div
                        key={memory.id}
                        className="min-w-[280px] md:min-w-[400px] h-[350px] md:h-[500px] rounded-3xl relative overflow-hidden group shadow-2xl border-2 md:border-4 border-white/10 transform transition-transform hover:scale-105 duration-500"
                    >
                        <img
                            src={memory.url}
                            alt={memory.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                        <div className="absolute bottom-0 left-0 p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-3xl md:text-4xl font-cursive text-white mb-1 md:mb-2 drop-shadow-lg">{memory.title}</h3>
                            <p className="text-white/90 text-sm md:text-base font-sans tracking-wide">{memory.desc}</p>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-4 right-4 text-white/20 text-6xl md:text-9xl font-cursive opacity-30 select-none">
                            {memory.id}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MemoryLane;
