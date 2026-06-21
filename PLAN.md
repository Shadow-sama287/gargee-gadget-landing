# Dr. Gargee Gadgil — Website Renovation Master Plan

**Version:** 1.0  
**Date:** June 21, 2026  
**Status:** Planning — awaiting client inputs before build  
**Goal:** Transform a visually polished template into an experiential website that *feels* like Dr. Gargee's practice — warm, grounded, trustworthy, and actionable.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Vision & Design North Star](#2-vision--design-north-star)
3. [Current State Assessment](#3-current-state-assessment)
4. [Target Visitor Experience](#4-target-visitor-experience)
5. [Information Architecture](#5-information-architecture)
6. [Page Specifications](#6-page-specifications)
7. [Interactive Feature Specifications](#7-interactive-feature-specifications)
8. [Design System](#8-design-system)
9. [Technical Architecture](#9-technical-architecture)
10. [Content & Copy Strategy](#10-content--copy-strategy)
11. [Trust, Legal & Professional Standards](#11-trust-legal--professional-standards)
12. [SEO & Performance](#12-seo--performance)
13. [Implementation Phases](#13-implementation-phases)
14. [Acceptance Criteria](#14-acceptance-criteria)
15. [Out of Scope (v1)](#15-out-of-scope-v1)
16. [Client Input Checklist](#16-client-input-checklist)
17. [Open Questions](#17-open-questions)

---

## Client Decisions (Recorded — June 2026)

| Decision | Value |
|---|---|
| Contact channels | Phone, WhatsApp, Email (details TBC) |
| Social media | **None** — removed from site |
| Pricing | **Not shown** on site |
| Session format | Online (TBC — confirm with Dr. Gargee) |
| Booking | WhatsApp + website contact form |
| Payment | UPI with QR code (placeholder until provided) |
| Tech stack | Static HTML/CSS/JS |
| Media | Placeholder video/photos — replace when provided |
| Credentials/stats | Placeholder [TBC] until client provides |
| Origin story | Draft for 55yo Pune woman — replace when real story available |

---

---

## 1. Executive Summary

### What we are building

A multi-page, experiential wellness website for **Dr. Gargee Gadgil** — a Pune-based holistic healer offering trauma healing, child healing, tarot-based guidance, parenting support, career counselling, and integrative wellness.

### What changes

| From (today) | To (renovated) |
|---|---|
| Single scroll-only landing page | Multi-page site with depth |
| Animation showcase | Experience that mirrors her practice |
| Fake contact form | Real booking + working contact |
| Generic service cards | Personalized path-finding + service detail pages |
| Demo tarot gimmick | Reflective tarot experience tied to real sessions |
| Placeholder contact info | Verified credentials, contact, and social links |
| Template testimonials | Authentic stories (when provided) |

### Three signature moments (must nail)

1. **Mood intake → personalized path** — visitor feels seen within 10 seconds  
2. **Her authentic voice on the site** — audio, video, or unmistakably her written words  
3. **Working book flow** — from "this might be for me" to booked/contacted in under 2 minutes  

---

## 2. Vision & Design North Star

### Tagline direction

**Primary:** Holistic Healing & Wellness  
**Emotional promise:** *Arrive calm. Leave clearer.*

### Tone of voice

- Warm, unhurried, compassionate  
- Plain language — no clinical jargon unless explained  
- Honest about boundaries (what she does and does not treat)  
- Spiritual where appropriate, never gimmicky  
- First-person from Dr. Gargee on About and service pages  

### Sensory feel

| Element | Direction |
|---|---|
| **Pace** | Slow, intentional — like entering a calm room |
| **Motion** | Soft reveals; respect `prefers-reduced-motion` |
| **Color** | Lavender base; modality-specific accents (dusk, midnight, sage) |
| **Typography** | Playfair Display (headings) + Inter or warmer body alternative |
| **Sound** | Optional, off by default — gentle chimes only where meaningful |
| **Photography** | Real photos of Dr. Gargee, workspace, session environment |

### What the site must NOT feel like

- Generic spa/wellness template  
- Fortune-telling or mystical clichés  
- Over-animated agency portfolio  
- Clinical hospital website  
- Hard-sell coaching funnel  

---

## 3. Current State Assessment

### Existing assets (keep / refactor)

| Asset | Action |
|---|---|
| `index.html` structure & section order | Refactor into Home; extract shared layout |
| Lavender color palette | Refine, extend with modality themes |
| GSAP + ScrollTrigger animations | Keep; reduce intensity; add reduced-motion path |
| Daily affirmations | Expand; tie to mood intake |
| 4-7-8 breathing exercise | Expand into Grounding Toolkit |
| Interactive tarot (3 cards) | Reframe as "Reflection, not prediction" |
| WhatsApp CTAs | Keep as primary conversion for Indian audience |
| Profile + tarot images in `/img` | Keep; may add more from client |

### Existing gaps (must fix)

| Gap | Priority |
|---|---|
| Contact form fakes success — no backend | P0 |
| Placeholder phone `+91 98765 43210` | P0 |
| Placeholder email may not be live | P0 |
| Social links point to `#` | P1 |
| Stats (500+, 10+ years) unverified | P1 — use only if confirmed |
| No credentials / certifications | P0 |
| No crisis disclaimer or helplines | P0 |
| Single page limits depth | P1 |
| Testimonials appear generic | P1 — replace when real ones provided |

---

## 4. Target Visitor Experience

### Visitor journeys

#### Journey A — Anxious adult seeking trauma support
1. Lands on Home → selects "Anxious" in mood intake  
2. Hero copy shifts; Trauma Healing highlighted  
3. Reads "Your First Session" page  
4. Uses 2-min box breathing tool  
5. Books via WhatsApp or Calendly with pre-filled context  

#### Journey B — Parent worried about child
1. Lands → selects "Parenting struggle"  
2. Directed to `/parents` page  
3. Reads "What a child session looks like"  
4. Books Child Healing or Parenting Guidance  

#### Journey C — Career crossroads + curious about tarot
1. Lands → selects "Career crossroads"  
2. Path finder suggests Career Counselling + Tarot  
3. Tries reflective tarot card + journal prompt  
4. Reads `/services/tarot-reading` for philosophy  
5. Books tarot session  

#### Journey D — Just exploring
1. Skips mood intake or selects "Just exploring"  
2. Browses Services hub + Resources library  
3. Reads Journal article  
4. Subscribes or returns later (optional newsletter v2)  

### First 60 seconds on Home

```
[Optional mood question — dismissible]
        ↓
Hero: personalized headline + her photo/voice snippet
        ↓
One clear CTA: "Find your path" OR "Book a free consultation"
        ↓
Scroll: proof (credentials strip) + one client story
```

---

## 5. Information Architecture

### Site map

```
/                           Home (experiential front door)
/about                      My Story, credentials, philosophy
/services                   Services hub + path finder
/services/trauma-healing
/services/child-healing
/services/tarot-reading
/services/parenting-guidance
/services/career-counselling
/services/holistic-wellness
/first-session              What to expect, reduce first-session anxiety
/parents                    For Parents — child + parenting focus
/resources                  Free tools, PDFs, helplines
/journal                    Blog / insights (launch with 2–3 posts)
/journal/[slug]             Individual articles
/contact                    Book, WhatsApp, form, map, hours
```

### Global navigation

```
Logo → Home
About | Services ▾ | Resources | Journal | Contact
[Book a Session] — primary CTA button
```

Services dropdown links to hub + all six modalities.

### Footer (all pages)

- Quick links (same as nav)  
- Services list  
- Contact info (verified)  
- Social icons (real URLs)  
- Crisis disclaimer + helpline numbers  
- Privacy note  
- © 2026 Dr. Gargee Gadgil  

---

## 6. Page Specifications

### 6.1 Home (`/`)

**Purpose:** Emotional front door + route visitors to the right path.

| Section | Content | Interaction |
|---|---|---|
| Mood intake overlay | "What brought you here today?" 6 options | Personalizes hero + highlights service; stored in sessionStorage |
| Hero | Headline, subcopy, photo or video loop | Dynamic copy based on mood; primary + secondary CTA |
| Voice snippet | 60–90 sec audio/video | Play button; transcript below |
| Credentials strip | Degrees, certs, years | Static; builds immediate trust |
| Path finder CTA | "Not sure where to start?" | Links to `/services#path-finder` or inline modal |
| Featured client story | One long-form testimonial | Tag by service |
| Services preview | 3–4 cards based on mood or rotating | Link to full service pages |
| Grounding teaser | "Take 2 minutes" | Links to breathing tool on page or `/resources` |
| Tarot teaser | "Card as mirror" | 1-card mini experience → full section or `/services/tarot-reading` |
| Journal preview | Latest 2 posts | Link to `/journal` |
| Contact CTA | Book + WhatsApp | Pre-fill WhatsApp with mood + service if selected |

---

### 6.2 About (`/about`)

**Purpose:** Human connection — who she is and why she does this work.

| Section | Content |
|---|---|
| Hero | Portrait + "Meet Dr. Gargee Gadgil" |
| Origin story | Narrative: why holistic healing, personal turning point |
| Philosophy | Mind-body-spirit integration; quote block |
| Credentials | Degrees, certifications, training, professional memberships |
| Approach | How she blends therapy + intuition + tarot (honest framing) |
| Workspace | Photo essay — room, tools, books (humanizing) |
| Values | Confidentiality, non-judgment, pacing, boundaries |
| CTA | Book a session / Read services |

**Copy source:** Client interview + approved bio.

---

### 6.3 Services Hub (`/services`)

**Purpose:** Help visitors find the right modality.

| Section | Content |
|---|---|
| Intro | "Every path is different" |
| Path finder | 5–6 question interactive flow → 1–2 recommended services |
| All services grid | 6 cards with icon, one-line, link to detail page |
| Comparison note | "Many clients combine modalities over time" |
| FAQ | General service questions |
| CTA | Book / WhatsApp |

---

### 6.4 Service Detail Pages (`/services/[slug]`)

**One template, six instances.** Each page includes:

| Block | Description |
|---|---|
| Hero | Service name + emotional headline |
| Who this is for | 3–5 bullet personas |
| What it is | Plain-language explanation |
| What it is NOT | Scope boundaries (builds trust) |
| Session flow | Session 1, 2, 3… what happens |
| Duration & format | Online / in-person / both; typical length |
| Tarot-specific | "Reflection, not prediction" philosophy |
| Child-specific | Parent involvement, age range |
| FAQ | 4–6 service-specific questions |
| Related services | Cross-links |
| CTA | Book this service (pre-filled) |

**Slugs:**
- `trauma-healing`
- `child-healing`
- `tarot-reading`
- `parenting-guidance`
- `career-counselling`
- `holistic-wellness`

---

### 6.5 Your First Session (`/first-session`)

**Purpose:** Reduce booking anxiety.

| Section | Content |
|---|---|
| Before you come | What to prepare (nothing special required) |
| Online sessions | Platform, privacy, tech tips |
| In-person sessions | Location, parking, what the space feels like |
| During the session | Pace, silence is okay, crying is okay |
| After the session | Integration, homework, follow-up |
| Confidentiality | What stays private |
| CTA | Book now |

---

### 6.6 For Parents (`/parents`)

**Purpose:** Dedicated entry for parenting + child healing audience.

| Section | Content |
|---|---|
| Hero | "You're not alone in this" |
| Signs your child may need support | Gentle, non-alarmist list |
| What child healing looks like | Age-appropriate explanation |
| Parent's role | How parents participate |
| Parenting guidance vs child sessions | When each applies |
| FAQ | School, divorce, anxiety, teens |
| CTA | Book Child Healing or Parenting Guidance |

---

### 6.7 Resources (`/resources`)

**Purpose:** Free value + professional responsibility.

| Section | Content |
|---|---|
| Grounding Toolkit | Embedded tools (see Feature §7.4) |
| Downloadables | PDFs: grounding exercises, journal prompts |
| Reading list | Curated books (client-approved) |
| Crisis support | India helplines: iCall, Vandrevala Foundation, etc. |
| Disclaimer | Site is not emergency support |

---

### 6.8 Journal (`/journal` + `/journal/[slug]`)

**Purpose:** Ongoing relationship, SEO, thought leadership.

**Launch with 2–3 articles** (client-written or ghostwritten from interview):

1. "Inner child work — what it actually means"  
2. "Tarot as reflection, not fortune-telling"  
3. "When your child's emotions feel bigger than yours"  

**Article template:** Title, date, read time, body, related services CTA, related posts.

**CMS approach (v1):** Static markdown or JSON files — no CMS unless client needs frequent self-updates.

---

### 6.9 Contact (`/contact`)

**Purpose:** Convert interest into booked sessions.

| Section | Content |
|---|---|
| Book online | Calendly / Cal.com embed OR WhatsApp primary |
| Contact form | Working submission (Formspree / Netlify Forms / EmailJS) |
| Intake fields | Name, email, phone, service, mood (if captured), message |
| What happens next | Timeline: reply within 24–48 hours |
| Location | Pune address or "Online worldwide" |
| Map | Google Maps embed if in-person |
| Hours | Availability windows |

---

## 7. Interactive Feature Specifications

### 7.1 Mood Intake ("How are you arriving today?")

**Location:** Home — first visit only (sessionStorage flag)

**Options:**
- Anxious
- Lost / uncertain
- Parenting struggle
- Career crossroads
- Curious about tarot
- Just exploring

**Behavior:**
- Dismissible ("Skip")
- Sets `visitorMood` in sessionStorage
- Updates: hero subcopy, highlighted service, affirmation default, WhatsApp pre-fill text
- Optional: subtle background theme shift

**Copy matrix (draft — client to refine):**

| Mood | Hero accent | Highlighted service |
|---|---|---|
| Anxious | "You don't have to carry this alone" | Trauma Healing |
| Lost | "Clarity begins with one honest conversation" | Holistic Wellness |
| Parenting | "Your child deserves support — and so do you" | Child Healing |
| Career | "Your work should feel aligned, not exhausting" | Career Counselling |
| Tarot curious | "Sometimes we need a mirror, not a map" | Tarot Reading |
| Exploring | "Welcome — take your time" | Services hub |

---

### 7.2 Path Finder ("Which path resonates?")

**Location:** `/services` (inline) + optional modal from Home

**Flow:** 5–6 questions, single-select each:

1. "What feels most present for you right now?" (emotions / life area)
2. "Are you seeking insight, healing, or practical guidance?"
3. "Is this for you, your child, or your family?"
4. "Do you prefer structured conversation or intuitive exploration?"
5. "Have past experiences left marks you're still carrying?" (optional sensitivity)

**Output:**
- Primary recommendation (1 service) + secondary (1 optional)
- 2–3 sentence explanation in plain language
- Disclaimer: "This is a starting point, not a diagnosis"
- CTAs: Read service page | Book | WhatsApp

**Implementation:** Pure client-side JS; scoring matrix in config file for easy updates.

---

### 7.3 Reflective Tarot ("Card as mirror")

**Reframe from current demo.**

**Location:** Home teaser + `/services/tarot-reading` full experience

**Cards (expand from 3 to 5–7 over time):**
- The Star — Hope & Healing
- The Sun — Clarity & Vitality
- The Empress — Nurturing & Abundance
- (+ client may suggest more)

**Flow:**
1. Prompt: "Hold a question in your mind. Choose the card you're drawn to."
2. 3D flip animation (keep existing GSAP)
3. Show card meaning (therapeutic framing)
4. **Reflection prompts** (new):
   - "Where does this theme appear in your life right now?"
   - "What would it feel like to lean into this energy?"
5. Optional local journal textarea (saved to localStorage)
6. CTA: "Want a full reading with Dr. Gargee?"

**Copy tone:** Insight and patterns — never prediction or fate.

---

### 7.4 Grounding Toolkit

**Location:** `/resources` + Home teaser + Approach section

| Tool | Pattern | Duration |
|---|---|---|
| Box breathing | 4-4-4-4 | 2 min |
| 4-7-8 breathing | Existing | ~4 min cycle |
| Body scan | Guided text steps | 5 min |
| 5-4-3-2-1 grounding | Sensory checklist | 2 min |
| Journaling prompt | Random from pool | Open |

**UI:** Tab or card selector; animated circle where applicable; countdown; Start/Stop; optional soft tone (muted by default).

**Each tool ends with:** "If this helped, a session can help you go deeper." + Book CTA.

---

### 7.5 Daily Affirmations (enhanced)

**Location:** Home hero area

**Enhancement:** Pool organized by mood; if mood intake completed, prioritize matching affirmations.

**Interaction:** Refresh button; fade transition (existing); avoid repeating current affirmation.

---

### 7.6 Session Preview — Voice / Video

**Location:** Home + About

**Spec:**
- 60–90 second clip of Dr. Gargee speaking
- Topics: how she opens a session, what clients can expect, tarot philosophy
- Full transcript below for accessibility
- Poster image if video; no autoplay with sound

**Fallback if no video yet:** Audio-only or written "letter to visitors" in her voice.

---

### 7.7 Working Contact & Booking

**Contact form — required fields:**
- Name*, Email*, Phone (optional), Service*, Message*

**Backend options (choose one — see Client Checklist):**
- **Option A:** Formspree / Netlify Forms (simple, fast)
- **Option B:** EmailJS (client-side email)
- **Option C:** WhatsApp-only (form builds wa.me link)
- **Option D:** Calendly embed + minimal form

**WhatsApp deep link format:**
```
https://wa.me/[PHONE]?text=Hi Dr. Gargee, I'm interested in [SERVICE]. 
I found you through the website. [MOOD if set]. [Optional message]
```

**Success state:** Real confirmation — not fake timeout.

---

### 7.8 Testimonials (when provided)

**Format:** Long-form story cards

**Structure:**
- Before → Turning point → After
- Service tag
- First name + initial (e.g., "Ananya S.")
- Optional: audio testimonial (voice only)

**Fallback at launch:** Fewer, real testimonials > many generic ones.

---

### 7.9 Accessibility & Reduced Motion

- Respect `prefers-reduced-motion: reduce` — disable parallax, cursor, heavy GSAP
- Skip mood intake available
- All interactive elements keyboard-accessible
- Video/audio transcripts
- Sufficient color contrast (WCAG AA target)
- Focus states on all buttons/links

---

## 8. Design System

### Color palette

**Base (lavender — refined from current):**
```css
--primary:       #C3A6D8;
--primary-dark:  #9B7BBF;
--secondary:     #5B3A7A;
--accent:        #D4A843;
--bg:            #FAF6FF;
--bg-alt:        #F0E6F6;
--text:          #2D1B3D;
--text-light:    #6B5A7A;
```

**Modality themes (body class swap on scroll or section):**
| Theme | Use | Background feel |
|---|---|---|
| `theme-lavender` | Default, hero, about | Soft purple |
| `theme-midnight` | Tarot sections | Deep blue-purple |
| `theme-sage` | Breathing, resources | Muted green |
| `theme-dusk` | Trauma, serious topics | Warm twilight |
| `theme-gold` | Testimonials, success | Warm highlight |

### Typography

- **Headings:** Playfair Display (keep)
- **Body:** Inter (keep) or alternative if client prefers warmer feel (e.g., Source Sans 3, Lora for quotes)

### Components (shared across pages)

- Navbar (sticky, transparent → solid on scroll)
- Mobile hamburger menu
- Buttons: primary, secondary, ghost
- Service cards
- Testimonial cards
- FAQ accordion
- Form inputs
- WhatsApp float (appears after scroll)
- Footer
- Section labels + split-word headings
- Crisis disclaimer bar (footer)

### Motion principles

- Duration: 0.6–1.2s for reveals (slower than current)
- Easing: `power3.out`, `sine.inOut` — avoid bouncy on serious content
- Stagger: 0.08–0.15s on cards
- No animation blocking content readability

---

## 9. Technical Architecture

### Recommended stack (v1)

| Layer | Choice | Rationale |
|---|---|---|
| Structure | **Multi-page HTML** or **Next.js/Astro** | See Open Questions |
| Styling | CSS custom properties + modular CSS files | Matches current; easy theming |
| Animation | GSAP 3 + ScrollTrigger (CDN or npm) | Already in use |
| Forms | Formspree / Netlify Forms | No backend needed |
| Booking | Calendly / Cal.com embed | Client manages calendar |
| Journal | Markdown files → static HTML | Simple, version-controlled |
| Hosting | Netlify / Vercel / GitHub Pages | Free tier sufficient |
| Analytics | Plausible or Google Analytics | Optional; privacy-respecting preferred |
| Images | WebP + lazy loading | Performance |

### File structure (if staying static multi-page)

```
/
├── index.html
├── about.html
├── services.html
├── services/
│   ├── trauma-healing.html
│   ├── child-healing.html
│   ├── tarot-reading.html
│   ├── parenting-guidance.html
│   ├── career-counselling.html
│   └── holistic-wellness.html
├── first-session.html
├── parents.html
├── resources.html
├── journal/
│   ├── index.html
│   ├── inner-child-work.html
│   ├── tarot-as-reflection.html
│   └── child-emotions.html
├── contact.html
├── css/
│   ├── base.css
│   ├── components.css
│   ├── themes.css
│   └── pages/
├── js/
│   ├── main.js
│   ├── mood-intake.js
│   ├── path-finder.js
│   ├── tarot.js
│   ├── grounding-toolkit.js
│   └── config.js          ← services, mood matrix, helplines
├── img/
├── content/
│   └── journal/           ← markdown source (optional)
└── PLAN.md
```

### Shared JS config (`config.js`)

Centralize data client may update later:
- Services list + descriptions + slugs
- Mood → copy matrix
- Path finder questions + scoring
- Affirmations by mood
- Tarot cards + readings + reflection prompts
- Helpline numbers
- Contact info
- Social links

---

## 10. Content & Copy Strategy

### Copy sources (priority order)

1. Client interview answers (see §16)
2. Existing site copy (refined, not copied blindly)
3. Draft copy for client approval before publish

### Pages requiring client-written or approved copy

| Page | Client input level |
|---|---|
| About / origin story | **Required** — must be her words |
| Service detail pages | **Required** — session descriptions, boundaries |
| First Session | **Review required** |
| For Parents | **Review required** |
| Tarot philosophy | **Required** — sensitive positioning |
| Journal articles | **Required** — or interview for ghostwriting |
| Testimonials | **Required** — real only |
| Credentials | **Required** — exact titles, spellings |

### Micro-copy to collect from client

- How she greets new clients  
- Phrases she uses in sessions  
- How she describes tarot to skeptics  
- Her boundary statements ("I don't treat…")  

---

## 11. Trust, Legal & Professional Standards

### Must appear on site (footer or dedicated sections)

**Crisis disclaimer:**
> This website is not for emergencies. If you or someone you know is in crisis, please contact [helpline numbers].

**India helplines (verify current numbers before launch):**
- Vandrevala Foundation: 1860-2662-345 / 1800-2333-330
- iCall (TISS): 9152987821
- National Tele MANAS: 14416

**Scope of practice:**
- Clear statement of what services are (wellness/support) vs. what requires psychiatric/medical care
- Client to provide exact wording based on her qualifications

**Privacy:**
- What happens to form submissions
- Session confidentiality statement

**Testimonials:**
- Only with written client consent

---

## 12. SEO & Performance

### Meta & SEO (per page)

- Unique `<title>` and `<meta description>`
- Open Graph tags for social sharing
- Schema.org `LocalBusiness` or `Physician` / `ProfessionalService` (match actual credentials)
- Alt text on all images

### Target keywords (draft)

- Holistic healer Pune  
- Trauma healing Pune / online  
- Child therapist Pune (if accurate to credentials)  
- Tarot reading Pune  
- Career counselling Pune  
- Parenting guidance  

*Final keywords depend on what she's licensed/certified to claim.*

### Performance targets

- Lighthouse Performance: 85+  
- LCP < 2.5s  
- Images: WebP, compressed, lazy-loaded  
- GSAP loaded defer/async  
- Minimal third-party scripts  

---

## 13. Implementation Phases

### Phase 0 — Discovery & content (blocked on client input)
- [ ] Client completes checklist (§16)
- [ ] Kickoff call / async Q&A if needed
- [ ] Approve sitemap and feature list
- [ ] Choose tech stack and form/booking provider

### Phase 1 — Foundation
- [ ] Set up project structure (multi-page or framework)
- [ ] Shared layout: nav, footer, design system CSS
- [ ] `config.js` with all mutable content
- [ ] Real contact info + working form
- [ ] Crisis disclaimer + helplines
- [ ] About page with real credentials

**Deliverable:** Navigable skeleton with trust elements live.

### Phase 2 — Core pages
- [ ] Home renovation (hero, credentials, CTAs)
- [ ] Services hub + 6 detail pages
- [ ] First Session page
- [ ] For Parents page
- [ ] Contact page with booking embed

**Deliverable:** Full site narrative without advanced interactions.

### Phase 3 — Experiential features
- [ ] Mood intake + personalization
- [ ] Path finder
- [ ] Grounding toolkit (all tools)
- [ ] Reflective tarot upgrade
- [ ] Enhanced affirmations
- [ ] Voice/video embed (when asset provided)
- [ ] Reduced-motion + accessibility pass

**Deliverable:** Site *feels* like the practice.

### Phase 4 — Resources & Journal
- [ ] Resources page + PDF downloads
- [ ] Journal index + 2–3 launch articles
- [ ] SEO meta for all pages

**Deliverable:** Content marketing foundation.

### Phase 5 — Polish & launch
- [ ] Real testimonials integrated
- [ ] Performance optimization
- [ ] Cross-browser / mobile QA
- [ ] Client review round + copy fixes
- [ ] Deploy to production domain
- [ ] Post-launch: analytics smoke test

**Deliverable:** Production launch.

---

## 14. Acceptance Criteria

### Functional
- [ ] Contact form submits successfully (test submission received)
- [ ] WhatsApp links open with correct phone and pre-filled text
- [ ] Booking embed works (if Calendly chosen)
- [ ] All nav links work; no broken internal links
- [ ] Mood intake persists for session and affects copy
- [ ] Path finder returns sensible recommendations
- [ ] All grounding tools run start/stop without errors
- [ ] Tarot flip + reflection prompts work on mobile
- [ ] Site usable with keyboard only
- [ ] Reduced motion disables heavy animations

### Content
- [ ] No placeholder phone, email, or social links
- [ ] Credentials match client's actual qualifications
- [ ] Stats only shown if verified
- [ ] Testimonials are real or section omitted
- [ ] Crisis helplines present and verified

### Quality
- [ ] Mobile responsive (320px – 1440px+)
- [ ] Lighthouse Performance 85+
- [ ] Consistent tone across pages
- [ ] Client sign-off on About, Services, Tarot philosophy

---

## 15. Out of Scope (v1)

- User accounts / login
- Payment processing
- Full CMS (WordPress, etc.) — unless explicitly requested
- Client portal for session notes
- Live chat (beyond WhatsApp)
- Multi-language — unless requested
- Newsletter / email marketing integration — v2
- More than 3 launch journal posts
- Custom tarot card artwork beyond existing assets — unless provided

---

## 16. Client Input Checklist

**Please provide everything below before Phase 1 build begins.**  
Partial answers OK — mark unknowns and we'll use placeholders clearly labeled `[TBC]`.

### A. Identity & contact (required)

| # | Item | Your answer |
|---|---|---|
| A1 | Full name (exact spelling for site) | |
| A2 | Professional title (e.g., "Holistic Healer", "Counselling Psychologist") | |
| A3 | Real phone number for WhatsApp (with country code) | |
| A4 | Real email address | |
| A5 | Physical address (or "Online only") | |
| A6 | Google Maps link (if in-person) | |
| A7 | Business hours / availability text | |
| A8 | Instagram URL | |
| A9 | Facebook URL | |
| A10 | LinkedIn URL | |
| A11 | Other social (YouTube, etc.) | |

### B. Credentials & trust (required)

| # | Item | Your answer |
|---|---|---|
| B1 | Degrees (institution, year, field) | |
| B2 | Certifications / trainings | |
| B3 | Professional memberships | |
| B4 | Years of experience (exact number for site) | |
| B5 | Lives transformed / clients served — real stat or omit? | |
| B6 | Licenses or registrations (if any) | |
| B7 | Scope of practice — what you DO treat/support | |
| B8 | Scope boundaries — what you DON'T / refer out | |

### C. Services (required — one block per service)

For each of the 6 services:

| Field | Trauma | Child | Tarot | Parenting | Career | Holistic |
|---|---|---|---|---|---|---|
| One-line description | | | | | | |
| Who is this for? (3 bullets) | | | | | | |
| What happens in session 1? | | | | | | |
| What happens in sessions 2–3? | | | | | | |
| Duration (e.g., 60 min) | | | | | | |
| Online / in-person / both | | | | | | |
| Price or "contact for pricing"? | | | | | | |
| What this is NOT | | | | | | |

### D. Story & voice (required)

| # | Item | Your answer |
|---|---|---|
| D1 | Origin story — why do you do this work? (200–400 words, your words) | |
| D2 | How do you describe your approach in one paragraph? | |
| D3 | How do you explain tarot to someone skeptical? (100 words) | |
| D4 | What do you say to a nervous first-time client? | |
| D5 | 5 phrases you often use in sessions | |
| D6 | Philosophy quote you'd approve for the site | |

### E. First session & logistics

| # | Item | Your answer |
|---|---|---|
| E1 | Online platform used (Zoom, Google Meet, etc.) | |
| E2 | What should clients prepare? | |
| E3 | What happens after they submit the contact form? (reply time, next steps) | |
| E4 | Cancellation / rescheduling policy (brief) | |

### F. Parents & children

| # | Item | Your answer |
|---|---|---|
| F1 | Age range for child sessions | |
| F2 | Parent presence required? | |
| F3 | Common issues you support (list) | |

### G. Media assets

| # | Item | Format | Status |
|---|---|---|---|
| G1 | Professional headshot(s) | JPG/PNG, high-res | Have / Need new |
| G2 | Workspace / session room photos | JPG/PNG | |
| G3 | 60–90 sec intro video OR audio | MP4 / MP3 | |
| G4 | Video transcript (or we transcribe) | Text | |
| G5 | Logo (if any) | SVG/PNG | |
| G6 | Additional tarot card images | PNG | |
| G7 | PDF: grounding exercises | PDF | |
| G8 | PDF: journal prompts | PDF | |

### H. Testimonials (optional but recommended)

For each testimonial (aim for 3–6):

- Client first name + last initial  
- Service used  
- Before situation (1–2 sentences)  
- Turning point (1–2 sentences)  
- After / outcome (1–2 sentences)  
- Written consent: yes/no  
- Optional: audio file  

### I. Journal launch articles

| # | Item | Your answer |
|---|---|---|
| I1 | Provide 2–3 articles (800–1200 words each) OR approve us to draft from interview | |
| I2 | Preferred article topics if we draft | |

### J. Technical preferences

| # | Item | Options | Your choice |
|---|---|---|---|
| J1 | Booking method | WhatsApp only / Calendly / Cal.com / Form only | |
| J2 | Calendly/Cal.com link (if applicable) | URL | |
| J3 | Form backend | Formspree / Netlify Forms / EmailJS / WhatsApp redirect | |
| J4 | Form notification email | | |
| J5 | Tech stack | Static HTML (simple) / Astro / Next.js (scalable) | |
| J6 | Domain name | e.g., drgargee.com | |
| J7 | Current hosting (if any) | | |
| J8 | Analytics | Yes / No — Plausible / Google Analytics | |

### K. Legal & compliance

| # | Item | Your answer |
|---|---|---|
| K1 | Business registered name (for footer/copyright) | |
| K2 | Privacy policy — provide or we draft template for review? | |
| K3 | Testimonial consent forms on file? | |

---

## 17. Open Questions

Decisions needed from client before build:

1. **Online vs in-person vs hybrid?** Affects Contact, First Session, map.
2. **Tarot prominence?** Equal to other services, or integrated/subtle?
3. **Professional title?** "Dr." — medical doctor, PhD, or honorific? (Affects SEO and trust copy.)
4. **Pricing on site?** Public prices vs "Contact for pricing"?
5. **Static HTML vs Astro/Next.js?** Static = faster to ship; framework = easier journal/CMS later.
6. **Domain & hosting?** Who owns DNS; deploy target?
7. **Hindi / Marathi version?** v1 or future?
8. **Brand colors?** Keep lavender or adjust?

---

## Next Step

**Client:** Fill in §16 (checklist) — even partial answers unblock Phase 1.  
**Build team:** Upon receipt, begin Phase 1 foundation immediately.

---

*This document is the single source of truth for the renovation. Update version and date when scope changes.*
