# DPG Enterprises - Official Website

Welcome to the official repository for the **DPG Enterprises** website — Nigeria's premium electric scooter brand, headquartered in Kano. This is a high-performance, modern React application built to showcase and sell premium electric mobility solutions.

🌐 **Live Site:** [dpg-enterprises.vercel.app](https://dpg-enterprises.vercel.app)

---

## 🚀 Tech Stack
- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 7](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Routing:** [Wouter](https://github.com/molefrog/wouter)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Contact Form:** [Web3Forms](https://web3forms.com/)
- **Hosting:** [Vercel](https://vercel.com/)

---

## 📦 Local Development

1. **Install Dependencies:**
   Navigate to the frontend directory where `package.json` is located:
   ```bash
   cd artifacts/dpg
   npm install
   ```

2. **Start the Development Server:**
   ```bash
   npm run dev:local
   ```
   The site will be available at `http://localhost:5173`.

3. **Build for Production:**
   ```bash
   npm run build
   ```

---

## 🔍 SEO & Discoverability

This project includes a comprehensive, production-ready SEO setup:

### Search Engine Optimization
- **Dynamic Page Titles & Meta Descriptions** — Every page has a unique, keyword-rich title and description powered by a custom `<SEO>` component (`src/components/seo.tsx`).
- **Canonical URLs** — Automatically set per page to prevent duplicate content issues.
- **XML Sitemap** — Available at [`/sitemap.xml`](https://dpg-enterprises.vercel.app/sitemap.xml) covering all 6 public routes.
- **robots.txt** — Allows all crawlers and points to the sitemap.
- **JSON-LD Structured Data** — `LocalBusiness` schema embedded in `index.html` for Google Rich Results (business name, address, phone, hours, price range, coordinates).

### Social Media Link Previews
- **Open Graph (Facebook, WhatsApp, LinkedIn)** — Full `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name` tags.
- **Twitter/X Cards** — `summary_large_image` card with title, description, and image.
- **Custom OG Image** — A branded 1200×630 social sharing image (`public/og-image.png`).

### Google Search Console
A verification placeholder is included in `index.html`. To activate:
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property URL
3. Choose **HTML tag** verification
4. Uncomment and update the meta tag in `index.html`
5. Submit `sitemap.xml` in the Sitemaps section

---

## 🚀 Deployment (Vercel)

This project is deployed for free on [Vercel](https://vercel.com).

**Steps to Deploy:**
1. Push this code to a GitHub repository.
2. Go to Vercel → **Add New Project** → Import the repository.
3. **Important:** Set the **Root Directory** to `artifacts/dpg/`.
4. Build Command: `npm run build` · Output Directory: `dist`
5. Click **Deploy**.

---

## 🔐 Security
- `.env` files are excluded from version control via `.gitignore`.
- The Web3Forms access key used in the contact form is a frontend-safe public key.

---

## 📞 Contact
- **Phone / WhatsApp:** 0805 943 4243
- **Location:** Muhammadu Buhari Way, Along Kofar Kabuga – Kofar Ruwa Road, Kano State, Nigeria

---

*Built for DPG Enterprises. Go Electric, Go Smart. ⚡*
