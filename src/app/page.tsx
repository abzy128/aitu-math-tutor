import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-zinc-900 mb-4">
          Master Calculus Derivatives
        </h1>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
          Learn derivatives through interactive lessons, step-by-step examples, and hands-on practice problems.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <Link href="/derivatives" className="group block bg-white rounded-xl border border-zinc-200 p-6 hover:border-indigo-300 hover:shadow-md transition-all">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-zinc-900 mb-2">Introduction</h2>
          <p className="text-zinc-600">Understand what derivatives are, their notation, and geometric meaning.</p>
        </Link>

        <Link href="/derivatives/rules" className="group block bg-white rounded-xl border border-zinc-200 p-6 hover:border-indigo-300 hover:shadow-md transition-all">
          <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
            <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-zinc-900 mb-2">Derivative Rules</h2>
          <p className="text-zinc-600">Master the power rule, product rule, quotient rule, and chain rule.</p>
        </Link>

        <Link href="/derivatives/practice" className="group block bg-white rounded-xl border border-zinc-200 p-6 hover:border-indigo-300 hover:shadow-md transition-all">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-zinc-900 mb-2">Practice</h2>
          <p className="text-zinc-600">Test your skills with interactive problems and instant feedback.</p>
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-zinc-200 p-8">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">What are Derivatives?</h2>
        <div className="prose prose-zinc max-w-none">
          <p className="text-zinc-600 mb-4">
            A derivative measures how a function changes as its input changes. It tells us the <strong>instantaneous rate of change</strong> or the <strong>slope of the tangent line</strong> at any point on a curve.
          </p>
          <div className="bg-zinc-50 rounded-lg p-6 my-6 font-mono text-center text-lg">
            <p className="text-zinc-800 mb-2">
              f&apos;(x) = lim<sub>h→0</sub> {" "}
              <span className="inline-block border-b border-zinc-800 px-2">
                f(x + h) − f(x)
              </span>
              <span className="block mt-1">h</span>
            </p>
            <p className="text-sm text-zinc-500 mt-4">The limit definition of a derivative</p>
          </div>
          <p className="text-zinc-600">
            Think of it this way: if you are driving and your position is a function of time, the derivative of that function is your <strong>velocity</strong> — how fast your position is changing at any exact moment.
          </p>
        </div>
      </div>
    </div>
  );
}
