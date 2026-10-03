import test from 'node:test';
import assert from 'node:assert/strict';
import {
  computeTotalRevenue,
  calculateConversionRate,
  filterLeadsByStatus,
} from '../lib/metrics.ts';

test('computeTotalRevenue correctly sums only converted deals', () => {
  const sample = [
    { id: '1', name: 'A', company: 'B', email: 'c@d.com', status: 'Converted', dealValue: 10000, date: '2026-10-01' },
    { id: '2', name: 'B', company: 'C', email: 'd@e.com', status: 'Qualified', dealValue: 5000, date: '2026-10-01' },
    { id: '3', name: 'C', company: 'D', email: 'e@f.com', status: 'Converted', dealValue: 25000, date: '2026-10-01' },
  ];
  assert.equal(computeTotalRevenue(sample), 35000);
});

test('calculateConversionRate returns expected percentage', () => {
  const sample = [
    { id: '1', name: 'A', company: 'B', email: 'c@d.com', status: 'Converted', dealValue: 1000, date: '2026-10-01' },
    { id: '2', name: 'B', company: 'C', email: 'd@e.com', status: 'New', dealValue: 1000, date: '2026-10-01' },
    { id: '3', name: 'C', company: 'D', email: 'e@f.com', status: 'Converted', dealValue: 1000, date: '2026-10-01' },
    { id: '4', name: 'D', company: 'E', email: 'f@g.com', status: 'In Progress', dealValue: 1000, date: '2026-10-01' },
  ];
  assert.equal(calculateConversionRate(sample), 50.0);
  assert.equal(calculateConversionRate([]), 0);
});

test('filterLeadsByStatus handles empty and matched statuses', () => {
  const sample = [
    { id: '1', name: 'A', company: 'B', email: 'c@d.com', status: 'Converted', dealValue: 1000, date: '2026-10-01' },
    { id: '2', name: 'B', company: 'C', email: 'd@e.com', status: 'Qualified', dealValue: 1000, date: '2026-10-01' },
  ];
  assert.equal(filterLeadsByStatus(sample, 'Converted').length, 1);
  assert.equal(filterLeadsByStatus(sample).length, 2);
});
