import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const LoveTimer = ({ startDate }) => {
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const containerRef = useRef(null);

    useEffect(() => {
        const timer = setInterval(() => {
            const start = new Date(startDate).getTime();
            const now = new Date().getTime();
            const difference = now - start;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTime({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, [startDate]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".timer-box", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center+=100",
                    toggleActions: "play none none reverse"
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const TimeUnit = ({ value, label }) => (
        <div className="timer-box flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 min-w-[80px] md:min-w-[120px]">
            <span className="text-3xl md:text-5xl font-bold text-white mb-1">
                {value.toString().padStart(2, '0')}
            </span>
            <span className="text-xs md:text-sm uppercase tracking-wider text-love-200">{label}</span>
        </div>
    );

    return (
        <section ref={containerRef} className="py-20 flex flex-col items-center justify-center relative z-10 w-full">
            <h2 className="text-4xl md:text-6xl font-cursive text-white mb-12 text-center">
                Together For
            </h2>
            <div className="flex gap-4 md:gap-8 flex-wrap justify-center px-4">
                <TimeUnit value={time.days} label="Days" />
                <TimeUnit value={time.hours} label="Hours" />
                <TimeUnit value={time.minutes} label="Minutes" />
                <TimeUnit value={time.seconds} label="Seconds" />
            </div>
        </section>
    );
};

export default LoveTimer;
