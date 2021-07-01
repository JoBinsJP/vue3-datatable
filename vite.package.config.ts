import vue              from "@vitejs/plugin-vue"
import { resolve }      from "path"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],

    build: {
        lib: {
            entry: resolve(__dirname, "lib/DataTable/index.ts"),
            name: "@jobinsjp/vue3-datatable",
        },
        outDir: resolve(__dirname, "dist"),

        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ["vue"],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
})
