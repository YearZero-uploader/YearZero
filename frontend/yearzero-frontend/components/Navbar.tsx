import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav-blur fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            className="w-7 h-7 rounded-md flex items-center justify-center text-white text-xs font-black tracking-tighter"
            style={{ background: "var(--accent)" }}
          >
            YZ
          </span>
          <span className="font-semibold text-sm tracking-wide">Year Zero</span>
        </Link>
      </div>
    </header>
  );
}
