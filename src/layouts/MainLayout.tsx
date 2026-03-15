import type { ReactNode } from "react";
import { Navbar, type NavbarLink } from "@/components/shared/Navbar";
import {
  Footer,
  type FooterLink,
  type SocialLink,
} from "@/components/shared/Footer";

export interface LayoutProps {
  children: ReactNode;
  navbarLinks?: NavbarLink[];
  footerLinks?: FooterLink[];
  footerEmail?: string;
  footerPhones?: string[];
  footerLocation?: string;
  footerDescription?: string;
  footerSocials?: SocialLink[];
  appName?: string;
}

export function Layout({
  children,
  navbarLinks = [
    // { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "Services", href: "#services" },
  ],
  footerLinks = [
    // { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ],
  footerEmail = "info@email.com",
  footerPhones = ["+201xxxxxxxx"],
  footerLocation = "Egypt",
  footerDescription = "Creating memorable team building experiences and outdoor adventures that bring people together.",
  footerSocials = [],
  appName = "GreenWoodHub",
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar links={navbarLinks} appName={appName} />
      <main className="flex-1">{children}</main>
      <Footer
        name={appName}
        description={footerDescription}
        links={footerLinks}
        email={footerEmail}
        phones={footerPhones}
        location={footerLocation}
        socials={footerSocials}
      />
    </div>
  );
}
