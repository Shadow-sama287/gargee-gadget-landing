/**
 * Contact form — validates and opens WhatsApp with pre-filled message.
 */
(function () {
    function initContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        const params = new URLSearchParams(window.location.search);
        const prefillService = params.get('service');
        const serviceSelect = form.querySelector('#service');
        if (prefillService && serviceSelect) {
            serviceSelect.value = prefillService;
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(form));

            if (!data.name || !data.email || !data.service || !data.message) {
                showFormMessage('Please fill in all required fields.', 'error', form);
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showFormMessage('Please enter a valid email address.', 'error', form);
                return;
            }

            const serviceName = SITE_CONFIG.services[data.service]?.name || data.service;
            const ctx = typeof getVisitorContext === 'function' ? getVisitorContext() : {};
            const moodLabel = ctx.mood ? SITE_CONFIG.moods[ctx.mood]?.label : null;

            let msg = `Hi ${SITE_CONFIG.doctor.shortName},\n\n`;
            msg += `I would like to book a session.\n\n`;
            msg += `Name: ${data.name}\n`;
            msg += `Email: ${data.email}\n`;
            if (data.phone) msg += `Phone: ${data.phone}\n`;
            msg += `Service: ${serviceName}\n`;
            if (moodLabel) msg += `I found you because: ${moodLabel}\n`;
            msg += `\nMessage:\n${data.message}`;

            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Opening WhatsApp...';
            submitBtn.disabled = true;

            setTimeout(() => {
                window.open(buildWhatsAppUrl(msg), '_blank');
                showFormMessage(
                    'WhatsApp should open with your message. If it didn\'t, use the WhatsApp button below.',
                    'success',
                    form
                );
                submitBtn.textContent = 'Send via WhatsApp';
                submitBtn.disabled = false;
            }, 600);
        });
    }

    function showFormMessage(message, type, form) {
        const existing = form.querySelector('.form-message');
        if (existing) existing.remove();

        const msgEl = document.createElement('div');
        msgEl.className = `form-message form-message-${type}`;
        msgEl.textContent = message;
        msgEl.style.cssText = `
            padding: 14px 20px; border-radius: 8px; margin-top: 16px; font-size: 0.95rem;
            ${type === 'success'
                ? 'background: #E8F5E9; color: #2E7D32; border: 1px solid #A5D6A7;'
                : 'background: #FFEBEE; color: #C62828; border: 1px solid #EF9A9A;'}
        `;
        form.appendChild(msgEl);

        setTimeout(() => msgEl.remove(), 8000);
    }

    document.addEventListener('DOMContentLoaded', initContactForm);
})();
