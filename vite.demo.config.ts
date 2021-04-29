import vue              from "@vitejs/plugin-vue"
import { resolve }      from "path"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        outDir: resolve(__dirname, "build"),
    },
})
