import logo from "@/assets/holdwell-logo.webp";
import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`} aria-label="HoldWell Removals — Home">
      <img
        src={logo}
        alt="HoldWell Removals — We Move, You Settle"
        width={1536}
        height={1024}
        loading="eager"
        decoding="async"
        className="h-14 w-auto md:h-16"
      />
    </Link>
  );
}
