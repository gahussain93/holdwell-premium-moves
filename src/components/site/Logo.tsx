import logo from "@/assets/holdwell-logo.png";
import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`} aria-label="HoldWell Removal Co. — Home">
      <img
        src={logo}
        alt="HoldWell Removal Co."
        width={1536}
        height={1024}
        className="h-12 w-auto md:h-14"
      />
    </Link>
  );
}
