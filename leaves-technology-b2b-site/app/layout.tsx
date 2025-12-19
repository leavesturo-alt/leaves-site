import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "LEAVES Technology | Fleet Operations for Turo Hosts",
    template: "%s | LEAVES Technology",
  },
  description:
    "B2B fleet operations partner for Turo hosts. Standardize workflows, reduce downtime, improve guest experience, and scale with confidence.",
  openGraph: {
    title: "LEAVES Technology",
    description:
      "B2B fleet operations partner for Turo hosts. Standardize workflows, reduce downtime, improve guest experience, and scale with confidence.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
