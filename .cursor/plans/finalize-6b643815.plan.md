<!-- 6b643815-8f65-48a4-9cb9-7668791eed24 a2e6b580-238e-4a7b-8595-3719377fe4bf -->
# Infosys-Style Pixel-Close Redesign

## Goals

- Replicate Infosys homepage experience: header/mega menu, hero carousel, marquee sections, and footer (pixel-close look/behavior) with our content.
- Keep current routes and services; enhance visual presentation to the new layout.

## Deliverables

- New header with sticky mega menu, search icon, theme toggle.
- Hero carousel with autoplay, pagination dots, prev/next controls, gradient overlays.
- Section blocks: About snapshot, Services grid band (inline), Insight/News style cards for Products/Case Studies, CTA band, Grow Together band.
- Infosys-style footer: 3–4 column link groups, socials, legal bar.

## Files/Structure

- Components (new):
- `src/components/Header/MegaMenu.jsx`, `MegaMenu.css`
- `src/components/Hero/HeroCarousel.jsx`, `HeroCarousel.css`
- `src/components/Sections/InfoBand.jsx`
- `src/components/Footer/SiteFooter.jsx`, `SiteFooter.css`
- Pages updated:
- `src/pages/Home.js`, `Home.css` consume new components
- Assets: placeholder images for 4–5 hero slides and section thumbnails

## Key Implementation Details

- Mega menu: keyboard accessible; multi-column panels with headings and links.
- Hero carousel: CSS/JS slider (no external lib) using scroll-snap + buttons; fades + parallax overlay.
- Responsive: 
- Desktop matches Infosys layout spacings
- Tablet stacks mega menu panels
- Mobile collapses to burger + full-screen drawer; hero becomes swipeable
- Footer: columns with headings, link lists, socials row, bottom legal bar.

## Migration/QA

- Replace existing navbar/footer with new components; keep theme toggle + search.
- Validate at 360/768/1024/1440 widths; test keyboard navigation.

## Todos

- header-mega: Build Infosys-like header with mega menu
- hero-carousel: Build hero carousel (4–5 slides, autoplay/controls)
- sections-bands: Add bands (About snapshot, Services inline, Insights/News style cards)
- footer-infosys: Build Infosys-like footer
- integrate-home: Integrate components into `Home.js`, update styles
- qa-infosys: Polishing pass and cross-browser/responsive QA

### To-dos

- [ ] Verify reduced paddings/heights and faint backgrounds across sections
- [ ] Install carousel images and ensure full-width, compact height and scrollbar
- [ ] Ensure service CTAs and cards navigate to /services/:slug
- [ ] Confirm product demos removed from Home
- [ ] Add Share Idea box; reduce Inquiry/Job heights; quarter-height right image
- [ ] Add SVG social icons and remove footer search
- [ ] Keep only search icon; reveal search on click; suggestions enabled
- [ ] Add light/dark theme toggle in navbar
- [ ] QA on mobile/desktop; fix any layout regressions