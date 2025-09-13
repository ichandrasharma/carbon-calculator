"use client";
import { useState } from "react";
import ComputationView from "./ComputationView";
import ProfilesSidebar from "./ProfilesSidebar";

export default function CalculatorLayout({ factors }) {
  const categories = Object.keys(factors.categories);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const next = () => setCurrentStep((s) => Math.min(s + 1, categories.length - 1));
  const back = () => setCurrentStep((s) => Math.max(s - 1, 0));

  const currentCategory = categories[currentStep];

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {factors.categories[currentCategory].name}
        </h2>
        <ComputationView
          category={currentCategory}
          factors={factors}
          formData={formData}
          setFormData={setFormData}
          next={next}
          back={back}
        />
      </div>

      <ProfilesSidebar formData={formData} factors={factors} />
    </div>
  );
}
