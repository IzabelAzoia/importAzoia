import tailwindscss from "tailwindcss";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    base: "/importAzoia/",
    plugins: [],
    resolve: {

    },
    css: {
        postcss: {
            plugins: [tailwindscss],
        },
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "./index.html"),
                checkout: resolve(__dirname, "./checkout.html"),
                pedidos: resolve(__dirname, "./pedidos.html"),
            },
        },
    },
});