export interface KPIMetric {
  id: string;
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export interface LeadRecord {
  id: string;
  name: string;
  company: string;
  email: string;
  status: 'Converted' | 'Qualified' | 'In Progress' | 'New';
  dealValue: number;
  date: string;
}

export function computeTotalRevenue(leads: LeadRecord[]): number {
  return leads
    .filter((l) => l.status === 'Converted')
    .reduce((sum, l) => sum + l.dealValue, 0);
}

export function calculateConversionRate(leads: LeadRecord[]): number {
  if (leads.length === 0) return 0;
  const converted = leads.filter((l) => l.status === 'Converted').length;
  return Number(((converted / leads.length) * 100).toFixed(1));
}

export function filterLeadsByStatus(
  leads: LeadRecord[],
  status?: LeadRecord['status']
): LeadRecord[] {
  if (!status) return leads;
  return leads.filter((l) => l.status === status);
}

export const INITIAL_LEADS: LeadRecord[] = [
  {
    id: 'lead-001',
    name: 'Sarah Jenkins',
    company: 'Apex Logistics Inc.',
    email: 's.jenkins@apexlogistics.io',
    status: 'Converted',
    dealValue: 12500,
    date: '2026-10-01',
  },
  {
    id: 'lead-002',
    name: 'Michael Chang',
    company: 'Nova Commerce Cloud',
    email: 'mchang@novacommerce.co',
    status: 'Qualified',
    dealValue: 8400,
    date: '2026-10-02',
  },
  {
    id: 'lead-003',
    name: 'Elena Rostova',
    company: 'Vanguard Retail Tech',
    email: 'elena@vanguardretail.eu',
    status: 'Converted',
    dealValue: 19800,
    date: '2026-10-02',
  },
  {
    id: 'lead-004',
    name: 'David Kim',
    company: 'Synergy Health Digital',
    email: 'dkim@synergyhealth.org',
    status: 'In Progress',
    dealValue: 6200,
    date: '2026-10-03',
  },
];
