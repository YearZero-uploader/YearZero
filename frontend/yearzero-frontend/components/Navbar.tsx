import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav-blur fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
        <Link href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={"/YearZero/logo.png"}
            alt={"/YearZero/logo.png"}
            className="w-12 h-12 rounded-md"
          />

          <span className="font-semibold text-lg tracking-wide">YEAR ZERO</span>
        </Link>
      </div>
    </header>
  );
}
