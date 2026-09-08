# MessyTurtule

Mobile-first digital loyalty, rewards and customer engagement platform.

## Current deployment

MessyTurtule is configured for **GitHub Pages** deployment from `main`. The project is a static Next.js export and uses Supabase as the backend.

GitHub Pages is the current hosting choice for the MVP. The architecture is intentionally portable so it can later move to Vercel without changing the product or Supabase database.

## MVP

### Customer
- Sign up / sign in
- Personal loyalty dashboard
- Multiple businesses in one account
- Universal customer QR
- Stamp progress and history
- Rewards
- Offers and communications

### Business
- Business account
- Loyalty programmes
- Staff accounts
- Customer QR scanning
- Issue/redeem stamps and rewards
- Bulk and targeted promotions
- Customer communications

### Super Admin
- Manage businesses, users and programmes
- Master platform functions
- Activity and support controls

## Stack

- Next.js + React
- GitHub Pages for MVP hosting
- Supabase Auth + PostgreSQL + RLS
- GitHub Actions for deployment
- Designed for later Vercel deployment

## GitHub Pages setup

1. Open **Settings → Pages** in the repository.
2. Set **Source** to **GitHub Actions**.
3. Add repository variables under **Settings → Secrets and variables → Actions → Variables**:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Push to `main` or run the deployment workflow manually.

The workflow publishes the Next.js static output from `./out` to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and add the Supabase URL and anon key.

## Roadmap

See [ROADMAP.md](./ROADMAP.md).
