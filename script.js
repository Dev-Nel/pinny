function generatePIN() {
    const pin = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('pin-display').textContent = pin;
}

function toggleLanguage() {
    const elements = document.querySelectorAll('[data-lang]');
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'en' ? 'fr' : 'en';
    document.documentElement.lang = newLang;
    elements.forEach(el => {
        el.textContent = el.getAttribute('data-lang');
    });
}
