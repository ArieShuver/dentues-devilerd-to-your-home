// ==========================================================================
// Conversion Tracking (Google Ads & GA4)
// ==========================================================================
let lastPhoneConversionTime = 0;
let lastWAConversionTime = 0;

function reportPhoneConversion(label) {
    const now = Date.now();
    if (now - lastPhoneConversionTime < 1000) return true;
    lastPhoneConversionTime = now;

    if (typeof gtag === 'function') {
        gtag('event', 'click_to_call', {
            event_category: 'Contact',
            event_label: label || 'Phone_Click'
        });
        gtag('event', 'conversion', {
            send_to: 'AW-16695210635/xL_9CP2bz60cEIvl8pg-',
            value: 1.0,
            currency: 'ILS'
        });
    }
    return true;
}

function reportWhatsAppConversion(label) {
    const now = Date.now();
    if (now - lastWAConversionTime < 1000) return true;
    lastWAConversionTime = now;

    if (typeof gtag === 'function') {
        gtag('event', 'whatsapp_click', {
            event_category: 'Contact',
            event_label: label || 'WhatsApp_Click'
        });
        gtag('event', 'conversion', {
            send_to: 'AW-16695210635/H3iuCJaB0_kcEIvl8pg-',
            value: 1.0,
            currency: 'ILS'
        });
    }
    return true;
}

// Global functions for backward compatibility with onclick attributes in HTML
window.gtag_report_conversion = function (url) {
    reportPhoneConversion('Phone_Onclick');
    return true;
};

window.gtag_report_conversion_whatsapp = function (url) {
    reportWhatsAppConversion('WhatsApp_Onclick');
    return true;
};

// Delegated click listener to automatically track any phone or WhatsApp links across the entire site
document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href') || '';
    if (href.startsWith('tel:')) {
        reportPhoneConversion(link.className || 'Phone_Link');
    } else if (href.includes('wa.me') || href.includes('whatsapp.com')) {
        reportWhatsAppConversion(link.className || 'WhatsApp_Link');
    }
}, { capture: true });

document.addEventListener('DOMContentLoaded', () => {
    
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

    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            question.parentElement.classList.toggle('active');
        });
    });

    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        window.addEventListener('scroll', () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / scrollHeight) * 100;
            if (scrolled > 20) {
                whatsappBtn.classList.add('visible');
            } else {
                whatsappBtn.classList.remove('visible');
            }
        });
    }

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

async function submitArticleForm(event, form) {
    if (event) event.preventDefault();
    const errorMsg = form.querySelector('.article-form-error');
    const successMsg = form.querySelector('.article-form-success');
    if (errorMsg) errorMsg.style.display = 'none';
    if (successMsg) successMsg.style.display = 'none';

    const showError = (msg) => {
        if (errorMsg) {
            errorMsg.innerText = msg;
            errorMsg.style.display = 'block';
        } else {
            alert(msg);
        }
    };

    const nameInput = form.querySelector('input[name="name"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    const cityInput = form.querySelector('input[name="city"]');
    const serviceInput = form.querySelector('select[name="service"]');
    const termsInput = form.querySelector('input[name="terms"]');
    const submitBtn = form.querySelector('.article-contact-submit');

    const name = nameInput ? nameInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const city = cityInput ? cityInput.value.trim() : '';
    const service = serviceInput ? serviceInput.value : '';

    if (!name) {
        showError('אנא הזינו שם מלא.');
        return;
    }
    if (!phone || !/^[0-9\-+]{9,15}$/.test(phone)) {
        showError('אנא הזינו מספר טלפון תקין.');
        return;
    }
    if (!city) {
        showError('אנא הזינו עיר או אזור מגורים.');
        return;
    }
    if (termsInput && !termsInput.checked) {
        showError('יש לאשר את תנאי השימוש כדי להמשיך.');
        return;
    }

    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'שולח...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    const pageTitle = document.title || 'פנייה ממאמר באתר';
    const pageUrl = window.location.pathname;

    const formData = {
        access_key: '64061fbf-b4c5-49a2-9812-490405a3ea0e',
        subject: `פנייה חדשה ממאמר: ${pageTitle}`,
        name: name,
        phone: phone,
        message: `פנייה מטופס מאמר באתר\n--------------------\nעמוד: ${pageUrl}\nכותרת עמוד: ${pageTitle}\nעיר: ${city}\nסוג שירות: ${service || 'לא צוין'}`
    };

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        if (data.success) {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submission', { 'event_category': 'Lead', 'event_label': 'Article_Form' });
                gtag('event', 'conversion', {
                    'send_to': 'AW-16695210635/dxQxCOaZz60cEIvl8pg-',
                    'value': 1.0,
                    'currency': 'ILS'
                });
            }
            submitBtn.style.display = 'none';
            if (successMsg) successMsg.style.display = 'block';
            if (nameInput) nameInput.value = '';
            if (phoneInput) phoneInput.value = '';
            if (cityInput) cityInput.value = '';
            if (serviceInput) serviceInput.value = '';
        } else {
            showError('אירעה שגיאה בשליחת הפנייה. ניתן גם לחייג ישירות: 050-7156888.');
        }
    } catch (err) {
        showError('שגיאת תקשורת. אנא בדקו את החיבור לרשת או נסו שוב.');
    } finally {
        if (submitBtn.style.display !== 'none') {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
        }
    }
}

(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.defer=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "wqydd744m2");