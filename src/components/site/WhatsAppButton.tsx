import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function WhatsAppButton({
  className,
  size = "md",
  label = "WhatsApp",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
}) {
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-base",
  } as const;
  return (
    <a
      href="https://wa.me/447737731115"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp font-semibold text-whatsapp-foreground shadow-sm transition-colors hover:opacity-90",
        sizes[size],
        className,
      )}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}
