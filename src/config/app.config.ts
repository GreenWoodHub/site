type AppConfig = {
  appEnv: string;
  appUrl: string;
  appPort: number;
  app: {
    name: string;
  };
  contact: {
    email: string;
    phones: string[];
    social: {
      instagram: string;
    };
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
  return phones.length > 0 ? phones : ["01010132030"]; // default to one empty if none
};

const config: AppConfig = {
  appEnv: getString("VITE_APP_ENV", "development"),
  appUrl: getString("VITE_APP_URL", "http://localhost"),
  appPort: getNumber("VITE_APP_PORT", 5173),
  app: {
    name: getString("VITE_APP_NAME", "Green Wood Hub"),
  },
  contact: {
    email: getString("VITE_APP_EMAIL", "info@greenwoodhubretreat.com"),
    phones: getPhones(),
    social: {
      instagram: getString("VITE_APP_INSTAGRAM", "https://www.instagram.com/"),
    },
  },
};

export default config;
