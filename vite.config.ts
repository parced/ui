/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vite";
import type { PreRenderedAsset } from "rollup";
import Vue from "@vitejs/plugin-vue";

export const alias = {
    "@/": `${resolve(__dirname, "src")}/`,
    "@components/": `${resolve(__dirname, "src", "components")}/`,
    "@utilities/": `${resolve(__dirname, "src", "utilities")}/`,
};

export const sharedPlugins = [
    Vue({
        reactivityTransform: true,
    }),
];

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            fileName: (format: string) => `parced-ui.${format}.js`,
            formats: ["es", "umd", "cjs"],
            name: "ParcedUI",
        },
        rollupOptions: {
            external: ["vue", "@heroicons/vue/outline", "@parced/fonts", "focus-trap", "focus-trap-vue", "uid"],
            output: {
                assetFileNames: (chunkInfo: PreRenderedAsset): string => {
                    if (chunkInfo.name === "style.css") {
                        return "parced-ui.css";
                    }
                    return chunkInfo.name ?? "UnknownFileName";
                },
                globals: {
                    vue: "Vue",
                },
            },
        },
        sourcemap: true,
        target: "esnext",
    },
    plugins: [...sharedPlugins],
    resolve: {
        alias,
    },
    test: {
        environment: "jsdom",
    },
});
