export interface Link {
  label: string;
  href: string;
}

export interface ContactConfig {
  email: string;
  location: string;
  phones: string[];
  socials: Record<string, string>;
}

export interface AppConfig {
  name: string;
  contact: ContactConfig;
  navbarLinks: Link[];
  footerLinks: Link[];
  footerDescription: string;
}

const appConfig: AppConfig = {
  name: import.meta.env.VITE_APP_NAME ?? "Greenwood Hub",
  contact: {
    email: import.meta.env.VITE_APP_EMAIL ?? "info@greenwoodhubretreat.com",
    location: import.meta.env.VITE_APP_LOCATION ?? "Cairo, Egypt",
    phones: import.meta.env.VITE_APP_PHONES?.split(",").map((p: string) =>
      p.trim(),
    ) ?? ["+201010132030"],
    socials: {
      // facebook: import.meta.env.VITE_APP_FACEBOOK ?? "https://facebook.com/",
      // instagram: import.meta.env.VITE_APP_INSTAGRAM ?? "https://instagram.com/",
      // whatsapp: import.meta.env.VITE_APP_WHATSAPP ?? "https://whatsapp.com/",
      // meetup: import.meta.env.VITE_APP_MEETUP ?? "https://meetup.com/",
      // linkedin: import.meta.env.VITE_APP_LINKEDIN ?? "https://linkedin.com/",
      // telegram: import.meta.env.VITE_APP_TELEGRAM ?? "https://telegram.com/",
    },
  },

  navbarLinks: [
    { label: "Why Us", href: "#why-us" },
    { label: "Services", href: "#services" },
  ],
  footerLinks: [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ],

  footerDescription:
    "Creating memorable team building experiences and outdoor adventures that bring people together.",
};

export default appConfig;
