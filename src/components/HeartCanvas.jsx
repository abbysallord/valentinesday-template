import { useRef, useEffect } from 'react';

const HeartCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const hearts = [];
        const colors = ['#ff6666', '#ff3333', '#cc0000', '#ff9999'];

        class Heart {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = height + Math.random() * 100;
                this.speed = Math.random() * 2 + 1;
                this.size = Math.random() * 10 + 5;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.opacity = Math.random() * 0.5 + 0.3;
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.05;
            }

            update() {
                this.y -= this.speed;
                this.rotation += this.rotationSpeed;
                if (this.y < -50) {
                    this.reset();
                }
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = this.color;

                ctx.beginPath();
                const topCurveHeight = this.size * 0.3;
                ctx.moveTo(0, topCurveHeight);
                ctx.bezierCurveTo(0, 0, -this.size / 2, 0, -this.size / 2, topCurveHeight);
                ctx.bezierCurveTo(-this.size / 2, this.size / 2, 0, this.size, 0, this.size);
                ctx.bezierCurveTo(0, this.size, this.size / 2, this.size / 2, this.size / 2, topCurveHeight);
                ctx.bezierCurveTo(this.size / 2, 0, 0, 0, 0, topCurveHeight);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }
        }

        for (let i = 0; i < 50; i++) {
            hearts.push(new Heart());
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            hearts.forEach((heart) => {
                heart.update();
                heart.draw();
            });
            requestAnimationFrame(animate);
        };

        const animation = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animation);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
        />
    );
};

export default HeartCanvas;
