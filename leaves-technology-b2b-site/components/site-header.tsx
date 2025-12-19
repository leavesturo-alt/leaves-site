import Link from "next/link";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="no-underline">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-neutral-900" aria-hidden />
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-tight">LEAVES Technology</div>
              <div className="text-xs text-neutral-600">B2B fleet operations</div>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-semibold text-neutral-700 no-underline hover:text-neutral-900"
            >
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary">
            Book a call
          </Link>
        </nav>

        <div className="md:hidden">
          <Link href="/contact" className="btn btn-primary">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
