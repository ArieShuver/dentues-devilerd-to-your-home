// --- תפריט נגישות ---
let currentFontSize = 19;

window.toggleAccessMenu = function() {
    const menu = document.getElementById('accessMenu');
    if (menu) menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
};

window.changeFontSize = function(delta) {
    currentFontSize *= delta;
    document.body.style.fontSize = currentFontSize + 'px';
    const articleContent = document.querySelector('.article-content');
    if (articleContent) articleContent.style.fontSize = currentFontSize + 'px';
};

window.toggleContrast = function() {
    document.body.classList.toggle('high-contrast');
};

window.toggleReadableFont = function() {
    document.body.classList.toggle('readable-font');
};

window.resetAccess = function() {
    document.body.style.fontSize = '';
    const articleContent = document.querySelector('.article-content');
    if (articleContent) articleContent.style.fontSize = '';
    document.body.classList.remove('high-contrast', 'readable-font');
    const menu = document.getElementById('accessMenu');
    if (menu) menu.style.display = 'none';
};

// --- פעולות בעת טעינת העמוד ---
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. תפריט מובייל (Hamburger)
    const hamburger = document.getElementById('hamburgerMenu');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if(icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                if(icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            });
        });
    }

    // 2. שאלות ותשובות (FAQ Accordion)
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            question.parentElement.classList.toggle('active');
        });
    });

    // 3. כפתור וואטסאפ צף - הופעה בגלילה
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        window.addEventListener('scroll', () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / scrollHeight) * 100;
                whatsappBtn.classList.add('visible');
        });
    }

    // 4. אנימציות הופעה בגלילה למסכים השונים
    const observerOptions = { threshold: 0.15 };
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    document.querySelectorAll('.hero-form-container').forEach(el => scrollObserver.observe(el));
});