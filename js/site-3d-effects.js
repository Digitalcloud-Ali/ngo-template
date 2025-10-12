// ========================================
// SITE-WIDE 3D EFFECTS & INTERACTIONS
// ========================================

class Site3DEffects {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupScrollAnimations();
        this.setupTiltEffects();
        this.setupParallax();
        this.setupScrollProgress();
        this.setupSmoothScroll();
        this.setupCardHoverEffects();
        this.setupNavbarEffects();
    }
    
    // Scroll-triggered animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        // Add fade-in class to all sections
        document.querySelectorAll('section').forEach(section => {
            if (!section.classList.contains('hero-slider-3d')) {
                section.classList.add('section-fade-in');
                observer.observe(section);
            }
        });
        
        // Observe individual elements
        const elements = document.querySelectorAll('.program-card, .card-3d, .stat-card-3d, .team-card-3d');
        elements.forEach((el, index) => {
            el.style.transitionDelay = `${index * 0.1}s`;
            el.classList.add('section-fade-in');
            observer.observe(el);
        });
    }
    
    // Mouse tilt effect for cards
    setupTiltEffects() {
        const tiltElements = document.querySelectorAll('.program-card, .card-3d, .stat-card-3d, .team-card-3d');
        
        tiltElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                element.style.transform = `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-10px)
                    scale3d(1.05, 1.05, 1.05)
                `;
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = `
                    perspective(1000px)
                    rotateX(0deg)
                    rotateY(0deg)
                    translateY(0)
                    scale3d(1, 1, 1)
                `;
            });
        });
    }
    
    // Parallax scrolling effect
    setupParallax() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.updateParallax();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
    
    updateParallax() {
        const scrolled = window.pageYOffset;
        
        // Parallax for sections
        document.querySelectorAll('section').forEach((section, index) => {
            const speed = 0.3 + (index * 0.05);
            const yPos = -(scrolled * speed);
            section.style.transform = `translateY(${yPos * 0.1}px)`;
        });
        
        // Parallax for icons
        document.querySelectorAll('.program-icon, .slide-icon').forEach((icon, index) => {
            const rect = icon.getBoundingClientRect();
            const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;
            const movement = scrollPercent * 50;
            icon.style.transform = `translateY(${-movement}px)`;
        });
    }
    
    // Scroll progress indicator
    setupScrollProgress() {
        // Create progress bar
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
        document.body.appendChild(progressBar);
        
        const bar = progressBar.querySelector('.scroll-progress-bar');
        
        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.pageYOffset / windowHeight) * 100;
            bar.style.transform = `scaleX(${scrolled / 100})`;
        });
    }
    
    // Smooth scroll for anchor links
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || !href) return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Enhanced card hover effects
    setupCardHoverEffects() {
        const cards = document.querySelectorAll('.program-card, .card-3d');
        
        cards.forEach(card => {
            // Add floating animation on hover
            card.addEventListener('mouseenter', () => {
                card.style.animation = 'floatUpDown 2s ease-in-out infinite';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.animation = 'none';
            });
        });
    }
    
    // Navbar scroll effects
    setupNavbarEffects() {
        const navbar = document.querySelector('.navbar');
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Hide navbar on scroll down, show on scroll up
            if (currentScroll > lastScroll && currentScroll > 500) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScroll = currentScroll;
        });
    }
}

// ========================================
// MAGNETIC BUTTON EFFECT
// ========================================
class MagneticButton {
    constructor() {
        this.buttons = document.querySelectorAll('.btn, .slider-btn');
        this.init();
    }
    
    init() {
        this.buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0) scale(1)';
            });
        });
    }
}

// ========================================
// CURSOR TRAIL EFFECT
// ========================================
class CursorTrail {
    constructor() {
        this.cursor = null;
        this.cursorFollower = null;
        this.init();
    }
    
    init() {
        // Create cursor elements
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        this.cursor.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: white;
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            mix-blend-mode: difference;
            transition: transform 0.2s ease;
        `;
        
        this.cursorFollower = document.createElement('div');
        this.cursorFollower.className = 'custom-cursor-follower';
        this.cursorFollower.style.cssText = `
            position: fixed;
            width: 40px;
            height: 40px;
            border: 2px solid rgba(102, 126, 234, 0.5);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(this.cursor);
        document.body.appendChild(this.cursorFollower);
        
        let mouseX = 0;
        let mouseY = 0;
        let followerX = 0;
        let followerY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            this.cursor.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`;
        });
        
        // Smooth follower animation
        const animateFollower = () => {
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            
            this.cursorFollower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;
            
            requestAnimationFrame(animateFollower);
        };
        animateFollower();
        
        // Expand on hover
        document.querySelectorAll('a, button, .btn').forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.style.transform += ' scale(2)';
                this.cursorFollower.style.transform += ' scale(1.5)';
                this.cursorFollower.style.borderColor = 'rgba(102, 126, 234, 1)';
            });
            
            el.addEventListener('mouseleave', () => {
                this.cursor.style.transform = this.cursor.style.transform.replace(' scale(2)', '');
                this.cursorFollower.style.transform = this.cursorFollower.style.transform.replace(' scale(1.5)', '');
                this.cursorFollower.style.borderColor = 'rgba(102, 126, 234, 0.5)';
            });
        });
    }
}

// ========================================
// TEXT REVEAL ANIMATION
// ========================================
class TextReveal {
    constructor() {
        this.init();
    }
    
    init() {
        const headings = document.querySelectorAll('h1, h2, h3');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateText(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        headings.forEach(heading => {
            observer.observe(heading);
        });
    }
    
    animateText(element) {
        const text = element.textContent;
        element.textContent = '';
        element.style.opacity = '1';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.opacity = '0';
            span.style.display = 'inline-block';
            span.style.animation = `fadeInChar 0.5s ease forwards ${index * 0.03}s`;
            element.appendChild(span);
        });
    }
}

// Add character fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInChar {
        from {
            opacity: 0;
            transform: translateY(20px) rotateX(-90deg);
        }
        to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
        }
    }
    
    @keyframes floatUpDown {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
    }
`;
document.head.appendChild(style);

// ========================================
// INITIALIZE ALL EFFECTS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for other scripts to load
    setTimeout(() => {
        new Site3DEffects();
        new MagneticButton();
        
        // Only enable custom cursor on desktop
        if (window.innerWidth > 768) {
            new CursorTrail();
        }
        
        new TextReveal();
        
        console.log('🎨 3D Effects Initialized!');
    }, 300);
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Reinitialize effects on resize
        location.reload();
    }, 500);
});
