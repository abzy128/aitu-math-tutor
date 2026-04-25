"use client";

import { useState } from "react";

interface Step {
  title: string;
  content: React.ReactNode;
}

interface StepByStepProps {
  steps: Step[];
}

export default function StepByStep({ steps }: StepByStepProps) {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
      <div className="flex border-b border-zinc-200">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
              index === currentStep
                ? "bg-indigo-50 text-indigo-700 border-b-2 border-indigo-600"
                : "text-zinc-500 hover:text-zinc-700 hover:bg-zinc-50"
            }`}
          >
            Step {index + 1}
          </button>
        ))}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-zinc-900 mb-3">
          {steps[currentStep].title}
        </h3>
        <div className="text-zinc-600">{steps[currentStep].content}</div>
      </div>
      <div className="flex justify-between px-6 pb-6">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="px-4 py-2 rounded-lg text-sm font-medium bg-zinc-100 text-zinc-700 hover:bg-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
          disabled={currentStep === steps.length - 1}
          className="px-4 py-2 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}
