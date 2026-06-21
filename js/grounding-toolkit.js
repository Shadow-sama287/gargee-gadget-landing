/**
 * Grounding toolkit — breathing and sensory tools on Resources page.
 */
(function () {
    let breathingTimeline = null;
    let countdownInterval = null;
    let breathingActive = false;
    let originalTheme = 'theme-sage';

    function initToolkit() {
        const container = document.getElementById('groundingToolkit');
        if (!container) return;

        // Dynamic wrap of the Box Breathing circle to ensure it has breathing-guide-wrapper class
        const boxCircle = document.getElementById('breathingCircleBox');
        if (boxCircle && boxCircle.parentElement) {
            boxCircle.parentElement.classList.add('breathing-guide-wrapper');
            boxCircle.parentElement.style.position = 'relative';
        }

        // Dynamically inject the breathing ripples
        document.querySelectorAll('.breathing-guide-wrapper').forEach(wrapper => {
            // Check if ripples already exist
            if (wrapper.querySelector('.breathing-ripple-container')) return;
            
            const rippleContainer = document.createElement('div');
            rippleContainer.className = 'breathing-ripple-container';
            rippleContainer.innerHTML = `
                <div class="breathing-ripple"></div>
                <div class="breathing-ripple"></div>
                <div class="breathing-ripple"></div>
            `;
            wrapper.appendChild(rippleContainer);
        });

        const tabs = container.querySelectorAll('.toolkit-tab');
        const panels = container.querySelectorAll('.toolkit-panel');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                stopBreathing();
                tabs.forEach(t => t.classList.remove('active'));
                panels.forEach(p => p.classList.remove('active'));
                tab.classList.add('active');
                const panel = container.querySelector(`#panel-${tab.dataset.tool}`);
                if (panel) panel.classList.add('active');
            });
        });

        const toggle478 = document.getElementById('toggle478');
        if (toggle478) toggle478.addEventListener('click', toggle478Breathing);

        const toggleBox = document.getElementById('toggleBox');
        if (toggleBox) toggleBox.addEventListener('click', toggleBoxBreathing);
    }

    function toggle478Breathing() {
        const btn = document.getElementById('toggle478');
        const circle = document.getElementById('breathingCircle478');
        const instruction = document.getElementById('instruction478');
        const timer = document.getElementById('timer478');
        const wrapper = circle ? circle.closest('.breathing-guide-wrapper') : null;
        if (!btn || !circle) return;

        if (breathingActive) {
            stopBreathing(circle, instruction, timer, btn, 'Start 4-7-8 Breathing', wrapper);
            return;
        }

        startBreathingMode(wrapper);
        btn.textContent = 'Stop';
        
        breathingTimeline = gsap.timeline({ repeat: -1 });
        breathingTimeline
            .to(circle, { 
                scale: 1.8, 
                backgroundColor: '#5BA18B', 
                duration: 4, 
                ease: 'sine.inOut', 
                onStart: () => {
                    instruction.textContent = 'Inhale deeply...'; startCountdown(timer, 4);
                }
            })
            .to(circle, { 
                scale: 1.8, 
                backgroundColor: '#5B8BA1', 
                duration: 7, 
                onStart: () => {
                    instruction.textContent = 'Hold...'; startCountdown(timer, 7);
                }
            })
            .to(circle, { 
                scale: 1.0, 
                backgroundColor: '#8B5BA1', 
                duration: 8, 
                ease: 'sine.inOut', 
                onStart: () => {
                    instruction.textContent = 'Exhale slowly...'; startCountdown(timer, 8);
                }
            });
    }

    function toggleBoxBreathing() {
        const btn = document.getElementById('toggleBox');
        const circle = document.getElementById('breathingCircleBox');
        const instruction = document.getElementById('instructionBox');
        const timer = document.getElementById('timerBox');
        const wrapper = circle ? circle.closest('.breathing-guide-wrapper') : null;
        if (!btn || !circle) return;

        if (breathingActive) {
            stopBreathing(circle, instruction, timer, btn, 'Start Box Breathing', wrapper);
            return;
        }

        startBreathingMode(wrapper);
        btn.textContent = 'Stop';
        
        breathingTimeline = gsap.timeline({ repeat: -1 });
        
        const phases = [
            { label: 'Inhale...', color: '#5BA18B', scale: 1.6 },
            { label: 'Hold...', color: '#5B8BA1', scale: 1.6 },
            { label: 'Exhale...', color: '#8B5BA1', scale: 1.0 },
            { label: 'Hold...', color: '#7C7A9B', scale: 1.0 }
        ];

        phases.forEach(phase => {
            breathingTimeline.to(circle, {
                scale: phase.scale,
                backgroundColor: phase.color,
                duration: 4,
                ease: 'sine.inOut',
                onStart: () => { 
                    instruction.textContent = phase.label; 
                    startCountdown(timer, 4); 
                },
            });
        });
    }

    function startBreathingMode(wrapper) {
        breathingActive = true;
        if (wrapper) wrapper.classList.add('active');
        
        // Dynamic theme shift to Sage
        originalTheme = document.body.className.match(/theme-\w+/)?.[0] || 'theme-sage';
        document.body.classList.remove('theme-lavender', 'theme-midnight', 'theme-gold', 'theme-dusk');
        document.body.classList.add('theme-sage');
    }

    function stopBreathing(circle, instruction, timer, btn, label, wrapper) {
        breathingActive = false;
        if (wrapper) wrapper.classList.remove('active');
        
        if (breathingTimeline) breathingTimeline.kill();
        clearInterval(countdownInterval);
        
        if (circle) {
            gsap.to(circle, { 
                scale: 1, 
                backgroundColor: 'var(--primary)', 
                duration: 0.5 
            });
        }
        if (instruction) instruction.textContent = 'Press start when ready';
        if (timer) timer.textContent = '';
        if (btn) btn.textContent = label || 'Start';

        // Revert theme
        document.body.classList.remove('theme-sage');
        document.body.classList.add(originalTheme);
    }

    function startCountdown(el, seconds) {
        if (!el) return;
        clearInterval(countdownInterval);
        let count = seconds;
        el.textContent = `${count}s`;
        countdownInterval = setInterval(() => {
            count--;
            if (count > 0) el.textContent = `${count}s`;
            else clearInterval(countdownInterval);
        }, 1000);
    }

    document.addEventListener('DOMContentLoaded', initToolkit);
})();
