import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OmniFlow AI | Enterprise AI Automation & Analytics',
  description: 'Production-ready AI workflows, automated lead routing, and real-time revenue analytics dashboard.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-50 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
