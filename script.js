// Mobile Navbar Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Gallery Modal
const modal = document.getElementById('gallery-modal');
const modalImg = document.getElementById('modal-img');
const galleryItems = document.querySelectorAll('.gallery-item');
let currentImgIndex = 0;

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentImgIndex = index;
        modal.style.display = 'block';
        modalImg.src = item.dataset.full;
        document.body.style.overflow = 'hidden';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

function changeImg(direction) {
    currentImgIndex += direction;
    if (currentImgIndex >= galleryItems.length) currentImgIndex = 0;
    if (currentImgIndex < 0) currentImgIndex = galleryItems.length - 1;
    modalImg.src = galleryItems[currentImgIndex].dataset.full;
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'block') {
        if (e.key === 'ArrowLeft') changeImg(-1);
        if (e.key === 'ArrowRight') changeImg(1);
        if (e.key === 'Escape') modal.style.display = 'none';
    }
});

// Animate on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.game-card, .about-content, .gallery-grid, .contact-content').forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});

// Contact Form
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\\'ll get back to you soon. (Demo)');
    e.target.reset();
});

// Smooth scrolling for anchor links (enhanced)
document.querySelectorAll('a[href^=\"#"]').forEach(anchor => {
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

// Parallax effect for hero (subtle)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});
