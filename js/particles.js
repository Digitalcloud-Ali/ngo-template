// ========================================
// PARTICLE SYSTEM FOR 3D SLIDER
// ========================================

class ParticleSystem {
    constructor() {
        this.particles = [];
        this.canvas = null;
        this.ctx = null;
        this.init();
    }
    
    init() {
        // Create canvas for particles
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '5';
        
        const sliderSection = document.querySelector('.hero-slider-3d');
        if (sliderSection) {
            sliderSection.appendChild(this.canvas);
            this.ctx = this.canvas.getContext('2d');
            this.resize();
            this.createParticles();
            this.animate();
            
            window.addEventListener('resize', () => this.resize());
        }
    }
    
    resize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }
    
    createParticles() {
        const particleCount = window.innerWidth < 768 ? 30 : 60;
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2,
                hue: Math.random() * 60 + 180 // Blue to purple range
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach((particle, index) => {
            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
            
            // Draw particle with glow
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            
            // Glow effect
            const gradient = this.ctx.createRadialGradient(
                particle.x, particle.y, 0,
                particle.x, particle.y, particle.size * 3
            );
            gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 60%, ${particle.opacity})`);
            gradient.addColorStop(1, `hsla(${particle.hue}, 70%, 60%, 0)`);
            
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
            
            // Draw connections
            this.particles.forEach((otherParticle, otherIndex) => {
                if (index !== otherIndex) {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 120) {
                        this.ctx.beginPath();
                        this.ctx.moveTo(particle.x, particle.y);
                        this.ctx.lineTo(otherParticle.x, otherParticle.y);
                        this.ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 120)})`;
                        this.ctx.lineWidth = 0.5;
                        this.ctx.stroke();
                    }
                }
            });
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Mouse trail effect
class MouseTrail {
    constructor() {
        this.trail = [];
        this.maxTrailLength = 20;
        this.canvas = null;
        this.ctx = null;
        this.init();
    }
    
    init() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '4';
        
        const sliderSection = document.querySelector('.hero-slider-3d');
        if (sliderSection) {
            sliderSection.appendChild(this.canvas);
            this.ctx = this.canvas.getContext('2d');
            this.resize();
            
            sliderSection.addEventListener('mousemove', (e) => this.addTrailPoint(e));
            window.addEventListener('resize', () => this.resize());
            
            this.animate();
        }
    }
    
    resize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }
    
    addTrailPoint(e) {
        const rect = this.canvas.getBoundingClientRect();
        this.trail.push({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            life: 1
        });
        
        if (this.trail.length > this.maxTrailLength) {
            this.trail.shift();
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.trail.forEach((point, index) => {
            point.life -= 0.05;
            
            if (point.life > 0) {
                const size = 10 * point.life;
                const gradient = this.ctx.createRadialGradient(
                    point.x, point.y, 0,
                    point.x, point.y, size
                );
                gradient.addColorStop(0, `rgba(255, 255, 255, ${0.3 * point.life})`);
                gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
                
                this.ctx.beginPath();
                this.ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
                this.ctx.fillStyle = gradient;
                this.ctx.fill();
            }
        });
        
        this.trail = this.trail.filter(point => point.life > 0);
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize effects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize particle system
    setTimeout(() => {
        new ParticleSystem();
        new MouseTrail();
    }, 500);
    
    // Add ripple effect on button click
    document.querySelectorAll('.btn-3d').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.left = e.offsetX + 'px';
            ripple.style.top = e.offsetY + 'px';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.animation = 'rippleEffect 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
});

// Add ripple animation style
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
