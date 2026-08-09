# Arjun & Arshitha — Wedding Website

A dreamy, premium wedding invitation website for Arjun Ajaykumar & Arshitha Anandakrishnan.

## Local Development

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Deploy to GitHub Pages

To fix blank pages or `404 /src/main.tsx` errors on GitHub Pages:

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```
2. Open your GitHub repo: **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions** (do NOT choose "Deploy from a branch").
4. GitHub Actions will automatically run `.github/workflows/deploy.yml`, compile Vite into `dist/`, and publish the site.
5. Your live invitation will be available at `https://snehithlal.github.io/arjun-weds-arshitha/`.

## How to Update

### Photos
Place photos in `src/images/` — they can be referenced in `src/lib/images.ts`. Supported formats: jpg, jpeg, png, webp, avif, gif.

### Dates & Times
- Wedding Eve: edit `src/lib/calendar.ts` → `weddingEveEvent.startIST` / `endIST`
- Muhurtham: edit `src/lib/calendar.ts` → `weddingCeremonyEvent.startIST` / `endIST`

### Event Details
Edit `src/App.tsx` — each `<EventCard>` has `date`, `time`, `venue`, `address`, and `mapUrl` props.
