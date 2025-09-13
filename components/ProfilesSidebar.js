import { computeEmissions } from "./calculatorUtils";

export default function ProfilesSidebar({ formData, factors }) {
  const { breakdown, total } = computeEmissions(formData, factors);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow w-full md:w-80 text-gray-900 dark:text-gray-100">
      <h3 className="text-xl font-bold mb-4">Your Emissions</h3>
      {breakdown.map((item, i) => (
        <div key={i} className="flex justify-between mb-2">
          <span>{item.label}</span>
          <span>{item.value.toFixed(2)} kgCO₂e</span>
        </div>
      ))}
      <hr className="my-4 border-gray-300 dark:border-gray-700" />
      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>{total.toFixed(2)} kgCO₂e</span>
      </div>
    </div>
  );
}
