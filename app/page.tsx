import { CTA } from "@/components/cta";
import { Section } from "@/components/section";
import { Stat } from "@/components/stat";
import { Check } from "@/components/icons";

export default function Home() {
  return (
    <>
      <Section className="pt-14 md:pt-20">
        <div className="container">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              <span className="badge">B2B fleet operations</span>
              <span className="badge">SOPs + training</span>
              <span className="badge">Damage and claims support</span>
              <span className="badge">Data and pricing discipline</span>
            </div>

            <h1 className="h1">
              Scale your Turo fleet with a real operations system
            </h1>

            <p className="p max-w-2xl">
              LEAVES Technology helps Turo hosts run fleets like a business.
              We standardize your workflows, train your team, reduce downtime,
              and protect your profitability with clear processes and fast execution.
            </p>

            <div className="flex flex-wrap gap-3">
              <a className="btn btn-primary" href="/contact">
                Book a call
              </a>
              <a className="btn btn-outline" href="/services">
                View services
              </a>
            </div>

            <div className="grid gap-4 pt-6 md:grid-cols-3">
              <Stat label="SOP coverage" value="End to end" note="Turnkey workflows from check in to claims" />
              <Stat label="Team readiness" value="Trainable" note="Built for onboarding, consistency, and QA" />
              <Stat label="Risk control" value="Photo first" note="Strong documentation to reduce disputes" />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <div className="card p-6 md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="kicker">What we fix</p>
                <h2 className="h2 mt-2">Most fleets do not have an operating system</h2>
                <p className="p mt-4">
                  When you scale, small inconsistencies become expensive.
                  Late returns, messy comms, missed photos, unclear escalation, and weak documentation
                  can quickly turn into lost revenue and claims headaches.
                </p>
              </div>

              <div className="grid gap-3">
                {[
                  "Standardized check in and check out protocols",
                  "Team training and quality control loops",
                  "Damage prevention through photo discipline",
                  "Escalation playbooks for late returns and incidents",
                  "Vendor network playbooks for tires, detail, and repairs",
                  "Reporting and accountability by vehicle and staff",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <span className="mt-1"><Check /></span>
                    <p className="p">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <p className="kicker">How we work</p>
          <h2 className="h2 mt-2">A practical, operator led engagement</h2>

          <div className="grid gap-4 pt-6 md:grid-cols-3">
            <div className="card p-6">
              <p className="kicker">Step 1</p>
              <h3 className="mt-2 text-lg font-bold">Audit</h3>
              <p className="p mt-2">
                We map your current process, locations, staffing, vendor flow, and claim risk points.
              </p>
            </div>
            <div className="card p-6">
              <p className="kicker">Step 2</p>
              <h3 className="mt-2 text-lg font-bold">Build</h3>
              <p className="p mt-2">
                We implement SOPs, templates, training, and operational checklists your team can actually follow.
              </p>
            </div>
            <div className="card p-6">
              <p className="kicker">Step 3</p>
              <h3 className="mt-2 text-lg font-bold">Run</h3>
              <p className="p mt-2">
                Weekly ops reviews, KPI tracking, and continuous improvement so the fleet stays stable while you scale.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
