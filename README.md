# OmniFlow AI — Enterprise AI Automation & Analytics Dashboard

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat&logo=tailwind_css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Unit Tests](https://img.shields.io/badge/Tests-Passing%20(100%25)-brightgreen)](tests/)

A modern, high-performance Full-Stack AI SaaS Analytics Platform built with Next.js 14 App Router, TypeScript strict mode, and Tailwind CSS. Designed for B2B intelligence operations, automated lead routing, and real-time revenue telemetry.

Developed by [Tuan Anh Trinh (@tuananh4865)](https://github.com/tuananh4865).

---

## ⚡ Key Architectural Capabilities

- **Modern App Router Architecture**: Clean separation between public landing page (`/`) and authenticated operational dashboard (`/dashboard`).
- **Real-Time Revenue Telemetry**: Dynamic KPI aggregation computing total closed revenue, pipeline conversion rates, and active agent execution counts.
- **Strict Type Safety**: Fully typed interfaces for all lead states, telemetry metrics, and financial records with zero `any` shortcuts.
- **Dark Mode UI / Glassmorphism**: Polished visual aesthetic built with Tailwind CSS, custom gradients, and responsive layouts.
- **100% Offline Test Suite**: Native unit tests covering business logic, deal calculations, and filtering functions.

---

## 📂 Project Structure

```text
nextjs-ai-saas-dashboard/
├── app/
│   ├── dashboard/
│   │   └── page.tsx        # Interactive telemetry & KPI dashboard
│   ├── globals.css         # Tailwind directives and design tokens
│   ├── layout.tsx          # Root HTML shell and metadata
│   └── page.tsx            # Conversion-focused SaaS landing page
├── components/             # Reusable UI widgets and navigation
├── lib/
│   └── metrics.ts          # Pure business logic and metric formulas
├── tests/
│   └── metrics.test.js     # Native Node.js automated test runner
├── package.json            # Dependencies and npm scripts
└── tsconfig.json           # Strict TypeScript configuration
```

---

## 🚀 Quickstart & Verification

```bash
# Clone the repository
git clone https://github.com/tuananh4865/nextjs-ai-saas-dashboard.git
cd nextjs-ai-saas-dashboard

# Run automated tests
npm test

# Install dependencies and start development server
npm install
npm run dev
```

---

## 🛡️ License

MIT License &copy; 2026 Tuan Anh Trinh. Built for commercial and enterprise production use.
