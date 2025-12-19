import { Section } from "@/components/section";
import { CTA } from "@/components/cta";

export default function About() {
  return (
    <>
      <Section className="pt-14 md:pt-20">
        <div className="container">
          <p className="kicker">About</p>
          <h1 className="h1 mt-2">Built by operators, not consultants</h1>
          <p className="p mt-4 max-w-3xl">
            LEAVES Technology is an operations partner for Turo hosts who want to scale without chaos.
            We focus on what actually moves the needle: workflows, accountability, documentation, training,
            and fast execution.
          </p>

          <div className="grid gap-4 pt-8 md:grid-cols-3">
            <div className="card p-6">
              <h2 className="text-lg font-bold">Our approach</h2>
              <p className="p mt-2">
                We turn messy reality into a clear system your team can follow, then we reinforce it with QA and KPIs.
              </p>
            </div>
            <div className="card p-6">
              <h2 className="text-lg font-bold">Who we serve</h2>
              <p className="p mt-2">
                Multi vehicle hosts, small operators growing to a fleet, and established fleets needing tighter control.
              </p>
            </div>
            <div className="card p-6">
              <h2 className="text-lg font-bold">What success looks like</h2>
              <p className="p mt-2">
                Higher utilization, fewer incidents, faster turns, cleaner documentation, and fewer disputes.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
