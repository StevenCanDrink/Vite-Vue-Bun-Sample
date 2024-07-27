import "./assets/css/styles.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createApp } from "vue";
import configureApp, { getVueQueryClient } from "./config";
import App from "./App.vue";

configureApp().then(() => {
  const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

  VueQueryPlugin.install(app, {
    queryClient: getVueQueryClient(),
  });
  app.mount("#app");
});
