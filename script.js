let currentLang = 'es';
let contentData = {};

// Cargar el JSON de idiomas
fetch('content.json')
    .then(response => response.json())
    .then(data => {
        contentData = data;
        updateContent();
    });

const langBtn = document.getElementById('lang-switch');

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    langBtn.innerText = currentLang === 'es' ? 'EN' : 'ES';
    updateContent();
});

function updateContent() {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (contentData[currentLang][key]) {
            el.innerText = contentData[currentLang][key];
        }
    });
}

// Efecto simple de Scroll para el Hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImg = document.querySelector('.hero-image img');
    heroImg.style.transform = `translateY(${scrolled * 0.3}px)`;
});
