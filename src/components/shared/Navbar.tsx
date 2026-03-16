import { useState } from "react";
import { NavLink } from "@/components/ui/NavLink";
import { LinkButton } from "@/components/ui/Button";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";

export interface NavbarLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  links?: NavbarLink[];
  appName?: string;
}

export function Navbar({ links = [], appName = "Greenwoodhub" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-secondary-100 dark:bg-slate-900/90 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a
              href="/"
              className="font-display text-xl sm:text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
            >
              {appName}
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <DarkModeToggle />
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                active={isActive(link.href)}
              >
                {link.label}
              </NavLink>
            ))}
            <LinkButton href="#contact" size="sm">
              Contact Us
            </LinkButton>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <DarkModeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-secondary-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-secondary-100 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                active={isActive(link.href)}
                className="block"
              >
                {link.label}
              </NavLink>
            ))}
            <LinkButton href="#contact" size="sm" className="block text-center">
              Contact Us
            </LinkButton>
          </div>
        </div>
      )}
    </nav>
  );
}
