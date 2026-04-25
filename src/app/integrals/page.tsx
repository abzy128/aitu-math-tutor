import MathBlock from "@/components/MathBlock";
import StepByStep from "@/components/StepByStep";
import Link from "next/link";

export default function IntegralsIntro() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/integrals/rules"
          className="text-sm font-medium px-3 py-1.5 rounded-md bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
        >
          Rules →
        </Link>
        <Link
          href="/integrals/practice"
          className="text-sm font-medium px-3 py-1.5 rounded-md bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
        >
          Practice →
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-zinc-900 mb-6">Introduction to Integrals</h1>

      <div className="prose prose-zinc max-w-none mb-12">
        <p className="text-zinc-600 text-lg">
          Integration is the reverse process of differentiation. While derivatives tell us the rate of change,
          integrals help us find the total amount of change, the area under a curve, and solve accumulation problems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl border border-zinc-200 p-6">
          <h2 className="text-xl font-semibold text-zinc-900 mb-4">Geometric Meaning</h2>
          <p className="text-zinc-600 mb-4">
            The definite integral of a function gives the <strong>net area</strong> between the curve and the x-axis over an interval.
          </p>
          <MathBlock>
            <p>
              ∫<sub>a</sub><sup>b</sup> f(x) dx = area above axis − area below axis
            </p>
          </MathBlock>
          <p className="text-zinc-600 mt-4">
            Think of it as adding up infinitely many infinitely thin rectangles under the curve.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-zinc-200 p-6">
          <h2 className="text-xl font-semibold text-zinc-900 mb-4">Notation</h2>
          <p className="text-zinc-600 mb-4">
            There are two main types of integrals:
          </p>
          <div className="space-y-3">
            <MathBlock>
              <span className="text-sm text-zinc-500 block mb-1">Indefinite (general antiderivative)</span>
              ∫ f(x) dx = F(x) + C
            </MathBlock>
            <MathBlock>
              <span className="text-sm text-zinc-500 block mb-1">Definite (area from a to b)</span>
              ∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) − F(a)
            </MathBlock>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-6">Example: Finding an Integral Using the Power Rule</h2>
        <StepByStep
          steps={[
            {
              title: "Start with the function",
              content: (
                <div>
                  <p className="mb-3">Let&apos;s find the integral of f(x) = 3x².</p>
                  <MathBlock>∫ 3x² dx</MathBlock>
                </div>
              ),
            },
            {
              title: "Apply the constant multiple rule",
              content: (
                <div>
                  <p className="mb-3">Pull the constant outside the integral:</p>
                  <MathBlock>3 ∫ x² dx</MathBlock>
                </div>
              ),
            },
            {
              title: "Apply the power rule for integration",
              content: (
                <div>
                  <p className="mb-3">
                    The power rule says: increase the exponent by 1, then divide by the new exponent.
                  </p>
                  <MathBlock>
                    ∫ x<sup>n</sup> dx = <span className="inline-block border-b border-zinc-800 px-2">x<sup>n+1</sup></span>
                    <span className="block mt-1">n + 1</span> + C
                  </MathBlock>
                </div>
              ),
            },
            {
              title: "Substitute n = 2",
              content: (
                <div>
                  <p className="mb-3">For x², n = 2, so n + 1 = 3:</p>
                  <MathBlock>
                    3 · <span className="inline-block border-b border-zinc-800 px-2">x³</span>
                    <span className="block mt-1">3</span> + C
                  </MathBlock>
                </div>
              ),
            },
            {
              title: "Simplify",
              content: (
                <div>
                  <p className="mb-3">The 3 in the numerator and denominator cancel:</p>
                  <MathBlock className="bg-emerald-50 border border-emerald-200">
                    x³ + C
                  </MathBlock>
                  <p className="mt-3 text-sm text-zinc-500">
                    Don&apos;t forget the + C! Since the derivative of any constant is 0, we must include it.
                  </p>
                </div>
              ),
            },
            {
              title: "Verify by differentiation",
              content: (
                <div>
                  <p className="mb-3">
                    Let&apos;s check: take the derivative of our answer and see if we get back the original function.
                  </p>
                  <MathBlock>d/dx [x³ + C] = 3x²</MathBlock>
                  <p className="mt-3 text-sm text-zinc-500">
                    It matches! This confirms our integral is correct.
                  </p>
                </div>
              ),
            },
          ]}
        />
      </div>

      <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-6">
        <h2 className="text-xl font-semibold text-emerald-900 mb-3">Key Takeaway</h2>
        <p className="text-emerald-800">
          Integration is the <strong>reverse of differentiation</strong>. When you integrate a function, you are finding 
          its antiderivative — a function whose derivative gives you back what you started with. Always remember 
          the <strong>+ C</strong> for indefinite integrals, since infinitely many antiderivatives exist (they differ only by a constant).
        </p>
      </div>
    </div>
  );
}
