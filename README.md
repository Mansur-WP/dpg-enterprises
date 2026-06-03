# DPG Enterprises - Official Website

Welcome to the official repository for the **DPG Enterprises** website. This is a high-performance, modern React application built to showcase and sell premium electric mobility solutions in Kano, Nigeria.

## 🚀 Tech Stack
- **Framework:** [React](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [Wouter](https://github.com/molefrog/wouter)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

## 📦 Local Development

1. **Install Dependencies:**
   Make sure you are in the correct directory (e.g., `artifacts/munnasp/`) where `package.json` is located.
   ```bash
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

## 🔐 Environment Variables & Security
- Make sure to **NEVER** commit secret API keys or passwords directly to GitHub. 
- Any environment variables should be stored in a `.env` file (which is intentionally ignored by Git).
- For the Contact Form (Web3Forms), the access key currently used in `contact.tsx` is safe to expose as it is designed for frontend usage. However, if you add backend secrets later, always use environment variables.

## 🚀 Deployment (Vercel)

This project is perfectly optimized for free deployment on [Vercel](https://vercel.com).

**Steps to Deploy:**
1. Push this code to a new repository on your GitHub account.
2. Go to Vercel and click **Add New Project**.
3. Import your newly created GitHub repository.
4. **Important:** Change the "Root Directory" in Vercel settings to point to `artifacts/munnasp/` (if that is where your `vite.config.ts` lives).
5. Ensure the Build Command is `npm run build` and Output Directory is `dist`.
6. Click **Deploy**.

## 📞 Support & Maintenance
- **Contact Number:** 0805 943 4243
- **Primary Location:** Muhammadu Buhari Way, Along Kofar Kabuga – Kofar Ruwa Road, Kano State, Nigeria.

---
*Built for DPG Enterprises. Go Electric, Go Smart.*

---
*This repository is actively maintained.*
