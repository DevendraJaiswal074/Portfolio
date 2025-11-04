// Create floating particles
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Interactive cursor
function initCursor() {
    const orb = document.querySelector('.interactive-orb');

    document.addEventListener('mousemove', (e) => {
        orb.style.left = e.clientX - 10 + 'px';
        orb.style.top = e.clientY - 10 + 'px';
    });

    // Make orb bigger on hover over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .feature-card');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            orb.style.width = '40px';
            orb.style.height = '40px';
            orb.style.marginLeft = '-20px';
            orb.style.marginTop = '-20px';
        });

        el.addEventListener('mouseleave', () => {
            orb.style.width = '20px';
            orb.style.height = '20px';
            orb.style.marginLeft = '0px';
            orb.style.marginTop = '0px';
        });
    });
}

// Parallax scroll effect
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const particles = document.querySelector('.particles');
        particles.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
}

// Initialize animations on scroll
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    });

    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initCursor();
    initParallax();
    initScrollAnimations();
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});