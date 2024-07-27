const envConfig = {
  API_DOMAIN: import.meta.env.VITE_API_DOMAIN,
  BASE_URL: import.meta.env.VITE_BASE_URL,
  SUPPORTED_LANGUAGES: import.meta.env.VITE_SUPPORTED_LANGUAGES,
  BASE_MAIN_API: import.meta.env.VITE_BASE_MAIN_API,
};

export const config = {
  get API_DOMAIN() {
    return getVal("API_DOMAIN") || "http://localhost:3001";
  },
  get MODE() {
    return import.meta.env.MODE;
  },
  get BASE_URL() {
    return getVal("BASE_URL") || "http://localhost:8080";
  },

  get BASE_MAIN_API() {
    return getVal("BASE_MAIN_API") || "http://localhost:3001";
  },
};

const getVal = <T = string>(
  key: keyof typeof envConfig,
  transform?: (val: string) => T
): T | undefined => {
  const val = envConfig[key];
  if (!val) {
    configWarning(key);
    return;
  }

  if (transform) return transform(val);

  return val as T;
};

const configWarning = (configKey: keyof typeof envConfig) => {
  if (config.MODE !== "production") {
    console.warn(`Unable to retrieve ${configKey} configuration value`);
  }
};
