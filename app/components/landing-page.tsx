"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { PhoneMockup } from "./phone-mockup";

const CITIES = ["London", "Manchester", "Leeds", "Birmingham"];
const WAITLIST_COUNT = 2347;

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function RevealSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function PairIcon() {
  return (
    <svg className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function MatchIcon() {
  return (
    <svg className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function MeetIcon() {
  return (
    <svg className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

export function LandingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(
          (result as { error?: string }).error ??
            "Something went wrong. Please try again.",
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/3 blur-[100px]" />
      </div>

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 glass">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-display text-lg font-semibold tracking-wide text-white">
            Plus One
          </a>
          <a
            href="#apply"
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-black transition hover:bg-accent/90 hover:shadow-[0_0_24px_rgba(215,255,63,0.3)]"
          >
            Apply for Early Access
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-gradient relative px-6 pb-24 pt-32 sm:pt-36">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <div className="text-center lg:text-left">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Invite only · UK launch
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Dating is better{" "}
              <span className="text-accent text-glow">as a four.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted lg:text-xl">
              Join with your best friend and meet other pairs for real double
              dates, nights out and social experiences.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#apply"
                className="inline-flex h-13 items-center justify-center rounded-full bg-accent px-8 text-sm font-semibold text-black transition hover:bg-accent/90 glow-accent"
              >
                Apply for Early Access
              </a>
              <a
                href="#how-it-works"
                className="inline-flex h-13 items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/10"
              >
                How it Works
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative h-[520px] w-full max-w-md">
              <div className="absolute left-0 top-8 z-10 animate-float">
                <PhoneMockup
                  src="/screenshots/discover.png"
                  alt="Plus One discover screen"
                  priority
                />
              </div>
              <div className="absolute right-0 top-24 z-20 animate-float-delayed">
                <PhoneMockup
                  src="/screenshots/tonight.png"
                  alt="Plus One tonight screen"
                  className="scale-95"
                />
              </div>
              <div className="absolute bottom-0 left-1/2 z-0 -translate-x-1/2 animate-float-delayed opacity-60">
                <PhoneMockup
                  src="/screenshots/matches.png"
                  alt="Plus One matches screen"
                  className="scale-75"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-accent">
              How it works
            </p>
            <h2 className="mt-3 text-center font-display text-3xl font-semibold text-white sm:text-4xl">
              Three steps to a better night out
            </h2>
          </RevealSection>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <PairIcon />,
                step: "01",
                title: "Join as a Pair",
                desc: "Bring your best friend.",
              },
              {
                icon: <MatchIcon />,
                step: "02",
                title: "Match With Another Pair",
                desc: "Discover compatible duos.",
              },
              {
                icon: <MeetIcon />,
                step: "03",
                title: "Meet In Real Life",
                desc: "Double dates without the awkwardness.",
              },
            ].map((card, i) => (
              <RevealSection key={card.title}>
                <div
                  className="group glass h-full rounded-3xl p-8 transition hover:border-accent/20 hover:shadow-[0_0_40px_rgba(215,255,63,0.06)]"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20">
                      {card.icon}
                    </div>
                    <span className="font-display text-sm text-white/20">
                      {card.step}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-muted">{card.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Plus One */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <h2 className="text-center font-display text-3xl font-semibold text-white sm:text-4xl">
              Why Plus One
            </h2>
          </RevealSection>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <RevealSection>
              <div className="glass h-full rounded-3xl p-8 md:p-10">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  Traditional Dating
                </p>
                <ul className="mt-6 space-y-4">
                  {["Awkward", "One-on-one pressure", "Safety concerns"].map(
                    (item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-white/60"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5 text-xs text-white/30">
                          ✕
                        </span>
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </RevealSection>

            <RevealSection>
              <div className="relative h-full overflow-hidden rounded-3xl border border-accent/20 bg-surface-elevated p-8 md:p-10 glow-accent">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  Plus One
                </p>
                <ul className="mt-6 space-y-4">
                  {["Social", "Safer", "More fun", "Better chemistry"].map(
                    (item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 font-medium text-white"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs text-black">
                          ✓
                        </span>
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <div className="glass rounded-3xl px-8 py-16 text-center md:px-16">
              <p className="font-display text-5xl font-semibold text-accent sm:text-6xl">
                {WAITLIST_COUNT.toLocaleString()}
              </p>
              <p className="mt-2 text-lg text-muted">people waiting</p>

              <div className="mx-auto mt-12 max-w-md">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  Launching first in
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  {CITIES.map((city) => (
                    <span
                      key={city}
                      className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <RevealSection>
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
                Early access
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
                Join the waitlist
              </h2>
              <p className="mt-3 text-muted">
                Be first in line when Plus One launches.
              </p>
            </div>
          </RevealSection>

          <RevealSection className="mt-12">
            <div className="glass rounded-3xl p-8 md:p-10">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 ring-1 ring-accent/30">
                    <span className="text-2xl text-accent">✓</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white">
                    You&apos;re on the list
                  </h3>
                  <p className="mt-2 text-muted">
                    We&apos;ll be in touch when your spot opens up.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="mb-1.5 block text-sm text-muted">
                      Name
                    </label>
                    <input
                      name="name"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30"
                      placeholder="Alex"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm text-muted">
                      Age
                    </label>
                    <input
                      name="age"
                      type="number"
                      min={18}
                      max={99}
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30"
                      placeholder="24"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm text-muted">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30"
                      placeholder="you@email.com"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-full bg-accent py-4 text-sm font-semibold text-black transition hover:bg-accent/90 hover:shadow-[0_0_32px_rgba(215,255,63,0.25)] disabled:opacity-60"
                  >
                    {submitting ? "Submitting..." : "Join Waitlist"}
                  </button>
                  {error ? (
                    <p className="text-center text-sm text-red-400">{error}</p>
                  ) : null}
                </form>
              )}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Exclusivity */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <RevealSection>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Not everyone gets in.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              We&apos;re building a community of social, genuine and active
              people. Applications are reviewed before access is granted.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* App showcase */}
      <section className="px-6 py-12">
        <div className="mx-auto flex max-w-5xl justify-center gap-6 overflow-x-auto pb-4">
          {[
            { src: "/screenshots/discover.png", alt: "Discover" },
            { src: "/screenshots/tonight.png", alt: "Tonight" },
            { src: "/screenshots/matches.png", alt: "Matches" },
          ].map((screen) => (
            <PhoneMockup
              key={screen.alt}
              src={screen.src}
              alt={`Plus One ${screen.alt} screen`}
              className="shrink-0 scale-90 opacity-90"
            />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24">
        <RevealSection>
          <div className="mx-auto max-w-4xl rounded-3xl border border-accent/15 bg-gradient-to-b from-accent/5 to-transparent px-8 py-20 text-center glow-accent">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-5xl">
              Ready to join with your Plus One?
            </h2>
            <a
              href="#apply"
              className="mt-10 inline-flex h-13 items-center justify-center rounded-full bg-accent px-10 text-sm font-semibold text-black transition hover:bg-accent/90"
            >
              Apply for Early Access
            </a>
          </div>
        </RevealSection>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="font-display text-sm font-medium text-white">
            Plus One
          </p>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              TikTok
            </a>
          </nav>
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Plus One
          </p>
        </div>
      </footer>
    </div>
  );
}
