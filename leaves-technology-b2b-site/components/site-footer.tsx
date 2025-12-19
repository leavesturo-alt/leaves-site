import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-sm font-extrabold">LEAVES Technology</div>
            <p className="mt-2 text-sm text-neutral-700">
              B2B fleet operations partner for Turo hosts.
            </p>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Pages</div>
            <div className="mt-2 space-y-2">
              <Link className="block no-underline hover:underline" href="/services">Services</Link>
              <Link className="block no-underline hover:underline" href="/resources">Resources</Link>
              <Link className="block no-underline hover:underline" href="/about">About</Link>
              <Link className="block no-underline hover:underline" href="/contact">Contact</Link>
            </div>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Contact</div>
            <div className="mt-2 space-y-1 text-neutral-700">
              <div>217-954-3699</div>
              <div>liftstechnology@gmail.com</div>
              <div>5900 Balconies Drive, 24817</div>
              <div>Austin, Texas 78731</div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-neutral-600">
          © {new Date().getFullYear()} LEAVES Technology LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
