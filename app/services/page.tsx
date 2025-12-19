import { CTA } from "@/components/cta";
import { Section } from "@/components/section";

const services = [
  {
    title: "Fleet operating system",
    desc:
      "End to end SOPs, checklists, and templates that standardize your operation across every vehicle and every staff member.",
    items: [
      "Check in and check out workflows",
      "Photo and documentation standard",
      "Cleaning and reconditioning standards",
      "Escalation playbooks",
      "Owner dashboard for accountability",
    ],
  },
  {
    title: "Team training and QA",
    desc:
      "We turn your team into a repeatable machine with training, audit steps, and clear handoffs.",
    items: [
      "Training manual and role based SOPs",
      "Quality checks with pass fail criteria",
      "Communication templates",
      "Shift routines for consistency",
    ],
  },
  {
    title: "Damage and claims readiness",
    desc:
      "Reduce disputes and improve your claim outcomes by tightening evidence, timelines, and messaging.",
    items: [
      "Photo discipline protocol",
      "Incident intake and triage",
      "Guest communications playbooks",
      "Documentation packaging support",
    ],
  },
  {
    title: "Ops analytics and pricing discipline",
    desc:
      "Visibility into utilization, downtime, cleaning cycle time, and unit economics by vehicle.",
    items: [
      "Vehicle and staff KPIs",
      "Downtime and root cause review",
      "Guidelines for price changes and availability rules",
    ],
  },
  {
    title: "Expansion support",
    desc:
      "Help structuring your next growth phase with parking constraints, vendor capacity, and staffing plans.",
    items: [
      "Fleet growth planning",
      "Vendor capacity planning",
      "Parking operations playbook",
      "New vehicle onboarding SOP",
    ],
  },
];

export default function Services() {
  return (
    <>
      <Section className="pt-14 md:pt-20">
        <div className="container">
          <p className="kicker">Services</p>
          <h1 className="h1 mt-2">B2B operations for serious Turo hosts</h1>
          <p className="p mt-4 max-w-2xl">
            Choose a focused engagement or combine modules into a full operating system.
            Everything is designed to be teachable, measurable, and scalable.
          </p>

          <div className="grid gap-4 pt-8 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="card p-6">
                <h2 className="text-xl font-bold">{s.title}</h2>
                <p className="p mt-2">{s.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                  {s.items.map((i) => (
                    <li key={i} className="list-disc pl-5">{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
