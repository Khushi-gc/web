# Dream Stack Website

This project implements the "Dream Stack" vibe:
- **Animations**: GSAP
- **Scroll**: Lenis
- **Style**: Modern, clean, and dark.

## Note on Framework

The original requirement requested **Astro**. However, `npm/node` was not detected in this environment, which is required to build Astro applications.

**As a fallback**, this project is built with **Vanilla HTML/CSS/JS** but still utilizes the core libraries (GSAP, Lenis) via CDN to demonstrate the visual and interactive requirements immediately.

## How to Run

Simply open `index.html` in your browser. No build step required!

## If you want the full Astro version

1.  Install Node.js from [nodejs.org](https://nodejs.org/).
2.  Run `npx create-astro@latest` in your terminal.
3.  Install dependencies: `npm install @studio-freight/lenis gsap`.
