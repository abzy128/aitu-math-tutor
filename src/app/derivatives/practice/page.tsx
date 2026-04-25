"use client";

import { useState } from "react";
import MathBlock from "@/components/MathBlock";

interface Problem {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const problems: Problem[] = [
  {
    id: 1,
    question: "What is the derivative of x⁴?",
    options: ["4x³", "x³", "4x⁴", "x⁴/4"],
    correctIndex: 0,
    explanation: "Using the power rule: d/dx[x⁴] = 4x⁴⁻¹ = 4x³",
  },
  {
    id: 2,
    question: "What is the derivative of 5x²?",
    options: ["10x²", "5x", "10x", "2x"],
    correctIndex: 2,
    explanation: "Using constant multiple and power rule: 5 · d/dx[x²] = 5 · 2x = 10x",
  },
  {
    id: 3,
    question: "What is the derivative of x² + 3x − 7?",
    options: ["2x + 3", "2x + 3 − 7", "x + 3", "2x"],
    correctIndex: 0,
    explanation: "Derivative of x² is 2x, derivative of 3x is 3, derivative of −7 is 0. So: 2x + 3",
  },
  {
    id: 4,
    question: "What is the derivative of (2x + 1)³?",
    options: ["3(2x + 1)²", "6(2x + 1)²", "3(2x + 1)³", "6(2x + 1)"],
    correctIndex: 1,
    explanation: "Chain rule: 3(2x+1)² · 2 = 6(2x+1)². Don't forget to multiply by the derivative of the inside (2)!",
  },
  {
    id: 5,
    question: "What is the derivative of x · eˣ?",
    options: ["eˣ", "xeˣ", "eˣ(x + 1)", "eˣ + x"],
    correctIndex: 2,
    explanation: "Product rule: d/dx[x]·eˣ + x·d/dx[eˣ] = 1·eˣ + x·eˣ = eˣ(1 + x) = eˣ(x + 1)",
  },
];

export default function Practice() {
  const [currentProblem, setCurrentProblem] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<Set<number>>(new Set());

  const problem = problems[currentProblem];
  const isCorrect = selectedOption === problem.correctIndex;

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setShowResult(true);
    if (isCorrect && !answered.has(problem.id)) {
      setScore((s) => s + 1);
    }
    setAnswered((prev) => new Set(prev).add(problem.id));
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowResult(false);
    setCurrentProblem((prev) => (prev + 1) % problems.length);
  };

  const handlePrevious = () => {
    setSelectedOption(null);
    setShowResult(false);
    setCurrentProblem((prev) => (prev - 1 + problems.length) % problems.length);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-zinc-900">Practice Problems</h1>
        <div className="bg-white rounded-lg border border-zinc-200 px-4 py-2">
          <span className="text-sm text-zinc-500">Score</span>
          <span className="ml-2 text-lg font-bold text-indigo-600">
            {score} / {problems.length}
          </span>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-zinc-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-zinc-500">
            Problem {currentProblem + 1} of {problems.length}
          </span>
          <div className="flex gap-1">
            {problems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentProblem(idx);
                  setSelectedOption(null);
                  setShowResult(false);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentProblem
                    ? "bg-indigo-600"
                    : answered.has(problems[idx].id)
                    ? "bg-emerald-400"
                    : "bg-zinc-200"
                }`}
              />
            ))}
          </div>
        </div>

        <MathBlock className="text-xl mb-6">
          {problem.question}
        </MathBlock>

        <div className="space-y-3 mb-6">
          {problem.options.map((option, index) => {
            let buttonClass =
              "w-full text-left p-4 rounded-lg border transition-all ";
            
            if (showResult) {
              if (index === problem.correctIndex) {
                buttonClass +=
                  "bg-emerald-50 border-emerald-500 text-emerald-900";
              } else if (index === selectedOption) {
                buttonClass +=
                  "bg-red-50 border-red-500 text-red-900";
              } else {
                buttonClass +=
                  "bg-zinc-50 border-zinc-200 text-zinc-500";
              }
            } else {
              buttonClass +=
                selectedOption === index
                  ? "bg-indigo-50 border-indigo-500 text-indigo-900"
                  : "bg-white border-zinc-200 hover:border-indigo-300 hover:bg-indigo-50 text-zinc-800";
            }

            return (
              <button
                key={index}
                onClick={() => !showResult && setSelectedOption(index)}
                disabled={showResult}
                className={buttonClass}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                      showResult
                        ? index === problem.correctIndex
                          ? "bg-emerald-500 text-white"
                          : index === selectedOption
                          ? "bg-red-500 text-white"
                          : "bg-zinc-200 text-zinc-500"
                        : selectedOption === index
                        ? "bg-indigo-600 text-white"
                        : "bg-zinc-100 text-zinc-600"
                    }`}
                  >
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="font-mono text-lg">{option}</span>
                </div>
              </button>
            );
          })}
        </div>

        {!showResult ? (
          <button
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className="w-full py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Check Answer
          </button>
        ) : (
          <div className="space-y-4">
            <div
              className={`rounded-lg p-4 ${
                isCorrect
                  ? "bg-emerald-50 border border-emerald-200"
                  : "bg-red-50 border border-red-200"
              }`}
            >
              <p
                className={`font-semibold mb-1 ${
                  isCorrect ? "text-emerald-800" : "text-red-800"
                }`}
              >
                {isCorrect ? "Correct!" : "Not quite right."}
              </p>
              <p className="text-zinc-700">
                <span className="font-medium">Explanation: </span>
                {problem.explanation}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handlePrevious}
                className="flex-1 py-3 rounded-lg bg-zinc-100 text-zinc-700 font-medium hover:bg-zinc-200 transition-colors"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="flex-1 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
              >
                Next Problem
              </button>
            </div>
          </div>
        )}
      </div>

      {answered.size === problems.length && (
        <div className="bg-indigo-50 rounded-xl border border-indigo-200 p-6 text-center">
          <h2 className="text-xl font-semibold text-indigo-900 mb-2">
            All problems completed!
          </h2>
          <p className="text-indigo-700">
            You scored {score} out of {problems.length}.
            {score === problems.length
              ? " Perfect score!"
              : score >= problems.length / 2
              ? " Good job! Keep practicing to improve."
              : " Keep practicing the rules to improve your score."}
          </p>
          <button
            onClick={() => {
              setScore(0);
              setAnswered(new Set());
              setCurrentProblem(0);
              setSelectedOption(null);
              setShowResult(false);
            }}
            className="mt-4 px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}
