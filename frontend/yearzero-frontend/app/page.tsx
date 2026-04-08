export default function Home() {
  return (
    <>
      {/* Subtle noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* ── Navigation ── */}
      <header className="nav-blur fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <span
              className="w-7 h-7 rounded-md flex items-center justify-center text-white text-xs font-black tracking-tighter"
              style={{ background: "var(--accent)" }}
            >
              YZ
            </span>
            <span className="font-semibold text-sm tracking-wide">Year Zero</span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm" style={{ color: "var(--muted)" }}>
            <a href="#features" className="hover:text-foreground transition-colors duration-200" style={{ color: "inherit" }}>
              Features
            </a>
            <a href="#about" className="hover:text-foreground transition-colors duration-200" style={{ color: "inherit" }}>
              About
            </a>
            <a href="#stats" className="hover:text-foreground transition-colors duration-200" style={{ color: "inherit" }}>
              Discover
            </a>
          </nav>

          <a href="#get-started" className="btn-primary px-4 py-2 rounded-lg text-sm font-medium">
            Get Started
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 overflow-hidden"
        style={{ background: "var(--background)" }}
      >
        {/* Background glow orbs */}
        <div
          className="glow-orb absolute w-[600px] h-[600px] -top-32 left-1/2 -translate-x-1/2"
          style={{ background: "radial-gradient(circle, rgba(225,29,72,0.12) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="glow-orb absolute w-[400px] h-[400px] bottom-0 right-0 translate-x-1/3 translate-y-1/3"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)", animationDelay: "2s" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
          {/* Badge */}
          <div
            className="animate-fade-up opacity-0 delay-100 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border"
            style={{ borderColor: "rgba(225,29,72,0.3)", color: "var(--accent)", background: "rgba(225,29,72,0.07)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
            Now in Early Access
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up opacity-0 delay-200 font-black tracking-tighter leading-none"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
          >
            <span className="text-shimmer">YEAR</span>
            <br />
            <span style={{ color: "var(--foreground)" }}>ZERO</span>
          </h1>

          {/* Subheadline */}
          <p
            className="animate-fade-up opacity-0 delay-300 max-w-xl text-lg leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            The beginning of everything. Discover, track, and immerse yourself in a world of stories — starting from zero.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up opacity-0 delay-400 flex flex-wrap items-center justify-center gap-3 mt-2">
            <a href="#get-started" className="btn-primary px-6 py-3 rounded-xl font-semibold text-sm">
              Start Your Journey
            </a>
            <a href="#features" className="btn-ghost px-6 py-3 rounded-xl font-semibold text-sm">
              Explore Features
            </a>
          </div>

          {/* Scroll indicator */}
          <div
            className="animate-fade-up opacity-0 delay-600 mt-12 flex flex-col items-center gap-2"
            style={{ color: "var(--muted)" }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="animate-bounce">
              <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
              <rect x="6.5" y="5" width="3" height="6" rx="1.5" fill="currentColor" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section id="stats" className="relative py-20 px-6" style={{ background: "var(--background)" }}>
        <div className="divider" />
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { value: "10K+", label: "Series Catalogued" },
            { value: "500K+", label: "Active Users" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "0", label: "Days to Get Started" },
          ].map(({ value, label }, i) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center py-10 px-6 text-center"
              style={{
                borderRight: i < 3 ? "1px solid var(--card-border)" : undefined,
                borderBottom: i < 2 ? "1px solid var(--card-border)" : undefined,
              }}
            >
              <span
                className="font-black text-4xl md:text-5xl tracking-tighter"
                style={{ color: value === "0" ? "var(--accent)" : "var(--foreground)" }}
              >
                {value}
              </span>
              <span className="text-sm mt-1.5" style={{ color: "var(--muted)" }}>{label}</span>
            </div>
          ))}
        </div>
        <div className="divider" />
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-24 px-6" style={{ background: "var(--background)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: "var(--accent)" }}>
              Features
            </p>
            <h2 className="font-black text-4xl md:text-5xl tracking-tighter mb-4" style={{ color: "var(--foreground)" }}>
              Everything you need,
              <br />
              <span style={{ color: "var(--muted)" }}>from the very beginning.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                ),
                title: "Vast Library",
                desc: "Thousands of series spanning every genre — from action to slice-of-life. Find your next obsession in seconds.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                ),
                title: "Smart Tracking",
                desc: "Keep track of every episode, chapter, and volume. Your progress, perfectly organized across all your devices.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                  </svg>
                ),
                title: "AI Recommendations",
                desc: "A discovery engine that learns what you love. Get personalized picks that feel hand-curated, every time.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                ),
                title: "Community",
                desc: "Discuss, rate, and share your top series with a passionate community of fans who get it.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                  </svg>
                ),
                title: "Release Alerts",
                desc: "Never miss a new chapter or episode. Get notified the moment your favorites update — across any platform.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                  </svg>
                ),
                title: "Watch & Read",
                desc: "Stream anime or read manga in one unified experience. Switch seamlessly between formats, no extra apps needed.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card-glass rounded-2xl p-7 flex flex-col gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(225,29,72,0.1)", color: "var(--accent)" }}
                >
                  {icon}
                </div>
                <h3 className="font-bold text-lg tracking-tight" style={{ color: "var(--foreground)" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy Quote ── */}
      <section id="about" className="py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, rgba(225,29,72,0.06) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--accent)" }}>
            Our Philosophy
          </p>
          <blockquote
            className="font-black text-3xl md:text-5xl tracking-tighter leading-tight"
            style={{ color: "var(--foreground)" }}
          >
            &ldquo;Every great saga starts at
            <span style={{ color: "var(--accent)" }}> zero.</span>&rdquo;
          </blockquote>
          <p className="max-w-lg text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            Year Zero is built for fans who believe every story deserves to be found.
            We started from scratch — no compromises, no legacy baggage — just the purest
            way to experience the stories that define generations.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="get-started" className="py-24 px-6" style={{ background: "var(--background)" }}>
        <div className="divider mb-24" />
        <div className="max-w-4xl mx-auto">
          <div className="card-glass rounded-3xl px-8 py-16 md:px-16 text-center relative overflow-hidden">
            <div
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(225,29,72,0.15) 0%, transparent 70%)", filter: "blur(40px)" }}
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col items-center gap-6">
              <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--accent)" }}>
                Begin Now
              </p>
              <h2 className="font-black text-4xl md:text-6xl tracking-tighter" style={{ color: "var(--foreground)" }}>
                Your story starts
                <br />
                <span style={{ color: "var(--accent)" }}>at zero.</span>
              </h2>
              <p className="max-w-md text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                Join hundreds of thousands of fans who&apos;ve already found their next favorite series.
                Free to start. No credit card required.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                <a href="#" className="btn-primary px-8 py-3.5 rounded-xl font-semibold text-sm">
                  Create Free Account
                </a>
                <a href="#" className="btn-ghost px-8 py-3.5 rounded-xl font-semibold text-sm">
                  Browse Library
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 px-6" style={{ borderTop: "1px solid var(--card-border)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span
              className="w-6 h-6 rounded-md flex items-center justify-center text-white text-[10px] font-black"
              style={{ background: "var(--accent)" }}
            >
              YZ
            </span>
            <span className="text-sm font-semibold">Year Zero</span>
          </div>
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            &copy; {new Date().getFullYear()} Year Zero. The beginning of everything.
          </p>
          <div className="flex items-center gap-5 text-xs" style={{ color: "var(--muted)" }}>
            <a href="#" className="hover:text-foreground transition-colors duration-200" style={{ color: "inherit" }}>Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors duration-200" style={{ color: "inherit" }}>Terms</a>
            <a href="#" className="hover:text-foreground transition-colors duration-200" style={{ color: "inherit" }}>Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
