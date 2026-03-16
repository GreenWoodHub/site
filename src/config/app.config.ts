type AppConfig = {
  appEnv: string;
  appUrl: string;
  appPort: number;
  app: {
    name: string;
  };
  contact: {
    location: string;
    email: string;
    phones: string[];
    social: Record<string, string>;
  };
};

const env = import.meta.env;

const getString = (key: string, fallback: string) => {
  return (env[key] as string) ?? fallback;
};

const getNumber = (key: string, fallback: number) => {
  const value = env[key];
  if (value == null || value === "") return fallback;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const getPhones = (): string[] => {
  const phones: string[] = [];
  let i = 1;
  while (true) {
    const phone = getString(`VITE_APP_PHONE_${i}`, "");
    if (!phone) break;
    phones.push(phone);
    i++;
  }
  return phones.length > 0 ? phones : ["+201010132030"];
};

const getSocials = (defaults: Record<string, string> = {}) => {
  const socials: Record<string, string> = { ...defaults };
  const prefix = "VITE_APP_SOCIAL_";

  Object.keys(env).forEach((key) => {
    if (!key.startsWith(prefix)) return;
    const name = key.slice(prefix.length).toLowerCase();
    const value = getString(key, "");
    if (value) socials[name] = value;
  });

  return socials;
};

const config: AppConfig = {
  appEnv: getString("VITE_APP_ENV", "development"),
  appUrl: getString("VITE_APP_URL", "http://localhost"),
  appPort: getNumber("VITE_APP_PORT", 5173),
  app: {
    name: getString("VITE_APP_NAME", "Green Wood Hub"),
  },
  contact: {
    location: getString("VITE_APP_LOCATION", "Cairo, Egypt"),
    email: getString("VITE_APP_EMAIL", "info@greenwoodhubretreat.com"),
    phones: getPhones(),
    social: getSocials({
        // facebook: getString("VITE_APP_FACEBOOK", "https://www.instagram.com/"),
        // instagram: getString("VITE_APP_INSTAGRAM", "https://www.instagram.com/"),
        // linkedin: getString("VITE_APP_LINKEDIN", "https://www.linkedin.com/"),
        // whatsapp: getString("VITE_APP_WHATSAPP", "https://www.whatsapp.com/"),
        // meetup: getString("VITE_APP_MEETUP", "https://www.meetup.com/"),
        // telegram: getString("VITE_APP_TELEGRAM", "https://t.me/"),
    }),
  },
};

export default config;
