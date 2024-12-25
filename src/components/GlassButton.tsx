import React from "react";
import { cn } from "@/lib/utils";

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const GlassButton = ({ href, icon, label, className, ...props }: GlassButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center justify-center gap-2 px-6 py-3 rounded-xl",
        "bg-glass-background backdrop-blur-sm border border-glass-border",
        "transition-all duration-300 ease-out",
        "hover:scale-105 hover:shadow-lg hover:bg-kenny-primary/20",
        className
      )}
      {...props}
    >
      {icon}
      <span className="text-white font-medium">{label}</span>
    </a>
  );
};

export default GlassButton;