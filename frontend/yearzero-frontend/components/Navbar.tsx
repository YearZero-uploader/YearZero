import Link from "next/link";
import { Special_Elite } from "next/font/google";
const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});
export default function Navbar() {
  return (
    <header className="nav-blur fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex  items-center justify-between">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={"/YearZero/year_zero_logo_long_for_website.png"}
          alt={"/YearZero/year_zero_logo_long_for_website.png"}
          className="h-12 rounded-md"
        />

        <span
          className={`font-semibold text-lg tracking-wide ${specialElite.className}`}
        >
          A product of the Open Source Resistance.
        </span>
      </div>
    </header>
  );
}
