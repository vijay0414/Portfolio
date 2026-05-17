document.addEventListener('DOMContentLoaded', () => {

    // Intersection Observer for Cinematic Reveal Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-element');
    revealElements.forEach(el => observer.observe(el));


    // Navbar background fade on scroll (Pure black Tron bar transition)
    const nav = document.querySelector('.cinematic-nav');
    window.addEventListener('scroll', () => {
        if (nav) {
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(4, 6, 12, 0.95)';
                nav.style.borderBottom = '1px solid rgba(0, 243, 255, 0.25)';
                nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.9)';
            } else {
                nav.style.background = 'rgba(4, 6, 12, 0.7)';
                nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
                nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.05)';
            }
        }
    });

    // --- Interactive AI Neural Matrix Background Canvas ---
    const canvas = document.getElementById('tron-grid-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        // Elite Cyber Neon diagnostic color range
        const colors = ['#00f3ff', '#00ff66', '#bd00ff'];
        const particles = [];
        const maxParticles = Math.min(65, Math.floor((width * height) / 22000));

        class NeuralNode {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                
                // Slow organic drift mimicking active AI background processors
                this.vx = (Math.random() - 0.5) * 0.35;
                this.vy = (Math.random() - 0.5) * 0.35;
                
                this.radius = Math.random() * 1.5 + 1.25;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                
                // Track recent grid positions for micro light cycle trails
                this.history = [];
                this.maxHistory = 10;
            }

            update() {
                this.history.push({ x: this.x, y: this.y });
                if (this.history.length > this.maxHistory) {
                    this.history.shift();
                }

                this.x += this.vx;
                this.y += this.vy;

                // Occasional 90-degree vector corrections
                if (Math.random() < 0.003) {
                    const angle = Math.floor(Math.random() * 4) * (Math.PI / 2);
                    const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
                    this.vx = Math.cos(angle) * speed;
                    this.vy = Math.sin(angle) * speed;
                }

                // Smooth loop-back boundaries
                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }

            draw() {
                // Draw light traces
                if (this.history.length > 1) {
                    ctx.beginPath();
                    ctx.moveTo(this.history[0].x, this.history[0].y);
                    for (let i = 1; i < this.history.length; i++) {
                        ctx.lineTo(this.history[i].x, this.history[i].y);
                    }
                    ctx.strokeStyle = this.color + '0a'; 
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }

                // Glowing node core
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
                
                // Soft holographic echo ring
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius * 2.5, 0, Math.PI * 2);
                ctx.strokeStyle = this.color + '22';
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }

        for (let i = 0; i < maxParticles; i++) {
            particles.push(new NeuralNode());
        }

        // Live radar diagnostic scan tracking
        let mouse = { x: null, y: null, radius: 180 };
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        window.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        // Diagonal diagnostics laser scanner
        let scanlineY = 0;
        const scanlineSpeed = 0.55;

        function animate() {
            ctx.clearRect(0, 0, width, height);

            // 1. Draw thin vertical/horizontal architectural guide grids
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.005)';
            ctx.lineWidth = 0.5;
            for (let i = 50; i < width; i += 150) {
                ctx.beginPath();
                ctx.moveTo(i, 0);
                ctx.lineTo(i, height);
                ctx.stroke();
            }

            // 2. Draw live system scanline sweep representing system diagnostics
            scanlineY += scanlineSpeed;
            if (scanlineY > height) scanlineY = 0;
            ctx.beginPath();
            ctx.moveTo(0, scanlineY);
            ctx.lineTo(width, scanlineY);
            ctx.strokeStyle = 'rgba(0, 243, 255, 0.015)';
            ctx.lineWidth = 1;
            ctx.stroke();

            // 3. Render and connect neural network elements
            particles.forEach((p, idx) => {
                p.update();
                p.draw();

                // Connect nodes with light lines
                for (let j = idx + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 130) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        // Architectural routing layout paths
                        ctx.lineTo(p2.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = p.color + '0c'; // Faint diagnostic paths
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }

                // Connect to cursor active scanning radar
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < mouse.radius) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        
                        // Soft pulsing holographic diagnostic rays
                        const alpha = ((1 - dist / mouse.radius) * 0.22).toFixed(3);
                        ctx.strokeStyle = `rgba(0, 243, 255, ${alpha})`;
                        ctx.lineWidth = 0.7;
                        ctx.stroke();
                    }
                }
            });

            // 4. Draw interactive radar ring on cursor
            if (mouse.x !== null && mouse.y !== null) {
                ctx.beginPath();
                ctx.arc(mouse.x, mouse.y, 12, 0, Math.PI * 2);
                ctx.strokeStyle = 'rgba(0, 243, 255, 0.15)';
                ctx.lineWidth = 0.8;
                ctx.stroke();
                
                ctx.beginPath();
                ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 243, 255, 0.25)';
                ctx.fill();
            }

            requestAnimationFrame(animate);
        }

        animate();
    }

    // --- Interactive Grid Sector Chronicles (Toggles) ---
    const chronicles = document.querySelectorAll('.chronicle');
    chronicles.forEach(c => {
        const header = c.querySelector('.chronicle-header');
        const indicator = c.querySelector('.toggle-indicator');
        
        if (header) {
            header.addEventListener('click', () => {
                const isActive = c.classList.contains('active');
                
                // Close other chronicles to keep grid layout neat (accordion style)
                chronicles.forEach(other => {
                    other.classList.remove('active');
                    const otherInd = other.querySelector('.toggle-indicator');
                    if (otherInd) otherInd.textContent = '[+]';
                });
                
                if (!isActive) {
                    c.classList.add('active');
                    if (indicator) indicator.textContent = '[-]';
                } else {
                    c.classList.remove('active');
                    if (indicator) indicator.textContent = '[+]';
                }
            });
        }
    });
});
