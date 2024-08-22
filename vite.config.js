import { defineConfig } from "vite";

import { resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                shop: resolve(__dirname, "shop.html"),
                cart: resolve(__dirname, "cart.html"),
            },
        },
    },
});