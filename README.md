# DPG Enterprises - Official Website

Welcome to the official repository for the **DPG Enterprises** website — Nigeria's premium electric scooter brand, headquartered in Kano. This is a high-performance, modern React application built to showcase and sell premium electric mobility solutions.

🌐 **Live Site:** [dpg-enterprises.vercel.app](https://dpg-enterprises.vercel.app)

---

## 🚀 Tech Stack

### Frontend
- **Framework:** [React 19](https://react.dev/) - Modern, component-driven UI
- **Build Tool:** [Vite 7](https://vitejs.dev/) - Lightning-fast build & dev server
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components:** [Radix UI](https://radix-ui.com/) - Unstyled, accessible components
- **Routing:** [Wouter](https://github.com/molefrog/wouter) - Minimal routing library
- **Icons:** [Lucide React](https://lucide.dev/) - Beautiful, consistent icons
- **Animations:** [Framer Motion](https://www.framer.com/motion/) - Smooth, professional animations
- **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) - Type-safe form handling
- **Contact Form:** [Web3Forms](https://web3forms.com/) - Backend-less form submissions

### Backend
- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/) - Lightweight HTTP server
- **Database:** [Drizzle ORM](https://drizzle.team/) - TypeScript-first ORM
- **Logging:** [Pino](https://getpino.io/) - Fast, structured logging
- **Deployment:** [Vercel](https://vercel.com/) - Serverless platform

---

## 📦 Local Development

### Prerequisites
- Node.js 18+ or pnpm 8+
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mansur-WP/dpg-enterprises.git
   cd dpg-enterprises
   ```

2. **Install dependencies:**
   ```bash
   cd artifacts/dpg
   npm install
   # or
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev:local
   # or
   pnpm dev:local
   ```
   The site will be available at `http://localhost:5173`.

### Build & Deploy

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Preview production build locally:**
   ```bash
   npm run serve
   ```

---

## 🏗️ Project Structure

```
artifacts/dpg/
├── src/
│   ├── pages/           # Route pages (home, products, contact, etc.)
│   ├── components/      # Reusable React components
│   │   ├── ui/          # Radix UI + Tailwind components
│   │   ├── layout/      # Navbar, Footer, Layout wrappers
│   │   └── seo.tsx      # SEO component (meta tags, JSON-LD)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities, helpers, constants
│   ├── App.tsx          # Main app wrapper + routing
│   └── main.tsx         # Entry point
├── public/              # Static assets (og-image, icons, etc.)
└── vite.config.ts       # Vite configuration
```

---

## 🔍 SEO & Discoverability

This project includes a comprehensive, production-ready SEO setup:

### Search Engine Optimization
- **Dynamic Page Titles & Meta Descriptions** — Every page has unique, keyword-rich SEO tags via the `<SEO>` component
- **Canonical URLs** — Automatically set per page to prevent duplicate content issues
- **XML Sitemap** — Available at `/sitemap.xml` covering all public routes
- **robots.txt** — Allows all crawlers and points to the sitemap
- **JSON-LD Structured Data** — LocalBusiness schema embedded in `index.html`
- **Open Graph Tags** — Full OG metadata for social sharing (Facebook, WhatsApp, LinkedIn)
- **Twitter/X Cards** — `summary_large_image` card with rich previews

### To Verify SEO
1. Use [Google Search Console](https://search.google.com/search-console) to submit your site
2. Check the `/sitemap.xml` file
3. Use tools like [SEO Checker](https://www.seobility.net/en/seocheck/) to validate

---

## 🎨 Key Features

### Frontend Features
✅ **Responsive Design** — Mobile-first, works on all devices  
✅ **Fast Performance** — Vite's optimized builds, lazy loading, code splitting  
✅ **Accessible** — WCAG 2.1 AA compliant (Radix UI primitives)  
✅ **Interactive Animations** — Smooth Framer Motion transitions  
✅ **Type-Safe** — Full TypeScript throughout  
✅ **Product Comparison** — Interactive specs table  
✅ **Contact Form** — Client-side validation + Web3Forms backend  
✅ **WhatsApp Integration** — Direct messaging links  

### Content
- 4 premium electric scooter models with full specs
- Why Electric page with benefits & comparison data
- Comprehensive About page with company values
- Product gallery with images
- FAQ section with common questions
- Testimonials from real riders

---

## 🚀 Deployment (Vercel)

This project is deployed for free on [Vercel](https://vercel.com).

### Steps to Deploy:

1. **Push code to GitHub:**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [Vercel](https://vercel.com)
   - Click **Add New Project** → Import your GitHub repository
   - **Important:** Set the **Root Directory** to `artifacts/dpg/`

3. **Configure Build:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Node Version: 18 (recommended)

4. **Deploy:**
   - Click **Deploy**
   - Vercel will automatically deploy on every push to `main`

### Environment Variables
None required for frontend. The contact form uses a public Web3Forms key embedded in the code (safe for frontend).

---

## 🔐 Security

- ✅ `.env` files excluded from version control via `.gitignore`
- ✅ Web3Forms access key is a public, frontend-safe key
- ✅ CORS properly configured
- ✅ No sensitive data in code or comments
- ✅ SSL/TLS enforced on production

### Best Practices
- Never commit API keys or tokens
- Use environment variables for secrets in backend
- Validate all form input on client and server
- Keep dependencies updated (run `npm audit` regularly)

---

## 📊 Performance Metrics

Target Lighthouse Scores:
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 100

Use PageSpeed Insights to test: [PageSpeed.web.dev](https://pagespeed.web.dev)

---

## 🔧 Configuration Files

### `vite.config.ts`
Main Vite configuration with React plugin and optimizations.

### `vercel.json`
Vercel deployment configuration.

### `tsconfig.json`
TypeScript configuration with strict mode enabled.

### `tailwind.config.js`
Tailwind CSS customizations (colors, fonts, etc.).

---

## 📞 Contact & Support

- **Phone / WhatsApp:** 0805 943 4243
- **Email:** [contact@dpg-enterprises.com] (update if available)
- **Location:** Muhammadu Buhari Way, Along Kofar Kabuga – Kofar Ruwa Road, Kano State, Nigeria
- **Showroom Hours:** Mon–Sat 8:00 AM – 6:00 PM | Sunday 10:00 AM – 3:00 PM

---

## 📄 License

MIT License - See LICENSE file for details.

---

## 🤝 Contributing

We welcome contributions! Please:
1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Commit with a clear message: `git commit -am 'Add your feature'`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 🚀 Recent Updates

### v2.0 (Current)
- ✨ Enhanced product pages with comparison table
- ✨ Improved contact form with validation
- ✨ Added customer testimonials section
- ✨ Better SEO and structured data
- ✨ Improved warranty & support section
- 🔧 Modernized component architecture
- 🐛 Fixed mobile responsiveness issues

### v1.0
- Initial launch with 4 product models
- Full SEO setup
- Contact form integration
- Responsive design

---

*Built for DPG Enterprises by Mansur-WP. Go Electric, Go Smart. ⚡*
