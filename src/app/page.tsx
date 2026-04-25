import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
          Math Tutor
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Interactive lessons and practice for mastering calculus — from derivatives to integrals.
        </p>
      </div>

      {/* Topic Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Derivatives Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Derivatives</h2>
          </div>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Understand rates of change, tangent lines, and the fundamental rules of differentiation. 
            Work through step-by-step examples and test yourself with practice problems.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/derivatives"
              className="px-4 py-2 rounded-lg bg-indigo-50 text-indigo-700 text-sm font-medium hover:bg-indigo-100 transition-colors"
            >
              Introduction
            </Link>
            <Link
              href="/derivatives/rules"
              className="px-4 py-2 rounded-lg bg-indigo-50 text-indigo-700 text-sm font-medium hover:bg-indigo-100 transition-colors"
            >
              Rules
            </Link>
            <Link
              href="/derivatives/practice"
              className="px-4 py-2 rounded-lg bg-indigo-50 text-indigo-700 text-sm font-medium hover:bg-indigo-100 transition-colors"
            >
              Practice
            </Link>
          </div>
        </div>

        {/* Integrals Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Integrals</h2>
          </div>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Learn about areas under curves, antiderivatives, and the fundamental rules of integration. 
            Discover how differentiation and integration are inverse operations.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/integrals"
              className="px-4 py-2 rounded-lg bg-emerald-50 text-emerald-700 text-sm font-medium hover:bg-emerald-100 transition-colors"
            >
              Introduction
            </Link>
            <Link
              href="/integrals/rules"
              className="px-4 py-2 rounded-lg bg-emerald-50 text-emerald-700 text-sm font-medium hover:bg-emerald-100 transition-colors"
            >
              Rules
            </Link>
            <Link
              href="/integrals/practice"
              className="px-4 py-2 rounded-lg bg-emerald-50 text-emerald-700 text-sm font-medium hover:bg-emerald-100 transition-colors"
            >
              Practice
            </Link>
          </div>
        </div>
      </div>

      {/* What is Calculus */}
      <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">What is Calculus?</h2>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Calculus is the mathematical study of <strong>continuous change</strong>. It has two major branches that work together:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-100">
            <h3 className="font-semibold text-indigo-900 mb-2">Differential Calculus</h3>
            <p className="text-indigo-800 text-sm leading-relaxed">
              Concerned with rates of change and slopes of curves. The derivative tells us how fast something is changing at any exact moment.
            </p>
          </div>
          <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
            <h3 className="font-semibold text-emerald-900 mb-2">Integral Calculus</h3>
            <p className="text-emerald-800 text-sm leading-relaxed">
              Concerned with accumulation and areas. The integral tells us the total amount accumulated over a period or the area under a curve.
            </p>
          </div>
        </div>
        <p className="text-slate-600 leading-relaxed">
          These two concepts are deeply connected by the <strong>Fundamental Theorem of Calculus</strong>: differentiation and integration are essentially inverse operations.
        </p>
      </div>

      {/* Quick Start */}
      <div className="bg-slate-100 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-slate-900 mb-2">Ready to start learning?</h2>
        <p className="text-slate-600 mb-6">Pick a topic above or jump straight into practice.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/derivatives"
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            Start with Derivatives
          </Link>
          <Link
            href="/integrals"
            className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors"
          >
            Start with Integrals
          </Link>
        </div>
      </div>
    </div>
  );
}
