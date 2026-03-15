import { NavLink } from "@/components/ui/NavLink";
import { LinkButton } from "@/components/ui/Button";

export interface NavbarLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  links?: NavbarLink[];
  appName?: string;
}

export function Navbar({ links = [], appName = "Greenwoodhub" }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-secondary-100">
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
            {links.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
            <LinkButton href="#contact" size="sm">
              Contact Us
            </LinkButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
