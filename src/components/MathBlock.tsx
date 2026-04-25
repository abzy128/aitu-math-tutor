interface MathBlockProps {
  children: React.ReactNode;
  className?: string;
}

export default function MathBlock({ children, className = "" }: MathBlockProps) {
  return (
    <div className={`bg-zinc-50 rounded-lg p-4 font-mono text-center text-zinc-800 ${className}`}>
      {children}
    </div>
  );
}
