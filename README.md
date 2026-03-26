# 0Resmon Storefront — Homepage Clone

A high-fidelity, responsive homepage clone of [0resmon.tebex.io](https://0resmon.tebex.io/) built with **HTML, CSS (Tailwind CSS 4), and Vanilla JavaScript**.

> **Frontend Assignment** for Crux Studio — Built with no frontend frameworks (React/Vue/Angular).

## 🔗 Live Demo

**[View Live →](https://hj616.github.io/Clone-of-0resmon/)**

## 📸 Preview

![Homepage Screenshot](https://r2.fivemanage.com/ATZ00IXjgOwoZjH5kxuUl/background.png)

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic structure |
| **Tailwind CSS 4** | Utility-first styling (CDN browser build) |
| **Vanilla CSS** | Custom design system + enhancements |
| **Vanilla JavaScript** | Interactivity, animations, DOM manipulation |
| **GSAP 3.14** | Scroll-triggered animations & counters |
| **Font Awesome 7** | Icon library |
| **Lucide Icons** | Additional icon set |

## 📂 Project Structure

```
├── index.html              # Main homepage
├── css/
│   ├── globals.css         # Font imports, keyframes, base styles
│   ├── shared.css          # Design system, component styles
│   └── enhancements.css    # Custom design improvements
├── js/
│   ├── index_ref.js        # Reviews, FAQ data & rendering
│   ├── main_ref.js         # Core site logic (nav, scroll, basket)
│   └── animations.js       # GSAP scroll reveals & counter animations
└── README.md
```

## ✨ Features

- **Fully Responsive** — Desktop, tablet, and mobile layouts
- **Discount Banner** — Live countdown timer with copy-to-clipboard
- **Sticky Navbar** — Glass blur effect on scroll with mobile hamburger menu
- **Hero Section** — Animated floating logo elements
- **Product Grid** — 8 featured products with hover lift effects
- **Customer Reviews** — Auto-scrolling marquee with real review data
- **Why Choose Us** — Feature cards with hover interactions
- **Stats Counter** — Animated number counters (GSAP ScrollTrigger)
- **YouTube Showcase** — Video thumbnails with auto-scroll
- **FAQ Accordion** — Search-filterable with expand/collapse
- **Recent Payments** — Scrolling payment feed with user avatars
- **Discord CTA** — Join community call-to-action
- **Footer** — Organized links with hover underline animations

## 🎨 Design Improvements

Beyond replicating the reference, I applied my own design judgment:

- **Enhanced hover states** — Product cards lift with red-tinted shadows
- **Button glow effects** — Subtle glow on interactive buttons
- **Brand-colored text selection** — Red highlight on text select
- **Custom scrollbar** — Thin dark themed scrollbar
- **Focus accessibility** — Visible focus rings for keyboard navigation
- **FAQ search glow** — Brand-colored focus state on search input
- **Footer link underlines** — Animated underline effect on hover
- **Loading screen** — Auto-fades after content loads
- **Dynamic copyright year** — Automatically updates

## 🚀 Run Locally

```bash
# No build step needed — just serve the static files
npx serve .

# Or use any static server
python -m http.server 5500
```

Open `http://localhost:5500` in your browser.

## 📋 Assignment Checklist

- [x] HTML and CSS (Tailwind CSS) — ✅
- [x] JavaScript where necessary — ✅
- [x] Similar layout and structure — ✅
- [x] Fully responsive (desktop + mobile) — ✅
- [x] Visual consistency in spacing, typography, design — ✅
- [x] Subtle animations (hover effects, transitions) — ✅
- [x] No frontend frameworks — ✅
- [x] GitHub repository with clear structure — ✅
- [x] README file — ✅
- [x] Live deployment link — ✅

## 👤 Author

**Haroon Joshi** — Fullstack Developer & Backend Specialist

---

*Built for Crux Studio frontend hiring assessment, March 2026.*
