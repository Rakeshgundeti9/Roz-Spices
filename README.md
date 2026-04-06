# Roz Spices - Next.js TypeScript App

Migrated from React (CRA) to **Next.js 14** with **TypeScript** and **Tailwind CSS**.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **HTTP Client**: Axios
- **Icons**: Lucide React

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy the example env file and set your backend URL:

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

> **Note**: In CRA the variable was `REACT_APP_BACKEND_URL`. In Next.js it must be prefixed with `NEXT_PUBLIC_` to be accessible in the browser.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build for Production

```bash
npm run build
npm start
```

## Key Migration Changes

| CRA (React)                        | Next.js                              |
|------------------------------------|--------------------------------------|
| `REACT_APP_BACKEND_URL`            | `NEXT_PUBLIC_BACKEND_URL`            |
| `react-router-dom` (BrowserRouter) | Next.js App Router (file-based)      |
| `src/index.js` entry point         | `src/app/layout.tsx` root layout     |
| `src/App.js`                       | `src/app/page.tsx`                   |
| `src/index.css` + `App.css`        | `src/app/globals.css`                |
| `import '@/App.css'`               | Imported once in `globals.css`       |
| `<img>` tags                       | Next.js `<Image>` (optimized)        |
| No SEO support                     | Full metadata API in `layout.tsx`    |

## SEO Features Added

- Full `<head>` metadata (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card support
- Structured robots directives
- Canonical URL
- Locale set to `en_IN`

## Project Structure

```
src/
├── app/
│   ├── globals.css       # All global styles (merged index.css + App.css)
│   ├── layout.tsx        # Root layout + SEO metadata
│   └── page.tsx          # Home page
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── WhyChooseUs.tsx
│   ├── Products.tsx
│   ├── HowItWorks.tsx
│   ├── Testimonials.tsx
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx
│   ├── QuoteRequestForm.tsx
│   ├── SampleRequestForm.tsx
│   └── ui/               # shadcn/ui components
├── hooks/
│   └── use-toast.ts
└── lib/
    └── utils.ts
```
