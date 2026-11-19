# Sri Chinimilli Logistics – React + TypeScript

Vite + React 18 + TypeScript + React Router 6.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview
```

## Structure
- `src/pages/` – Home, About, Solutions, Services, Infrastructure, Contact
- `src/components/` – Layout (top bar, header, footer), PageHero, Cta, Clients, ContactForm, Lightbox, Reveal, Icon
- `src/data/site.ts` – phone, email, nav, client logos
- `src/styles.css` – all styling
- `public/images/` – photos and client logos (replace files to change images)

## Notes
- The contact forms validate but don't send; add your API call at the `TODO` in `ContactForm.tsx`.
- If deploying under a sub-path, set `base` in `vite.config.ts`.
- On static hosts, configure a fallback to `index.html` so routes like `/about` work on refresh.
