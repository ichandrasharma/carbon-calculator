// app/api/emission-factors/route.js
export async function GET() {
  const emissionFactors = {
    meta: { lastUpdated: '2025-09-13', source: 'example-config' },
    categories: {
      travel: {
        name: 'Travel / Commute',
        activities: {
          car: { label: 'Car (petrol average)', factor: 0.192, unit: 'kgCO2e/km' },
          bus: { label: 'Bus', factor: 0.089, unit: 'kgCO2e/km' },
          train: { label: 'Train', factor: 0.041, unit: 'kgCO2e/km' },
          flight_short: { label: 'Flight (<1000 km)', factor: 0.254, unit: 'kgCO2e/km' },
        },
      },
      food: {
        name: 'Food',
        activities: {
          beef_meal: { label: 'Beef meal', factor: 27.0, unit: 'kgCO2e/meal' },
          chicken_meal: { label: 'Chicken meal', factor: 6.9, unit: 'kgCO2e/meal' },
          veg_meal: { label: 'Vegetarian meal', factor: 2.5, unit: 'kgCO2e/meal' },
        },
      },
      household: {
        name: 'Household',
        activities: {
          electricity: { label: 'Electricity', factor: 0.82, unit: 'kgCO2e/kWh' },
          waste_kg: { label: 'Waste', factor: 0.21, unit: 'kgCO2e/kg' },
        },
      },
    },
  };

  return Response.json(emissionFactors);
}
