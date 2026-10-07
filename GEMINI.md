# Project Design & Development Guidelines: Municipal Government of Tumauini (tumauini.gov.ph)

This file defines the mandatory design rules and coding standards for all existing and future webpages built for the Municipal Government of Tumauini, Isabela.

---

## 1. Mandatory Button Styling (Solid Civic Green from login.php)

Whenever building or styling buttons across **any** webpage in this project, all primary buttons (`.btn-primary`, `.btn-secondary`, `.btn`, or equivalent main call-to-action buttons) **MUST** strictly adhere to the clean, professional civic green palette from `login.php`:

### CSS Specification
```css
/* Primary Button: Solid Civic Green (Stroke-Free & Shadow-Free) */
.btn-primary,
.btn {
  background-color: #15803d;
  background-image: none !important;
  color: #FFFFFF;
  border: none;
  outline: none;
  font-weight: 600;
  box-shadow: none;
  transition: background-color 0.25s ease, opacity 0.25s ease, transform 0.25s ease;
}

.btn-primary:hover,
.btn:hover {
  background-color: #166534;
  background-image: none !important;
  border: none;
  outline: none;
  color: #FFFFFF;
  opacity: 0.95;
  transform: translateY(-2px);
  box-shadow: none;
}

.btn-primary:active,
.btn:active {
  transform: translateY(0);
  box-shadow: none;
}

/* Dark Mode States */
[data-theme="dark"] .btn-primary,
[data-theme="dark"] .btn {
  background-color: #16a34a;
}

[data-theme="dark"] .btn-primary:hover,
[data-theme="dark"] .btn:hover {
  background-color: #15803d;
}
```

### Critical Rules for Buttons:
1. **Solid Civic Green (Zero Radial Yellow Bleed)**: Primary buttons use pure solid civic green (`#15803d` in Light Mode, `#16a34a` in Dark Mode). Yellow radial/linear gradients are strictly forbidden on buttons.
2. **Stroke-Free (Zero Borders)**: Must explicitly specify `border: none; outline: none;` on normal and hover states. No 1px perimeter border strokes allowed.
3. **Shadow-Free (Zero Box Shadows)**: Buttons must have `box-shadow: none;` across normal, hover, and active states for a crisp, flat civic aesthetic.
4. **Subtle Interactive Lift**: The hover state smoothly darkens/shifts color (`#166534` light / `#15803d` dark) with `opacity: 0.95` and `transform: translateY(-2px)`.

---

## 2. Navigation & Multi-Webpage Architecture

When adding new webpages (e.g., `news.html`, `services.html`, `transparency.html`):
1. **Synchronized Navigation**: Update the floating stadium navigation bar, mobile drawer, and civic green footer (`#15803D`) across **all** pages to link to each other correctly.
2. **Active Page Indicator**: Set `aria-current="page"` and add `.active` pill styling to the current page's link in the navigation.
3. **Root Anchor Return**: Internal navigation links on sub-pages (e.g., "Home", "Quick Services", "Leadership", "Contact") must link back to `index.html#section-id`.

---

## 3. Civic Identity & Layout Standards

1. **Monochrome First Foundation**: Base palette consists of `#141414` (ink), `#FFFFFF` (canvas / soft canvas), `#F0F0F0` (field), and `#E0E0E0` (hairlines).
2. **Philippine Accents**: Philippine Blue (`#0038A8`), Red (`#CE1126`), and Yellow (`#FCD116`) are reserved for municipal seals, status indicators, and emergency hotlines.
3. **PST Timekeeper**: Philippine Standard Time ticker positioned unobtrusively in the upper right hero or header, formatted across 3 lines:
   - Label: `Philippine Standard Time`
   - Live 12h Clock: `HH:MM:SS AM/PM` (ticks every second via `Asia/Manila` UTC+8)
   - Date: `Weekday, MM/DD/YYYY`
4. **Minimal News Cards**: News & announcement previews must use 3 equal-width columns (`repeat(3, 1fr)`), 180px photo ratio, zero box-shadow, and 2-line title clamps.
5. **Authentic Assets**: Only use authentic local assets stored in `assets/`.

---

## 4. Icon Styling & Gradient Standards

Whenever rendering icons across **any** webpage in this project (service icons, pillar badges, telemetry metrics, etc.):

1. **Stroke-Free & Box-Free (No Square Backgrounds)**:
   - Icon wrappers (`.service-icon-wrap`, `.pillar-icon-box`, or equivalent containers) must have **zero background color, zero borders, zero border-radius, and zero box-shadow** (`background: transparent !important; border: none !important; border-radius: 0 !important; box-shadow: none !important;`).
   - Icons must float cleanly and seamlessly directly on the card or panel canvas without any square container or bounding box.

2. **Pure Civic Green Tonal Gradient**:
   - The SVG strokes or fills must use the standardized civic green gradient via `stroke: url(#icon-green-yellow) !important;` or `fill: url(#icon-green-yellow) !important;`.
   - Each page must include the global hidden SVG gradient definition:
     ```html
     <svg width="0" height="0" style="position: absolute; width: 0; height: 0; overflow: hidden;" aria-hidden="true" focusable="false">
       <defs>
         <linearGradient id="icon-green-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
           <stop offset="0%" stop-color="#15803d" />
           <stop offset="50%" stop-color="#16a34a" />
           <stop offset="100%" stop-color="#22c55e" />
         </linearGradient>
       </defs>
     </svg>
     ```
   - Hover micro-interactions should subtly scale the icon (`transform: scale(1.1)`) without adding backgrounds or perimeter lines.

---

## 5. Minimalist Copy & Description Standards

All webpages across this project must adhere strictly to **minimalist, uncluttered text descriptions**:

1. **Ultra-Concise Card Descriptions**:
   - Service cards, digital government bento cards, pillar summaries, transparency cards, and telemetry status descriptions must never exceed **one short, punchy sentence or phrase** (typically 4 to 10 words).
   - Eliminate bureaucratic padding, redundant phrases, and multi-sentence paragraphs on summary cards.
   - Example: Instead of *"Apply for new business registration, seasonal renewals, and BPLO clearances."*, use *"New registrations, renewals, and BPLO clearances."*

2. **Section Leads & Subtitles**:
   - Section subheadings (`.body-lead`, `.section-subtitle`, etc.) must be 1 crisp line (max 12 words) giving immediate, clear context.
   - Deep procedural explanations, requirements checklists, and extended text belong strictly inside interactive modals (`openServiceModal`, `openNewsModal`, `openSmartProjectModal`, `openBidModal`) or dedicated document downloads.

3. **News Excerpts & Article Summaries**:
   - Card summaries must be clamped cleanly to a maximum of 2 lines (`-webkit-line-clamp: 2; line-clamp: 2;`) with concise 1-sentence previews.

---

## 6. Pill Badge Styling Standards (Stroke-Free & Shadow-Free)

All `.pill-badge` elements and their color variants (`.pill-badge-green`, `.pill-badge-blue`, `.pill-badge-red`, `.pill-badge-yellow`) across all webpages must strictly adhere to the following rules:
1. **Stroke-Free (Zero Borders)**: Must explicitly set `border: none; outline: none;` on all pill badges. No grey outside stroke lines or perimeter border lines are permitted.
2. **Shadow-Free (Zero Box Shadows)**: Must explicitly set `box-shadow: none;` across all states.
3. **Clean Tint Fills**: Base badges use `var(--field)` (`#F0F0F0`), with color variants using soft civic tints (`#E8F5E9` green, `var(--ph-blue-tint)` blue, `var(--ph-red-tint)` red, `#FEF9C3` yellow) resting cleanly directly on the canvas without borders.

---

## 7. Official Light & Dark Mode Color Palette

All webpages across this project strictly adhere to the standardized Light and Dark mode color tokens:

### Palette Specification:
- **Light Mode**:
  - `--text: #0d150d;` (Deep forest dark charcoal / primary ink)
  - `--background: #f2f9f2;` (Pale honeydew canvas)
  - `--primary: #15803d;` (Solid civic green from login.php)
  - `--secondary: #166534;` (Deep forest green / button hover)
  - `--accent: #16a34a;` (Vibrant leaf green)

- **Dark Mode**:
  - `--text: #e9f1e9;` (Pale tinted off-white)
  - `--background: #060e06;` (Very deep midnight pine black)
  - `--primary: #16a34a;` (Luminous civic green)
  - `--secondary: #15803d;` (Solid civic green / button hover)
  - `--accent: #22c55e;` (Bright emerald green)

### Implementation Standards:
1. **Explicit Token Declaration**: Custom properties `--text`, `--background`, `--primary`, `--secondary`, and `--accent` must be explicitly declared on `:root, [data-theme="light"]`, and overridden on `[data-theme="dark"]` and `@media (prefers-color-scheme: dark)`.
2. **Mapped Core Tokens**:
   - `--ink: var(--text);`
   - `--canvas: var(--background);`
   - `--soft-canvas`: `#FFFFFF` in Light Mode, `#0C180C` in Dark Mode.
   - `--field`: `#E4F2E4` in Light Mode, `#132413` in Dark Mode.
   - `--hairline`: `#D0E5D0` in Light Mode, `#1C381C` in Dark Mode.
   - `--muted`: `#4B634B` in Light Mode, `#9EB89E` in Dark Mode.
3. **Synchronized Theme Switching**: Theme preference is managed via `assets/js/theme.js`, with persistence in `localStorage.setItem('tumauini-theme', ...)` and support for system OS preference (`prefers-color-scheme`).
