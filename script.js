// ============================================
// ACAMPAMENTO RHUMA MINA 2026 - JAVASCRIPT
// ============================================

// Menu Mobile
var mobileMenuBtn = document.getElementById('mobileMenuBtn');
var navList = document.getElementById('navList');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
}

// Fecha menu ao clicar em link
var navLinks = document.querySelectorAll('.nav-list a');
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        navList.classList.remove('active');
    });
}

// ============================================
// CARROSSEL
// ============================================
var track = document.getElementById('carrosselTrack');
var slides = document.querySelectorAll('.carrossel-slide');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
var indicadoresContainer = document.getElementById('indicadores');

if (track && slides.length > 0) {
    var currentSlide = 0;
    var totalSlides = slides.length;
    var autoplayInterval = null;

    // Criar indicadores
    if (indicadoresContainer) {
        for (var i = 0; i < totalSlides; i++) {
            var indicador = document.createElement('button');
            indicador.className = 'indicador';
            if (i === 0) indicador.classList.add('active');
            indicador.setAttribute('data-index', i);
            
            (function(index) {
                indicador.addEventListener('click', function() {
                    goToSlide(index);
                });
            })(i);
            
            indicadoresContainer.appendChild(indicador);
        }
    }

    function goToSlide(index) {
        currentSlide = index;
        if (currentSlide >= totalSlides) currentSlide = 0;
        if (currentSlide < 0) currentSlide = totalSlides - 1;
        
        track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
        
        var indicadores = document.querySelectorAll('.indicador');
        for (var i = 0; i < indicadores.length; i++) {
            if (i === currentSlide) {
                indicadores[i].classList.add('active');
            } else {
                indicadores[i].classList.remove('active');
            }
        }
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            nextSlide();
            resetAutoplay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            prevSlide();
            resetAutoplay();
        });
    }

    function startAutoplay() {
        if (autoplayInterval) clearInterval(autoplayInterval);
        autoplayInterval = setInterval(nextSlide, 4000);
    }

    function resetAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            startAutoplay();
        }
    }

    if (totalSlides > 1) {
        startAutoplay();
    }

    var carrosselContainer = document.querySelector('.carrossel-container');
    if (carrosselContainer) {
        carrosselContainer.addEventListener('mouseenter', function() {
            if (autoplayInterval) clearInterval(autoplayInterval);
        });
        carrosselContainer.addEventListener('mouseleave', function() {
            startAutoplay();
        });
    }
}

// ============================================
// ANIMAÇÕES DE SCROLL
// ============================================
var observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

var observer = new IntersectionObserver(function(entries) {
    for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
            entries[i].target.classList.add('visible');
        }
    }
}, observerOptions);

var elementosAnimados = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
for (var i = 0; i < elementosAnimados.length; i++) {
    observer.observe(elementosAnimados[i]);
}

console.log('🎵 Acampamento RHUMA MINA 2026 - Site carregado com sucesso!');
console.log('📅 16 a 20 de Dezembro de 2026 - Namaacha');
console.log('📖 "Eis-me aqui, envia-me a mim" — Isaías 6:8');