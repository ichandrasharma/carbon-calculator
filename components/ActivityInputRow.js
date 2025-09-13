export default function ActivityInputRow({ label, name, unit, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1 text-gray-900 dark:text-gray-100">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          name={name}
          value={value || ""}
          onChange={(e) => onChange(name, Number(e.target.value))}
          className="w-28 border p-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <span className="text-gray-700 dark:text-gray-300">{unit}</span>
        <input
          type="range"
          min="0"
          max="500"
          step="1"
          value={value || 0}
          onChange={(e) => onChange(name, Number(e.target.value))}
          className="flex-1"
        />
      </div>
    </div>
  );
}
