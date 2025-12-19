import { Section } from "@/components/section";
import { CTA } from "@/components/cta";

const resources = [
  {
    title: "Pre trip and post trip photo checklist",
    desc: "A simple evidence standard that protects you in disputes and claim reviews."
  },
  {
    title: "Late return escalation playbook",
    desc: "Templates and timing for reminders, hard follow ups, and when to escalate."
  },
  {
    title: "Cleaning standards and fee documentation",
    desc: "What counts as normal, what counts as chargeable, and how to document it."
  },
  {
    title: "Incident intake form",
    desc: "A consistent way to collect facts from guests and staff without missing key details."
  }
];

export default function Resources() {
  return (
    <>
      <Section className="pt-14 md:pt-20">
        <div className="container">
          <p className="kicker">Resources</p>
          <h1 className="h1 mt-2">Operational templates built for fleets</h1>
          <p className="p mt-4 max-w-2xl">
            These are examples of what we standardize. In a real engagement we tailor them to your vehicles, locations, and team.
          </p>

          <div className="grid gap-4 pt-8 md:grid-cols-2">
            {resources.map((r) => (
              <div key={r.title} className="card p-6">
                <h2 className="text-lg font-bold">{r.title}</h2>
                <p className="p mt-2">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
