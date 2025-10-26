# Shahid Khan — Portfolio

This repository contains a personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## What this is

- Static portfolio site showcasing projects, experience, certifications and contact information.
- Content is centralized in `src/content/siteContent.ts` so you can update text, links and lists without editing components.

## Tech stack

- Vite + React + TypeScript
- Tailwind CSS for styling
- Framer Motion for simple reveal animations
- lucide-react icons

## Quick start (Windows / PowerShell)

1. Install dependencies

```powershell
npm install
```

2. Run in development mode

```powershell
npm run dev
```

3. Typecheck

```powershell
npm run typecheck
```

4. Build and preview

```powershell
npm run build
npm run preview
```

## Where to edit content

All human-editable content is in:

```
src/content/siteContent.ts
```

Key places you'll likely edit:

- `navItems` — top navigation labels and anchors
- `hero` — greeting, name, title, tagline, `resumePath`, `resumeDriveLink`, and socials
- `projects` — array of project objects (title, description, highlights, technologies, github, color)
- `certifications` — list of certificates and links
- `about` — bio, education, skills (icons are lucide-react components)
- `contact` — contact details, `cta.resumePath`, `cta.resumeDriveLink`, and `formEndpoint` (optional)
- `experience` — list of experience entries

After editing content, your dev server will reflect changes automatically.

## Resume link (Drive/OneDrive)

If you want the Resume buttons to open a public Drive/OneDrive link instead of the local `/resume.pdf`, set:

```ts
// src/content/siteContent.ts
hero.resumeDriveLink = 'https://drive.google.com/...' // optional
contact.cta.resumeDriveLink = 'https://drive.google.com/...' // optional
```

Note: Google Drive share links usually open a preview page. If you want direct download, let me know and I can add a small helper to convert common Drive URLs to a `uc?export=download&id=...` form.

## Contact form

By default the contact form falls back to `mailto:` (opens user's email client). To enable server-side delivery, provide a POST endpoint in the site content:

```ts
// src/content/siteContent.ts
contact.formEndpoint = 'https://your-server.example.com/api/contact'
```

The frontend will POST JSON `{ name, email, message }` to that URL. Make sure the endpoint accepts CORS from your site and returns a 2xx response on success.

Recommended options:

- Formspree (quick, no backend): https://formspree.io/
- Netlify / Vercel serverless function
- Your own small API that uses an email provider (SendGrid, SES, etc.)

## Theme & animations

- Theme: default is dark. The site stores the selected theme in `localStorage` under `theme` and toggles the `dark` class on `<html>`.
- Animations: `src/components/Reveal.tsx` uses Framer Motion to animate sections when they enter the viewport. You can remove or tweak the component if you prefer no motion.

## Adding assets

Place static assets (images, resume PDF) into the `public/` folder and reference them as `/your-file.ext`.

## Git and deployment notes

- `.gitignore` is included and ignores `node_modules`, `dist`, `.env`, and other common files.
- Deploy on Vercel, Netlify, or any static host that supports SPA serving. For server-side contact forms, deploy the backend function on the same provider and set `contact.formEndpoint`.

### Deploying to GitHub Pages (automatic)

I added a GitHub Actions workflow that will build the site and deploy it to GitHub Pages automatically when you push to `main`.

- Workflow file: `.github/workflows/deploy.yml`
- It builds the Vite app (`npm run build`) and publishes the `dist/` directory to the `gh-pages` branch using `peaceiris/actions-gh-pages`.

Notes:

- If you plan to serve the site from `https://<username>.github.io/<repo>/` (the repo pages URL), set `base` in `vite.config.ts` to `'/<repo>/'` so asset paths are correct. Example:

```ts
// vite.config.ts
import { defineConfig } from 'vite';
export default defineConfig({
	base: '/your-repo-name/',
});
```

- If you serve from a user site (`https://<username>.github.io/`) keep `base: '/'` (default).
- After first deploy, go to the repository Settings → Pages to confirm the site URL and enforce HTTPS if needed.


## Troubleshooting

- Buttons not clickable? Some decorative absolute elements were added — they have `pointer-events: none` so they shouldn't block interaction. If you still see blocking, inspect elements with your browser dev tools and check stacking contexts / z-index.
- Mailto not opening? Ensure a default mail client is configured on your OS/browser. The Hero email icon uses `window.location.href = 'mailto:...'` as a fallback.

## Contributing

Feel free to open issues or PRs for improvements. If you want help wiring a contact backend or making the resume link download automatically from Drive, I can add that.

## License

This repository doesn't include a license by default. Add one if you want to open-source it publicly.
