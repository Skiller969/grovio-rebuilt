# Grovio

Grovio is a grocery shopping app I built while learning Next.js and Electron. You can browse everyday products, add them to a cart, change quantities, and go through a checkout flow.

I built it to practice working with React components, shared state, authentication, and a database rather than just making another static page.

## Built with

- Next.js and React
- Tailwind CSS
- Supabase for authentication and order storage
- Electron for the desktop version

## Run locally

Install dependencies:

```bash
npm install
```

Create a local `.env.local` with your own Supabase project values:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

Run the web app:

```bash
npm run web
```

Open http://localhost:3000. To run the Electron desktop app as well, use `npm run dev`.

The checkout flow expects an `orders` table in Supabase with columns for the signed-in user, customer details, items and total. It is a learning project, not a live grocery delivery service or payment processor.

## What I learned

This project helped me understand component-based UI, routing, cart state, connecting Supabase authentication, and running a web app inside Electron.

## Still improving

I'm working on making the layout more responsive, improving the checkout experience, and cleaning up the code.

Built by [Skiller969](https://github.com/Skiller969).
