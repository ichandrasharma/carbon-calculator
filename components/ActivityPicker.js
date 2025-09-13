export default function ActivityPicker({ categories, selected, onSelect }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(categories).map(([key, cat]) => (
        <button
          key={key}
          onClick={() => onSelect(key)}
          className={`p-4 rounded-xl border shadow-sm text-left transition-colors ${
            selected === key
              ? "bg-green-100 border-green-500"
              : "bg-white dark:bg-gray-800"
          }`}
        >
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
            {cat.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {Object.keys(cat.activities).length} activities
          </p>
        </button>
      ))}
    </div>
  );
}
