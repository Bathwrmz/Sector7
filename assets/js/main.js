// Smooth scrolling for navigation links
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

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.6)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Log the application (in a real scenario, this would send to a server)
        console.log('New Application Received:', data);
        
        // Show success message
        alert('Thank you for your application! Our officers will review it and contact you soon via Discord.');
        
        // Reset form
        contactForm.reset();
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.querySelectorAll('.achievement-card, .gallery-item, .stat-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Gallery image hover effect
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.zIndex = '1';
    });
});

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = 'var(--text-light)';
        link.style.background = 'transparent';
        link.style.borderColor = 'transparent';
        
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.style.color = 'var(--accent-gold)';
            link.style.background = 'var(--overlay-light)';
            link.style.borderColor = 'var(--accent-gold)';
        }
    });
});

// Stats counter animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : '');
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '');
        }
    };
    
    updateCounter();
}

// Trigger counter animation when stats are visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const numbers = entry.target.querySelectorAll('.stat-box .number');
            numbers.forEach(num => {
                const value = parseInt(num.textContent.replace(/[^0-9]/g, ''));
                if (value > 0) {
                    animateCounter(num, value);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Mobile menu toggle (for future enhancement)
// Add this if you want to add a mobile menu button
console.log('Crystal Vanguard website loaded successfully!');