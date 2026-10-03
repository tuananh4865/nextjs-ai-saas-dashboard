const test = require('node:test');
const assert = require('node:assert/strict');

function computeTotalRevenue(leads) {
  return leads
    .filter((l) => l.status === 'Converted')
    .reduce((sum, l) => sum + l.dealValue, 0);
}

function calculateConversionRate(leads) {
  if (leads.length === 0) return 0;
  const converted = leads.filter((l) => l.status === 'Converted').length;
  return Number(((converted / leads.length) * 100).toFixed(1));
}

function filterLeadsByStatus(leads, status) {
  if (!status) return leads;
  return leads.filter((l) => l.status === status);
}

test('computeTotalRevenue correctly sums only converted deals', () => {
  const sample = [
    { id: '1', status: 'Converted', dealValue: 10000 },
    { id: '2', status: 'Qualified', dealValue: 5000 },
    { id: '3', status: 'Converted', dealValue: 25000 },
  ];
  assert.equal(computeTotalRevenue(sample), 35000);
});

test('calculateConversionRate returns expected percentage', () => {
  const sample = [
    { id: '1', status: 'Converted' },
    { id: '2', status: 'New' },
    { id: '3', status: 'Converted' },
    { id: '4', status: 'In Progress' },
  ];
  assert.equal(calculateConversionRate(sample), 50.0);
  assert.equal(calculateConversionRate([]), 0);
});

test('filterLeadsByStatus handles empty and matched statuses', () => {
  const sample = [
    { id: '1', status: 'Converted' },
    { id: '2', status: 'Qualified' },
  ];
  assert.equal(filterLeadsByStatus(sample, 'Converted').length, 1);
  assert.equal(filterLeadsByStatus(sample).length, 2);
});
