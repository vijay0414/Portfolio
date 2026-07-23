# Vijay Kumar — Portfolio

Personal portfolio site built with vanilla HTML, CSS, and JavaScript. Dark monochrome editorial aesthetic — no frameworks, no build tools.

---

## Design

- **Theme:** Near-black background, off-white text, single gold accent (`#c8a96e`). Strictly monochrome except the one accent colour.
- **Typography:** DM Serif Display (headings) · Inter (body) · JetBrains Mono (labels, code, chips)
- **Layout:** Asymmetric editorial grid — hero splits name/portrait, sections use generous whitespace and ruled separators rather than cards.
- **Portrait:** Circular crop with a broken/partial ring decoration built in CSS (`conic-gradient` + `mask`).
- **Grain overlay:** Subtle SVG fractal noise texture fixed over the entire page.
- **Scroll reveal:** Native `IntersectionObserver` — elements fade + slide up on viewport entry, no library.
- **Favicon:** Inline SVG data URI — VK monogram, no external file needed.

---

## Sections

| # | Section | Notes |
|---|---------|-------|
| 01 | **About** | Bio paragraph + three stat figures (projects, stacks, automation pipelines) |
| 02 | **Skills** | Three category rows (Frontend / Backend / Data & Tools) — icon-prefixed chip badges, inline SVG icons, horizontal wrapping layout |
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
| [CodeIntellAI](https://github.com/vijay0414/CodeIntellAI) | FastAPI · React · Groq · Gemini | 2026 |

---

## File Structure

```
├── index.html        # All markup
├── styles.css        # All styles (no preprocessor)
├── script.js         # Scroll reveal + nav + mobile drawer
├── images/
│   └── Vijay.jpeg    # Profile photo
└── resume/
    └── VijayKumar_Resume.pdf
```

---

## Running Locally

```bash
git clone https://github.com/vijay0414/Portfolio.git
cd Portfolio
# open index.html directly, or serve it:
python -m http.server 8000
```

No install step. No dependencies. No build.

---

## Contact

- **Email:** vijaykumarasamyvkps@gmail.com
- **LinkedIn:** [vijaykumarasamy](https://www.linkedin.com/in/vijaykumarasamy/)
- **GitHub:** [@vijay0414](https://github.com/vijay0414)
- **WhatsApp:** [+91 75982 02292](https://wa.me/917598202292)
