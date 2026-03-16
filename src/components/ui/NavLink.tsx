import type { AnchorHTMLAttributes } from "react";

export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  active?: boolean;
}

export function NavLink({
  children,
  className,
  active,
  ...props
}: NavLinkProps) {
  return (
    <a
      className={`font-medium transition-colors ${
        active
          ? "text-primary-600 dark:text-primary-400"
          : "text-secondary-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400"
      } ${className || ""}`}
      {...props}
    >
      {children}
    </a>
  );
}
