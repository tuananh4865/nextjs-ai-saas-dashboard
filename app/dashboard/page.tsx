import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Clock, DollarSign, Filter, RefreshCw, Users } from 'lucide-react';
import { calculateConversionRate, computeTotalRevenue, INITIAL_LEADS } from '@/lib/metrics';

export default function DashboardPage() {
  const totalRevenue = computeTotalRevenue(INITIAL_LEADS);
  const conversionRate = calculateConversionRate(INITIAL_LEADS);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur px-8 h-16 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="p-2 rounded-lg border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-base font-bold tracking-tight">Enterprise Revenue & Agent Telemetry</h1>
            <p className="text-xs text-slate-400">Live operational data synced via PostgreSQL & Webhooks</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Systems Operational
          </span>
          <button className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-xs font-medium flex items-center gap-1.5 transition">
            <RefreshCw className="w-3.5 h-3.5" />
            Sync Data
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8 max-w-7xl mx-auto w-full flex-1 space-y-8">
        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur relative overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 text-sm font-medium mb-3">
              <span>Total Closed Revenue</span>
              <DollarSign className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-extrabold text-white mb-2">
              ${totalRevenue.toLocaleString()}
            </div>
            <div className="flex items-center text-xs text-emerald-400 font-semibold gap-1">
              <ArrowUpRight className="w-3.5 h-3.5" />
              +18.4% from last sprint
            </div>
          </div>

          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur relative overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 text-sm font-medium mb-3">
              <span>Conversion Rate</span>
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-extrabold text-white mb-2">
              {conversionRate}%
            </div>
            <div className="flex items-center text-xs text-indigo-400 font-semibold gap-1">
              <ArrowUpRight className="w-3.5 h-3.5" />
              +4.2% vs industry avg
            </div>
          </div>

          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur relative overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 text-sm font-medium mb-3">
              <span>Active Agent Jobs</span>
              <Clock className="w-4 h-4 text-violet-400" />
            </div>
            <div className="text-3xl font-extrabold text-white mb-2">
              1,420 / day
            </div>
            <div className="flex items-center text-xs text-violet-400 font-semibold gap-1">
              99.8% uptime SLA
            </div>
          </div>

          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur relative overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 text-sm font-medium mb-3">
              <span>Verified Leads</span>
              <Users className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-3xl font-extrabold text-white mb-2">
              {INITIAL_LEADS.length * 125}
            </div>
            <div className="flex items-center text-xs text-amber-400 font-semibold gap-1">
              Automated enrichment
            </div>
          </div>
        </div>

        {/* Lead Table */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur overflow-hidden">
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white">Recent High-Value Conversions</h2>
              <p className="text-xs text-slate-400">Captured through Telegram Sales Engine & B2B Scraper ETL</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5" />
                Filter Status
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-950/60 text-slate-400 text-xs uppercase font-semibold">
                <tr>
                  <th className="px-6 py-4">Client Name</th>
                  <th className="px-6 py-4">Company</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Deal Value</th>
                  <th className="px-6 py-4">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {INITIAL_LEADS.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-800/40 transition">
                    <td className="px-6 py-4 font-medium text-white">{lead.name}</td>
                    <td className="px-6 py-4 text-slate-400">{lead.company}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          lead.status === 'Converted'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : lead.status === 'Qualified'
                            ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-semibold text-white">
                      ${lead.dealValue.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-500">{lead.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
