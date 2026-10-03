import Link from 'next/link';
import { ArrowRight, Bot, Cpu, Database, Gauge, ShieldCheck, Sparkles, Terminal } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b border-slate-800 bg-slate-950/70 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-lg shadow-violet-500/30">
              ⚡
            </div>
            <span className="font-semibold text-lg tracking-tight">OmniFlow AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300 font-medium">
            <a href="#features" className="hover:text-white transition">Architecture</a>
            <a href="#metrics" className="hover:text-white transition">Performance</a>
            <a href="#pipeline" className="hover:text-white transition">Automation Engine</a>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition shadow-md shadow-violet-600/20"
            >
              Open Live Dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="py-24 px-6 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Next-Gen Full-Stack AI Platform
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Automate B2B Intelligence & Revenue Operations at Scale
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            High-throughput data extraction, autonomous conversational agents, and real-time revenue intelligence in one modular Next.js 14 architecture.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2"
            >
              Launch Interactive Console
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://github.com/tuananh4865"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium transition flex items-center justify-center gap-2"
            >
              <Terminal className="w-4 h-4" />
              View Source on GitHub
            </a>
          </div>
        </section>

        {/* Feature Grid */}
        <section id="features" className="py-16 px-6 max-w-7xl mx-auto border-t border-slate-900">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur hover:border-violet-500/50 transition">
              <div className="w-12 h-12 rounded-lg bg-violet-600/10 text-violet-400 flex items-center justify-center mb-4">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Resilient ETL Pipelines</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Automated multi-page pagination, rate-limit backoff, and Excel/CSV sanitization preventing formula injection attacks.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur hover:border-indigo-500/50 transition">
              <div className="w-12 h-12 rounded-lg bg-indigo-600/10 text-indigo-400 flex items-center justify-center mb-4">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Conversational Agents</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                State-machine workflows supporting Telegram and Discord bots with ACID-compliant SQLite databases and instant alert hooks.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur hover:border-cyan-500/50 transition">
              <div className="w-12 h-12 rounded-lg bg-cyan-600/10 text-cyan-400 flex items-center justify-center mb-4">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Real-Time Telemetry</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Live KPI tracking, conversion rate computation, latency metrics, and instant lead management in a sleek dashboard.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 px-6 text-center text-xs text-slate-500">
        OmniFlow AI &copy; 2026. Built by Tuan Anh Trinh (<a href="https://github.com/tuananh4865" className="text-slate-400 hover:underline">@tuananh4865</a>). Open source MIT License.
      </footer>
    </div>
  );
}
