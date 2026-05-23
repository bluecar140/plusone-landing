export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="border-b border-zinc-200/80 bg-white/80 px-6 py-5 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="text-lg font-semibold tracking-[0.2em] text-zinc-900">
            PLUSONE
          </span>
          <a
            href="#waitlist"
            className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            Join waitlist
          </a>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-500">
          Coming soon
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-6xl">
          Bring a friend.
          <br />
          Show up together.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
          PLUSONE makes it easy to find plans, invite your plus-one, and actually
          get out the door — without the group chat chaos.
        </p>

        <div
          id="waitlist"
          className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
        >
          <a
            href="mailto:hello@plusone.app?subject=PLUSONE%20waitlist"
            className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            Get early access
          </a>
          <a
            href="mailto:hello@plusone.app"
            className="inline-flex h-12 flex-1 items-center justify-center rounded-full border border-zinc-300 bg-white px-6 text-sm font-medium text-zinc-900 transition hover:border-zinc-400"
          >
            Contact us
          </a>
        </div>
      </main>

      <footer className="border-t border-zinc-200/80 px-6 py-8 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} PLUSONE. All rights reserved.</p>
      </footer>
    </div>
  );
}
