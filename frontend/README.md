# Excel Utility Toolbox - Frontend

A privacy-first, browser-based Excel utilities collection built with Next.js 15 and shadcn/ui.

## 🚀 Features

- **Privacy First**: All processing happens in your browser - no data uploads
- **Zero Friction**: No login, no installation, instant access
- **Modern Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS v4
- **SEO Optimized**: Meta tags, semantic HTML, FAQ section

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navigation and footer
│   ├── page.tsx            # Home page with tool grid
│   ├── globals.css         # Global styles with Excel green theme
│   └── tools/
│       └── text-cleaner/
│           └── page.tsx    # Text Cleaner tool page
├── components/
│   ├── TextCleaner.tsx     # Main Text Cleaner component
│   ├── analytics.tsx       # Analytics component
│   └── ui/                 # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── textarea.tsx
│       └── badge.tsx
└── lib/
    └── utils.ts            # Utility functions
```

## 🛠️ Available Tools

### ✅ Text Cleaner (Active)
- Remove all spaces
- Remove duplicate lines
- Extract numbers only
- Convert to uppercase/lowercase
- One-click copy to clipboard

### 🔜 Coming Soon
- AI Formula Generator
- Format Converter (CSV, JSON, XML)
- VLOOKUP Helper

## 🎨 Design System

- **Primary Color**: Excel Green (#1D6F42)
- **Typography**: Geist Sans & Geist Mono
- **Style**: Minimal, modern, Apple-inspired
- **Components**: shadcn/ui with Tailwind CSS v4

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 📝 Tech Stack

- **Framework**: Next.js 15.5.7 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Font**: Geist (Sans & Mono)

## 🔒 Privacy & Security

All tools process data locally in the browser. No data is ever:
- Uploaded to servers
- Stored remotely
- Logged or tracked
- Shared with third parties

## 📄 License

MIT License - feel free to use for personal or commercial projects.

