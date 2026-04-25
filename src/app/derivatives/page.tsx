import MathBlock from "@/components/MathBlock";
import StepByStep from "@/components/StepByStep";

export default function DerivativesIntro() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 mb-6">Introduction to Derivatives</h1>
      
      <div className="prose prose-zinc max-w-none mb-12">
        <p className="text-zinc-600 text-lg">
          Derivatives are one of the most fundamental concepts in calculus. They allow us to understand 
          how quantities change and are essential for solving problems in physics, engineering, economics, 
          and many other fields.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl border border-zinc-200 p-6">
          <h2 className="text-xl font-semibold text-zinc-900 mb-4">Geometric Meaning</h2>
          <p className="text-zinc-600 mb-4">
            Geometrically, the derivative of a function at a point is the <strong>slope of the tangent line</strong> 
            to the curve at that point.
          </p>
          <MathBlock>
            <p>
              Slope of secant line = {" "}
              <span className="inline-block border-b border-zinc-800 px-2">
                f(x + h) − f(x)
              </span>
              <span className="block mt-1">h</span>
            </p>
          </MathBlock>
          <p className="text-zinc-600 mt-4">
            As h gets closer to 0, the secant line becomes the tangent line, and we get the derivative.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-zinc-200 p-6">
          <h2 className="text-xl font-semibold text-zinc-900 mb-4">Notation</h2>
          <p className="text-zinc-600 mb-4">
            There are several ways to write a derivative. All of these mean the same thing:
          </p>
          <div className="space-y-3">
            <MathBlock>f&apos;(x)</MathBlock>
            <MathBlock>df/dx</MathBlock>
            <MathBlock>d/dx [f(x)]</MathBlock>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-6">Example: Finding a Derivative Using the Limit</h2>
        <StepByStep
          steps={[
            {
              title: "Start with the function",
              content: (
                <div>
                  <p className="mb-3">Let&apos;s find the derivative of f(x) = x² using the limit definition.</p>
                  <MathBlock>f(x) = x²</MathBlock>
                </div>
              ),
            },
            {
              title: "Apply the limit definition",
              content: (
                <div>
                  <p className="mb-3">We use the formula:</p>
                  <MathBlock>
                    f&apos;(x) = lim<sub>h→0</sub>{" "}
                    <span className="inline-block border-b border-zinc-800 px-2">
                      f(x + h) − f(x)
                    </span>
                    <span className="block mt-1">h</span>
                  </MathBlock>
                </div>
              ),
            },
            {
              title: "Substitute f(x) = x²",
              content: (
                <div>
                  <p className="mb-3">Since f(x + h) = (x + h)² = x² + 2xh + h²:</p>
                  <MathBlock>
                    f&apos;(x) = lim<sub>h→0</sub>{" "}
                    <span className="inline-block border-b border-zinc-800 px-2">
                      (x² + 2xh + h²) − x²
                    </span>
                    <span className="block mt-1">h</span>
                  </MathBlock>
                </div>
              ),
            },
            {
              title: "Simplify",
              content: (
                <div>
                  <p className="mb-3">The x² terms cancel:</p>
                  <MathBlock>
                    f&apos;(x) = lim<sub>h→0</sub>{" "}
                    <span className="inline-block border-b border-zinc-800 px-2">
                      2xh + h²
                    </span>
                    <span className="block mt-1">h</span>
                  </MathBlock>
                </div>
              ),
            },
            {
              title: "Factor and cancel h",
              content: (
                <div>
                  <p className="mb-3">Factor h from the numerator:</p>
                  <MathBlock>
                    f&apos;(x) = lim<sub>h→0</sub>{" "}
                    <span className="inline-block border-b border-zinc-800 px-2">
                      h(2x + h)
                    </span>
                    <span className="block mt-1">h</span>
                  </MathBlock>
                  <MathBlock className="mt-2">= lim<sub>h→0</sub> (2x + h)</MathBlock>
                </div>
              ),
            },
            {
              title: "Evaluate the limit",
              content: (
                <div>
                  <p className="mb-3">As h approaches 0:</p>
                  <MathBlock className="bg-emerald-50 border border-emerald-200">
                    f&apos;(x) = 2x
                  </MathBlock>
                  <p className="mt-3 text-sm text-zinc-500">
                    This is the power rule in action! The derivative of x² is 2x.
                  </p>
                </div>
              ),
            },
          ]}
        />
      </div>

      <div className="bg-indigo-50 rounded-xl border border-indigo-200 p-6">
        <h2 className="text-xl font-semibold text-indigo-900 mb-3">Key Takeaway</h2>
        <p className="text-indigo-800">
          The derivative tells us the <strong>rate of change</strong> at any point. For f(x) = x², 
          the derivative f&apos;(x) = 2x means: at x = 3, the slope of the curve is 6. At x = 0, 
          the slope is 0 (the curve is flat).
        </p>
      </div>
    </div>
  );
}
