import { Section } from "@/components/section";

export function CTA() {
  return (
    <Section>
      <div className="container">
        <div className="card p-6 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="kicker">Next step</p>
              <h2 className="h2 mt-2">Get a fleet audit and a clear plan</h2>
              <p className="p mt-3 max-w-2xl">
                We will identify the biggest operational leaks, then propose SOPs and execution steps to stabilize and scale.
              </p>
            </div>

            <div className="flex gap-3">
              <a className="btn btn-primary" href="/contact">
                Book a call
              </a>
              <a className="btn btn-outline" href="/services">
                See deliverables
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
