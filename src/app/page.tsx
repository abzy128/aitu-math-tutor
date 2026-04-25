import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-zinc-900 mb-4">
          Master Calculus
        </h1>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
          Learn derivatives and integrals through interactive lessons, step-by-step examples, and hands-on practice problems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-xl border border-zinc-200 p-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Derivatives</h2>
          <p className="text-zinc-600 mb-6">
            Understand rates of change, tangent lines, and the fundamental rules of differentiation.
          </p>
          <div className="space-y-3">
            <Link href="/derivatives" className="block w-full text-center py-3 rounded-lg bg-indigo-50 text-indigo-700 font-medium hover:bg-indigo-100 transition-colors">
              Introduction
            </Link>
            <Link href="/derivatives/rules" className="block w-full text-center py-3 rounded-lg bg-indigo-50 text-indigo-700 font-medium hover:bg-indigo-100 transition-colors">
              Derivative Rules
            </Link>
            <Link href="/derivatives/practice" className="block w-full text-center py-3 rounded-lg bg-indigo-50 text-indigo-700 font-medium hover:bg-indigo-100 transition-colors">
              Practice Problems
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-zinc-200 p-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Integrals</h2>
          <p className="text-zinc-600 mb-6">
            Learn about areas under curves, antiderivatives, and the fundamental rules of integration.
          </p>
          <div className="space-y-3">
            <Link href="/integrals" className="block w-full text-center py-3 rounded-lg bg-emerald-50 text-emerald-700 font-medium hover:bg-emerald-100 transition-colors">
              Introduction
            </Link>
            <Link href="/integrals/rules" className="block w-full text-center py-3 rounded-lg bg-emerald-50 text-emerald-700 font-medium hover:bg-emerald-100 transition-colors">
              Integration Rules
            </Link>
            <Link href="/integrals/practice" className="block w-full text-center py-3 rounded-lg bg-emerald-50 text-emerald-700 font-medium hover:bg-emerald-100 transition-colors">
              Practice Problems
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-zinc-200 p-8">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">What is Calculus?</h2>
        <div className="prose prose-zinc max-w-none">
          <p className="text-zinc-600 mb-4">
            Calculus is the mathematical study of <strong>continuous change</strong>. It has two major branches:
          </p>
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-100">
              <h3 className="font-semibold text-indigo-900 mb-2">Differential Calculus</h3>
              <p className="text-indigo-800 text-sm">
                Concerned with rates of change and slopes of curves. The derivative tells us how fast something is changing at any exact moment.
              </p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-5 border border-emerald-100">
              <h3 className="font-semibold text-emerald-900 mb-2">Integral Calculus</h3>
              <p className="text-emerald-800 text-sm">
                Concerned with accumulation and areas. The integral tells us the total amount accumulated over a period or the area under a curve.
              </p>
            </div>
          </div>
          <p className="text-zinc-600">
            These two concepts are deeply connected by the <strong>Fundamental Theorem of Calculus</strong>: differentiation and integration are essentially inverse operations.
          </p>
        </div>
      </div>
    </div>
  );
}
