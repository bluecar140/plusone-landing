# Plus One Landing Page

Premium invite-only landing page. Auto-deploys to Vercel on push to `main`.

**Repo:** https://github.com/bluecar140/plusone-landing

## Local preview

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Waitlist (Formspark)

Applications submit to Formspark via `/api/apply`.

In Vercel → **Settings** → **Environment Variables**, ensure you have:

```
FORMSPARK_FORM_ID=your_id
```

View submissions at https://dashboard.formspark.io

## Deploy

Push to `main` — Vercel redeploys automatically to your connected domain.
