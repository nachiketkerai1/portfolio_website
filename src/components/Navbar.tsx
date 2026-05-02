import Link from "next/link";

const navItems = [
  { label: "Tech Stack", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-sky-200/20 bg-sky-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold tracking-tight text-white"
        >
          Nachiket Kerai
        </Link>
        <ul className="flex items-center gap-4 text-sm text-sky-50 sm:gap-8 sm:text-base">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="transition hover:text-sky-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
