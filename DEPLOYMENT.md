# Deployment Guide

## 1. Supabase Setup

1. Go to [supabase.com](https://supabase.com) and create a free project
2. Open **SQL Editor** and run the contents of `supabase-setup.sql`
3. Go to **Settings > API** and copy:
   - Project URL → `VITE_SUPABASE_URL`
   - `anon` public key → `VITE_SUPABASE_ANON_KEY`

## 2. Local Development

```bash
# Install dependencies
npm install

# Copy env file and fill in your values
cp .env.local.example .env.local

# Copy the logo to public/
cp "ref-for-claude/Branding/monster logo.jpg" "public/logo.jpg"

# Start dev server
npm run dev
```

Open http://localhost:5173

## 3. Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo
3. In **Environment Variables**, add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_ADMIN_PASSWORD`
4. Deploy — Vercel auto-detects Vite

## 4. QR Code

Generate a QR code pointing to your Vercel URL (e.g. `https://your-app.vercel.app`).

Admin panel is at `/admin`.

## Routes

| Path | Description |
|---|---|
| `/` | Customer form (QR code destination) |
| `/congrats` | Congratulations + offer coupon |
| `/admin` | Admin records table (password protected) |
