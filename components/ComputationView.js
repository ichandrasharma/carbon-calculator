import ActivityInputRow from "./ActivityInputRow";

export default function ComputationView({ category, factors, formData, setFormData, next, back }) {
  const activities = factors.categories[category].activities;

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      {Object.entries(activities).map(([key, activity]) => (
        <ActivityInputRow
          key={key}
          name={key}
          label={activity.label}
          unit={activity.unit}
          value={formData[key] || ""}
          onChange={handleChange}
        />
      ))}

      <div className="flex justify-between mt-6">
        <button
          onClick={back}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded"
        >
          Back
        </button>
        <button
          onClick={next}
          className="px-4 py-2 bg-green-600 text-white hover:bg-green-700 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
