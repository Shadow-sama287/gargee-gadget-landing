/**
 * Populates service detail pages from SITE_CONFIG.
 * Page must have: data-service="slug" on body or #servicePageRoot
 */
(function () {
    function initServicePage() {
        const root = document.getElementById('servicePageRoot');
        if (!root) return;

        const slug = document.body.dataset.service || root.dataset.service;
        const service = getService(slug);
        if (!service) {
            root.innerHTML = '<p>Service not found.</p>';
            return;
        }

        const prefix = siteRoot();
        document.title = `${service.name} — ${SITE_CONFIG.doctor.name}`;

        root.innerHTML = `
            <section class="page-hero compact">
                <div class="container">
                    <span class="section-label reveal-text">Service</span>
                    <h1 class="section-title split-words">${service.name}</h1>
                    <p class="section-subtitle reveal-up">${service.headline}</p>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="two-col-grid">
                        <div class="content-block">
                            <h3>About this service</h3>
                            <p>${service.description}</p>

                            <h3>Who is this for?</h3>
                            <ul class="content-list">
                                ${service.forWho.map(item => `<li>${item}</li>`).join('')}
                            </ul>

                            <h3>Your first session</h3>
                            <p>${service.sessionOne}</p>

                            <h3>What follows</h3>
                            <p>${service.sessionFlow}</p>

                            <div class="content-callout">
                                <p><strong>Important:</strong> ${service.isNot}</p>
                            </div>
                        </div>
                        <div>
                            <div class="service-sidebar-card" style="background:var(--white);padding:32px;border-radius:var(--radius);box-shadow:var(--shadow);position:sticky;top:100px;">
                                <h3 style="font-family:var(--font-heading);margin-bottom:20px;">Session details</h3>
                                <p style="margin-bottom:12px;color:var(--text-light);"><strong>Format:</strong> ${service.format} <span class="tbc-badge">TBC</span></p>
                                <p style="margin-bottom:12px;color:var(--text-light);"><strong>Duration:</strong> ${service.duration}</p>
                                <p style="margin-bottom:24px;color:var(--text-light);"><strong>Location:</strong> ${SITE_CONFIG.contact.location}</p>
                                <a href="${prefix}contact.html?service=${service.slug}" class="btn btn-primary btn-full magnetic" style="width:100%;justify-content:center;margin-bottom:12px;">Book This Service</a>
                                <a href="${buildWhatsAppUrl(`Hi ${SITE_CONFIG.doctor.shortName}, I am interested in ${service.name}.`)}" class="btn btn-secondary btn-full" style="width:100%;justify-content:center;" target="_blank" rel="noopener">WhatsApp</a>
                                <p style="margin-top:20px;font-size:0.85rem;color:var(--text-light);">Payment via UPI after booking confirmation. <a href="${prefix}contact.html#payment" style="color:var(--secondary);">See payment info</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    document.addEventListener('DOMContentLoaded', initServicePage);
})();
