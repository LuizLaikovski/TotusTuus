"use strict";
document.addEventListener('DOMContentLoaded', function () {
    // Preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        window.addEventListener('load', function () {
            setTimeout(() => {
                preloader.classList.add('hidden');
            }, 1000);
        });
    }
    // Initialize AOS (Animate on Scroll)
    // @ts-ignore
    AOS.init({
        once: false,
        mirror: true,
        duration: 1000
    });
    // Initialize Particles.js
    const particlesElement = document.getElementById('particles-js');
    if (particlesElement) {
        // @ts-ignore
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 1 } },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            }
            else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });
    }
    // Close mobile menu when clicking on a link
    if (navLinks && hamburger) {
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
    }
    // Countdown to May 15, 2025
    const targetDate = new Date('2025-10-18T00:00:00').getTime();
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const secretBtn = document.getElementById('secret-btn');
    const eventSection = document.getElementById('event-section');
    let countdownInterval;
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        if (distance <= 0) {
            // Event date has arrived
            clearInterval(countdownInterval);
            if (daysElement)
                daysElement.textContent = '00';
            if (hoursElement)
                hoursElement.textContent = '00';
            if (minutesElement)
                minutesElement.textContent = '00';
            if (secondsElement)
                secondsElement.textContent = '00';
            // Enable secret button and change its text
            if (secretBtn) {
                secretBtn.disabled = false;
                secretBtn.classList.remove('btn-disabled');
                secretBtn.textContent = 'Revelar Segredo!';
                secretBtn.classList.add('btn-primary');
                secretBtn.classList.remove('btn-secondary');
            }
            // Auto reveal after 3 seconds if not clicked
            setTimeout(() => {
                if (eventSection && !eventSection.classList.contains('active')) {
                    revealSecret();
                }
            }, 3000);
            return;
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (daysElement)
            daysElement.textContent = days.toString().padStart(2, '0');
        if (hoursElement)
            hoursElement.textContent = hours.toString().padStart(2, '0');
        if (minutesElement)
            minutesElement.textContent = minutes.toString().padStart(2, '0');
        if (secondsElement)
            secondsElement.textContent = seconds.toString().padStart(2, '0');
    }
    // Initial call and set interval
    if (daysElement && hoursElement && minutesElement && secondsElement) {
        updateCountdown();
        countdownInterval = setInterval(updateCountdown, 1000);
    }
    // Animate Stats Counter
    function animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const dataCount = stat.getAttribute('data-count');
            if (!dataCount)
                return;
            const target = parseInt(dataCount);
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60fps
            let current = 0;
            const updateStat = () => {
                current += step;
                if (current < target) {
                    stat.textContent = Math.floor(current).toString();
                    requestAnimationFrame(updateStat);
                }
                else {
                    stat.textContent = target.toString();
                }
            };
            updateStat();
        });
    }
    // Trigger stats animation when in viewport
    const aboutStats = document.querySelector('.about-stats');
    if (aboutStats) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(aboutStats);
    }
    // Carousel Functionality
    const carousel = document.getElementById('carousel');
    const carouselIndicators = document.getElementById('carousel-indicators');
    if (carousel) {
        const images = carousel.querySelectorAll('img');
        // Create indicators
        if (carouselIndicators) {
            images.forEach((_, index) => {
                const indicator = document.createElement('div');
                indicator.classList.add('indicator');
                if (index === 0)
                    indicator.classList.add('active');
                indicator.addEventListener('click', () => scrollToImage(index));
                carouselIndicators.appendChild(indicator);
            });
        }
        // Update indicators on scroll
        carousel.addEventListener('scroll', () => {
            const scrollPosition = carousel.scrollLeft;
            const imageElement = carousel.querySelector('img');
            if (!imageElement)
                return;
            const imageWidth = imageElement.offsetWidth + 20; // image width + gap
            const currentIndex = Math.round(scrollPosition / imageWidth);
            if (carouselIndicators) {
                const indicators = carouselIndicators.querySelectorAll('.indicator');
                indicators.forEach((indicator, index) => {
                    if (index === currentIndex) {
                        indicator.classList.add('active');
                    }
                    else {
                        indicator.classList.remove('active');
                    }
                });
            }
        });
    }
    window.scrollCarousel = function (direction) {
        if (carousel) {
            const scrollAmount = carousel.offsetWidth * 0.8;
            carousel.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
        }
    };
    // Function to scroll to specific image
    function scrollToImage(index) {
        if (carousel) {
            const images = carousel.querySelectorAll('img');
            if (images[index]) {
                const imageWidth = images[0].offsetWidth + 20; // image width + gap
                carousel.scrollTo({
                    left: index * imageWidth,
                    behavior: 'smooth'
                });
            }
        }
    }
    // Reveal Secret Function
    function revealSecret() {
        const revealSection = document.getElementById('reveal-section');
        if (!revealSection)
            return;
        // Criar overlay
        const overlay = document.createElement('div');
        overlay.classList.add('modal-overlay');
        document.body.appendChild(overlay);
        // Adicionar botão de fechar
        const closeButton = document.createElement('button');
        closeButton.classList.add('modal-close-btn');
        closeButton.innerHTML = '<i class="fas fa-times"></i>';
        revealSection.appendChild(closeButton);
        // Exibir o modal
        revealSection.classList.add('modal-active');
        document.body.classList.add('modal-open');
        // Criar confetti
        createConfetti();
        // Fechar modal ao clicar no botão de fechar
        closeButton.addEventListener('click', closeModal);
        // Fechar modal ao clicar no overlay
        overlay.addEventListener('click', closeModal);
        function closeModal() {
            if (revealSection) {
                revealSection.classList.remove('modal-active');
                document.body.classList.remove('modal-open');
                overlay.remove();
                closeButton.remove();
            }
        }
    }
    // Secret Button Event Listener
    if (secretBtn) {
        secretBtn.addEventListener('click', function () {
            if (!this.disabled) {
                revealSecret();
            }
        });
    }
    // Create Confetti
    function createConfetti() {
        const confettiContainer = document.getElementById('confetti-container');
        if (!confettiContainer)
            return;
        const colors = ['#f94144', '#f3722c', '#f8961e', '#f9c74f', '#90be6d', '#43aa8b', '#577590'];
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = Math.random() * 10 + 5 + 'px';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confettiContainer.appendChild(confetti);
        }
    }
    // Share Modal
    const shareBtn = document.getElementById('share-btn');
    const shareModal = document.getElementById('share-modal');
    const closeModal = document.querySelector('.close-modal');
    if (shareBtn && shareModal) {
        shareBtn.addEventListener('click', function (e) {
            e.preventDefault();
            shareModal.classList.add('active');
        });
    }
    if (closeModal && shareModal) {
        closeModal.addEventListener('click', function () {
            shareModal.classList.remove('active');
        });
        // Close modal when clicking outside
        shareModal.addEventListener('click', function (e) {
            if (e.target === shareModal) {
                shareModal.classList.remove('active');
            }
        });
    }
    // Share Functions
    window.shareOnWhatsApp = function () {
        const text = "Venha participar da nova viagem do Totus Tuus Marie ao Beto Carrero World em Outubro de 2025! 🙏✝️🎢";
        const url = window.location.href;
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
    };
    window.shareOnFacebook = function () {
        const url = window.location.href;
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    };
    window.shareOnTwitter = function () {
        const text = "Venha participar da nova viagem do Totus Tuus Marie ao Beto Carrero World em Outubro de 2025! 🙏✝️🎢";
        const url = window.location.href;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    };
    window.copyLink = function () {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copiado para a área de transferência!');
        });
    };
    // Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('visible');
            }
            else {
                backToTopBtn.classList.remove('visible');
            }
        });
        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
            // Modal elements
            const modal = document.getElementById('eventoModal');
            const openBtn = document.getElementById('saibaMaisBtn');
            const closeBtn = document.querySelector('.close-btn');
            
            // Open modal with animation
            openBtn.addEventListener('click', function(e) {
                // Ripple effect
                createRipple(e);
                
                // Open modal
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            
            // Close modal
            closeBtn.addEventListener('click', closeModal);
            
            // Close when clicking outside
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModal();
                }
            });
            
            // Close with ESC key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && modal.classList.contains('active')) {
                    closeModal();
                }
            });
            
            // Close modal function
            function closeModal() {
                modal.classList.remove('active');
                setTimeout(() => {
                    document.body.style.overflow = 'auto';
                }, 300);
            }
            
            // Ripple effect function
            function createRipple(event) {
                const btn = event.currentTarget;
                const circle = document.createElement('span');
                const diameter = Math.max(btn.clientWidth, btn.clientHeight);
                const radius = diameter / 2;
                
                circle.style.width = circle.style.height = `${diameter}px`;
                circle.style.left = `${event.clientX - btn.getBoundingClientRect().left - radius}px`;
                circle.style.top = `${event.clientY - btn.getBoundingClientRect().top - radius}px`;
                circle.classList.add('ripple');
                
                const ripple = btn.getElementsByClassName('ripple')[0];
                if (ripple) {
                    ripple.remove();
                }
                
                btn.appendChild(circle);
            }
            
            // Add hover effects to all buttons
            const buttons = document.querySelectorAll('.btn');
            buttons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px)';
                });
                
                button.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        });