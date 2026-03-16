import type { ReactNode } from "react";
import {
  Navbar,
  Footer,
  type NavbarLink,
  type FooterLink,
  type SocialLink,
} from "@/components/shared";

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
  navbarLinks,
  footerLinks,
  footerEmail,
  footerPhones,
  footerLocation,
  footerDescription,
  footerSocials,
  appName,
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar links={navbarLinks} appName={appName} />
      <main className="flex-1">{children}</main>
      <Footer
        name={appName ?? "GreenWoodHub"}
        description={footerDescription ?? ""}
        links={footerLinks ?? []}
        email={footerEmail ?? ""}
        phones={footerPhones ?? []}
        location={footerLocation ?? ""}
        socials={footerSocials ?? []}
      />
    </div>
  );
}
