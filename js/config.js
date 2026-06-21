/**
 * Site configuration — update placeholders here when client provides details.
 * All [TBC] values are intentional placeholders.
 */
const SITE_CONFIG = {
    doctor: {
        name: 'Dr. Gargee Gadgil',
        shortName: 'Dr. Gargee',
        title: 'Holistic Healer & Wellness Guide',
        tagline: 'Holistic Healing & Wellness',
        age: 55,
        city: 'Pune',
        state: 'Maharashtra',
        country: 'India',
    },

    contact: {
        phone: '+91 XXXXX XXXXX', // [TBC]
        phoneRaw: '91XXXXXXXXXX', // [TBC] — digits only for wa.me
        email: 'contact@drgargee.com', // [TBC]
        location: 'Pune, Maharashtra, India', // [TBC] — full address later
        hours: 'Monday – Saturday, 10:00 AM – 6:00 PM IST', // [TBC]
        replyTime: 'within 24–48 hours',
    },

    stats: {
        livesTransformed: null, // [TBC] — set number or null to hide
        modalities: 6,
        yearsExperience: null, // [TBC]
    },

    credentials: {
        degrees: ['[TBC] — Degree details to be added'],
        certifications: ['[TBC] — Certification details to be added'],
        memberships: ['[TBC] — Professional memberships to be added'],
    },

    payment: {
        enabled: true,
        method: 'UPI',
        note: 'Session fees can be paid via UPI. Scan the QR code below or use the UPI ID after booking confirmation.',
        upiId: '[TBC] — UPI ID to be added',
        qrImage: 'img/upi-qr-placeholder.svg',
    },

    session: {
        format: 'Online', // [TBC] — confirm with client
        platform: 'Google Meet / Zoom', // [TBC]
        duration: '60 minutes',
    },

    helplines: [
        { name: 'Vandrevala Foundation', number: '1860-2662-345 / 1800-2333-330' },
        { name: 'iCall (TISS)', number: '9152987821' },
        { name: 'National Tele MANAS', number: '14416' },
    ],

    moods: {
        anxious: {
            label: 'Anxious or overwhelmed',
            heroLine: 'You don\'t have to carry this alone.',
            heroSub: 'When everything feels too much, a calm space can help you breathe again and find your footing.',
            service: 'trauma-healing',
            affirmation: 'I am allowed to rest. Healing does not require me to have it all figured out.',
        },
        lost: {
            label: 'Lost or uncertain',
            heroLine: 'Clarity begins with one honest conversation.',
            heroSub: 'When the path ahead feels foggy, gentle guidance can help you reconnect with what matters.',
            service: 'holistic-wellness',
            affirmation: 'It is okay not to know. My next small step is enough for today.',
        },
        parenting: {
            label: 'Parenting struggle',
            heroLine: 'Your child deserves support — and so do you.',
            heroSub: 'Parenting is one of life\'s hardest roles. You don\'t have to navigate it without help.',
            service: 'child-healing',
            affirmation: 'I am doing my best, and asking for help is an act of love for my family.',
        },
        career: {
            label: 'Career crossroads',
            heroLine: 'Your work should feel aligned, not exhausting.',
            heroSub: 'When your career no longer fits who you are becoming, it may be time to pause and reflect.',
            service: 'career-counselling',
            affirmation: 'I trust that my purpose is unfolding, even when the next step is unclear.',
        },
        tarot: {
            label: 'Curious about tarot',
            heroLine: 'Sometimes we need a mirror, not a map.',
            heroSub: 'Tarot, in this practice, is a tool for reflection — helping you see patterns and possibilities with fresh eyes.',
            service: 'tarot-reading',
            affirmation: 'I am open to insight that helps me understand myself more deeply.',
        },
        exploring: {
            label: 'Just exploring',
            heroLine: 'Welcome — take your time.',
            heroSub: 'There is no rush here. Browse, breathe, and reach out whenever you feel ready.',
            service: null,
            affirmation: 'I am worthy of peace, healing, and a quiet mind.',
        },
    },

    services: {
        'trauma-healing': {
            slug: 'trauma-healing',
            name: 'Trauma Healing',
            icon: 'heart',
            headline: 'Release what you\'ve been carrying',
            description: 'Gentle, evidence-informed support to process emotional wounds from the past and reclaim inner peace.',
            forWho: [
                'You carry memories or feelings that still feel vivid and heavy',
                'Past experiences affect your relationships, sleep, or daily life',
                'You want a safe space to heal without being rushed or judged',
            ],
            sessionOne: 'We begin by understanding your story at your pace. You share only what feels comfortable. I listen without judgment and explain how our work together will unfold.',
            sessionFlow: 'Over following sessions, we use gentle techniques to help you process, integrate, and gradually feel lighter. Progress is never linear — and that is completely okay.',
            isNot: 'This is not emergency crisis care. If you are in immediate danger, please contact a helpline listed on our Resources page.',
            duration: '60 minutes',
            format: 'Online',
        },
        'child-healing': {
            slug: 'child-healing',
            name: 'Child Healing',
            icon: 'child',
            headline: 'A safe space for young hearts',
            description: 'Nurturing therapeutic support for children facing emotional or behavioural challenges.',
            forWho: [
                'Your child seems anxious, withdrawn, or unusually angry',
                'They\'ve been through a change — divorce, loss, bullying, or relocation',
                'You want professional support that honours your child\'s age and sensitivity',
            ],
            sessionOne: 'I meet with the parent first to understand the child\'s history and your concerns. Then I create a warm, age-appropriate space for the child to express themselves.',
            sessionFlow: 'Sessions use play, conversation, and gentle exercises suited to the child\'s age. Parents receive guidance on how to support healing at home.',
            isNot: 'This does not replace psychiatric or medical treatment when clinically indicated. I will refer when specialised care is needed.',
            duration: '45–60 minutes',
            format: 'Online',
        },
        'tarot-reading': {
            slug: 'tarot-reading',
            name: 'Tarot Reading',
            icon: 'layers',
            headline: 'Reflection, not prediction',
            description: 'Intuitive tarot used as a mirror — to explore patterns, possibilities, and the questions you hold.',
            forWho: [
                'You feel stuck and want fresh perspective on a decision',
                'You\'re curious about tarot as a reflective tool, not fortune-telling',
                'You want to combine intuitive insight with grounded conversation',
            ],
            sessionOne: 'You share the area of life you\'d like to explore — relationships, career, inner growth. I explain how tarot works in this practice: as dialogue, not destiny.',
            sessionFlow: 'We draw cards together and explore their themes in relation to your life. The session ends with practical reflections you can carry forward.',
            isNot: 'Tarot sessions here are not medical, legal, or financial advice. They are reflective conversations — never predictions of fixed outcomes.',
            duration: '60 minutes',
            format: 'Online',
        },
        'parenting-guidance': {
            slug: 'parenting-guidance',
            name: 'Parenting Guidance',
            icon: 'home',
            headline: 'Navigate parenthood with steadiness',
            description: 'Expert guidance for the beautiful, exhausting complexity of raising children.',
            forWho: [
                'You feel overwhelmed by your child\'s behaviour or emotions',
                'You want to build stronger connection without losing boundaries',
                'You\'re co-parenting, blending families, or facing a new life stage',
            ],
            sessionOne: 'We discuss your family dynamics, what\'s working, and what feels hard. I listen to your parenting values and we identify one or two areas to focus on.',
            sessionFlow: 'Sessions blend practical strategies with emotional support. You leave with tools you can use the same week — not abstract theory.',
            isNot: 'This is guidance and support, not a substitute for child psychiatric care when a clinical diagnosis may be needed.',
            duration: '60 minutes',
            format: 'Online',
        },
        'career-counselling': {
            slug: 'career-counselling',
            name: 'Career Counselling',
            icon: 'briefcase',
            headline: 'Align your work with who you are',
            description: 'Support to navigate career stress, transitions, and the search for meaningful work.',
            forWho: [
                'You feel burnt out or disconnected from your work',
                'You\'re considering a career change but feel paralysed by options',
                'You want clarity on purpose, not just the next job title',
            ],
            sessionOne: 'We map your current situation — what drains you, what energises you, and what constraints you face. No judgment, only honest exploration.',
            sessionFlow: 'Together we identify patterns, values, and practical next steps. Some clients combine this with tarot for deeper reflective work.',
            isNot: 'This is not recruitment or placement services. I support your inner clarity — you make the decisions.',
            duration: '60 minutes',
            format: 'Online',
        },
        'holistic-wellness': {
            slug: 'holistic-wellness',
            name: 'Holistic Wellness',
            icon: 'globe',
            headline: 'Mind, body, and spirit as one',
            description: 'An integrative approach weaving multiple healing modalities for complete well-being.',
            forWho: [
                'You want support that sees the whole person, not just one symptom',
                'You\'re open to blending conversation, grounding practices, and intuitive work',
                'You feel ready for a longer-term journey of transformation',
            ],
            sessionOne: 'We discuss every dimension of your life — emotional, physical, relational, spiritual. I learn what modalities resonate with you.',
            sessionFlow: 'Sessions may include talk therapy elements, breathing exercises, reflective tarot, or homework between sessions — tailored to you.',
            isNot: 'Holistic wellness complements but does not replace medical treatment. Always consult your doctor for physical health concerns.',
            duration: '60 minutes',
            format: 'Online',
        },
    },

    story: {
        origin: `Dr. Gargee Gadgil has spent her life in Pune — a city she knows not just as streets and seasons, but as the rhythm of families, festivals, and quiet sacrifices that so many Indian women learn to make without complaint.

For years, she poured herself into her home and community: raising children, caring for elders, holding together the invisible threads that keep a household running. Like many women of her generation, she learned early to put others first — to smile through worry, to swallow grief, to call fatigue "just part of life."

But life has a way of asking us to listen. In her forties and fifties, as she watched friends and neighbours struggle in silence — with anxiety they couldn't name, with marriages under strain, with children who seemed lost — she felt a calling she could no longer ignore. She began formal training in healing and therapeutic practices, drawing on both modern counselling methods and the intuitive wisdom she had cultivated over decades of lived experience.

Today, at 55, Dr. Gargee offers something rare: the steadiness of a woman who has lived a full life, combined with the training of a dedicated practitioner. She works primarily online, creating a calm, confidential space for clients across India and beyond.

Her practice is rooted in a simple belief: healing is not a luxury. It is a return home to yourself.`,
        tarotPhilosophy: `In Dr. Gargee's practice, tarot is not about predicting the future. It is a mirror — a way to see the patterns, questions, and possibilities already present in your life. Cards open conversation; they do not dictate outcomes. Whether you come as a believer or a skeptic, the session remains grounded, respectful, and focused on your clarity.`,
        firstTimer: `It is completely normal to feel nervous before your first session. You don't need to prepare anything special — just come as you are. There is no right way to feel, no perfect thing to say. We will move at your pace, and you are always in control of what you share.`,
    },

    pathFinder: {
        questions: [
            {
                id: 'q1',
                text: 'What feels most present for you right now?',
                options: [
                    { label: 'Heavy emotions from the past', scores: { 'trauma-healing': 3, 'holistic-wellness': 1 } },
                    { label: 'Worry about my child', scores: { 'child-healing': 3, 'parenting-guidance': 2 } },
                    { label: 'Career or work stress', scores: { 'career-counselling': 3, 'holistic-wellness': 1 } },
                    { label: 'Need for clarity or direction', scores: { 'tarot-reading': 2, 'holistic-wellness': 2, 'career-counselling': 1 } },
                    { label: 'General overwhelm', scores: { 'holistic-wellness': 3, 'trauma-healing': 1 } },
                ],
            },
            {
                id: 'q2',
                text: 'Who is this support primarily for?',
                options: [
                    { label: 'Myself', scores: {} },
                    { label: 'My child', scores: { 'child-healing': 4, 'parenting-guidance': 2 } },
                    { label: 'My family / parenting', scores: { 'parenting-guidance': 4, 'child-healing': 1 } },
                ],
            },
            {
                id: 'q3',
                text: 'What kind of support resonates most?',
                options: [
                    { label: 'Deep emotional healing', scores: { 'trauma-healing': 3, 'holistic-wellness': 2 } },
                    { label: 'Practical guidance and tools', scores: { 'parenting-guidance': 2, 'career-counselling': 2 } },
                    { label: 'Intuitive / reflective exploration', scores: { 'tarot-reading': 3, 'holistic-wellness': 1 } },
                    { label: 'A bit of everything', scores: { 'holistic-wellness': 4 } },
                ],
            },
        ],
        disclaimer: 'This is a gentle starting point — not a diagnosis. Dr. Gargee will help you find the right path in your first conversation.',
    },

    affirmations: {
        default: [
            'I am worthy of peace, healing, and a quiet mind.',
            'I release what I cannot control and choose to be present.',
            'My feelings are valid, and I allow myself space to feel them.',
            'Every step I take is a step toward my healing and growth.',
            'Healing is a journey, and I am patient with my own process.',
        ],
    },

    tarotCards: {
        star: {
            title: 'The Star — Hope & Healing',
            text: 'A symbol of renewed hope and gentle recovery. Where can you allow more trust — in yourself, in time, in the possibility that things can soften?',
            prompt: 'Where in your life do you most need hope right now?',
        },
        sun: {
            title: 'The Sun — Clarity & Vitality',
            text: 'Warmth, truth, and clear understanding. What would it feel like to step into the light of your own honesty — without judgment?',
            prompt: 'What truth are you ready to acknowledge today?',
        },
        empress: {
            title: 'The Empress — Nurturing & Abundance',
            text: 'Self-care, creative growth, and kindness toward yourself. What needs nurturing in you — not in others, but in you?',
            prompt: 'How can you offer yourself the care you so easily give others?',
        },
    },

    journal: [
        {
            slug: 'inner-child-work',
            title: 'Inner Child Work — What It Actually Means',
            date: '2026-06-01',
            readTime: '6 min',
            excerpt: 'Inner child work isn\'t about regressing. It\'s about meeting the parts of you that learned to survive — and offering them what they needed then, and still need now.',
        },
        {
            slug: 'tarot-as-reflection',
            title: 'Tarot as Reflection, Not Fortune-Telling',
            date: '2026-06-10',
            readTime: '5 min',
            excerpt: 'Many people arrive curious and skeptical. That\'s welcome. Here\'s how tarot works in a therapeutic, grounded practice.',
        },
        {
            slug: 'child-emotions',
            title: 'When Your Child\'s Emotions Feel Bigger Than Yours',
            date: '2026-06-15',
            readTime: '7 min',
            excerpt: 'A child\'s meltdown can trigger our own unprocessed feelings. Here\'s how to stay present — for both of you.',
        },
    ],
};

/** Build WhatsApp URL with optional service and mood context */
function buildWhatsAppUrl(message) {
    const phone = SITE_CONFIG.contact.phoneRaw;
    const text = encodeURIComponent(message || `Hi ${SITE_CONFIG.doctor.shortName}, I would like to book a session.`);
    return `https://wa.me/${phone}?text=${text}`;
}

/** Get service by slug */
function getService(slug) {
    return SITE_CONFIG.services[slug] || null;
}

/** Relative path prefix for nested pages */
function siteRoot() {
    const depth = (window.location.pathname.match(/\//g) || []).length - 1;
    const inSubfolder = window.location.pathname.includes('/services/') ||
        window.location.pathname.includes('/journal/');
    return inSubfolder ? '../' : '';
}
