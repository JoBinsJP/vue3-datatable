import vue              from "@vitejs/plugin-vue"
import path from "path";
import { resolve }      from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue({
        isProduction: true,
    }),dts({
        outputDir: "dist/types",
        include: ["lib/DataTable/**/*.ts"],
        exclude: ["src"],
        staticImport: true,
        insertTypesEntry: true,
        logDiagnostics: true,
    })],
    resolve:{
        alias:{
            "@/src": path.resolve(__dirname, "./src"),
            "@/lib": path.resolve(__dirname, "./lib/DataTable"),
        },
    },
    build: {
        cssCodeSplit:false,
        lib: {
            entry: resolve(__dirname, "lib/DataTable/index.ts"),
            name: "@jobinsjp/vue3-datatable",
            fileName: (format) => `vue3-datatable.${format}.js`,
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
