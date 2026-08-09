# Arjun & Arshitha — Wedding Website

A dreamy, premium wedding invitation website for Arjun Ajaykumar & Arshitha Anandakrishnan.

## Local Development

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Deploy to GitHub Pages

1. Push your code to the `main` or `master` branch of your GitHub repo.
2. In your repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. GitHub Actions will build and deploy automatically on every push.
4. Your site will be at `https://<your-username>.github.io/<repo-name>/`.

## How to Update

### Photos
Place photos in `src/images/` — they can be referenced in `src/lib/images.ts`. Supported formats: jpg, jpeg, png, webp, avif, gif.

For the hero background, update `heroPhoto`. For groom portrait, update `groomPhoto`. For bride portrait, update `bridePhoto`.

### Dates & Times
- Wedding Eve: edit `src/lib/calendar.ts` → `weddingEveEvent.startIST` / `endIST`
- Muhurtham: edit `src/lib/calendar.ts` → `weddingCeremonyEvent.startIST` / `endIST`

### Event Details
Edit `src/App.tsx` — each `<EventCard>` has `date`, `time`, `venue`, `address`, and `mapUrl` props.
