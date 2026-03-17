# Traderoom — Digital Services Portfolio

A full Next.js 14 website for Traderoom, a full-service digital agency.

## Tech Stack
- **Next.js 14** (Pages Router)
- **React 18**
- **Three.js** — 3D rotating globe
- **CSS** — global stylesheet, no CSS-in-JS
- **next/router** — client-side navigation
- **next/dynamic** — SSR-safe Three.js import

---

## Project Structure

```
traderoom/
├── components/
│   ├── layout/
│   │   ├── Layout.jsx        ← wraps every page (Navbar + Footer)
│   │   ├── Navbar.jsx        ← fixed top nav, mobile hamburger
│   │   └── Footer.jsx        ← site-wide footer
│   ├── shared/
│   │   └── Globe.jsx         ← Three.js 3D rotating globe
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── AboutPreview.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── OurWorks.jsx      ← draggable horizontal scroll
│   │   ├── FeaturesSection.jsx
│   │   ├── Testimonials.jsx  ← auto carousel with dots
│   │   └── CTASection.jsx
│   ├── about/
│   │   ├── StorySection.jsx
│   │   ├── StatsBar.jsx      ← animated count-up numbers
│   │   ├── TeamSection.jsx   ← 3D flip cards on hover
│   │   └── OfficeSection.jsx
│   ├── services/
│   │   ├── ServicesGrid.jsx
│   │   └── ServiceCard.jsx   ← expand/collapse details
│   ├── gallery/
│   │   ├── GalleryGrid.jsx   ← filter tabs + masonry grid
│   │   └── Lightbox.jsx      ← keyboard-navigable modal
│   ├── blog/
│   │   ├── BlogList.jsx
│   │   ├── BlogCard.jsx
│   │   └── BlogPost.jsx
│   └── contact/
│       └── ContactForm.jsx   ← full validation + success state
├── data/
│   └── index.js              ← all static content / dummy data
├── hooks/
│   └── useScrollAnim.js      ← IntersectionObserver scroll animations
├── pages/
│   ├── _app.jsx              ← global CSS import
│   ├── _document.jsx         ← custom <head>
│   ├── index.jsx             → /
│   ├── about.jsx             → /about
│   ├── services.jsx          → /services
│   ├── gallery.jsx           → /gallery
│   ├── contact.jsx           → /contact
│   └── blog/
│       ├── index.jsx         → /blog
│       └── [id].jsx          → /blog/1, /blog/2 …
├── styles/
│   └── globals.css           ← all styles (no Tailwind / CSS modules)
├── jsconfig.json             ← enables @/ path alias
├── next.config.js
└── package.json
```

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## Pages

| Route         | File                      | Description                          |
|---------------|---------------------------|--------------------------------------|
| `/`           | `pages/index.jsx`         | Home — hero, projects, testimonials  |
| `/about`      | `pages/about.jsx`         | Story, stats, team flip cards        |
| `/services`   | `pages/services.jsx`      | All 7 services with expand/collapse  |
| `/gallery`    | `pages/gallery.jsx`       | Filter tabs, masonry, lightbox       |
| `/blog`       | `pages/blog/index.jsx`    | Blog listing grid                    |
| `/blog/[id]`  | `pages/blog/[id].jsx`     | Individual blog post (static gen)    |
| `/contact`    | `pages/contact.jsx`       | Contact form with validation         |

---

## Color System

```css
--p:  #004743   /* Primary — deep teal   */
--s:  #F1EDE5   /* Secondary — warm cream */
--bk: #0d0d0d   /* Black                  */
--wh: #ffffff   /* White                  */
```

---

## Key Features
- ✅ 3D rotating globe with Three.js (SSR disabled via `next/dynamic`)
- ✅ Scroll-triggered fade/slide animations (IntersectionObserver)
- ✅ Draggable horizontal scroll for "Our Works"
- ✅ Testimonial carousel with dot navigation
- ✅ Gallery with category filter + lightbox (keyboard: ← → Esc)
- ✅ Team cards with 3D CSS flip on hover
- ✅ Animated count-up stats bar on About page
- ✅ Contact form with full validation + success message
- ✅ Blog dynamic routes with `getStaticPaths` + `getStaticProps`
- ✅ Fully mobile responsive with hamburger menu
- ✅ SEO meta tags on every page
