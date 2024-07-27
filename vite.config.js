import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

const pathSrc = path.resolve(__dirname, "./src");

export default defineConfig(({mode})=>{
  
    const env = loadEnv(mode, process.cwd(), "");
  
  return {
plugins: [vue()],
    css: {
      postcss: './postcss.config.cjs',
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/styles/dimensions" as *;
          `,

          // @use "@/assets/themes/${env.VITE_THEME}/styles/index" as *;
        },
      },
      sourceMap: mode === "production",
    },
    resolve: {
      alias: {
        "@assets": `${pathSrc}/assets/*`,
        "@components": `${pathSrc}/components/*`,
        "@api/*": `${pathSrc}/api/*`,
        "@component/*": `${pathSrc}/component/*`,
        "@composable/*": `${pathSrc}/composable/*`,
        "@config/*": `${pathSrc}/config/*`,
        "@view/*": `${pathSrc}/view/*`,
        "@store/*": `${pathSrc}/store/*`,
        "@type/*": `${pathSrc}/type/*`,
        "@util/*": `${pathSrc}/util/*`,
        "@theme": path.join(__dirname, `src/assets/themes/${env.VITE_THEME}`),
        "@": `${pathSrc}/`,
      },
    },
    server: {
      port: 8080,
    },
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          chunkFileNames: "assets/chunk/[name].js",
          entryFileNames: "assets/entry/[name].js",
          assetFileNames: "assets/image/[name]-[hash].[ext]",
        },
      },
    },
  }
})
