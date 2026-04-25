"use client";

import { useState } from "react";
import MathBlock from "@/components/MathBlock";
import Link from "next/link";

interface Rule {
  id: string;
  name: string;
  formula: React.ReactNode;
  description: string;
  examples: { problem: string; solution: string; steps: string[] }[];
}

const rules: Rule[] = [
  {
    id: "power",
    name: "Power Rule",
    formula: (
      <span>
        ∫ x<sup>n</sup> dx = <span className="inline-block border-b border-zinc-800 px-2">x<sup>n+1</sup></span>
        <span className="block mt-1">n + 1</span> + C  (n ≠ −1)
      </span>
    ),
    description: "Increase the exponent by 1, then divide by the new exponent. This is the reverse of the derivative power rule.",
    examples: [
      {
        problem: "Find ∫ x⁵ dx",
        solution: "x⁶/6 + C",
        steps: [
          "Identify n = 5",
          "Increase exponent: x⁶",
          "Divide by n + 1 = 6: x⁶/6",
          "Add + C: x⁶/6 + C",
        ],
      },
      {
        problem: "Find ∫ x³ dx",
        solution: "x⁴/4 + C",
        steps: [
          "Identify n = 3",
          "Increase exponent: x⁴",
          "Divide by n + 1 = 4: x⁴/4",
          "Add + C: x⁴/4 + C",
        ],
      },
    ],
  },
  {
    id: "constant",
    name: "Constant Rule",
    formula: <span>∫ k dx = kx + C</span>,
    description: "The integral of a constant is the constant times x. This makes sense because the derivative of kx is k.",
    examples: [
      {
        problem: "Find ∫ 7 dx",
        solution: "7x + C",
        steps: [
          "7 is a constant",
          "∫ 7 dx = 7x + C",
        ],
      },
    ],
  },
  {
    id: "constant-multiple",
    name: "Constant Multiple Rule",
    formula: <span>∫ c · f(x) dx = c · ∫ f(x) dx</span>,
    description: "A constant factor can be pulled outside the integral. This is the reverse of the derivative constant multiple rule.",
    examples: [
      {
        problem: "Find ∫ 4x³ dx",
        solution: "x⁴ + C",
        steps: [
          "Pull out the 4: 4 ∫ x³ dx",
          "Integrate x³: x⁴/4",
          "Multiply by 4: 4 · x⁴/4 = x⁴",
          "Add + C: x⁴ + C",
        ],
      },
    ],
  },
  {
    id: "sum",
    name: "Sum/Difference Rule",
    formula: <span>∫ [f(x) ± g(x)] dx = ∫ f(x) dx ± ∫ g(x) dx</span>,
    description: "The integral of a sum or difference is the sum or difference of the integrals. Integrate term by term.",
    examples: [
      {
        problem: "Find ∫ (x² + 3x) dx",
        solution: "x³/3 + 3x²/2 + C",
        steps: [
          "Split into two integrals: ∫ x² dx + ∫ 3x dx",
          "∫ x² dx = x³/3",
          "∫ 3x dx = 3 · x²/2 = 3x²/2",
          "Combine: x³/3 + 3x²/2 + C",
        ],
      },
    ],
  },
  {
    id: "substitution",
    name: "Substitution Rule",
    formula: <span>∫ f(g(x)) · g&apos;(x) dx = F(g(x)) + C</span>,
    description: "The reverse of the chain rule. When you see a function and its derivative together, substitute u = g(x) to simplify.",
    examples: [
      {
        problem: "Find ∫ (3x + 2)⁴ · 3 dx",
        solution: "(3x + 2)⁵/5 + C",
        steps: [
          "Let u = 3x + 2, then du = 3 dx",
          "Rewrite: ∫ u⁴ du",
          "Integrate: u⁵/5",
          "Substitute back: (3x + 2)⁵/5 + C",
        ],
      },
    ],
  },
  {
    id: "parts",
    name: "Integration by Parts",
    formula: <span>∫ u dv = uv − ∫ v du</span>,
    description: "The reverse of the product rule. Choose u to be a function that simplifies when differentiated, and dv to be easy to integrate.",
    examples: [
      {
        problem: "Find ∫ x · eˣ dx",
        solution: "xeˣ − eˣ + C = eˣ(x − 1) + C",
        steps: [
          "Let u = x, dv = eˣ dx",
          "Then du = dx, v = eˣ",
          "Apply formula: uv − ∫ v du = x·eˣ − ∫ eˣ dx",
          "∫ eˣ dx = eˣ",
          "Result: xeˣ − eˣ + C = eˣ(x − 1) + C",
        ],
      },
    ],
  },
];

export default function IntegralRules() {
  const [activeRule, setActiveRule] = useState(rules[0]);
  const [showExample, setShowExample] = useState(0);
  const [revealedSteps, setRevealedSteps] = useState<number[]>([]);

  const handleRuleChange = (rule: Rule) => {
    setActiveRule(rule);
    setShowExample(0);
    setRevealedSteps([]);
  };

  const toggleStep = (index: number) => {
    setRevealedSteps((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const example = activeRule.examples[showExample];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/integrals"
          className="text-sm font-medium px-3 py-1.5 rounded-md bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
        >
          ← Introduction
        </Link>
        <Link
          href="/integrals/practice"
          className="text-sm font-medium px-3 py-1.5 rounded-md bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
        >
          Practice →
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-zinc-900 mb-6">Integration Rules</h1>
      <p className="text-zinc-600 mb-8">
        Master the fundamental rules for finding integrals. Click on a rule to learn more and see worked examples.
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {rules.map((rule) => (
          <button
            key={rule.id}
            onClick={() => handleRuleChange(rule)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeRule.id === rule.id
                ? "bg-emerald-600 text-white"
                : "bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50"
            }`}
          >
            {rule.name}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-zinc-200 p-6 mb-6">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">{activeRule.name}</h2>

        <MathBlock className="text-xl mb-4 bg-emerald-50 border border-emerald-100">
          {activeRule.formula}
        </MathBlock>

        <p className="text-zinc-600 mb-6">{activeRule.description}</p>

        {activeRule.examples.length > 1 && (
          <div className="flex gap-2 mb-4">
            {activeRule.examples.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setShowExample(idx);
                  setRevealedSteps([]);
                }}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  showExample === idx
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                Example {idx + 1}
              </button>
            ))}
          </div>
        )}

        <div className="bg-zinc-50 rounded-lg p-5 border border-zinc-200">
          <p className="text-sm text-zinc-500 mb-2">Problem</p>
          <p className="text-lg font-medium text-zinc-900 mb-4">{example.problem}</p>

          <button
            onClick={() => setRevealedSteps(activeRule.examples[showExample].steps.map((_, i) => i))}
            className="text-sm text-emerald-600 hover:text-emerald-800 font-medium mb-4"
          >
            Reveal all steps
          </button>

          <div className="space-y-3">
            {example.steps.map((step, index) => (
              <div key={index}>
                {revealedSteps.includes(index) ? (
                  <div className="bg-white rounded-lg p-3 border border-zinc-200 shadow-sm">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center mt-0.5">
                        {index + 1}
                      </span>
                      <p className="text-zinc-800">{step}</p>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => toggleStep(index)}
                    className="w-full text-left bg-white rounded-lg p-3 border border-zinc-200 border-dashed hover:border-emerald-300 hover:bg-emerald-50 transition-colors"
                  >
                    <span className="text-zinc-400 text-sm">Click to reveal step {index + 1}</span>
                  </button>
                )}
              </div>
            ))}
          </div>

          {revealedSteps.length === example.steps.length && (
            <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-sm text-emerald-700 font-semibold">Answer</p>
              <p className="text-emerald-900 font-medium">{example.solution}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
