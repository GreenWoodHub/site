import type { AnchorHTMLAttributes } from "react";

export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function NavLink({ children, className, ...props }: NavLinkProps) {
  return (
    <a
      className={`text-secondary-600 hover:text-primary-600 font-medium transition-colors ${className || ""}`}
      {...props}
    >
      {children}
    </a>
  );
}
