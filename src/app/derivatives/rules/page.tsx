"use client";

import { useState } from "react";
import MathBlock from "@/components/MathBlock";

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
        d/dx [x<sup>n</sup>] = nx<sup>n−1</sup>
      </span>
    ),
    description: "If you have x raised to a power, bring the power down as a coefficient and subtract 1 from the exponent.",
    examples: [
      {
        problem: "Find the derivative of x⁵",
        solution: "5x⁴",
        steps: [
          "Identify n = 5",
          "Bring down the power: 5x⁵",
          "Subtract 1 from exponent: 5x⁴",
        ],
      },
      {
        problem: "Find the derivative of x³",
        solution: "3x²",
        steps: [
          "Identify n = 3",
          "Bring down the power: 3x³",
          "Subtract 1 from exponent: 3x²",
        ],
      },
    ],
  },
  {
    id: "constant",
    name: "Constant Rule",
    formula: <span>d/dx [c] = 0</span>,
    description: "The derivative of a constant is always zero. Constants do not change, so their rate of change is zero.",
    examples: [
      {
        problem: "Find the derivative of 7",
        solution: "0",
        steps: [
          "7 is a constant",
          "d/dx [7] = 0",
        ],
      },
      {
        problem: "Find the derivative of π",
        solution: "0",
        steps: [
          "π is a constant",
          "d/dx [π] = 0",
        ],
      },
    ],
  },
  {
    id: "constant-multiple",
    name: "Constant Multiple Rule",
    formula: <span>d/dx [c · f(x)] = c · f&apos;(x)</span>,
    description: "A constant multiplier stays with the function when taking the derivative.",
    examples: [
      {
        problem: "Find the derivative of 4x³",
        solution: "12x²",
        steps: [
          "Keep the constant 4",
          "Derivative of x³ is 3x²",
          "4 · 3x² = 12x²",
        ],
      },
    ],
  },
  {
    id: "sum",
    name: "Sum/Difference Rule",
    formula: <span>d/dx [f(x) ± g(x)] = f&apos;(x) ± g&apos;(x)</span>,
    description: "The derivative of a sum or difference is the sum or difference of the derivatives.",
    examples: [
      {
        problem: "Find the derivative of x² + 3x",
        solution: "2x + 3",
        steps: [
          "Derivative of x² is 2x",
          "Derivative of 3x is 3",
          "Sum: 2x + 3",
        ],
      },
    ],
  },
  {
    id: "product",
    name: "Product Rule",
    formula: <span>d/dx [f(x) · g(x)] = f&apos;(x)g(x) + f(x)g&apos;(x)</span>,
    description: "When two functions are multiplied together, the derivative is: first function derivative times second, plus first times second function derivative.",
    examples: [
      {
        problem: "Find the derivative of x² · eˣ",
        solution: "2xeˣ + x²eˣ = eˣ(2x + x²)",
        steps: [
          "Let f(x) = x², g(x) = eˣ",
          "f'(x) = 2x, g'(x) = eˣ",
          "Apply formula: 2x · eˣ + x² · eˣ",
          "Factor: eˣ(2x + x²)",
        ],
      },
    ],
  },
  {
    id: "quotient",
    name: "Quotient Rule",
    formula: (
      <span>
        d/dx [f(x)/g(x)] = {" "}
        <span className="inline-block border-b border-zinc-800 px-2">
          f&apos;(x)g(x) − f(x)g&apos;(x)
        </span>
        <span className="block mt-1">[g(x)]²</span>
      </span>
    ),
    description: "When one function is divided by another: bottom times derivative of top, minus top times derivative of bottom, over bottom squared.",
    examples: [
      {
        problem: "Find the derivative of x² / (x + 1)",
        solution: "(2x(x+1) − x²) / (x+1)² = (x² + 2x) / (x+1)²",
        steps: [
          "f(x) = x², g(x) = x + 1",
          "f'(x) = 2x, g'(x) = 1",
          "Numerator: 2x(x+1) − x²(1) = 2x² + 2x − x² = x² + 2x",
          "Denominator: (x+1)²",
        ],
      },
    ],
  },
  {
    id: "chain",
    name: "Chain Rule",
    formula: <span>d/dx [f(g(x))] = f&apos;(g(x)) · g&apos;(x)</span>,
    description: "For composite functions (functions inside functions), take the derivative of the outer function (keeping the inner function), then multiply by the derivative of the inner function.",
    examples: [
      {
        problem: "Find the derivative of (3x + 2)⁵",
        solution: "5(3x + 2)⁴ · 3 = 15(3x + 2)⁴",
        steps: [
          "Outer function: u⁵, inner: u = 3x + 2",
          "Derivative of outer: 5u⁴ = 5(3x + 2)⁴",
          "Derivative of inner: 3",
          "Multiply: 5(3x + 2)⁴ · 3 = 15(3x + 2)⁴",
        ],
      },
    ],
  },
];

export default function DerivativeRules() {
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
      <h1 className="text-3xl font-bold text-zinc-900 mb-6">Derivative Rules</h1>
      <p className="text-zinc-600 mb-8">
        Master the fundamental rules for finding derivatives. Click on a rule to learn more and see worked examples.
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {rules.map((rule) => (
          <button
            key={rule.id}
            onClick={() => handleRuleChange(rule)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeRule.id === rule.id
                ? "bg-indigo-600 text-white"
                : "bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50"
            }`}
          >
            {rule.name}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-zinc-200 p-6 mb-6">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">{activeRule.name}</h2>
        
        <MathBlock className="text-xl mb-4 bg-indigo-50 border border-indigo-100">
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
                    ? "bg-indigo-100 text-indigo-700"
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
            className="text-sm text-indigo-600 hover:text-indigo-800 font-medium mb-4"
          >
            Reveal all steps
          </button>

          <div className="space-y-3">
            {example.steps.map((step, index) => (
              <div key={index}>
                {revealedSteps.includes(index) ? (
                  <div className="bg-white rounded-lg p-3 border border-zinc-200 shadow-sm">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center mt-0.5">
                        {index + 1}
                      </span>
                      <p className="text-zinc-800">{step}</p>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => toggleStep(index)}
                    className="w-full text-left bg-white rounded-lg p-3 border border-zinc-200 border-dashed hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
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
