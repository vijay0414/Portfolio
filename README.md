# Vijay Kumar — Portfolio

Personal portfolio site built with vanilla HTML, CSS, and JavaScript. Dark monochrome editorial aesthetic — no frameworks, no build tools.

Live: [vijay0414.github.io/Portfolio](https://vijay0414.github.io/Portfolio) *(update if hosted elsewhere)*

---

## Design

- **Theme:** Near-black background (`#0e0e0e`), warm off-white text (`#f0ede8`), single gold accent (`#c8a96e`). Strictly monochrome except the one accent colour.
- **Typography:** DM Serif Display (headings) · Inter (body) · JetBrains Mono (labels, chips, mono UI)
- **Layout:** Two-column hero (name/text left, circular portrait right). About section splits bio+links left, photo+quick-facts card right. Sections use generous whitespace and ruled hairline separators.
- **Portrait:** Circular crop with a broken/partial ring decoration (`conic-gradient` + CSS `mask`) — used in both the hero and the About sidebar.
- **Grain overlay:** SVG fractal noise texture fixed over the entire page at low opacity.
- **Scroll reveal:** Native `IntersectionObserver` — fade + slide-up on viewport entry, no library.
- **Favicon:** Inline SVG data URI — VK monogram, no file dependency.
- **Cross-profile consistency:** `color-scheme: dark` forced at both CSS and meta level; fixed `font-size: 16px` on `html`; comprehensive CSS reset; cache-busted asset URLs (`?v=3`).

---

## Sections

| # | Section | Notes |
|---|---------|-------|
| 01 | **About** | Two-column layout — bio paragraphs + profile links (GitHub, LeetCode, LinkedIn) on the left; circular photo + quick-facts card (location, education, status) on the right |
| 02 | **Skills** | 6-card grid (3×2) — Programming Languages, Frontend, Backend, Databases, Dev Tools, AI & Automation — each card has a bordered icon badge, category title, description, and icon-prefixed chip badges |
| 03 | **Work** | Six projects as editorial case studies — Problem → Approach → Stack → Link |
| 04 | **Contact** | Email, GitHub, LinkedIn, WhatsApp, CV download |

---

## Projects

| Project | Stack | Year |
|---------|-------|------|
| [Bus Ticket & Tracking](https://github.com/vijay0414/Bus_Ticket_and_Tracking) | React · Node.js · Express · MongoDB | 2024 |
| [Agri-Trade Platform](https://github.com/vijay0414/Digital-Agriculture-Trading-Platform) | React · Java · Spring Boot · MySQL | 2026 |
| [OnDutyTracker](https://github.com/vijay0414/Ondutytracker) | React · Node.js · Express · MongoDB · JWT | 2025 |
| [Sentiment Analysis Workflow](https://github.com/vijay0414/Sentiment_Analysis_Using_N8N) | n8n · Node.js · Express · SerpAPI · Webhooks | 2025 |
| [GitHub Repo Analyzer](https://github.com/vijay0414/vijay-endee) | Python · Vector Search · Semantic Querying | 2026 |
| [CodeIntellAI](https://code-intell-ai.vercel.app/) | FastAPI · React · Groq · Gemini | 2026 |

---

## File Structure

```
├── index.html           # All markup
├── styles.css           # All styles (no preprocessor)
├── script.js            # Scroll reveal, nav, mobile drawer
├── images/
│   └── Vijay.jpeg       # Profile photo (used in hero + about sidebar)
└── resume/
    └── 5179_VijayKumarKNEW.pdf
```

---

## Running Locally

```bash
git clone https://github.com/vijay0414/Portfolio.git
cd Portfolio
# Open index.html directly, or serve with any static server:
python -m http.server 8000
```

No install step. No dependencies. No build.

---

## Contact

- **Email:** vijaykumarasamyvkps@gmail.com
- **LinkedIn:** [vijaykumarasamy](https://www.linkedin.com/in/vijaykumarasamy/)
- **GitHub:** [@vijay0414](https://github.com/vijay0414)
- **LeetCode:** [VijayKumarasamy](https://leetcode.com/u/VijayKumarasamy/)
- **WhatsApp:** [+91 75982 02292](https://wa.me/917598202292)
