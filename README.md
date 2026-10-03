# Next.js AI SaaS Analytics & Telemetry Dashboard (Demo Project)

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat&logo=tailwind_css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Project Type:** Personal open-source & engineering demo by Tuan Anh Trinh ([@tuananh4865](https://github.com/tuananh4865))  
> **Tech Stack:** Next.js 14 App Router, React 18, TypeScript 5.7, Tailwind CSS, Node.js Test Runner

---

## 1. Overview

This repository demonstrates a modern, typed full-stack analytics and telemetry interface built with Next.js 14 App Router, TypeScript, and Tailwind CSS. It illustrates clean component architecture, KPI metric aggregation, responsive dark-mode styling, and native automated unit testing.

### Core Features
- **App Router Architecture**: Modular layout structure separating public landing pages (`/`) from the telemetry dashboard (`/dashboard`).
- **Telemetry & Aggregation Logic**: Pure functions calculating pipeline conversion rates, total converted revenue, and status-based lead filtering.
- **Strict TypeScript**: Comprehensive interfaces for lead records and KPI metrics with zero untyped structures.
- **Dark Mode UI**: Clean visual design utilizing Tailwind CSS utility classes and modern dashboard widgets.
- **Native Automated Test Suite**: Offline unit tests running directly via Node.js test runner against TypeScript source code.

---

## 2. Project Structure

```text
nextjs-ai-saas-dashboard/
├── app/
│   ├── dashboard/
│   │   └── page.tsx        # Interactive telemetry & KPI dashboard view
│   ├── globals.css         # Tailwind CSS tokens and layout styles
│   ├── layout.tsx          # Root HTML shell and metadata
│   └── page.tsx            # SaaS product showcase landing page
├── components/             # Reusable UI widgets and navigation bars
├── lib/
│   └── metrics.ts          # Pure business logic and metric formulas
├── tests/
│   └── metrics.test.mjs    # Native Node.js test runner suite
├── package.json            # Dependencies and npm scripts
└── tsconfig.json           # Strict TypeScript configuration
```

---

## 3. Quickstart & Verification

```bash
# 1. Clone the repository
git clone https://github.com/tuananh4865/nextjs-ai-saas-dashboard.git
cd nextjs-ai-saas-dashboard

# 2. Run automated tests (runs natively with Node 22+)
npm test

# 3. Install dependencies and start local dev server
npm install
npm run dev
```

---

## 4. Automated Test Suite

The test suite in `tests/metrics.test.mjs` executes directly against `lib/metrics.ts` via Node.js native test runner and verifies:
- Revenue summation strictly across converted lead states.
- Accurate conversion rate percentage computation and empty dataset handling.
- Deterministic filtering of lead records by status.

---

## 5. License

MIT License &copy; 2026 Tuan Anh Trinh. Open for personal, learning, and reference use.
