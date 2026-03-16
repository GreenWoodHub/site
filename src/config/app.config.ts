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

const env = import.meta.env;

const getEnv = (key: string, fallback: string): string => {
  return env[key] ?? fallback;
};

const appConfig: AppConfig = {
  name: getEnv("VITE_APP_NAME", "Greenwood Hub"),
  contact: {
    email: getEnv("VITE_APP_EMAIL", "info@greenwoodhubretreat.com"),
    location: getEnv("VITE_APP_LOCATION", "Cairo, Egypt"),
    phones: [getEnv("VITE_APP_PHONE", "+201010132030")],
    socials: {
      // facebook: getEnv("VITE_APP_FACEBOOK", "https://facebook.com/"),
      // instagram: getEnv("VITE_APP_INSTAGRAM", "https://instagram.com/"),
      // whatsapp: getEnv("VITE_APP_WHATSAPP", "https://whatsapp.com/"),
      // meetup: getEnv("VITE_APP_MEETUP", "https://meetup.com/"),
      // linkedin: getEnv("VITE_APP_LINKEDIN", "https://linkedin.com/"),
      // telegram: getEnv("VITE_APP_TELEGRAM", "https://telegram.com/"),
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
