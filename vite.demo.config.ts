import vue              from "@vitejs/plugin-vue"
import { resolve }      from "path"
import { defineConfig } from "vite"


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        outDir: resolve(__dirname, "build"),
    },
    resolve:{
        alias:{
            "@/src": resolve(__dirname, "./src"),
            "@/lib": resolve(__dirname, "./lib/DataTable"),
        },
    },
    server: {
        fs: {
            // Allow serving files from one level up to the project root
            allow: ['..']
        }
    }
})
