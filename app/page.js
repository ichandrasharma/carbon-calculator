"use client";

import { useEffect, useState } from "react";
import CalculatorLayout from "../components/CalculatorLayout";

export default function Page() {
  const [factors, setFactors] = useState(null);

  useEffect(() => {
    fetch("/api/emission-factors")
      .then((res) => res.json())
      .then(setFactors);
  }, []);

  if (!factors) return <p>Loading factors...</p>;

  return <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100"> <CalculatorLayout factors={factors} />; </div>
}
