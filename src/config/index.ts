import fontAwesome from "./fontAwesome.ts";
import { QueryClient } from "@tanstack/vue-query";
import { config } from "./env";

const configureFontAwesome = () => {
  fontAwesome.configure();
};

const configureApp = async () => {
  configureFontAwesome();
};

export const getVueQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: 2,
        refetchOnWindowFocus: config.MODE === "production",
        staleTime: 20000,
      },
    },
  });
};

export default configureApp;
