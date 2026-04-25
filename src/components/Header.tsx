"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/derivatives", label: "Derivatives" },
  { href: "/derivatives/rules", label: "Rules" },
  { href: "/derivatives/practice", label: "Practice" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-zinc-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="font-bold text-lg text-indigo-600">
            Math Tutor
          </Link>
          <nav className="flex gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
