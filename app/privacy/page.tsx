import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Plus One",
  description: "How Plus One collects, uses, and protects your personal data.",
};

const sections = [
  {
    title: "1. Who we are",
    body: (
      <>
        <p>
          Plus One (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the
          website at{" "}
          <a href="https://plusoneapp.org" className="text-accent hover:underline">
            plusoneapp.org
          </a>{" "}
          and is building an invite-only social double-dating app for the UK.
        </p>
        <p className="mt-4">
          For privacy enquiries, contact us at{" "}
          <a
            href="mailto:hazcottlimited@gmail.com"
            className="text-accent hover:underline"
          >
            hazcottlimited@gmail.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "2. What data we collect",
    body: (
      <>
        <p>When you join our waitlist, we collect:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-muted">
          <li>Name</li>
          <li>Age</li>
          <li>Email address</li>
        </ul>
        <p className="mt-4">
          We may also collect technical data when you visit our site, such as
          your IP address, browser type, device information, and pages viewed.
          This is collected automatically through our hosting and analytics
          providers.
        </p>
      </>
    ),
  },
  {
    title: "3. How we use your data",
    body: (
      <>
        <p>We use your information to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-muted">
          <li>Manage waitlist sign-ups and early access</li>
          <li>Contact you about Plus One launches, updates, and invitations</li>
          <li>Improve our website and understand how visitors use it</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p className="mt-4">
          We do not sell your personal data to third parties.
        </p>
      </>
    ),
  },
  {
    title: "4. Legal basis (UK GDPR)",
    body: (
      <p>
        If you are in the UK, we process your personal data on the basis of
        your consent when you submit the waitlist form, and our legitimate
        interests in operating and improving Plus One. You may withdraw consent
        at any time by contacting us.
      </p>
    ),
  },
  {
    title: "5. Third-party services",
    body: (
      <>
        <p>We use trusted providers to run our website and waitlist:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-muted">
          <li>
            <strong className="text-white">Formspark</strong> — processes
            waitlist submissions
          </li>
          <li>
            <strong className="text-white">Vercel</strong> — hosts our website
          </li>
        </ul>
        <p className="mt-4">
          These providers may process data on our behalf under their own privacy
          policies. We only share what is necessary for them to provide their
          services.
        </p>
      </>
    ),
  },
  {
    title: "6. How long we keep your data",
    body: (
      <p>
        We keep waitlist data until you ask us to delete it, or until it is no
        longer needed for the purposes above (for example, if you withdraw from
        the waitlist or we launch and you create an account under separate
        terms). Technical logs are retained for a limited period consistent with
        our hosting provider&apos;s practices.
      </p>
    ),
  },
  {
    title: "7. Your rights",
    body: (
      <>
        <p>Depending on where you live, you may have the right to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-muted">
          <li>Access the personal data we hold about you</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to or restrict certain processing</li>
          <li>Withdraw consent where processing is based on consent</li>
          <li>Lodge a complaint with the ICO (UK) or your local regulator</li>
        </ul>
        <p className="mt-4">
          To exercise these rights, email{" "}
          <a
            href="mailto:hazcottlimited@gmail.com"
            className="text-accent hover:underline"
          >
            hazcottlimited@gmail.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "8. Cookies",
    body: (
      <p>
        Our website uses essential cookies and similar technologies required for
        security, performance, and basic functionality. We do not use advertising
        cookies. You can control cookies through your browser settings.
      </p>
    ),
  },
  {
    title: "9. Security",
    body: (
      <p>
        We take reasonable technical and organisational measures to protect your
        data, including encryption in transit (HTTPS) and limiting access to
        personal information. No method of transmission over the internet is
        completely secure.
      </p>
    ),
  },
  {
    title: "10. Children",
    body: (
      <p>
        Plus One is intended for adults aged 18 and over. We do not knowingly
        collect data from anyone under 18. If you believe we have collected data
        from a minor, contact us and we will delete it promptly.
      </p>
    ),
  },
  {
    title: "11. Changes to this policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. The &quot;Last
        updated&quot; date below will change when we do. Continued use of our
        site after changes means you accept the updated policy.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  const lastUpdated = "17 June 2026";

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-white/5 glass">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-display text-lg font-semibold text-white">
            Plus One
          </Link>
          <Link
            href="/#apply"
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-black transition hover:bg-accent/90"
          >
            Join waitlist
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Legal
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-muted">Last updated: {lastUpdated}</p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-xl font-semibold text-white">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-muted">
                {section.body}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-muted">
          This policy is provided for general information and does not constitute
          legal advice. If you need tailored guidance, consult a qualified
          professional.
        </p>
      </main>

      <footer className="border-t border-white/5 px-6 py-8 text-center text-sm text-muted">
        <Link href="/" className="transition hover:text-white">
          ← Back to Plus One
        </Link>
      </footer>
    </div>
  );
}
