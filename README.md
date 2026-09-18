# Buford Roofing & Construction × Ice Shaker

Static co-branded landing page rebuilt pixel-for-pixel from the reference
screenshots. React + Vite + TypeScript, no backend, no database, no auth —
ready to push to GitHub and deploy on any static host.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve the production build
```

## The hero always fills the first screen

`.hero` carries two custom properties:

```css
--box: clamp(30rem, 100dvh - var(--header), min(74rem, 66.6vw));
--u:   clamp(0.62rem, var(--box) / 52.38, 1rem);     /* hero's own unit */
```

`--box` makes the hero exactly fill whatever is left below the header, so the
photograph gets the tallest frame available and loses as little of its top as
possible. `--u` scales the copy with that box but never past the reference
size, and every hero dimension is `calc(N * var(--u))`, so the logo, headline,
buttons and email scale together instead of overflowing. Below 1024px the hero
stacks and `--u` reverts to `1rem`.

## Social share preview and icons

`public/` is copied to the site root untouched, so these keep stable filenames
that link scrapers can cache:

| file | what it is |
| --- | --- |
| `og-image.jpg` | 1200 x 630 share card |
| `favicon.ico` | 16/32/48 tab icon |
| `apple-touch-icon.png` | 180 x 180 iOS home screen |
| `icon-192.png`, `icon-512.png` | manifest icons |
| `site.webmanifest` | name, icons, theme colour |

**The image URL comes from `VITE_SITE_URL` in `.env`.** It ships empty, which
builds `content="og-image.jpg"` — a path relative to the page. That resolves
correctly on GitHub Pages and on any domain, so nothing has to be decided up
front and nothing can point at the wrong file.

Once the final address is known, set it (with a trailing slash) for the widest
scraper support:

```
VITE_SITE_URL=https://bufordroofing.com/ice-shaker/
```

and the tags build as absolute URLs. `.env` is committed on purpose — it holds
no secrets and the build reads it.

After deploying, re-scrape so the platforms drop any cached copy:
Facebook <https://developers.facebook.com/tools/debug/>,
LinkedIn <https://www.linkedin.com/post-inspector/>.

To change the card, drop any 1200 x 630 JPEG over `public/og-image.jpg`. Keep it
under ~300KB so WhatsApp renders it rather than skipping it.

## Replacing the hero photograph

`src/assets/images/hero-bottles.jpg`. The current file is **21:9**
(1916 x 821). Supply replacements at that ratio, ideally 2800 x 1200 so it
stays sharp on a 1440p screen.

Why 21:9: the hero box is as wide as the window and only as tall as the space
under the header, so its shape swings from about 1.5:1 on a tall window to
3:1 on a wide, short one. A 21:9 source sits in the middle of that range, so a
flat box crops a little sky off its top and a tall box crops a little tree off
its left, and the bottles survive both. A 3:2 source cannot: at 2.6:1, which is
an ordinary maximised window on a 1080p screen at 150% scaling, it loses the
top 43% and the lids go with it.

`object-position: 86% 92%` weights the crop right and low, which is what keeps
the tumbler and the lids in frame at the extremes. Compose accordingly:

* subject in the **right half**, clear of the right edge by a few percent
* nothing essential in the **top 20%** or the **left 15%**
* the left is under the scrim and the headline, so trees, sky or blur there

## How the layout is authored

## How the layout is authored

The desktop design is measured against a **90rem reference frame** and the root
font size is `calc(100vw / 90)`, so `90rem === 100vw`. Every size, gap and
padding is expressed in `rem`, which means the whole page scales proportionally
at any desktop width and matches the reference screenshots at their original
scale. Above 1728px the scale freezes at 19.2px and `.shell` centres instead.
Below 1024px the root drops to 15px and the responsive rules take over.

`.shell` is the shared container: `max-width: 90rem; padding: 0 4.57rem`.

Type is **Barlow** (400/500/600/700/800) — its widths match the reference
headlines almost exactly at every measured string.

## Structure

```
src/
  assets/
    images/   hero + use-case photos, bottle and colour-swatch cutouts
    logos/    Buford (dark + white) and Ice Shaker (dark + white)
    icons/    benefit, contact and social icons
  components/ one .tsx + .css pair per section
  styles/index.css   design tokens, base, .shell, .display, .btn
```

Sections, in order: `Header`, `Hero`, `ProductSection`, `ColorSection`,
`BenefitsSection`, `UseCasesSection`, `QuoteSection`, `NationwideStrip`,
`Footer`.

## Asset notes

* The Buford logo is the supplied artwork, unmodified. `buford-logo-white.png`
  is the same file with the black recoloured to white for dark backgrounds.
* The bottle and colour-swatch images are cropped on the flat section
  background (`#fefefe` for the cards, `#f3f5f6` for the colour band) so the
  soft product shadows survive intact. If you change either section background,
  re-cut the crops to match.
* The benefit icons keep their individual heights and sit on a shared baseline,
  set per item in `BenefitsSection.tsx`.
* `More Than Roofs. Stronger Communities.` is printed on the tumbler in the
  hero photograph — it is not a text layer.

## node_modules and platforms

This folder is edited both from Windows and from the Linux Cowork sandbox, and
npm installs platform-specific binaries (rollup, esbuild). If a build fails with
`Cannot find module @rollup/rollup-<platform>`, the tree was installed on the
other platform. Run `npm install` on the machine you are building from; a clean
`rm -rf node_modules package-lock.json && npm install` always fixes it.

## Deploying

`vite.config.ts` uses `base: './'`, so the build works from any path. For
GitHub Pages, push `dist/` (or use an action) and the relative paths resolve
without further configuration.

## Form

`QuoteSection` is front-end only: submitting sets a local "Request Sent" state.
Wire it to your endpoint (or a GHL form) in `handleSubmit`.
