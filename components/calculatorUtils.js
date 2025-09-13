export function computeEmissions(formData, factors) {
  let total = 0;
  const breakdown = [];

  for (const [catKey, cat] of Object.entries(factors.categories)) {
    let catTotal = 0;
    for (const [actKey, act] of Object.entries(cat.activities)) {
      if (formData[actKey]) {
        const value = formData[actKey] * act.factor;
        catTotal += value;
      }
    }
    if (catTotal > 0) {
      breakdown.push({ label: cat.name, value: catTotal });
      total += catTotal;
    }
  }

  return { breakdown, total };
}
