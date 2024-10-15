import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";


const pathSrc = path.resolve(__dirname, 'src'); // Ensure pathSrc is correctly pointing to 'src' directory

export default defineConfig(({mode})=>{
  
    const env = loadEnv(mode, process.cwd(), "");
  
  return {
plugins: [vue(),ElementPlus({useSource:true})],
    css: {
      postcss: './postcss.config.cjs',
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["legacy-js-api"],
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
        "@assets": path.join(__dirname, `src/assets`),
        "@components":path.join(__dirname, `src/components`) ,
        "@api/*": path.join(__dirname,`src/api`),
        "@composable": path.join(__dirname, `src/composable`),
        "@config/*": path.join(__dirname,`src/config`),
        "@view/*": path.join(__dirname,`src/view`),
        "@store/*": path.join(__dirname,`src/store`),
        "@type/*": `src/type/*`,
        "@util/*": `src/util/*`,
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

