import { Section } from "@/components/section";

export default function Contact() {
  return (
    <Section className="pt-14 md:pt-20">
      <div className="container">
        <p className="kicker">Contact</p>
        <h1 className="h1 mt-2">Let’s talk fleet operations</h1>
        <p className="p mt-4 max-w-2xl">
          Share your fleet size, your market, and what you want to improve. We will respond quickly.
        </p>

        <div className="grid gap-6 pt-8 md:grid-cols-5">
          <div className="card p-6 md:col-span-3">
            <form
              action="mailto:liftstechnology@gmail.com"
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label className="text-sm font-semibold">Name</label>
                <input
                  name="name"
                  className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Company</label>
                <input
                  name="company"
                  className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"
                  placeholder="Company or fleet name"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Email</label>
                <input
                  name="email"
                  type="email"
                  className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Message</label>
                <textarea
                  name="message"
                  className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"
                  rows={6}
                  placeholder="Fleet size, location, pain points, goals"
                  required
                />
              </div>

              <button className="btn btn-primary" type="submit">
                Send
              </button>

              <p className="text-xs text-neutral-600">
                This form opens your email client. If you prefer, email us directly at{" "}
                <a href="mailto:liftstechnology@gmail.com" className="font-semibold">
                  liftstechnology@gmail.com
                </a>
                .
              </p>
            </form>
          </div>

          <div className="card p-6 md:col-span-2">
            <h2 className="text-lg font-bold">Direct contact</h2>
            <div className="mt-4 space-y-3 text-sm text-neutral-700">
              <div>
                <div className="font-semibold">Phone</div>
                <a href="tel:12179543699" className="no-underline hover:underline">
                  217-954-3699
                </a>
              </div>
              <div>
                <div className="font-semibold">Email</div>
                <a href="mailto:liftstechnology@gmail.com" className="no-underline hover:underline">
                  liftstechnology@gmail.com
                </a>
              </div>
              <div>
                <div className="font-semibold">Address</div>
                <div>5900 Balconies Drive, 24817</div>
                <div>Austin, Texas 78731</div>
              </div>
              <div className="pt-2">
                <a
                  className="btn btn-outline w-full"
                  href="https://www.google.com/maps/search/?api=1&query=5900%20Balconies%20Drive%2024817%20Austin%20TX%2078731"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
