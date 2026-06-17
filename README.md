# Plus One Landing Page

Premium invite-only landing page for Plus One. Built with Next.js, deployed on Vercel.

## Access your landing page

### Locally (on your Mac)

```bash
export PATH="$HOME/.local/node-v22.15.0/bin:$PATH"
cd "/Users/arjunrandhawa7/Desktop/Arjuns Apps/Landing page plusone"
npm install
npm run dev
```

Open **http://localhost:3000**

### Live (after Vercel deploy)

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Open the **plusone-landing** project (or import `bluecar140/plusone-landing` from GitHub)
3. Your live URL will look like:
   - `https://plusone-landing.vercel.app` or
   - `https://plusone-landing-bluecar140.vercel.app`

GitHub repo: **https://github.com/bluecar140/plusone-landing**

---

## Waitlist service (Formspree)

Applications are saved via [Formspree](https://formspree.io) — free for up to 50 submissions/month.

### 1. Create your form

1. Sign up at [formspree.io](https://formspree.io)
2. Click **New Form** → name it `Plus One Applications`
3. Copy the form ID from the URL: `https://formspree.io/f/`**`xyzabcde`**

### 2. Add the form ID locally

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```
FORMSPREE_FORM_ID=xyzabcde
```

Restart `npm run dev`.

### 3. Add the form ID on Vercel (required for live site)

1. Vercel → **plusone-landing** → **Settings** → **Environment Variables**
2. Add:
   - **Name:** `FORMSPREE_FORM_ID`
   - **Value:** your form ID (e.g. `xyzabcde`)
3. **Redeploy** the project

### 4. View applications

- **Formspree dashboard:** [formspree.io/forms](https://formspree.io/forms) → click your form → **Submissions**
- You’ll get email notifications for each application (configurable in Formspree settings)
- Export to CSV from the Formspree dashboard anytime

---

## Deploy commands

```bash
npm run build   # test production build
npm run start   # preview production locally
```

Vercel auto-deploys on every push to `main` on GitHub.
