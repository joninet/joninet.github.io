// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');
const carouselContainer = document.querySelector('.carousel-container');

function showSlide(n) {
    if (n >= slides.length) currentSlide = 0;
    if (n < 0) currentSlide = slides.length - 1;
    carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto-advance carousel every 5 seconds
setInterval(() => {
    nextSlide();
}, 5000);

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Formspree maneja el envío, solo validamos
        console.log('Formulario enviado a Formspree');
    });
}

// Responsive menu
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
    }
});

/* ========================================
   FUNCIONALIDAD PARA PÁGINA DE PROYECTO
   ======================================== */

// Funcionalidad de galería en proyecto detalle
function changeImage(thumbnail) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        const img = thumbnail.querySelector('img');
        mainImage.src = img.src.replace('w=200&h=200', 'w=1200&h=500');
        
        // Actualizar thumbnail activo
        document.querySelectorAll('.gallery-thumb').forEach(thumb => {
            thumb.classList.remove('active');
        });
        thumbnail.classList.add('active');
    }
}
