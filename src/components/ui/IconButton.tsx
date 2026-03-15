import type { ButtonHTMLAttributes } from "react";
import { Button } from "./Button";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon: React.ReactNode;
  label: string;
}

export function IconButton({
  variant = "primary",
  size = "md",
  isLoading,
  icon,
  label,
  className,
  ...props
}: IconButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      isLoading={isLoading}
      aria-label={label}
      className={className}
      {...props}
    >
      {icon}
    </Button>
  );
}
