import type { ReactNode } from "react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

export interface NavbarLink {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface LayoutProps {
  children: ReactNode;
  navbarLinks?: NavbarLink[];
  footerLinks?: FooterLink[];
  footerEmail?: string;
  footerPhones?: string[];
  footerDescription?: string;
  appName?: string;
}

export function Layout({
  children,
  navbarLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
  ],
  footerLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ],
  footerEmail = "info@greenwoodhubretreat.com",
  footerPhones = ["01010132030", "01110132030"],
  footerDescription = "Creating memorable team building experiences and outdoor adventures that bring people together.",
  appName = "Greenwoodhub",
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar links={navbarLinks} />
      <main className="flex-1">{children}</main>
      <Footer
        name={appName}
        description={footerDescription}
        links={footerLinks}
        email={footerEmail}
        phones={footerPhones}
      />
    </div>
  );
}
