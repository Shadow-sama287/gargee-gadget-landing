/**
 * Path finder — recommends services based on answers with kinetic transitions.
 */
(function () {
    function initPathFinder() {
        const container = document.getElementById('pathFinder');
        if (!container) return;

        const cfg = SITE_CONFIG.pathFinder;
        let step = 0;
        const scores = {};

        Object.keys(SITE_CONFIG.services).forEach(slug => { scores[slug] = 0; });

        function renderProgress() {
            const dots = container.querySelector('.path-progress');
            if (!dots) return;
            dots.innerHTML = cfg.questions.map((_, i) => {
                let cls = 'path-dot';
                if (i < step) cls += ' done';
                if (i === step) cls += ' active';
                return `<span class="${cls}"></span>`;
            }).join('');
        }

        function renderQuestion() {
            if (step >= cfg.questions.length) {
                animateToResult();
                return;
            }

            const q = cfg.questions[step];
            const currentQuestion = container.querySelector('.path-question');

            const newContentHtml = `
                <div class="path-progress"></div>
                <div class="path-question" style="opacity: 0;">
                    <h3>${q.text}</h3>
                    <div class="path-options">
                        ${q.options.map((opt, i) =>
                            `<button type="button" class="path-option-btn magnetic" data-index="${i}">${opt.label}</button>`
                        ).join('')}
                    </div>
                </div>
            `;

            if (currentQuestion) {
                // Slide out current question
                gsap.to(currentQuestion, {
                    xPercent: -30,
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.in',
                    onComplete: () => {
                        container.innerHTML = newContentHtml;
                        renderProgress();
                        const nextQuestion = container.querySelector('.path-question');
                        gsap.fromTo(nextQuestion, 
                            { xPercent: 30, opacity: 0 },
                            { xPercent: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
                        );
                        setupOptionListeners(q);
                    }
                });
            } else {
                container.innerHTML = newContentHtml;
                renderProgress();
                const nextQuestion = container.querySelector('.path-question');
                gsap.set(nextQuestion, { opacity: 1 });
                setupOptionListeners(q);
            }
        }

        function setupOptionListeners(q) {
            container.querySelectorAll('.path-option-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const opt = q.options[parseInt(btn.dataset.index, 10)];
                    Object.entries(opt.scores || {}).forEach(([slug, pts]) => {
                        scores[slug] = (scores[slug] || 0) + pts;
                    });
                    step++;
                    renderQuestion();
                });
            });
        }

        function animateToResult() {
            const currentQuestion = container.querySelector('.path-question');
            if (currentQuestion) {
                gsap.to(currentQuestion, {
                    xPercent: -30,
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.in',
                    onComplete: () => {
                        renderResult();
                    }
                });
            } else {
                renderResult();
            }
        }

        function renderResult() {
            const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
            const primarySlug = sorted[0][0];
            const secondarySlug = sorted[1] && sorted[1][1] > 0 ? sorted[1][0] : null;
            const primary = SITE_CONFIG.services[primarySlug];
            const secondary = secondarySlug ? SITE_CONFIG.services[secondarySlug] : null;
            const root = siteRoot();

            container.innerHTML = `
                <div class="path-progress">${cfg.questions.map((_, i) =>
                    `<span class="path-dot done"></span>`).join('')}</div>
                <div class="path-result" style="opacity: 0; transform: scale(0.95);">
                    <h3>We suggest: ${primary.name}</h3>
                    <p>${primary.description}</p>
                    ${secondary ? `<p>You may also explore <strong>${secondary.name}</strong>.</p>` : ''}
                    <p class="path-disclaimer">${cfg.disclaimer}</p>
                    <div class="path-result-actions">
                        <a href="${root}services/${primary.slug}.html" class="btn btn-primary magnetic">Learn More</a>
                        <a href="${root}contact.html?service=${primary.slug}" class="btn btn-secondary magnetic">Book Session</a>
                        <button type="button" class="btn btn-secondary magnetic" id="pathRestart">Start Over</button>
                    </div>
                </div>
            `;

            const resultBlock = container.querySelector('.path-result');
            gsap.to(resultBlock, {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: 'back.out(1.4)'
            });

            document.getElementById('pathRestart')?.addEventListener('click', () => {
                const result = container.querySelector('.path-result');
                gsap.to(result, {
                    xPercent: -30,
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.in',
                    onComplete: () => {
                        step = 0;
                        Object.keys(scores).forEach(k => { scores[k] = 0; });
                        renderQuestion();
                    }
                });
            });
        }

        renderQuestion();
    }

    document.addEventListener('DOMContentLoaded', initPathFinder);
})();
