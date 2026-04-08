import Link from "next/link";

type NavbarProps = {
  activePage?: "home" | "library";
};

export default function Navbar({ activePage }: NavbarProps) {
  return (
    <header className="nav-blur fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            className="w-7 h-7 rounded-md flex items-center justify-center text-white text-xs font-black tracking-tighter"
            style={{ background: "var(--accent)" }}
          >
            YZ
          </span>
          <span className="font-semibold text-sm tracking-wide">Year Zero</span>
        </Link>

        <nav
          className="hidden md:flex items-center gap-7 text-sm"
          style={{ color: "var(--muted)" }}
        >
          <Link
            href="/#features"
            className="transition-colors duration-200 hover:text-foreground"
            style={{ color: activePage === "home" ? "inherit" : "var(--muted)" }}
          >
            Features
          </Link>
          <Link
            href="/#about"
            className="transition-colors duration-200 hover:text-foreground"
            style={{ color: "inherit" }}
          >
            About
          </Link>
          <Link
            href="/library"
            className="transition-colors duration-200 font-medium"
            style={{ color: activePage === "library" ? "var(--accent)" : "inherit" }}
          >
            Library
          </Link>
        </nav>

        <Link
          href="/#get-started"
          className="btn-primary px-4 py-2 rounded-lg text-sm font-medium"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
