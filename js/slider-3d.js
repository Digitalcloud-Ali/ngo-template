// ========================================
// 3D HERO SLIDER FUNCTIONALITY
// ========================================

class Slider3D {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.progressBar = document.querySelector('.progress-bar');
        this.autoPlayInterval = null;
        this.autoPlayDuration = 6000; // 6 seconds
        
        this.init();
    }
    
    init() {
        // Add event listeners
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Indicator click events
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
        
        // Touch/Swipe support
        this.addSwipeSupport();
        
        // Start autoplay
        this.startAutoPlay();
        
        // Pause on hover
        const sliderContainer = document.querySelector('.hero-slider-3d');
        sliderContainer.addEventListener('mouseenter', () => this.stopAutoPlay());
        sliderContainer.addEventListener('mouseleave', () => this.startAutoPlay());
        
        // Initialize first slide animations
        this.animateSlideContent(0);
    }
    
    goToSlide(index) {
        if (index === this.currentSlide) return;
        
        // Remove active class from current slide
        this.slides[this.currentSlide].classList.remove('active');
        this.indicators[this.currentSlide].classList.remove('active');
        
        // Add prev class for exit animation
        if (index > this.currentSlide) {
            this.slides[this.currentSlide].classList.add('prev');
        }
        
        // Update current slide
        this.currentSlide = index;
        
        // Add active class to new slide
        this.slides[this.currentSlide].classList.add('active');
        this.indicators[this.currentSlide].classList.add('active');
        
        // Remove prev class after animation
        setTimeout(() => {
            this.slides.forEach(slide => slide.classList.remove('prev'));
        }, 1000);
        
        // Animate content
        this.animateSlideContent(this.currentSlide);
        
        // Reset progress bar
        this.resetProgressBar();
        
        // Add 3D tilt effect
        this.add3DTilt();
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }
    
    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevIndex);
    }
    
    animateSlideContent(index) {
        const slide = this.slides[index];
        const elements = slide.querySelectorAll('[data-animation]');
        
        elements.forEach((element, i) => {
            const animation = element.getAttribute('data-animation');
            const delay = element.getAttribute('data-delay') || '0s';
            
            element.style.animation = 'none';
            setTimeout(() => {
                element.style.animation = `${animation} 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${delay} forwards`;
            }, 50);
        });
    }
    
    startAutoPlay() {
        this.stopAutoPlay(); // Clear any existing interval
        this.resetProgressBar();
        
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDuration);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    resetProgressBar() {
        this.progressBar.style.animation = 'none';
        setTimeout(() => {
            this.progressBar.style.animation = `progress ${this.autoPlayDuration}ms linear forwards`;
        }, 50);
    }
    
    add3DTilt() {
        const activeSlide = this.slides[this.currentSlide];
        const content = activeSlide.querySelector('.slide-content');
        
        const handleMouseMove = (e) => {
            const rect = activeSlide.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 50;
            const rotateY = (centerX - x) / 50;
            
            content.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };
        
        const handleMouseLeave = () => {
            content.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        };
        
        // Remove previous listeners
        this.slides.forEach(slide => {
            slide.removeEventListener('mousemove', handleMouseMove);
            slide.removeEventListener('mouseleave', handleMouseLeave);
        });
        
        // Add to active slide
        activeSlide.addEventListener('mousemove', handleMouseMove);
        activeSlide.addEventListener('mouseleave', handleMouseLeave);
    }
    
    addSwipeSupport() {
        let touchStartX = 0;
        let touchEndX = 0;
        
        const sliderContainer = document.querySelector('.slider-container');
        
        sliderContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        sliderContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });
        
        const handleSwipe = () => {
            const swipeThreshold = 50;
            
            if (touchEndX < touchStartX - swipeThreshold) {
                this.nextSlide();
            }
            
            if (touchEndX > touchStartX + swipeThreshold) {
                this.prevSlide();
            }
        };
        
        this.handleSwipe = handleSwipe;
    }
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider3D();
    
    // Add parallax effect to background shapes
    document.addEventListener('mousemove', (e) => {
        const shapes = document.querySelectorAll('.bg-shape');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 10;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            
            shape.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
    
    // Add scroll reveal for stats
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.stat-box');
    animatedElements.forEach(el => observer.observe(el));
});

// Add custom cursor effect for slider controls
document.addEventListener('DOMContentLoaded', () => {
    const sliderBtns = document.querySelectorAll('.slider-btn');
    
    sliderBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.1) rotate(360deg)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

// Preload next slide for smooth transition
function preloadSlideImages() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        // Add any image preloading logic here if needed
        slide.style.willChange = 'transform, opacity';
    });
}

preloadSlideImages();
