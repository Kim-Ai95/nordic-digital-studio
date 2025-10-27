// ========================================
// NORDICDIGITAL STUDIO - VISUELLT INTERESSANT WEBSIDE
// ========================================
// Moderne JavaScript funksjonalitet for visuelt interessant bedriftsnettside
// Oppdatert for NordicDigital Studio med mørk bakgrunn og oransje aksentfarger

// Vent til DOM er lastet før vi kjører koden
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobil meny funksjonalitet
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Toggle mobil meny når hamburger klikkes
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animer hamburger ikon til X
        hamburger.classList.toggle('active');
    });
    
    // Lukk mobil meny når en lenke klikkes
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigasjonslenker
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Beregn offset for fixed header
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // CTA knapp funksjonalitet
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function() {
        const projectsSection = document.querySelector('#prosjekter');
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = projectsSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
    
    // Scroll effekter - vis elementer når de kommer inn i viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observer alle prosjekt kort
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        // Sett initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        observer.observe(card);
    });
    
    // Header bakgrunn endring ved scrolling - tilpasset mørk bakgrunn
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(15, 23, 42, 0.95)'; // Mørk marine blå med høy opasitet
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.1)'; // Glassmorfisme bakgrunn
            header.style.backdropFilter = 'blur(20px)';
        }
    });
    
    // Tjeneste kort hover effekter - tilpasset visuelt interessant design
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            // Legg til subtile glow effekt på hover
            this.style.boxShadow = '0 20px 25px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 107, 53, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            // Tilbakestill box-shadow
            this.style.boxShadow = '';
        });
    });
    
    // Typing effekt for hero tittel (valgfri)
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    
    // Funksjon for typing effekt
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Start typing effekt når siden lastes (kommenter ut hvis ikke ønsket)
    // typeWriter(heroTitle, originalText, 80);
    
    // Form validering for kontakt (hvis du legger til et skjema senere)
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Eksempel på form validering
    function setupFormValidation() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const emailInput = form.querySelector('input[type="email"]');
                if (emailInput && !validateEmail(emailInput.value)) {
                    alert('Vennligst skriv inn en gyldig e-postadresse');
                    return;
                }
                
                // Her kan du legge til kode for å sende skjemaet
                alert('Takk for din henvendelse!');
            });
        });
    }
    
    // Kjør form validering setup
    setupFormValidation();
    
    // Lazy loading for bilder (hvis du legger til bilder senere)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Konsoll melding for utviklere - oppdatert for visuelt interessant design
    console.log('🚀 NordicDigital Studio - Visuelt Interessant Webside er lastet!');
    console.log('💡 Tips: Websiden har mørk bakgrunn med oransje aksentfarger og glassmorfisme effekter');
    console.log('🎨 Design: Mørk marine blå bakgrunn med subtile gradienter og tekstur');
    console.log('📍 Lokasjon: Ås, Norge | 👨‍💻 Kim Andre Iversen | 📧 Kimatcode@gmail.com');
    
});

// Utility funksjoner som kan brukes globalt
window.utils = {
    // Funksjon for å sjekke om element er synlig
    isElementInViewport: function(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    
    // Funksjon for å debounce events (reduser antall kall)
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Funksjon for å formatere dato
    formatDate: function(date) {
        return new Intl.DateTimeFormat('no-NO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    }
};
